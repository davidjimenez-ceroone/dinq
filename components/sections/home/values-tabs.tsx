import { Section } from '@/components/ui/section'
import { Reveal } from '@/components/ui/reveal'
import { CtaButton } from '@/components/brand/cta-button'
import { Indicators } from '@/components/sections/home/indicators'
import { aboutTeaser, valuesVisionMission } from '@/content/home'

export function ValuesTabs() {
  const tabs = valuesVisionMission.tabs

  return (
    <Section container={false} className="bg-transparent">
      <div className="relative overflow-hidden bg-brand-dark px-6 py-12 text-white sm:px-10 lg:px-14 lg:py-16">
        <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/about-background.jpg')] bg-cover bg-center opacity-20 mix-blend-screen"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-brand-dark/20" />
      <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-amber">
                {aboutTeaser.eyebrow}
              </p>
              <h2 className="mt-4 text-balance text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
                {aboutTeaser.title}
              </h2>
              <p className="mt-5 text-pretty leading-relaxed text-white/70">
                {aboutTeaser.description}
              </p>
              <CtaButton href={aboutTeaser.cta.href} className="mt-8">
                {aboutTeaser.cta.label}
              </CtaButton>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-12 grid items-stretch gap-4 md:grid-cols-3 lg:mt-16">
              {tabs.map((tab) => (
                <article
                  key={tab.key}
                  className="flex h-full flex-col rounded-2xl border border-brand-calipso/20 bg-[rgba(34,156,193,0.66)] p-6 transition-colors hover:border-brand-amber/50"
                >
                  <h3 className="flex items-center gap-2.5 text-xl font-semibold text-white">
                    <span
                      aria-hidden="true"
                      className="h-5 w-1.5 shrink-0 rounded-full bg-brand-amber"
                    />
                    {tab.label}
                  </h3>
                  <p className="mt-3 text-pretty text-base leading-relaxed text-white/80">
                    {tab.description}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
          <Indicators embedded />
        </div>
      </div>
    </Section>
  )
}
