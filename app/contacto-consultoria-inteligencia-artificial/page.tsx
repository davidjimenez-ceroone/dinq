import type { Metadata } from 'next'
import { Mail, Clock, MessageSquare } from 'lucide-react'
import { PageHero } from '@/components/layout/page-hero'
import { Reveal } from '@/components/ui/reveal'
import { AppointmentScheduler } from '@/components/sections/appointment-scheduler'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { pageSeo, routes, siteConfig } from '@/content/seo'
import { contactContent } from '@/content/contact'

export const metadata: Metadata = {
  title: pageSeo.contact.title,
  description: pageSeo.contact.description,
  alternates: { canonical: pageSeo.contact.path },
  openGraph: {
    title: pageSeo.contact.title,
    description: pageSeo.contact.description,
    url: pageSeo.contact.path,
  },
}

const helpItems = [
  {
    icon: MessageSquare,
    title: 'Consultoría inicial',
    text: 'Analizamos tu caso y detectamos oportunidades reales para aplicar IA.',
  },
  {
    icon: Clock,
    title: 'Respuesta ágil',
    text: 'Te contactamos lo antes posible para orientar tu proyecto.',
  },
  {
    icon: Mail,
    title: 'Escríbenos',
    text: contactContent.email,
    href: `mailto:${contactContent.email}`,
  },
]

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Inicio', url: siteConfig.url },
          { name: 'Contacto', url: `${siteConfig.url}${routes.contact}` },
        ]}
      />
      <PageHero
        title={contactContent.title}
        subtitle={contactContent.subtitle}
        breadcrumb={[{ label: 'Inicio', href: routes.home }, { label: 'Contacto' }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-12">
          <Reveal>
            <div>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                {contactContent.description}
              </p>
              <ul className="mt-10 grid gap-6 sm:grid-cols-3">
                {helpItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <li key={item.title} className="flex gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <h2 className="font-semibold text-brand-dark">{item.title}</h2>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm text-brand-calipso underline underline-offset-2"
                          >
                            {item.text}
                          </a>
                        ) : (
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {item.text}
                          </p>
                        )}
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <AppointmentScheduler />
          </Reveal>
        </div>
      </section>
    </>
  )
}
