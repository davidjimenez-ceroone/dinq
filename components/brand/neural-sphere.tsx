'use client'

import { useEffect, useRef } from 'react'

type Node = { x: number; y: number; z: number; amber: boolean; pulse: number }

const BRAND = {
  amber: '248, 173, 19', // #f8ad13
  calipso: '34, 156, 193', // #229cc1
  line: '90, 170, 180', // muted teal for edges
}

/**
 * Animated neural-network sphere rendered on a <canvas>.
 * Nodes are distributed on a sphere (Fibonacci lattice), rotated over time and
 * projected to 2D; nearby nodes are joined by faint edges. A subset of nodes
 * glow amber. Honors prefers-reduced-motion by rendering a single static frame.
 */
export function NeuralSphere({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const NODE_COUNT = 260
    const nodes: Node[] = []
    // Fibonacci sphere distribution for even coverage.
    const golden = Math.PI * (3 - Math.sqrt(5))
    for (let i = 0; i < NODE_COUNT; i++) {
      const y = 1 - (i / (NODE_COUNT - 1)) * 2
      const radius = Math.sqrt(1 - y * y)
      const theta = golden * i
      nodes.push({
        x: Math.cos(theta) * radius,
        y,
        z: Math.sin(theta) * radius,
        amber: Math.random() < 0.22,
        pulse: Math.random() * Math.PI * 2,
      })
    }

    // Precompute nearest-neighbour edges (by 3D distance) once.
    const edges: Array<[number, number]> = []
    const EDGE_DIST = 0.34
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const dx = nodes[i].x - nodes[j].x
        const dy = nodes[i].y - nodes[j].y
        const dz = nodes[i].z - nodes[j].z
        if (dx * dx + dy * dy + dz * dz < EDGE_DIST * EDGE_DIST) {
          edges.push([i, j])
        }
      }
    }

    let width = 0
    let height = 0
    let sphereR = 0
    let cx = 0
    let cy = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      // Center on the right side, sized generously to fill the hero.
      sphereR = Math.min(width * 0.52, height * 0.62)
      cx = width * 0.68
      cy = height * 0.5
    }
    resize()

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    let raf = 0
    let angleY = -0.4
    let angleX = 0.35

    const render = (t: number) => {
      ctx.clearRect(0, 0, width, height)

      const cosY = Math.cos(angleY)
      const sinY = Math.sin(angleY)
      const cosX = Math.cos(angleX)
      const sinX = Math.sin(angleX)

      // Project all nodes for this frame.
      const proj = nodes.map((n) => {
        // rotate around Y
        let x = n.x * cosY - n.z * sinY
        let z = n.x * sinY + n.z * cosY
        // rotate around X
        let y = n.y * cosX - z * sinX
        z = n.y * sinX + z * cosX
        const depth = (z + 1) / 2 // 0 (back) .. 1 (front)
        return {
          sx: cx + x * sphereR,
          sy: cy + y * sphereR,
          depth,
        }
      })

      // Edges — fainter towards the back.
      for (let e = 0; e < edges.length; e++) {
        const a = proj[edges[e][0]]
        const b = proj[edges[e][1]]
        const depth = (a.depth + b.depth) / 2
        ctx.strokeStyle = `rgba(${BRAND.line}, ${0.12 + depth * 0.5})`
        ctx.lineWidth = 0.8
        ctx.beginPath()
        ctx.moveTo(a.sx, a.sy)
        ctx.lineTo(b.sx, b.sy)
        ctx.stroke()
      }

      // Nodes — brighter and larger towards the front; amber ones glow/pulse.
      for (let i = 0; i < NODE_COUNT; i++) {
        const p = proj[i]
        const n = nodes[i]
        const twinkle = reduceMotion
          ? 1
          : 0.75 + 0.25 * Math.sin(t * 0.002 + n.pulse)
        const r = (n.amber ? 2 : 1.35) * (0.55 + p.depth) * twinkle

        if (n.amber) {
          const alpha = (0.7 + p.depth * 0.3) * twinkle
          ctx.shadowBlur = 16 * p.depth
          ctx.shadowColor = `rgba(${BRAND.amber}, ${alpha})`
          ctx.fillStyle = `rgba(${BRAND.amber}, ${alpha})`
        } else {
          const alpha = 0.45 + p.depth * 0.5
          ctx.shadowBlur = 6 * p.depth
          ctx.shadowColor = `rgba(${BRAND.calipso}, ${alpha * 0.7})`
          ctx.fillStyle = `rgba(${BRAND.calipso}, ${alpha})`
        }
        ctx.beginPath()
        ctx.arc(p.sx, p.sy, Math.max(0.4, r), 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.shadowBlur = 0

      if (!reduceMotion) {
        angleY += 0.0016
        angleX = 0.35 + Math.sin(t * 0.0002) * 0.12
        raf = requestAnimationFrame(render)
      }
    }

    raf = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
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
