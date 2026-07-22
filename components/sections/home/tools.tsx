import { Section } from '@/components/ui/section'
import { Reveal } from '@/components/ui/reveal'
import { toolsSection } from '@/content/home'

export function Tools() {
  return (
    <Section className="border-t border-border/60">
      <Reveal>
        <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          {toolsSection.title}
        </h2>
      </Reveal>
      <Reveal delay={80}>
        <ul className="mx-auto mt-8 flex max-w-4xl flex-wrap items-center justify-center gap-x-3 gap-y-3">
          {toolsSection.tools.map((tool) => (
            <li
              key={tool}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:border-primary/50 hover:text-foreground"
            >
              {tool}
            </li>
          ))}
        </ul>
      </Reveal>
      <p className="mt-6 text-center text-xs text-muted-foreground">
        {'Ecosistema tecnológico de referencia. Las marcas citadas pertenecen a sus respectivos titulares.'}
      </p>
    </Section>
  )
}
