'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import LeafParticles from './LeafParticles'

function DashboardCard() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const xSpring = useSpring(x, { damping: 25, stiffness: 400 })
  const ySpring = useSpring(y, { damping: 25, stiffness: 400 })
  const rotateX = useTransform(ySpring, [-0.5, 0.5], ['8deg', '-8deg'])
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ['-8deg', '8deg'])
  const shimmerX = useTransform(xSpring, [-0.5, 0.5], [20, 80])
  const shimmerY = useTransform(ySpring, [-0.5, 0.5], [20, 80])
  const shimmer = useMotionTemplate`radial-gradient(circle at ${shimmerX}% ${shimmerY}%, rgba(255,255,255,0.12) 0%, transparent 60%)`

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - r.left) / r.width - 0.5)
    y.set((e.clientY - r.top) / r.height - 0.5)
  }

  return (
    <div style={{ perspective: '1000px' }}>
      <motion.div
        onMouseMove={onMove}
        onMouseLeave={() => { x.set(0); y.set(0) }}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative"
      >
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-[#3A8A5C]/20 rounded-3xl blur-2xl scale-95 pointer-events-none" />

        <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl">
          {/* Shimmer overlay */}
          <motion.div style={{ background: shimmer }} className="absolute inset-0 rounded-2xl pointer-events-none" />

          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#3A8A5C] rounded-full animate-pulse" />
              <div className="text-white font-semibold text-sm">Live Impact Dashboard</div>
            </div>
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-400/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <span className="w-3 h-3 rounded-full bg-green-400/80" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-5">
            {[
              { label: 'Trees Planted', value: '42,500+', icon: '🌳', trend: '+12%' },
              { label: 'CO₂ Offset', value: '8,200 T', icon: '🌍', trend: '+8%' },
              { label: 'Farmers Helped', value: '1,240', icon: '👨‍🌾', trend: '+24%' },
              { label: 'ESG Reports', value: '312', icon: '📊', trend: '+15%' },
            ].map((item) => (
              <div key={item.label} className="bg-white/15 rounded-xl p-3.5 border border-white/10 hover:bg-white/25 transition-colors">
                <div className="flex items-start justify-between mb-1.5">
                  <div className="text-lg">{item.icon}</div>
                  <span className="text-[10px] text-[#3A8A5C] bg-[#3A8A5C]/20 px-1.5 py-0.5 rounded-full">{item.trend}</span>
                </div>
                <div className="text-white font-bold text-xl leading-none">{item.value}</div>
                <div className="text-[#A8C5A3] text-xs mt-1">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-[#A8C5A3] text-xs">Monthly Growth</div>
              <div className="text-[#3A8A5C] text-xs font-semibold">+38% YoY</div>
            </div>
            <div className="flex items-end gap-1 h-16">
              {[25, 40, 35, 55, 70, 65, 80, 90, 85, 95, 88, 100].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm transition-all hover:opacity-80"
                  style={{ height: `${h}%`, background: `rgba(58,138,92,${0.35 + (i / 12) * 0.65})` }}
                />
              ))}
            </div>
            <div className="flex justify-between text-[10px] text-[#3A8A5C]/70 mt-1.5">
              {['J','F','M','A','M','J','J','A','S','O','N','D'].map((m, i) => <span key={i}>{m}</span>)}
            </div>
          </div>

          <div className="flex items-center gap-2 bg-[#06402B]/60 rounded-lg p-2.5 border border-[#3A8A5C]/20">
            <div className="w-2 h-2 bg-[#3A8A5C] rounded-full animate-ping" />
            <span className="text-[#A8C5A3] text-xs">Plot 104A — Sundarbans, WB · Live Tracking</span>
          </div>
        </div>

        {/* Floating badges with motion */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-4 -right-4 bg-[#F4B942] text-[#06402B] text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
          style={{ translateZ: 30 }}
        >
          ₹45,000 Cr Market by 2030
        </motion.div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute -bottom-4 -left-4 bg-[#06402B] border border-[#3A8A5C] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5"
          style={{ translateZ: 20 }}
        >
          <span className="w-1.5 h-1.5 bg-[#3A8A5C] rounded-full animate-pulse" />
          4,800 Carbon Credits Active
        </motion.div>
      </motion.div>
    </div>
  )
}

export default function Hero3D() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const sp = { damping: 30, stiffness: 200 }
  const blob1Y = useSpring(useTransform(scrollYProgress, [0, 1], ['0%', '-25%']), sp)
  const blob2Y = useSpring(useTransform(scrollYProgress, [0, 1], ['0%', '-40%']), sp)
  const textY   = useSpring(useTransform(scrollYProgress, [0, 1], ['0%', '-20%']), sp)
  const textOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])
  const cardY   = useSpring(useTransform(scrollYProgress, [0, 1], ['0%', '18%']), sp)
  const scrollCueOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center bg-forest-hero overflow-hidden">
      {/* Parallax depth layers */}
      <motion.div
        style={{ y: blob1Y }}
        className="absolute top-20 right-10 w-96 h-96 bg-[#06402B]/30 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: blob2Y }}
        className="absolute bottom-32 left-10 w-72 h-72 bg-[#3A8A5C]/20 rounded-full blur-3xl pointer-events-none"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#06402B]/40 rounded-full blur-[80px] pointer-events-none" />

      <LeafParticles count={22} />
      <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-36 z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — text block with parallax */}
          <motion.div style={{ y: textY, opacity: textOpacity }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#F4B942]/15 border border-[#F4B942]/30 text-[#F4B942] text-xs font-semibold px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-[#F4B942] rounded-full animate-pulse" />
              India&apos;s First Integrated ESG Platform · Version 1.0 · 2025
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
            >
              Building a{' '}
              <span className="text-[#F4B942] relative">
                Transparent
                <svg className="absolute -bottom-1 left-0 w-full" height="4" viewBox="0 0 200 4" preserveAspectRatio="none">
                  <path d="M0,2 Q50,0 100,2 Q150,4 200,2" stroke="#F4B942" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
              <br />Future Through
              <br />
              <span className="text-[#3A8A5C]">Sustainability</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-[#D6E8D2] text-lg leading-relaxed mb-8 max-w-lg"
            >
              GPS Plantation Tracking · Carbon Exchange · ESG Consulting · Gamified Impact — connecting businesses, farmers &amp; communities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Link href="/plantation-tracker" className="btn-glow sheen text-base justify-center">Sponsor Plantation</Link>
              <Link href="/sustainability-challenge" className="btn-outline-white text-base justify-center">Join Challenge 2026</Link>
              <Link href="/contact" className="text-center border border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-all text-base">Book Consultation</Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="flex flex-wrap items-center gap-4 text-sm text-[#A8C5A3]"
            >
              {['GPS Verified Plantations', 'SEBI BRSR Compliant', 'India-First Platform'].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <svg width="14" height="14" fill="#3A8A5C" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  {t}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — 3D dashboard card with scroll parallax */}
          <motion.div
            style={{ y: cardY }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="hidden lg:block"
          >
            <DashboardCard />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        style={{ opacity: scrollCueOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#3A8A5C] z-10"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border-2 border-[#3A8A5C]/50 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-[#3A8A5C] rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
}
