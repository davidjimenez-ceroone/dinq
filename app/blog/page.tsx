import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PageHero } from '@/components/layout/page-hero'
import { Section } from '@/components/ui/section'
import { ArticleCard } from '@/components/blog/article-card'
import { getArticles } from '@/lib/wordpress'
import { pageSeo, routes, siteConfig } from '@/content/seo'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: pageSeo.blog.title,
  description: pageSeo.blog.description,
  alternates: { canonical: routes.blog },
  openGraph: {
    title: pageSeo.blog.title,
    description: pageSeo.blog.description,
    url: `${siteConfig.url}${routes.blog}`,
    type: 'website',
  },
}

export const revalidate = 1800

type BlogPageProps = {
  searchParams: Promise<{ page?: string }>
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams
  const currentPage = Math.max(1, Number(params.page ?? '1') || 1)
  const { articles, totalPages } = await getArticles({
    page: currentPage,
    perPage: 9,
  })

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Inicio', url: siteConfig.url },
          { name: 'Actualidad', url: `${siteConfig.url}${routes.blog}` },
        ]}
      />
      <PageHero
        title="Novedades sobre inteligencia artificial para empresas"
        subtitle="Analizamos las últimas tendencias en IA aplicada, automatización y transformación digital, con una mirada práctica pensada para negocios."
        breadcrumb={[{ label: 'Inicio', href: routes.home }, { label: 'Actualidad' }]}
      />

      <Section>
        {articles.length > 0 ? (
          <>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article, index) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  priority={index < 3}
                />
              ))}
            </div>

            {totalPages > 1 ? (
              <nav
                className="mt-14 flex items-center justify-center gap-2"
                aria-label="Paginación de artículos"
              >
                <PaginationLink
                  page={currentPage - 1}
                  disabled={currentPage <= 1}
                  aria-label="Página anterior"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                </PaginationLink>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <PaginationLink
                      key={page}
                      page={page}
                      current={page === currentPage}
                      aria-label={`Página ${page}`}
                    >
                      {page}
                    </PaginationLink>
                  ),
                )}

                <PaginationLink
                  page={currentPage + 1}
                  disabled={currentPage >= totalPages}
                  aria-label="Página siguiente"
                >
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </PaginationLink>
              </nav>
            ) : null}
          </>
        ) : (
          <div className="mx-auto max-w-lg rounded-2xl border border-dashed border-border bg-card px-8 py-16 text-center">
            <h2 className="text-lg font-bold text-brand-dark">
              Aún no hay artículos disponibles
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Estamos preparando nuevos contenidos sobre inteligencia artificial
              aplicada a empresas. Vuelve pronto para descubrir las novedades.
            </p>
            <Link
              href={routes.contact}
              className="mt-6 inline-flex text-sm font-semibold text-brand-calipso underline underline-offset-4"
            >
              ¿Tienes un proyecto en mente? Hablemos
            </Link>
          </div>
        )}
      </Section>
    </>
  )
}

function PaginationLink({
  page,
  current = false,
  disabled = false,
  children,
  'aria-label': ariaLabel,
}: {
  page: number
  current?: boolean
  disabled?: boolean
  children: React.ReactNode
  'aria-label': string
}) {
  const className =
    'inline-flex h-10 min-w-10 items-center justify-center rounded-lg border px-3 text-sm font-semibold transition-colors'

  if (disabled) {
    return (
      <span
        aria-disabled="true"
        className={`${className} cursor-not-allowed border-border text-muted-foreground/40`}
      >
        {children}
      </span>
    )
  }

  return (
    <Link
      href={page === 1 ? routes.blog : `${routes.blog}?page=${page}`}
      aria-label={ariaLabel}
      aria-current={current ? 'page' : undefined}
      className={
        current
          ? `${className} border-brand-dark bg-brand-dark text-white`
          : `${className} border-border text-brand-dark hover:border-brand-calipso hover:text-brand-calipso`
      }
    >
      {children}
    </Link>
  )
}
