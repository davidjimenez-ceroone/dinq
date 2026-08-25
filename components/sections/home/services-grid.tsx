import Link from 'next/link'
import { Section, SectionHeading } from '@/components/ui/section'
import { Reveal } from '@/components/ui/reveal'
import { servicesSection } from '@/content/home'
import { routes } from '@/content/seo'
import { iconMap } from '@/lib/icons'
import { ArrowRight } from 'lucide-react'

export function ServicesGrid() {
  return (
    <Section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url('/services-background.png')] bg-cover bg-center opacity-70"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-background/45" />
      <div className="relative">
        <SectionHeading eyebrow={servicesSection.eyebrow} title={servicesSection.title} />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {servicesSection.services.map((service, i) => {
          const Icon = iconMap[service.icon] ?? iconMap.compass
          return (
            <Reveal key={service.id} delay={i * 70}>
              <Link
                href={`${routes.services}#${service.id}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  {'Saber más'}
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </Reveal>
          )
        })}
      </div>
      </div>
    </Section>
  )
}
