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
    </>
  )
}
