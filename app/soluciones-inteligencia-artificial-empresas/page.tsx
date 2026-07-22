import type { Metadata } from 'next'
import { Check } from 'lucide-react'
import { PageHero } from '@/components/layout/page-hero'
import { Reveal } from '@/components/ui/reveal'
import { CtaButton } from '@/components/brand/cta-button'
import { ServiceNav } from '@/components/sections/services/service-nav'
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { iconMap } from '@/lib/icons'
import { pageSeo, routes, siteConfig } from '@/content/seo'
import { servicesHero, serviceDetails } from '@/content/services'

export const metadata: Metadata = {
  title: pageSeo.services.title,
  description: pageSeo.services.description,
  alternates: { canonical: pageSeo.services.path },
  openGraph: {
    title: pageSeo.services.title,
    description: pageSeo.services.description,
    url: pageSeo.services.path,
  },
}

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Inicio', url: siteConfig.url },
          { name: 'Servicios', url: `${siteConfig.url}${routes.services}` },
        ]}
      />
      <ServiceJsonLd
        name="Soluciones de Inteligencia Artificial para Empresas"
        description={pageSeo.services.description}
        url={`${siteConfig.url}${routes.services}`}
      />
      <PageHero
        title={servicesHero.title}
        subtitle={servicesHero.subtitle}
        breadcrumb={[{ label: 'Inicio', href: routes.home }, { label: 'Servicios' }]}
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-16">
          <ServiceNav items={serviceDetails.map((s) => ({ id: s.id, title: s.title }))} />

          <div className="space-y-16 lg:space-y-24">
            {serviceDetails.map((service) => {
              const Icon = iconMap[service.icon] ?? iconMap.compass
              return (
                <Reveal key={service.id}>
                  <article id={service.id} className="scroll-mt-28">
                    <header className="flex items-start gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <div>
                        <h2 className="text-balance text-2xl font-bold text-brand-dark sm:text-3xl">
                          {service.title}
                        </h2>
                      </div>
                    </header>
                    <p className="mt-5 max-w-3xl text-pretty leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-calipso/15 text-brand-calipso">
                            <Check className="h-3.5 w-3.5" aria-hidden="true" />
                          </span>
                          <span className="text-sm leading-relaxed text-foreground/90">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              )
            })}

            <div className="rounded-3xl border border-border bg-muted/50 p-8 text-center sm:p-12">
              <h2 className="text-balance text-2xl font-bold text-brand-dark sm:text-3xl">
                {'¿Listo para aplicar IA en tu empresa?'}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                {'Cuéntanos tu reto y diseñamos una hoja de ruta de inteligencia artificial a tu medida.'}
              </p>
              <CtaButton href={routes.contact} className="mt-8">
                {'Solicita tu consultoría'}
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
