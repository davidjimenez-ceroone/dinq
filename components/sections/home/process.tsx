import { Section, SectionHeading } from '@/components/ui/section'
import { Reveal } from '@/components/ui/reveal'
import { NeuralNetworkBackground } from '@/components/brand/neural-network-background'
import { howWeWork } from '@/content/home'

export function Process() {
  return (
    <Section className="relative overflow-hidden bg-muted/40 py-24 sm:py-28 lg:py-32">
      <NeuralNetworkBackground className="pointer-events-none absolute inset-0 h-full w-full opacity-75" />
      <div className="relative">
        <SectionHeading eyebrow={howWeWork.eyebrow} title={howWeWork.title} />
      <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-stretch">
        <ol className="grid gap-6 sm:grid-cols-2">
          {howWeWork.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 80}>
              <li className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-7">
                <span className="font-mono text-5xl font-semibold leading-none text-primary">
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
        <div className="relative min-h-72 overflow-hidden rounded-2xl border border-border bg-card lg:min-h-full">
          <img
            src="/process-meeting.jpg"
            alt="Dos profesionales estrechándose la mano durante una reunión de trabajo"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-brand-dark/20" />
        </div>
      </div>
      </div>
    </Section>
  )
}
