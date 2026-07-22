'use client'

import { useState } from 'react'
import { Section } from '@/components/ui/section'
import { Reveal } from '@/components/ui/reveal'
import { CtaButton } from '@/components/brand/cta-button'
import { aboutTeaser, valuesVisionMission } from '@/content/home'
import { CurveFlow } from '@/components/brand/curve-flow'

export function ValuesTabs() {
  const tabs = valuesVisionMission.tabs
  const [active, setActive] = useState(tabs[0].key)
  const current = tabs.find((t) => t.key === active) ?? tabs[0]

  return (
    <Section className="relative overflow-hidden">
      <CurveFlow className="pointer-events-none absolute -right-24 top-0 h-full w-[540px] opacity-40" />
      <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              {aboutTeaser.eyebrow}
            </p>
            <h2 className="mt-4 text-balance text-2xl font-semibold leading-tight text-foreground sm:text-3xl lg:text-4xl">
              {aboutTeaser.title}
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              {aboutTeaser.description}
            </p>
            <CtaButton href={aboutTeaser.cta.href} className="mt-8">
              {aboutTeaser.cta.label}
            </CtaButton>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-2xl border border-border bg-card p-2 shadow-sm">
            <div
              role="tablist"
              aria-label="Valores, visión y misión"
              className="flex gap-1 rounded-xl bg-muted p-1"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  role="tab"
                  aria-selected={active === tab.key}
                  onClick={() => setActive(tab.key)}
                  className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    active === tab.key
                      ? 'bg-card text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="p-6">
              <h3 className="text-balance text-lg font-semibold text-foreground">
                {current.title}
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {current.description}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
