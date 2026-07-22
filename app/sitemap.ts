import type { MetadataRoute } from 'next'
import { routes, siteConfig } from '@/content/seo'
import { getArticleSlugs } from '@/lib/wordpress'

export const revalidate = 1800

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url.replace(/\/$/, '')

  const staticRoutes: MetadataRoute.Sitemap = [
    { path: routes.home, priority: 1, changeFrequency: 'weekly' as const },
    { path: routes.about, priority: 0.8, changeFrequency: 'monthly' as const },
    {
      path: routes.services,
      priority: 0.9,
      changeFrequency: 'monthly' as const,
    },
    { path: routes.blog, priority: 0.8, changeFrequency: 'daily' as const },
    {
      path: routes.contact,
      priority: 0.7,
      changeFrequency: 'yearly' as const,
    },
    {
      path: routes.legalNotice,
      priority: 0.2,
      changeFrequency: 'yearly' as const,
    },
    { path: routes.privacy, priority: 0.2, changeFrequency: 'yearly' as const },
    { path: routes.cookies, priority: 0.2, changeFrequency: 'yearly' as const },
  ].map((entry) => ({
    url: `${base}${entry.path}`,
    lastModified: new Date(),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }))

  let articleRoutes: MetadataRoute.Sitemap = []
  try {
    const slugs = await getArticleSlugs()
    articleRoutes = slugs.map((slug) => ({
      url: `${base}${routes.blog}/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    }))
  } catch {
    articleRoutes = []
  }

  return [...staticRoutes, ...articleRoutes]
}
