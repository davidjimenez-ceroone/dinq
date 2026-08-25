'use client'

import { useEffect, useRef } from 'react'

export function GeometricNetworkBackground({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let width = 0
    let height = 0
    let progress = reducedMotion ? 1 : 0
    let animation = 0
    let startedAt = performance.now()

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = width * ratio
      canvas.height = height * ratio
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    const draw = (now: number) => {
      context.clearRect(0, 0, width, height)
      const elapsed = now - startedAt
      const cycle = reducedMotion ? 1 : (elapsed % 16000) / 16000
      const revealProgress = reducedMotion ? 1 : Math.min(1, cycle / 0.72)
      const easedProgress = revealProgress * revealProgress * (3 - 2 * revealProgress)
      const fadeOut = reducedMotion ? 1 : cycle < 0.72 ? 1 : 1 - (cycle - 0.72) / 0.28
      progress = easedProgress * (fadeOut * fadeOut * (3 - 2 * fadeOut))
      const spacing = 76
      const columns = Math.ceil(width / spacing) + 2
      const rows = Math.ceil(height / spacing) + 2
      const lines: { x: number; y: number; points: [number, number][] }[] = []

      for (let row = -1; row < rows; row += 1) {
        for (let column = -1; column < columns; column += 1) {
          const x = column * spacing + (row % 2) * 38
          const y = row * spacing
          const points: [number, number][] = [
            [x, y], [x + 30, y - 18], [x + 60, y], [x + 60, y + 36],
            [x + 30, y + 54], [x, y + 36], [x, y],
          ]
          lines.push({ x, y, points })
        }
      }

      lines.forEach((line, index) => {
        const reveal = Math.max(0, Math.min(1, progress * 1.5 - (index % 9) * 0.045))
        if (reveal <= 0) return
        context.beginPath()
        line.points.forEach(([x, y], pointIndex) => {
          const nextX = x + (width * 0.5 - x) * 0.015 * Math.sin(elapsed / 3000 + index)
          const nextY = y + Math.sin(elapsed / 2800 + index * 0.4) * 1.5
          if (pointIndex === 0) context.moveTo(nextX, nextY)
          else context.lineTo(nextX, nextY)
        })
        context.globalAlpha = 0.16 * reveal
        context.strokeStyle = 'rgb(34, 156, 193)'
        context.lineWidth = 1
        context.stroke()
      })
      context.globalAlpha = 1

      if (!reducedMotion) animation = requestAnimationFrame(draw)
    }

    resize()
    draw(performance.now())
    const observer = new ResizeObserver(resize)
    observer.observe(canvas)
    return () => {
      cancelAnimationFrame(animation)
      observer.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />
}
