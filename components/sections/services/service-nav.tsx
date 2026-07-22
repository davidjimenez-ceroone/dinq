'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export function ServiceNav({
  items,
}: {
  items: { id: string; title: string }[]
}) {
  const [active, setActive] = useState(items[0]?.id)

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [items])

  return (
    <nav aria-label="Índice de servicios" className="hidden lg:block">
      <ul className="sticky top-28 space-y-1 border-l border-border">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={active === item.id ? 'true' : undefined}
              className={cn(
                '-ml-px block border-l-2 py-2 pl-4 text-sm leading-snug transition-colors',
                active === item.id
                  ? 'border-brand-amber font-semibold text-brand-dark'
                  : 'border-transparent text-muted-foreground hover:border-border hover:text-brand-dark',
              )}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
