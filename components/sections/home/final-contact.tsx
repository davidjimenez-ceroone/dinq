import { Section } from '@/components/ui/section'
import { Reveal } from '@/components/ui/reveal'
import { AppointmentScheduler } from '@/components/sections/appointment-scheduler'
import { contactCta } from '@/content/home'

export function FinalContact() {
  return (
    <Section id="contacto" className="bg-muted/40">
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <Reveal>
          <div className="text-center">
            <h2 className="text-balance text-2xl font-semibold text-foreground sm:text-3xl lg:text-4xl">
              {contactCta.title}
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              {contactCta.description}
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <AppointmentScheduler />
        </Reveal>
      </div>
    </Section>
  )
}
