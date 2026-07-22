import type { Metadata } from 'next'
import { PageHero } from '@/components/layout/page-hero'
import { Section, SectionHeading, Eyebrow } from '@/components/ui/section'
import { Reveal } from '@/components/ui/reveal'
import { CtaButton } from '@/components/brand/cta-button'
import { CurveFlow } from '@/components/brand/curve-flow'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { pageSeo, routes, siteConfig } from '@/content/seo'
import {
  aboutHero,
  essence,
  highlightQuote,
  aboutVision,
  aboutMission,
  principles,
  workProcess,
} from '@/content/about'

export const metadata: Metadata = {
  title: pageSeo.about.title,
  description: pageSeo.about.description,
  alternates: { canonical: pageSeo.about.path },
  openGraph: {
    title: pageSeo.about.title,
    description: pageSeo.about.description,
    url: pageSeo.about.path,
  },
}

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Inicio', url: siteConfig.url },
          { name: 'Sobre DINQ', url: `${siteConfig.url}${routes.about}` },
        ]}
      />
      <PageHero
        title={aboutHero.title}
        subtitle={aboutHero.subtitle}
        breadcrumb={[{ label: 'Inicio', href: routes.home }, { label: 'Sobre DINQ' }]}
      />

      {/* Essence */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <Eyebrow>{essence.eyebrow}</Eyebrow>
              <h2 className="mt-4 text-balance text-2xl font-bold leading-tight text-brand-dark sm:text-3xl">
                {essence.title}
              </h2>
              <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                {essence.description}
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <figure className="relative overflow-hidden rounded-3xl bg-brand-dark p-10 text-white">
              <CurveFlow tone="mixed" className="absolute inset-0 h-full w-full opacity-30" />
              <blockquote className="relative text-balance text-2xl font-semibold leading-snug">
                {`"${highlightQuote.quote}"`}
              </blockquote>
              <figcaption className="relative mt-5 text-pretty leading-relaxed text-white/80">
                {highlightQuote.support}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section className="bg-muted/40">
        <div className="grid gap-6 md:grid-cols-2">
          {[aboutVision, aboutMission].map((block, i) => (
            <Reveal key={block.eyebrow} delay={i * 100}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-8">
                <Eyebrow tone={i === 0 ? 'calipso' : 'amber'}>{block.eyebrow}</Eyebrow>
                <h3 className="mt-4 text-balance text-xl font-semibold text-brand-dark">
                  {block.title}
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{block.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Principles */}
      <Section>
        <SectionHeading eyebrow={principles.eyebrow} title="Los valores que guían cada proyecto" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7">
                <span className="text-lg font-bold text-brand-amber">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-brand-dark">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Work process */}
      <Section className="bg-muted/40">
        <SectionHeading eyebrow={workProcess.eyebrow} title={workProcess.intro} />
        <ol className="mx-auto mt-14 max-w-3xl">
          {workProcess.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 80}>
              <li className="relative flex gap-6 pb-10 last:pb-0">
                <div className="flex flex-col items-center">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-dark text-sm font-bold text-brand-amber">
                    {i + 1}
                  </span>
                  {i < workProcess.steps.length - 1 ? (
                    <span aria-hidden="true" className="mt-2 w-px flex-1 bg-border" />
                  ) : null}
                </div>
                <div className="pb-2">
                  <h3 className="text-lg font-semibold text-brand-dark">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
        <div className="mt-6 text-center">
          <CtaButton href={routes.contact}>{'Habla con nosotros'}</CtaButton>
        </div>
      </Section>
    </>
  )
}
