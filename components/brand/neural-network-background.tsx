'use client'

import { useEffect, useRef } from 'react'

const CALIPSO = '34, 156, 193'
const AMBER = '248, 173, 19'

type Node = { x: number; y: number; vx: number; vy: number; radius: number }

export function NeuralNetworkBackground({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const pointer = { x: -1000, y: -1000 }
    let width = 0
    let height = 0
    let frame = 0
    let animation = 0
    let nodes: Node[] = []

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = width * ratio
      canvas.height = height * ratio
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      const count = Math.max(28, Math.min(54, Math.round((width * height) / 18000)))
      nodes = Array.from({ length: count }, (_, index) => ({
        x: (index * 97) % Math.max(width, 1),
        y: (index * 53) % Math.max(height, 1),
        vx: ((index % 3) - 1) * 0.12,
        vy: (((index + 1) % 3) - 1) * 0.1,
        radius: index % 6 === 0 ? 2.2 : 1.5,
      }))
    }

    const move = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointer.x = event.clientX - rect.left
      pointer.y = event.clientY - rect.top
    }
    const leave = () => { pointer.x = -1000; pointer.y = -1000 }

    const draw = () => {
      context.clearRect(0, 0, width, height)
      const time = frame * 0.012
      nodes.forEach((node, index) => {
        if (!reduceMotion) {
          node.x += node.vx
          node.y += node.vy
          if (node.x < -20 || node.x > width + 20) node.vx *= -1
          if (node.y < -20 || node.y > height + 20) node.vy *= -1
        }
        const distance = Math.hypot(node.x - pointer.x, node.y - pointer.y)
        const influence = Math.max(0, 1 - distance / 180)
        node.x += (node.x - pointer.x) * influence * 0.002
        node.y += (node.y - pointer.y) * influence * 0.002
      })

      nodes.forEach((node, index) => {
        nodes.slice(index + 1).forEach((other) => {
          const distance = Math.hypot(node.x - other.x, node.y - other.y)
          if (distance > 115) return
          context.beginPath()
          context.moveTo(node.x, node.y)
          context.lineTo(other.x, other.y)
          context.strokeStyle = `rgba(${index % 7 === 0 ? AMBER : CALIPSO}, ${(1 - distance / 115) * 0.30})`
          context.lineWidth = 0.7
          context.stroke()
        })
        context.beginPath()
        context.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        context.fillStyle = `rgba(${index % 7 === 0 ? AMBER : CALIPSO}, 0.58)`
        context.fill()
      })

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
    return () => {
      cancelAnimationFrame(animation)
      observer.disconnect()
      canvas.removeEventListener('pointermove', move)
      canvas.removeEventListener('pointerleave', leave)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />
}
