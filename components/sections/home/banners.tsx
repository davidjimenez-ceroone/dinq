import Image from 'next/image'
import { Section } from '@/components/ui/section'
import { Reveal } from '@/components/ui/reveal'
import { CtaButton } from '@/components/brand/cta-button'
import { CurveFlow } from '@/components/brand/curve-flow'
import { helpBanner, financing, appointmentCta } from '@/content/home'
import { routes } from '@/content/seo'

export function HelpBanner() {
  return (
    <Section>
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-brand-dark px-8 py-14 text-center text-white sm:px-16">
          <CurveFlow tone="mixed" className="absolute inset-0 h-full w-full opacity-30" />
          <div className="relative mx-auto max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-amber">
              {helpBanner.eyebrow}
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              {helpBanner.title}
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-white/85">
              {helpBanner.description}
            </p>
            <CtaButton href={routes.contact} variant="primary" className="mt-8">
              {'Comenzar ahora'}
            </CtaButton>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

function SubvfyLogo() {
  return (
    <Image
      src="/subvfy-logo-white.png"
      alt="Logotipo de Subvfy"
      width={714}
      height={124}
      className="h-9 w-auto"
      priority={false}
    />
  )
}

export function Financing() {
  return (
    <Section className="bg-muted/40">
      <Reveal>
        <div className="rounded-3xl bg-brand-dark px-8 py-12 sm:px-12 lg:px-16 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SubvfyLogo />
              <h2 className="mt-8 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                {financing.title}
              </h2>
            </div>
            <div>
              {financing.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mb-4 text-pretty leading-relaxed text-white/80"
                >
                  {paragraph}
                </p>
              ))}
              <CtaButton
                href={financing.cta.href}
                variant="primary"
                className="mt-4"
                external
              >
                {financing.cta.label}
              </CtaButton>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

export function AppointmentCta() {
  return (
    <Section>
      <Reveal>
        <div className="flex flex-col items-center gap-6 rounded-3xl border border-border bg-card px-8 py-12 text-center sm:px-16">
          <h2 className="text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            {appointmentCta.title}
          </h2>
          <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
            {appointmentCta.description}
          </p>
          <CtaButton href={appointmentCta.cta.href}>{appointmentCta.cta.label}</CtaButton>
        </div>
      </Reveal>
    </Section>
  )
}
