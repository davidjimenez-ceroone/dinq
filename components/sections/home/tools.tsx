import Image from 'next/image'
import { Section } from '@/components/ui/section'
import { Reveal } from '@/components/ui/reveal'
import { toolsSection, type Tool } from '@/content/home'

function logoUrl(slug: string) {
  return `https://thesvg.org/icons/${slug}/default.svg`
}

function ToolChip({ tool }: { tool: Tool }) {
  return (
    <li className="flex items-center gap-2.5 rounded-full border border-border bg-background px-3.5 py-1.5 transition-colors hover:border-primary/50">
      {tool.slug ? (
        <Image
          src={logoUrl(tool.slug) || '/placeholder.svg'}
          alt={`Logotipo de ${tool.name}`}
          width={20}
          height={20}
          className="h-5 w-5 shrink-0 object-contain"
          unoptimized
        />
      ) : (
        <span
          aria-hidden="true"
          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-semibold text-primary"
        >
          {tool.name.charAt(0)}
        </span>
      )}
      <span className="text-sm font-medium text-foreground/80">{tool.name}</span>
    </li>
  )
}

export function Tools() {
  return (
    <Section className="border-t border-border/60">
      <Reveal>
        <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          {toolsSection.title}
        </h2>
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-6xl auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {toolsSection.categories.map((category, index) => (
          <Reveal key={category.title} delay={index * 60} className="h-full">
            <article className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-brand-dark">
                <span
                  aria-hidden="true"
                  className="h-4 w-1 rounded-full bg-primary"
                />
                {category.title}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {category.tools.map((tool) => (
                  <ToolChip key={`${category.title}-${tool.name}`} tool={tool} />
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <p className="mt-12 text-center text-xs text-muted-foreground">
        {'Ecosistema tecnológico de referencia. Las marcas citadas pertenecen a sus respectivos titulares.'}
      </p>
    </Section>
  )
}
