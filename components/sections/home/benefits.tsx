import { Section } from '@/components/ui/section'
import { Reveal } from '@/components/ui/reveal'
import { InteractiveMesh } from '@/components/brand/interactive-mesh'
import { benefits } from '@/content/home'

export function Benefits() {
  return (
    <Section className="relative overflow-hidden bg-muted/40">
      <InteractiveMesh className="pointer-events-auto absolute inset-0 h-full w-full opacity-55" />
      <div className="relative mx-auto max-w-2xl text-center">
        <Reveal>
          <h2 className="text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            {benefits.title}
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            {benefits.intro}
          </p>
        </Reveal>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {benefits.cards.map((card, i) => (
          <Reveal key={card.title} delay={i * 90}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7">
              <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {card.description}
              </p>
              {card.stat ? (
                <div className="mt-6 border-t border-border pt-5">
                  <div className="font-mono text-3xl font-semibold text-primary">
                    {card.stat.value}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{card.stat.label}</p>
                </div>
              ) : null}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
