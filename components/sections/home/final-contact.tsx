import { Section } from '@/components/ui/section'
import { Reveal } from '@/components/ui/reveal'
import { ContactForm } from '@/components/sections/contact-form'
import { contactCta } from '@/content/home'

export function FinalContact() {
  return (
    <Section id="contacto" className="bg-muted/40">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <h2 className="text-balance text-2xl font-semibold text-foreground sm:text-3xl lg:text-4xl">
              {contactCta.title}
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              {contactCta.description}
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  )
}
