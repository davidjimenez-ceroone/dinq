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
            <h2 className="mt-4 text-balance text-2xl font-bold text-white sm:text-3xl">
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
    <div className="flex items-center gap-3">
      <span aria-hidden="true" className="flex items-end gap-1">
        <span className="block h-6 w-2 -skew-x-12 rounded-[2px] bg-brand-amber" />
        <span className="block h-6 w-2 -skew-x-12 rounded-[2px] bg-brand-calipso" />
      </span>
      <span className="text-2xl font-bold tracking-tight text-white">
        {financing.brand}
      </span>
    </div>
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
              <h2 className="mt-8 text-balance text-3xl font-bold leading-tight text-white sm:text-4xl">
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
          <h2 className="text-balance text-2xl font-semibold text-foreground sm:text-3xl">
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
