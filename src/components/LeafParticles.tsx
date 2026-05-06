'use client'
import { useEffect, useState, useRef } from 'react'

const LEAF_SVG = (color: string, opacity: number) => `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${color}" opacity="${opacity}">
    <path d="M17 8C8 10 5.9 16.17 3.82 19.34L5.71 21l1-1C7.55 18.27 14 9 21 6l-4 2z"/>
  </svg>
`

const LEAF_COLORS = ['#3A8A5C','#3A8A5C','#14532D','#A8C5A3','#D6E8D2','#D6E8D2','#14532D']

interface Particle {
  id: number
  x: number
  size: number
  duration: number
  delay: number
  color: string
  opacity: number
  rotate: number
}

function createParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    size: 12 + Math.random() * 18,
    duration: 12 + Math.random() * 16,
    delay: Math.random() * 20,
    color: LEAF_COLORS[Math.floor(Math.random() * LEAF_COLORS.length)],
    opacity: 0.2 + Math.random() * 0.5,
    rotate: Math.random() * 360,
  }))
}

export default function LeafParticles({ count = 20 }: { count?: number }) {
  const [particles, setParticles] = useState<Particle[]>([])
  const mounted = useRef(false)

  useEffect(() => {
    if (mounted.current) return
    mounted.current = true
    setParticles(createParticles(count))
  }, [count])

  if (particles.length === 0) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map(p => (
        <div
          key={p.id}
          className="leaf-particle"
          style={{
            left: `${p.x}%`,
            bottom: '-60px',
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `-${p.delay}s`,
          }}
          dangerouslySetInnerHTML={{ __html: LEAF_SVG(p.color, p.opacity) }}
        />
      ))}
    </div>
  )
}
