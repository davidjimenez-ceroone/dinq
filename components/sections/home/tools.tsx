import Image from 'next/image'
import { Section } from '@/components/ui/section'
import { Reveal } from '@/components/ui/reveal'
import { toolsSection, type Tool } from '@/content/home'

function logoUrl(slug: string) {
  return `https://thesvg.org/icons/${slug}/default.svg`
}

function ToolChip({ tool }: { tool: Tool }) {
  return (
    <li className="flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-2 transition-colors hover:border-primary/50">
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

      <div className="mx-auto mt-12 max-w-5xl space-y-10">
        {toolsSection.categories.map((category, index) => (
          <Reveal key={category.title} delay={index * 60}>
            <div>
              <h3 className="text-center text-xs font-semibold uppercase tracking-wider text-primary">
                {category.title}
              </h3>
              <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
                {category.tools.map((tool) => (
                  <ToolChip key={`${category.title}-${tool.name}`} tool={tool} />
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="mt-12 text-center text-xs text-muted-foreground">
        {'Ecosistema tecnológico de referencia. Las marcas citadas pertenecen a sus respectivos titulares.'}
      </p>
    </Section>
  )
}
