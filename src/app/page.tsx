import Link from 'next/link'
import ImpactCounters from '@/components/ImpactCounters'
import ServicesSection from '@/components/ServicesSection'
import CarbonExchangeSection from '@/components/CarbonExchangeSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import BlogSection from '@/components/BlogSection'
import ContactCTA from '@/components/ContactCTA'
import BrochureSection from '@/components/BrochureSection'
import WaveDivider from '@/components/WaveDivider'
import Scroll3DReveal from '@/components/Scroll3DReveal'
import TiltCard from '@/components/TiltCard'
import Hero3D from '@/components/Hero3D'

export const metadata = {
  title: 'My Green Mark — Building a Transparent Future Through Sustainability',
  description: "India's leading ESG & sustainability platform — GPS plantation tracking, carbon exchange, ESG consulting & gamified sustainability challenges.",
}

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">

      {/* ═══════════════════════════════════════════
          1. HERO — 3D parallax immersive forest
      ═══════════════════════════════════════════ */}
      <Hero3D />

      <WaveDivider from="#06402B" to="#ffffff" />

      {/* ═══════════════════════════════════════════
          2. IMPACT COUNTERS
      ═══════════════════════════════════════════ */}
      <ImpactCounters />

      <WaveDivider from="#ffffff" to="#F7EDE2" />

      {/* ═══════════════════════════════════════════
          3. SERVICES — 3D tilt cards
      ═══════════════════════════════════════════ */}
      <ServicesSection />

      <WaveDivider from="#F7EDE2" to="#06402B" />

      {/* ═══════════════════════════════════════════
          4. ESG DASHBOARD PREVIEW
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#06402B] relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#06402B]/40 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Scroll3DReveal direction="up">
            <div className="text-center mb-12">
              <span className="section-label">ESG Dashboard</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 mt-4">Real-Time Sustainability Intelligence</h2>
              <p className="text-[#A8C5A3] text-lg max-w-2xl mx-auto">Monitor all ESG metrics, plantation updates, and carbon credits through a single transparent dashboard.</p>
            </div>
          </Scroll3DReveal>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {[
              { label: 'ESG Score', value: '82/100', change: '+12 this quarter', color: '#3A8A5C', icon: '📈' },
              { label: 'Carbon Credits', value: '4,800', change: '320 available to sell', color: '#F4B942', icon: '♻️' },
              { label: 'BRSR Status', value: 'Compliant', change: 'All 9 sections complete', color: '#A8C5A3', icon: '✅' },
            ].map((kpi, i) => (
              <Scroll3DReveal key={kpi.label} direction="up" delay={i * 100}>
                <TiltCard intensity={8} className="h-full">
                  <div className="glass-dark rounded-2xl p-6 border border-white/15 hover:border-[#3A8A5C]/30 transition-all duration-300 group h-full">
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{kpi.icon}</div>
                    <div className="text-sm text-[#A8C5A3] mb-1">{kpi.label}</div>
                    <div className="text-2xl font-bold text-white mb-1">{kpi.value}</div>
                    <div className="text-xs font-medium" style={{ color: kpi.color }}>{kpi.change}</div>
                  </div>
                </TiltCard>
              </Scroll3DReveal>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <Scroll3DReveal direction="left" delay={100}>
              <div className="glass-dark rounded-2xl p-6 border border-white/15">
                <div className="text-sm text-[#A8C5A3] font-semibold mb-4">Monthly Tree Plantation (2024)</div>
                <div className="flex items-end gap-2 h-32">
                  {[1200, 1800, 2400, 3200, 4200, 5800, 5000, 6500, 7200, 8000, 8500, 8400].map((v, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm hover:opacity-80 transition-opacity cursor-default"
                      style={{ height: `${(v / 9000) * 100}%`, background: `rgba(58,138,92,${0.45 + (i / 12) * 0.55})` }}
                      title={`${v.toLocaleString('en-IN')} trees`}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-xs text-[#3A8A5C]/70 mt-2">
                  {['J','F','M','A','M','J','J','A','S','O','N','D'].map((m,i) => <span key={i}>{m}</span>)}
                </div>
              </div>
            </Scroll3DReveal>

            <Scroll3DReveal direction="right" delay={100}>
              <div className="glass-dark rounded-2xl p-6 border border-white/15">
                <div className="text-sm text-[#A8C5A3] font-semibold mb-4">Cumulative CO₂ Offset (Tonnes)</div>
                <div className="relative h-32">
                  <svg viewBox="0 0 200 80" className="w-full h-full" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="greenGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3A8A5C" stopOpacity="0.4"/>
                        <stop offset="100%" stopColor="#3A8A5C" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                    <polygon points="0,70 40,55 80,38 120,22 160,12 200,8 200,80 0,80" fill="url(#greenGrad)"/>
                    <polyline points="0,70 40,55 80,38 120,22 160,12 200,8" fill="none" stroke="#3A8A5C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    {[0,40,80,120,160,200].map((x, i) => {
                      const ys = [70,55,38,22,12,8]
                      return <circle key={i} cx={x} cy={ys[i]} r="3" fill="#3A8A5C"/>
                    })}
                  </svg>
                </div>
                <div className="flex justify-between text-xs text-[#3A8A5C]/70 mt-2">
                  <span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span>
                </div>
              </div>
            </Scroll3DReveal>
          </div>

          <Scroll3DReveal direction="up" delay={200}>
            <div className="text-center">
              <Link href="/impact-dashboard" className="btn-glow sheen text-sm inline-flex">View Full Impact Dashboard →</Link>
            </div>
          </Scroll3DReveal>
        </div>
      </section>

      <WaveDivider from="#06402B" to="#ffffff" />

      {/* ═══════════════════════════════════════════
          5. CARBON EXCHANGE
      ═══════════════════════════════════════════ */}
      <CarbonExchangeSection />

      <WaveDivider from="#ffffff" to="#F4B942" />

      {/* ═══════════════════════════════════════════
          6. CHALLENGE BANNER
      ═══════════════════════════════════════════ */}
      <section className="py-16 bg-[#F4B942] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#06402B]/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#06402B]/10 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <Scroll3DReveal direction="left">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🏆</span>
                  <span className="bg-[#06402B] text-white text-xs font-bold px-3 py-1 rounded-full">FLAGSHIP EVENT</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06402B] mb-3">Green Talent Hunt 2026</h2>
                <p className="text-[#06402B]/80 text-lg mb-4">June 5th, 2026 · World Environment Day · Students Class 4–12</p>
                <div className="flex flex-wrap gap-3">
                  {['₹50,000 Prize Pool', 'Digital Certificates', 'GPS Plot Ownership', 'Green Twin Badge'].map((r) => (
                    <span key={r} className="flex items-center gap-1.5 bg-[#06402B]/10 px-3 py-1.5 rounded-full text-sm font-medium text-[#06402B]">
                      <svg width="12" height="12" fill="#06402B" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </Scroll3DReveal>

            <Scroll3DReveal direction="right" delay={100}>
              <div className="flex flex-col items-center gap-4">
                <TiltCard intensity={12}>
                  <div className="text-center bg-[#06402B] rounded-2xl p-6 text-white min-w-[200px] shadow-xl">
                    <div className="text-xs text-[#A8C5A3] mb-1 uppercase tracking-wider">Event Date</div>
                    <div className="text-4xl font-extrabold text-[#F4B942]">June 5</div>
                    <div className="text-lg font-bold">2026</div>
                    <div className="text-xs text-[#A8C5A3] mt-1">World Environment Day</div>
                  </div>
                </TiltCard>
                <Link href="/sustainability-challenge" className="btn-forest-solid w-full text-center justify-center">
                  <span>Register Now — ₹200</span>
                </Link>
              </div>
            </Scroll3DReveal>
          </div>
        </div>
      </section>

      <WaveDivider from="#F4B942" to="#F7EDE2" />

      {/* ═══════════════════════════════════════════
          7. TESTIMONIALS — 3D tilt cards
      ═══════════════════════════════════════════ */}
      <TestimonialsSection />

      <WaveDivider from="#F7EDE2" to="#ffffff" />

      {/* ═══════════════════════════════════════════
          8. BLOG — 3D tilt cards
      ═══════════════════════════════════════════ */}
      <BlogSection />

      <WaveDivider from="#ffffff" to="#06402B" />

      {/* ═══════════════════════════════════════════
          9. BROCHURE
      ═══════════════════════════════════════════ */}
      <BrochureSection />

      {/* ═══════════════════════════════════════════
          10. CONTACT CTA
      ═══════════════════════════════════════════ */}
      <ContactCTA />
    </main>
  )
}
