import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import type { Article } from '@/lib/wordpress'
import { routes } from '@/content/seo'

export function ArticleCard({
  article,
  priority = false,
}: {
  article: Article
  priority?: boolean
}) {
  const href = `${routes.blog}/${article.slug}`

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-brand-calipso/40 hover:shadow-lg">
      <Link
        href={href}
        className="relative block aspect-[16/10] overflow-hidden bg-muted"
        tabIndex={-1}
        aria-hidden="true"
      >
        {article.featuredImage ? (
          <Image
            src={article.featuredImage.src || "/placeholder.svg"}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority={priority}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-brand-dark/5">
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-calipso">
              DINQ
            </span>
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-6">
        {article.categories[0] ? (
          <span className="mb-3 inline-flex w-fit items-center rounded-full bg-brand-calipso/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-calipso">
            {article.categories[0].name}
          </span>
        ) : null}

        <h3 className="text-pretty text-lg font-bold leading-snug text-brand-dark">
          <Link
            href={href}
            className="rounded-sm outline-none after:absolute after:inset-0 focus-visible:ring-2 focus-visible:ring-ring"
          >
            {article.title}
          </Link>
        </h3>

        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {article.excerpt}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
          <time dateTime={article.date}>{article.dateFormatted}</time>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {article.readingMinutes} min
          </span>
        </div>
      </div>

      <span className="sr-only">Leer el artículo: {article.title}</span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-6 right-6 hidden"
      >
        <ArrowRight className="h-4 w-4" />
      </span>
    </article>
  )
}
