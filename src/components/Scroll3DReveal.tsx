'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Scroll3DRevealProps {
  children: React.ReactNode
  direction?: 'up' | 'left' | 'right' | 'flip' | 'scale'
  delay?: number
  className?: string
}

const variants = {
  up:    { hidden: { opacity: 0, y: 55, rotateX: 18  }, visible: { opacity: 1, y: 0, rotateX: 0  } },
  left:  { hidden: { opacity: 0, x: -55, rotateY: -14 }, visible: { opacity: 1, x: 0, rotateY: 0 } },
  right: { hidden: { opacity: 0, x: 55,  rotateY: 14  }, visible: { opacity: 1, x: 0, rotateY: 0 } },
  flip:  { hidden: { opacity: 0, rotateX: 80, scale: 0.9 }, visible: { opacity: 1, rotateX: 0, scale: 1 } },
  scale: { hidden: { opacity: 0, scale: 0.82, rotateX: 12 }, visible: { opacity: 1, scale: 1, rotateX: 0 } },
}

export default function Scroll3DReveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}: Scroll3DRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px 0px' })

  return (
    <div style={{ perspective: '1000px' }} className={className}>
      <motion.div
        ref={ref}
        variants={variants[direction]}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{
          duration: 0.75,
          delay: delay / 1000,
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
        style={{ transformOrigin: 'center bottom' }}
      >
        {children}
      </motion.div>
    </div>
  )
}
