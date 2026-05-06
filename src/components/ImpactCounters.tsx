'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { label: 'Trees Planted', value: 42500, suffix: '+', icon: '🌳', description: 'Across India', color: '#D6E8D2', accentColor: '#14532D' },
  { label: 'CO₂ Offset', value: 8200, suffix: ' T', icon: '🌍', description: 'Tonnes reduced', color: '#D6E8D2', accentColor: '#14532D' },
  { label: 'Farmers Benefited', value: 1240, suffix: '', icon: '👨‍🌾', description: 'Via carbon credits', color: '#FEF3C7', accentColor: '#92400E' },
  { label: 'ESG Reports', value: 312, suffix: '', icon: '📊', description: 'Issued & verified', color: '#D6E8D2', accentColor: '#3A8A5C' },
  { label: 'Carbon Credits', value: 4800, suffix: '', icon: '♻️', description: 'Traded on platform', color: '#D6E8D2', accentColor: '#14532D' },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 2000 / steps)
    return () => clearInterval(timer)
  }, [started, target])

  return (
    <span ref={ref}>
      {count.toLocaleString('en-IN')}{suffix}
    </span>
  )
}

export default function ImpactCounters() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-[#D6E8D2] text-[#14532D] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
            <span className="w-2 h-2 bg-[#3A8A5C] rounded-full animate-pulse"></span>
            Live Impact
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14532D]">Our Impact in Numbers</h2>
          <p className="text-[#3A8A5C] mt-3 max-w-xl mx-auto">Every metric is GPS-verified, blockchain-anchored, and updated in real time.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="group text-center"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Icon ring */}
              <div className="relative mx-auto w-20 h-20 mb-5">
                <div
                  className="absolute inset-0 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 scale-110"
                  style={{ background: stat.color }}
                ></div>
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 relative z-10"
                  style={{ background: stat.color }}
                >
                  {stat.icon}
                </div>
              </div>

              {/* Number */}
              <div className="text-3xl sm:text-4xl font-black text-[#14532D] mb-1 tabular-nums">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="font-bold text-[#14532D] text-sm mb-1">{stat.label}</div>
              <div className="text-[#3A8A5C] text-xs">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Market strip */}
        <div className="mt-14 relative overflow-hidden bg-gradient-to-r from-[#14532D] via-[#14532D] to-[#14532D] rounded-2xl p-6 text-white text-center shadow-xl">
          <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
          <p className="relative text-sm sm:text-base">
            India&apos;s ESG compliance market is projected to reach{' '}
            <span className="text-[#F4B942] font-bold text-lg">₹45,000 Cr by 2030</span>
            {' '}— My Green Mark is positioned at the center of this transformation.
          </p>
        </div>
      </div>
    </section>
  )
}
