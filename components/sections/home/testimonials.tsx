'use client'

import { useState } from 'react'
import Image from 'next/image'
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
    <Section className="relative overflow-hidden bg-brand-dark-2">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url('/testimonials-office.jpg')] bg-cover bg-center opacity-35"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-brand-dark-2/75" />
      <div className="relative">
      <SectionHeading
        eyebrow={testimonials.eyebrow}
        title={
          <>
            {'Comentarios/opiniones de PYMES y '}
            <span className="text-brand-amber">{'empresas internacionales que usan la IA'}</span>
          </>
        }
        tone="light"
      />
      <Reveal delay={100}>
        <figure className="mx-auto mt-12 flex h-[520px] max-w-3xl flex-col rounded-3xl border border-brand-calipso/70 bg-brand-calipso p-8 text-white shadow-lg shadow-brand-dark/10 sm:h-[440px] sm:p-12">
          <div className="flex h-24 items-center justify-between gap-6">
            <Quote className="h-9 w-9 shrink-0 text-brand-amber" aria-hidden="true" />
            <Image src={current.logo} alt={`Logotipo de ${current.company}`} width={220} height={96} className="h-20 w-auto object-contain" />
          </div>
          <blockquote className="mt-6 flex-1 text-pretty text-lg leading-relaxed text-white">
            {current.quote}
          </blockquote>
          <figcaption className="mt-8 flex items-center justify-between">
            <div>
              <div className="font-semibold text-white">{current.company}</div>
              <div className="text-sm text-white/75">{current.role}</div>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Testimonio anterior"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50 text-white transition-colors hover:border-brand-amber hover:bg-brand-amber hover:text-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Siguiente testimonio"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50 text-white transition-colors hover:border-brand-amber hover:bg-brand-amber hover:text-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber"
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
              i === index ? 'w-6 bg-brand-amber' : 'w-2 bg-brand-calipso/40 hover:bg-brand-amber/70'
            }`}
          />
        ))}
      </div>
      </div>
    </Section>
  )
}
