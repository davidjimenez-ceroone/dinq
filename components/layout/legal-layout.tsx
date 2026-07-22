import type { LegalSection } from '@/content/legal'
import { PageHero } from '@/components/layout/page-hero'
import { routes } from '@/content/seo'

export function LegalLayout({
  title,
  intro,
  sections,
  updatedLabel,
}: {
  title: string
  intro?: string
  sections: LegalSection[]
  updatedLabel?: string
}) {
  return (
    <>
      <PageHero
        title={title}
        subtitle={intro}
        breadcrumb={[{ label: 'Inicio', href: routes.home }, { label: title }]}
      />

      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
        {updatedLabel ? (
          <p className="mb-8 text-sm text-muted-foreground">{updatedLabel}</p>
        ) : null}

        <div className="space-y-10">
          {sections.map((section, index) => (
            <section key={section.heading ?? index}>
              {section.heading ? (
                <h2 className="text-xl font-bold text-brand-dark">
                  {section.heading}
                </h2>
              ) : null}

              {section.paragraphs?.map((paragraph, i) => (
                <p
                  key={i}
                  className="mt-4 text-pretty leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}

              {section.items ? (
                <ul className="mt-4 space-y-2">
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-3 leading-relaxed text-muted-foreground"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-calipso"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </div>
    </>
  )
}
