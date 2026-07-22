'use client'

import { useState } from 'react'
import { Section, SectionHeading } from '@/components/ui/section'
import { Reveal } from '@/components/ui/reveal'
import { testimonials } from '@/content/home'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

export function Testimonials() {
  const items = testimonials.items
  const [index, setIndex] = useState(0)
  const current = items[index]

  const go = (dir: number) => {
    setIndex((prev) => (prev + dir + items.length) % items.length)
  }

  return (
    <Section>
      <SectionHeading eyebrow={testimonials.eyebrow} title={testimonials.title} />
      <Reveal delay={100}>
        <figure className="mx-auto mt-12 max-w-3xl rounded-3xl border border-border bg-card p-8 sm:p-12">
          <Quote className="h-9 w-9 text-primary/40" aria-hidden="true" />
          <blockquote className="mt-6 text-pretty text-lg leading-relaxed text-foreground">
            {current.quote}
          </blockquote>
          <figcaption className="mt-8 flex items-center justify-between">
            <div>
              <div className="font-semibold text-foreground">{current.company}</div>
              <div className="text-sm text-muted-foreground">{current.role}</div>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Testimonio anterior"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Siguiente testimonio"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </figcaption>
        </figure>
      </Reveal>
      <div className="mt-6 flex justify-center gap-2" role="tablist" aria-label="Seleccionar testimonio">
        {items.map((item, i) => (
          <button
            key={item.company}
            role="tab"
            aria-selected={i === index}
            aria-label={`Testimonio de ${item.company}`}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? 'w-6 bg-primary' : 'w-2 bg-border hover:bg-muted-foreground/40'
            }`}
          />
        ))}
      </div>
    </Section>
  )
}
