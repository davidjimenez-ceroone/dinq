import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import { Section } from '@/components/ui/section'
import { ArticleCard } from '@/components/blog/article-card'
import { CtaButton } from '@/components/brand/cta-button'
import {
  getArticleBySlug,
  getArticleSlugs,
  getRelatedArticles,
} from '@/lib/wordpress'
import { routes, siteConfig } from '@/content/seo'
import { ArticleJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'

export const revalidate = 1800
export const dynamicParams = true

export async function generateStaticParams() {
  const slugs = await getArticleSlugs()
  return slugs.slice(0, 20).map((slug) => ({ slug }))
}

type ArticlePageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    return { title: 'Artículo no encontrado | DINQ' }
  }

  const url = `${siteConfig.url}${routes.blog}/${article.slug}`
  return {
    title: `${article.title} | DINQ`,
    description: article.excerpt,
    alternates: { canonical: `${routes.blog}/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url,
      type: 'article',
      publishedTime: article.date,
      modifiedTime: article.modified,
      images: article.featuredImage
        ? [{ url: article.featuredImage.src }]
        : undefined,
    },
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const related = await getRelatedArticles(article)
  const url = `${siteConfig.url}${routes.blog}/${article.slug}`

  return (
    <>
      <ArticleJsonLd
        headline={article.title}
        description={article.excerpt}
        url={url}
        image={article.featuredImage?.src ?? `${siteConfig.url}/og-default.png`}
        datePublished={article.date}
        dateModified={article.modified}
        author={article.author}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Inicio', url: siteConfig.url },
          { name: 'Actualidad', url: `${siteConfig.url}${routes.blog}` },
          { name: article.title, url },
        ]}
      />

      <article>
        <header className="border-b border-border bg-brand-dark text-white">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
            <Link
              href={routes.blog}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-brand-amber"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Volver a Actualidad
            </Link>

            {article.categories[0] ? (
              <span className="mt-6 inline-flex w-fit items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-amber">
                {article.categories[0].name}
              </span>
            ) : null}

            <h1 className="mt-4 text-balance text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]">
              {article.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                <time dateTime={article.date}>{article.dateFormatted}</time>
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4" aria-hidden="true" />
                {article.readingMinutes} min de lectura
              </span>
              <span>Por {article.author}</span>
            </div>
          </div>
        </header>

        {article.featuredImage ? (
          <div className="mx-auto -mt-10 max-w-3xl px-4 sm:px-6">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border shadow-lg">
              <Image
                src={article.featuredImage.src || "/placeholder.svg"}
                alt={article.featuredImage.alt}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        ) : null}

        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
          <div
            className="dinq-prose"
            // Content comes from the trusted DINQ WordPress CMS.
            dangerouslySetInnerHTML={{ __html: article.contentHtml }}
          />

          <div className="mt-12 rounded-2xl border border-border bg-muted/40 p-8 text-center">
            <h2 className="text-xl font-bold text-brand-dark">
              ¿Quieres aplicar la IA en tu empresa?
            </h2>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              Te ayudamos a identificar oportunidades reales y a implementar
              soluciones de inteligencia artificial a medida.
            </p>
            <CtaButton href={routes.contact} variant="primary" className="mt-6">
              Habla con nosotros
            </CtaButton>
          </div>
        </div>
      </article>

      {related.length > 0 ? (
        <Section className="border-t border-border bg-muted/30">
          <h2 className="text-2xl font-bold text-brand-dark">
            Artículos relacionados
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ArticleCard key={item.id} article={item} />
            ))}
          </div>
        </Section>
      ) : null}
    </>
  )
}
