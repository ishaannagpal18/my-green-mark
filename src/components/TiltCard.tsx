'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion'

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  intensity?: number
}

export default function TiltCard({ children, className = '', intensity = 10 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const xSpring = useSpring(x, { damping: 22, stiffness: 350 })
  const ySpring = useSpring(y, { damping: 22, stiffness: 350 })

  const rotateX = useTransform(ySpring, [-0.5, 0.5], [`${intensity}deg`, `-${intensity}deg`])
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [`-${intensity}deg`, `${intensity}deg`])
  const shimmerX = useTransform(xSpring, [-0.5, 0.5], [20, 80])
  const shimmerY = useTransform(ySpring, [-0.5, 0.5], [20, 80])
  const shimmer = useMotionTemplate`radial-gradient(circle at ${shimmerX}% ${shimmerY}%, rgba(255,255,255,0.10) 0%, transparent 65%)`

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - r.left) / r.width - 0.5)
    y.set((e.clientY - r.top) / r.height - 0.5)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <div className={className} style={{ perspective: '800px' }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative w-full h-full"
      >
        {children}
        <motion.div
          style={{ background: shimmer }}
          className="absolute inset-0 rounded-2xl pointer-events-none"
        />
      </motion.div>
    </div>
  )
}
