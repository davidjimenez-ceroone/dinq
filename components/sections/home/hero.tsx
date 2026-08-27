import { ArrowRight } from 'lucide-react'
import { hero } from '@/content/home'
import { CtaButton } from '@/components/brand/cta-button'
import { NeuralSphere } from '@/components/brand/neural-sphere'
import { Eyebrow } from '@/components/ui/section'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-dark text-white">
      <NeuralSphere className="pointer-events-none absolute inset-0 h-full w-full" />
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-calipso/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-brand-amber/10 blur-3xl"
      />
      {/* Fade the left side so the sphere never competes with the copy. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-brand-dark from-10% via-brand-dark/70 via-40% to-transparent to-70%"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8 lg:py-40">
        <div className="max-w-3xl dinq-animate-in">
          <Eyebrow tone="light">{hero.eyebrow}</Eyebrow>
          <h1 className="mt-5 text-balance text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            {'Inteligencia Artificial para la '}
            <span className="bg-gradient-to-r from-brand-amber via-brand-amber to-white bg-clip-text text-transparent">
              {'transformación empresarial'}
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/80">
            {hero.description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <CtaButton
              href={hero.primaryCta.href}
              variant="calipso"
              size="lg"
              className="hover:bg-brand-amber hover:brightness-100 hover:shadow-lg hover:shadow-brand-amber/25"
            >
              {hero.primaryCta.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </CtaButton>
            <CtaButton href={hero.secondaryCta.href} variant="outline-light" size="lg">
              {hero.secondaryCta.label}
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  )
}
