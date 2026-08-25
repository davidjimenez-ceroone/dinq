import { Section } from '@/components/ui/section'
import { Reveal } from '@/components/ui/reveal'
import { toolsSection } from '@/content/home'
import { ToolsCarousel } from '@/components/sections/home/tools-carousel'
import { NeuralNetworkBackground } from '@/components/brand/neural-network-background'

export function Tools() {
  return (
    <Section className="relative overflow-hidden border-t border-border/60">
      <NeuralNetworkBackground className="pointer-events-auto absolute inset-0 h-full w-full opacity-85" />
      <div className="relative">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-semibold leading-tight text-brand-dark sm:text-4xl lg:text-5xl">
            {toolsSection.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            {toolsSection.description}
          </p>
        </div>
      </Reveal>

      <div className="mt-14">
        <ToolsCarousel />
      </div>

      <p className="mt-12 text-center text-xs text-muted-foreground">
        {'Ecosistema tecnológico de referencia. Las marcas citadas pertenecen a sus respectivos titulares.'}
      </p>
      </div>
    </Section>
  )
}
