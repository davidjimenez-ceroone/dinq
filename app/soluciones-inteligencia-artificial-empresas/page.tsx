import type { Metadata } from 'next'
import { PageHero } from '@/components/layout/page-hero'
import { Reveal } from '@/components/ui/reveal'
import { CtaButton } from '@/components/brand/cta-button'
import { ServiceBanner } from '@/components/sections/services/service-banner'
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
        <div className="space-y-10 lg:space-y-14">
          {serviceDetails.map((service, index) => {
            const Icon = iconMap[service.icon] ?? iconMap.compass
            return (
              <Reveal key={service.id}>
                <ServiceBanner service={service} index={index} Icon={Icon} />
              </Reveal>
            )
          })}

          <div className="relative overflow-hidden rounded-3xl bg-brand-dark p-10 text-center sm:p-16">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-amber/15 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-brand-calipso/20 blur-3xl"
            />
            <div className="relative mx-auto max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-amber">
                {'Empieza hoy'}
              </span>
              <h2 className="mt-6 text-balance text-3xl font-bold leading-tight text-white sm:text-4xl">
                {'¿Listo para aplicar IA en tu empresa?'}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-white/70">
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
