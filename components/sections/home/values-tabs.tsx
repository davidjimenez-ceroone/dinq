import { Section } from '@/components/ui/section'
import { Reveal } from '@/components/ui/reveal'
import { CtaButton } from '@/components/brand/cta-button'
import { aboutTeaser, valuesVisionMission } from '@/content/home'

export function ValuesTabs() {
  const tabs = valuesVisionMission.tabs

  return (
    <Section className="bg-transparent">
      <div className="relative overflow-hidden rounded-3xl bg-brand-dark px-6 py-12 text-white sm:px-10 lg:px-14 lg:py-16">
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-brand-calipso/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-brand-amber/10 blur-3xl"
        />
        <div className="relative grid gap-12 lg:grid-cols-3 lg:items-center lg:gap-16">
          <Reveal className="lg:col-span-2">
            <div className="lg:pl-6 xl:pl-10">
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
            <div className="flex flex-col gap-4">
              {tabs.map((tab) => (
                <article
                  key={tab.key}
                  className="rounded-2xl border border-brand-calipso/20 bg-brand-calipso/10 p-6 transition-colors hover:border-brand-amber/50"
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
        </div>
      </div>
    </Section>
  )
}
