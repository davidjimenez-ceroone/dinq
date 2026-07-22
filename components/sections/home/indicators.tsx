'use client'

import { useEffect, useRef, useState } from 'react'
import { Section } from '@/components/ui/section'
import { indicators } from '@/content/home'

function useCountUp(target: number, decimals: number, active: boolean) {
  const [value, setValue] = useState(active ? 0 : target)

  useEffect(() => {
    if (!active) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setValue(target)
      return
    }
    let raf = 0
    const start = performance.now()
    const duration = 1400
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Number((target * eased).toFixed(decimals)))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target, decimals])

  return value
}

function Indicator({
  label,
  value,
  suffix,
  active,
}: {
  label: string
  value: string
  suffix: string
  active: boolean
}) {
  const decimals = value.includes('.') ? 1 : 0
  const count = useCountUp(Number(value), decimals, active)
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-brand-amber sm:text-5xl">
        {count.toFixed(decimals)}
        <span className="text-2xl sm:text-3xl">{suffix}</span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-white/80">{label}</p>
    </div>
  )
}

export function Indicators() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          io.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div className="relative overflow-hidden bg-brand-dark">
      <Section>
        <div ref={ref} className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {indicators.map((item) => (
            <Indicator key={item.label} {...item} active={active} />
          ))}
        </div>
      </Section>
    </div>
  )
}
