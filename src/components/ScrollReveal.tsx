'use client'
import { useEffect, useRef, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'scale'
  threshold?: number
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  threshold = 0.15,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const dirMap = {
      up:    'translateY(35px)',
      left:  'translateX(-35px)',
      right: 'translateX(35px)',
      scale: 'scale(0.88)',
    }

    Object.assign(el.style, {
      opacity: '0',
      transform: dirMap[direction],
      transition: `opacity 0.7s cubic-bezier(0.4,0,0.2,1) ${delay}ms, transform 0.7s cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
      willChange: 'opacity, transform',
    })

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = direction === 'scale' ? 'scale(1)' : 'translateX(0) translateY(0)'
          observer.unobserve(el)
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, direction, threshold])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
