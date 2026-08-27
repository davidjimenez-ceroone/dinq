import { Section } from '@/components/ui/section'
import { Reveal } from '@/components/ui/reveal'
import { AppointmentScheduler } from '@/components/sections/appointment-scheduler'
import { NeuralNetworkBackground } from '@/components/brand/neural-network-background'
import { contactCta } from '@/content/home'

export function FinalContact() {
  return (
    <Section id="contacto" className="relative overflow-hidden bg-brand-dark-2 pt-0">
      <NeuralNetworkBackground className="pointer-events-none absolute inset-0 h-full w-full opacity-75" />
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-brand-dark px-8 py-12 text-center text-white sm:px-16 lg:py-14">
            <NeuralNetworkBackground className="pointer-events-none absolute inset-0 h-full w-full opacity-75" />
            <div className="relative mx-auto max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-amber">
                {'Hablemos de tu proyecto'}
              </p>
              <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                {contactCta.title}
              </h2>
              <p className="mt-5 text-pretty leading-relaxed text-white/80">
                {contactCta.description}
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <AppointmentScheduler />
        </Reveal>
      </div>
    </Section>
  )
}
