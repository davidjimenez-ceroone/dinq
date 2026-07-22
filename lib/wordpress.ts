/**
 * WordPress REST API client for the DINQ blog ("Actualidad").
 *
 * The current dinq.ai site runs on WordPress, so this reads posts from its
 * public REST API (`/wp-json/wp/v2`). The base URL is configurable via
 * WORDPRESS_API_URL so the CMS can be pointed at a headless/staging instance
 * without code changes.
 *
 * Everything degrades gracefully: if the CMS is unreachable the blog renders
 * an empty state instead of crashing the build or the page.
 */

// Canonical public endpoint (currently serves the live DINQ blog content).
const CANONICAL_WP_BASE = 'https://dinq.ai/wp-json/wp/v2'

// Ordered list of endpoints to try. The configured CMS (e.g. a headless
// blog.dinq.ai instance) takes priority; if it has no content yet we fall
// back to the canonical public endpoint so the blog is never empty by
// accident. Duplicates are removed while preserving order.
const WP_BASES = Array.from(
  new Set(
    [
      process.env.WORDPRESS_API_URL?.replace(/\/$/, ''),
      CANONICAL_WP_BASE,
    ].filter(Boolean) as string[],
  ),
)

// Revalidate CMS content periodically (ISR).
const REVALIDATE_SECONDS = 60 * 30

export type WPImage = {
  src: string
  alt: string
  width?: number
  height?: number
}

export type WPTerm = {
  id: number
  name: string
  slug: string
}

export type Article = {
  id: number
  slug: string
  title: string
  excerpt: string
  contentHtml: string
  date: string
  dateFormatted: string
  modified: string
  readingMinutes: number
  author: string
  featuredImage: WPImage | null
  categories: WPTerm[]
}

type WPRendered = { rendered: string }

type WPPost = {
  id: number
  slug: string
  date: string
  modified: string
  title: WPRendered
  excerpt: WPRendered
  content: WPRendered
  _embedded?: {
    author?: { name?: string }[]
    'wp:featuredmedia'?: {
      source_url?: string
      alt_text?: string
      media_details?: { width?: number; height?: number }
    }[]
    'wp:term'?: WPTerm[][]
  }
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, '')
    .replace(/&hellip;/g, '…')
    .replace(/&#8230;/g, '…')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8217;/g, '’')
    .replace(/&#8211;/g, '–')
    .replace(/\[&hellip;\]/g, '…')
    .trim()
}

function estimateReadingMinutes(html: string): number {
  const words = stripHtml(html).split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
}

function formatDate(iso: string): string {
  try {
    return new Intl.DateTimeFormat('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(new Date(iso))
  } catch {
    return iso
  }
}

function mapPost(post: WPPost): Article {
  const media = post._embedded?.['wp:featuredmedia']?.[0]
  const featuredImage: WPImage | null = media?.source_url
    ? {
        src: media.source_url,
        alt: media.alt_text || stripHtml(post.title.rendered),
        width: media.media_details?.width,
        height: media.media_details?.height,
      }
    : null

  const categories =
    post._embedded?.['wp:term']?.flat().filter((t) => t && t.slug) ?? []

  return {
    id: post.id,
    slug: post.slug,
    title: stripHtml(post.title.rendered),
    excerpt: stripHtml(post.excerpt.rendered),
    contentHtml: post.content.rendered,
    date: post.date,
    dateFormatted: formatDate(post.date),
    modified: post.modified,
    readingMinutes: estimateReadingMinutes(post.content.rendered),
    author: post._embedded?.author?.[0]?.name ?? 'DINQ',
    featuredImage,
    categories,
  }
}

async function fetchFromBase(
  base: string,
  path: string,
): Promise<Response | null> {
  try {
    const res = await fetch(`${base}${path}`, {
      next: { revalidate: REVALIDATE_SECONDS, tags: ['wordpress'] },
      headers: { Accept: 'application/json' },
    })
    if (!res.ok) {
      console.log('[v0] WordPress fetch non-OK:', res.status, base, path)
      return null
    }
    return res
  } catch (error) {
    console.log(
      '[v0] WordPress fetch failed:',
      (error as Error).message,
      base,
      path,
    )
    return null
  }
}

/**
 * Fetch a list endpoint, trying each configured base in order and returning
 * the first response that yields at least one item. Falls back to the last
 * attempted response so metadata (e.g. total pages) is still available.
 */
async function fetchList(path: string): Promise<{
  posts: WPPost[]
  totalPages: number
}> {
  let lastEmpty: { posts: WPPost[]; totalPages: number } = {
    posts: [],
    totalPages: 0,
  }

  for (const base of WP_BASES) {
    const res = await fetchFromBase(base, path)
    if (!res) continue
    const totalPages = Number(res.headers.get('X-WP-TotalPages') ?? '1')
    const posts = (await res.json()) as WPPost[]
    if (posts.length > 0) return { posts, totalPages }
    lastEmpty = { posts: [], totalPages: 0 }
  }

  return lastEmpty
}

export async function getArticles(
  { page = 1, perPage = 9 }: { page?: number; perPage?: number } = {},
): Promise<{ articles: Article[]; totalPages: number }> {
  const { posts, totalPages } = await fetchList(
    `/posts?_embed=1&per_page=${perPage}&page=${page}&orderby=date&order=desc`,
  )
  return { articles: posts.map(mapPost), totalPages }
}

export async function getArticleSlugs(): Promise<string[]> {
  for (const base of WP_BASES) {
    const res = await fetchFromBase(base, '/posts?per_page=100&_fields=slug')
    if (!res) continue
    const posts = (await res.json()) as { slug: string }[]
    if (posts.length > 0) return posts.map((p) => p.slug)
  }
  return []
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  for (const base of WP_BASES) {
    const res = await fetchFromBase(
      base,
      `/posts?_embed=1&slug=${encodeURIComponent(slug)}`,
    )
    if (!res) continue
    const posts = (await res.json()) as WPPost[]
    if (posts.length) return mapPost(posts[0])
  }
  return null
}

export async function getRelatedArticles(
  current: Article,
  limit = 3,
): Promise<Article[]> {
  const { articles } = await getArticles({ perPage: limit + 3 })
  return articles.filter((a) => a.slug !== current.slug).slice(0, limit)
}

export function isCmsConfigured(): boolean {
  return WP_BASES.length > 0
}
