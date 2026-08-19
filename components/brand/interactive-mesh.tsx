'use client'

import { useEffect, useRef } from 'react'

const AMBER = '248, 173, 19'
const CALIPSO = '34, 156, 193'

export function InteractiveMesh({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const context = canvas.getContext('2d')
    if (!context) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const pointer = { x: -1000, y: -1000 }
    let width = 0
    let height = 0
    let frame = 0
    let animation = 0

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = width * ratio
      canvas.height = height * ratio
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    const move = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointer.x = event.clientX - rect.left
      pointer.y = event.clientY - rect.top
    }

    const leave = () => {
      pointer.x = -1000
      pointer.y = -1000
    }

    const draw = () => {
      context.clearRect(0, 0, width, height)
      const gap = Math.max(34, Math.min(58, width / 24))
      const cols = Math.ceil(width / gap) + 2
      const rows = Math.ceil(height / gap) + 2
      const points: { x: number; y: number }[][] = []
      const time = frame * 0.008

      for (let row = 0; row < rows; row++) {
        points[row] = []
        for (let col = 0; col < cols; col++) {
          const baseX = col * gap - gap
          const baseY = row * gap - gap
          const distance = Math.hypot(baseX - pointer.x, baseY - pointer.y)
          const influence = Math.max(0, 1 - distance / 260)
          const fold = influence * influence
          const wave = reduceMotion ? 0 : Math.sin(time + col * 0.35 + row * 0.2) * 3
          const direction = baseX < pointer.x ? -1 : 1
          points[row][col] = {
            x: baseX + direction * fold * 34,
            y: baseY + fold * (baseY < pointer.y ? -22 : 22) + wave,
          }
        }
      }

      context.lineWidth = 0.7
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const point = points[row][col]
          const right = points[row][col + 1]
          const down = points[row + 1]?.[col]
          const distance = Math.hypot(point.x - pointer.x, point.y - pointer.y)
          const active = Math.max(0, 1 - distance / 300)
          const alpha = 0.08 + active * 0.26
          context.strokeStyle = `rgba(${col % 5 === 0 ? AMBER : CALIPSO}, ${alpha})`
          context.beginPath()
          if (right) {
            context.moveTo(point.x, point.y)
            context.lineTo(right.x, right.y)
          }
          if (down) {
            context.moveTo(point.x, point.y)
            context.lineTo(down.x, down.y)
          }
          context.stroke()
        }
      }

      if (!reduceMotion) {
        frame += 1
        animation = requestAnimationFrame(draw)
      }
    }

    resize()
    draw()
    const observer = new ResizeObserver(resize)
    observer.observe(canvas)
    canvas.addEventListener('pointermove', move)
    canvas.addEventListener('pointerleave', leave)
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animation)
      observer.disconnect()
      canvas.removeEventListener('pointermove', move)
      canvas.removeEventListener('pointerleave', leave)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
    />
  )
}
