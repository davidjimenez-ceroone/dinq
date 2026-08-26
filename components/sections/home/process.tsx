import { Section, SectionHeading } from '@/components/ui/section'
import { Reveal } from '@/components/ui/reveal'
import { howWeWork } from '@/content/home'

export function Process() {
  return (
    <Section className="relative overflow-hidden bg-muted/40 py-24 sm:py-28 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url('/process-office.jpg')] bg-cover bg-center opacity-25"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-background/70" />
      <div className="relative">
        <SectionHeading eyebrow={howWeWork.eyebrow} title={howWeWork.title} />
      <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {howWeWork.steps.map((step, i) => (
          <Reveal key={step.title} delay={i * 80}>
            <li className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-7">
              <span className="font-mono text-sm font-semibold text-primary">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>
      </div>
    </Section>
  )
}
