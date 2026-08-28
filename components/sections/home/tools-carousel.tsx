'use client'

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { toolsSection, type Tool, type ToolCategory } from '@/content/home'
import { cn } from '@/lib/utils'

const providedLogoUrls: Record<string, string> = {
  manus: '/logos/manus.png',
  relevance: '/logos/relevance.png',
  grok: '/logos/grok.png',
  otter: '/logos/otter.png',
  aragon: '/logos/aragon.png',
  'github-copilot': '/logos/github-copilot.png',
  colossyan: '/logos/colossyan.png',
  lindy: '/logos/lindy.png',
  retell: '/logos/retell.png',
  midjourney: '/logos/midjourney.png',
  devin: '/logos/devin.png',
  plaud: '/logos/plaud.png',
  heygen: '/logos/heygen.png',
  synthesia: '/logos/synthesia.png',
}

function logoUrl(slug: string) {
  return providedLogoUrls[slug] ?? `https://thesvg.org/icons/${slug}/default.svg`
}

function ToolRow({ tool }: { tool: Tool }) {
  return (
    <li className="flex items-center gap-3">
      {tool.slug ? (
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-background">
          <img
            src={logoUrl(tool.slug) || '/placeholder.svg'}
            alt={`Logotipo de ${tool.name}`}
            width={22}
            height={22}
            className="h-[22px] w-[22px] object-contain"
          />
        </span>
      ) : (
        <span
          aria-hidden="true"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xs font-semibold text-primary"
        >
          {tool.name.charAt(0)}
        </span>
      )}
      <span className="truncate text-sm font-medium text-foreground/80">
        {tool.name}
      </span>
    </li>
  )
}

const MAX_VISIBLE = 5

function CategoryCard({
  category,
  position,
  expanded,
  onToggle,
}: {
  category: ToolCategory
  position: 'center' | 'side' | 'hidden'
  expanded: boolean
  onToggle: () => void
}) {
  const isCenter = position === 'center'
  const total = category.tools.length
  const hasMore = total > MAX_VISIBLE
  const visibleTools =
    hasMore && !expanded ? category.tools.slice(0, MAX_VISIBLE) : category.tools
  const hiddenCount = total - MAX_VISIBLE

  return (
    <article
      className={cn(
        'flex h-full flex-col rounded-3xl border bg-card p-5 transition-[box-shadow,border-color] duration-500',
        isCenter
          ? 'border-primary/40 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] ring-1 ring-primary/20'
          : 'border-border shadow-sm',
      )}
    >
      <h3 className="flex items-center gap-2 text-[15px] font-semibold text-brand-dark">
        <span aria-hidden="true" className="h-4 w-1 shrink-0 rounded-full bg-primary" />
        {category.title}
      </h3>
      <ul className="mt-4 flex flex-col gap-2.5">
        {visibleTools.map((tool) => (
          <ToolRow key={`${category.title}-${tool.name}`} tool={tool} />
        ))}
      </ul>
      {hasMore ? (
        <button
          type="button"
          onClick={onToggle}
          tabIndex={isCenter ? 0 : -1}
          className="mt-4 self-start text-sm font-semibold text-primary transition-colors hover:text-primary/70"
        >
          {expanded ? 'Ver menos' : `Ver +${hiddenCount}`}
        </button>
      ) : null}
    </article>
  )
}

const AUTOPLAY_MS = 3500
const DRAG_THRESHOLD_RATIO = 0.18

export function ToolsCarousel() {
  const categories = toolsSection.categories
  const n = categories.length

  const containerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<Array<HTMLDivElement | null>>([])

  const [containerWidth, setContainerWidth] = useState(0)
  const [heights, setHeights] = useState<number[]>([])
  const [active, setActive] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [withTransition, setWithTransition] = useState(true)
  const [paused, setPaused] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const dragState = useRef<{ startX: number; dragging: boolean; moved: boolean }>(
    { startX: 0, dragging: false, moved: false },
  )

  // Responsive card sizing derived from the measured container.
  const cardWidth = Math.max(240, Math.min(360, containerWidth * 0.42))
  const step = cardWidth * 0.82

  // Measure container width.
  useLayoutEffect(() => {
    const el = containerRef.current
    if (!el) return
    const update = () => setContainerWidth(el.clientWidth)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const centerIndex = ((active % n) + n) % n

  // Measure each card's rendered height. Collapsed cards report a uniform
  // height; the expanded center card reports its taller natural height.
  // (transform: scale does not affect these layout values.)
  useLayoutEffect(() => {
    const next = cardRefs.current.map((r) => r?.offsetHeight ?? 0)
    setHeights((prev) =>
      next.length === prev.length && next.every((h, i) => h === prev[i])
        ? prev
        : next,
    )
  }, [containerWidth, expanded, active, cardWidth])

  // Uniform height for every collapsed card (tallest collapsed card wins),
  // so all cards look the same size until the center one is expanded.
  const collapsedMax = Math.max(
    0,
    ...heights.filter((_, i) => !(i === centerIndex && expanded)),
  )
  const containerHeight = expanded ? heights[centerIndex] ?? collapsedMax : collapsedMax

  const go = useCallback((dir: number) => {
    setWithTransition(true)
    setActive((a) => a + dir)
  }, [])

  // Collapse the expanded card whenever the centered card changes.
  useEffect(() => {
    setExpanded(false)
  }, [centerIndex])

  // Autoplay, paused on hover/drag/expand.
  useEffect(() => {
    if (paused || expanded) return
    const id = window.setInterval(() => {
      setWithTransition(true)
      setActive((a) => a + 1)
    }, AUTOPLAY_MS)
    return () => window.clearInterval(id)
  }, [paused, expanded])

  // Shortest signed circular distance from the active index to card i.
  const relOffset = (i: number) => {
    const mod = ((active % n) + n) % n
    let d = i - mod
    if (d > n / 2) d -= n
    if (d < -n / 2) d += n
    return d
  }

  const onPointerDown = (e: React.PointerEvent) => {
    dragState.current = { startX: e.clientX, dragging: true, moved: false }
    setWithTransition(false)
    setPaused(true)
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragState.current.dragging) return
    const delta = e.clientX - dragState.current.startX
    if (Math.abs(delta) > 4) dragState.current.moved = true
    setDragOffset(delta)
  }

  const endDrag = (e: React.PointerEvent) => {
    if (!dragState.current.dragging) return
    dragState.current.dragging = false
    const delta = dragOffset
    const threshold = step * DRAG_THRESHOLD_RATIO
    const moved =
      Math.abs(delta) > threshold ? -Math.round(delta / step) || (delta > 0 ? -1 : 1) : 0
    setWithTransition(true)
    setDragOffset(0)
    if (moved !== 0) setActive((a) => a + moved)
    setPaused(false)
    try {
      ;(e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId)
    } catch {}
  }

  return (
    <div
      className="relative mx-auto max-w-6xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        if (!dragState.current.dragging) setPaused(false)
      }}
    >
      <div
        ref={containerRef}
        role="region"
        aria-roledescription="carrusel"
        aria-label="Categorías de herramientas de IA"
        className="relative touch-pan-y select-none overflow-hidden transition-[height] duration-500 ease-out"
        style={{ height: containerHeight ? containerHeight + 8 : undefined }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        {categories.map((category, i) => {
          const rel = relOffset(i)
          const visible = Math.abs(rel) <= 1
          const x = rel * step + dragOffset
          const isCenter = rel === 0
          const cardIsExpanded = isCenter && expanded
          const wrapperHeight = cardIsExpanded
            ? undefined
            : collapsedMax || undefined
          return (
            <div
              key={category.title}
              ref={(el) => {
                cardRefs.current[i] = el
              }}
              aria-hidden={!isCenter}
              className={cn(
                'absolute left-1/2 top-0',
                withTransition &&
                  'transition-[transform,opacity] duration-500 ease-out',
              )}
              style={{
                width: cardWidth,
                height: wrapperHeight,
                transform: `translateX(-50%) translateX(${x}px) scale(${
                  isCenter ? 1 : 0.94
                })`,
                transformOrigin: 'top center',
                opacity: visible ? (isCenter ? 1 : 0.55) : 0,
                zIndex: isCenter ? 20 : 10 - Math.abs(rel),
                pointerEvents: visible ? 'auto' : 'none',
              }}
            >
              <CategoryCard
                category={category}
                position={isCenter ? 'center' : visible ? 'side' : 'hidden'}
                expanded={cardIsExpanded}
                onToggle={() => isCenter && setExpanded((e) => !e)}
              />
            </div>
          )
        })}
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Categoría anterior"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-brand-dark shadow-sm transition-colors hover:border-primary/50 hover:text-primary"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="flex items-center gap-2" aria-hidden="true">
          {categories.map((c, i) => {
            const isActive = ((active % n) + n) % n === i
            return (
              <span
                key={c.title}
                className={cn(
                  'h-1.5 rounded-full transition-all duration-300',
                  isActive ? 'w-6 bg-primary' : 'w-1.5 bg-border',
                )}
              />
            )
          })}
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Categoría siguiente"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-brand-dark shadow-sm transition-colors hover:border-primary/50 hover:text-primary"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
