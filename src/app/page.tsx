import Link from 'next/link'
import ImpactCounters from '@/components/ImpactCounters'
import ServicesSection from '@/components/ServicesSection'
import CarbonExchangeSection from '@/components/CarbonExchangeSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import BlogSection from '@/components/BlogSection'
import ContactCTA from '@/components/ContactCTA'
import LeafParticles from '@/components/LeafParticles'
import WaveDivider from '@/components/WaveDivider'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = {
  title: 'My Green Mark — Building a Transparent Future Through Sustainability',
  description: "India's leading ESG & sustainability platform — GPS plantation tracking, carbon exchange, ESG consulting & gamified sustainability challenges.",
}

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">

      {/* ═══════════════════════════════════════════
          1. HERO — Full-screen immersive forest
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center bg-forest-hero overflow-hidden">
        {/* Atmospheric blobs */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#14532D]/30 rounded-full blur-3xl animate-[float-gentle_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-32 left-10 w-72 h-72 bg-[#3A8A5C]/20 rounded-full blur-3xl animate-[float-gentle_10s_ease-in-out_infinite_2s]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#14532D]/40 rounded-full blur-[80px] pointer-events-none"></div>

        {/* Leaf particles */}
        <LeafParticles count={22} />

        {/* Dot grid overlay */}
        <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-36 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left — headline */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#F4B942]/15 border border-[#F4B942]/30 text-[#F4B942] text-xs font-semibold px-4 py-2 rounded-full mb-6 animate-[slide-up_0.8s_ease-out_0.2s_both]">
                <span className="w-2 h-2 bg-[#F4B942] rounded-full animate-pulse"></span>
                India&apos;s First Integrated ESG Platform · Version 1.0 · 2025
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 animate-[slide-up_0.8s_ease-out_0.3s_both]">
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
              </h1>

              <p className="text-[#D6E8D2] text-lg leading-relaxed mb-8 max-w-lg animate-[slide-up_0.8s_ease-out_0.4s_both]">
                GPS Plantation Tracking · Carbon Exchange · ESG Consulting · Gamified Impact — connecting businesses, farmers &amp; communities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-[slide-up_0.8s_ease-out_0.5s_both]">
                <Link href="/plantation-tracker" className="btn-glow sheen text-base justify-center">
                  Sponsor Plantation
                </Link>
                <Link href="/sustainability-challenge" className="btn-outline-white text-base justify-center">
                  Join Challenge 2026
                </Link>
                <Link href="/contact" className="text-center border border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-all text-base">
                  Book Consultation
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-[#A8C5A3] animate-[slide-up_0.8s_ease-out_0.6s_both]">
                {['GPS Verified Plantations', 'SEBI BRSR Compliant', 'India-First Platform'].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <svg width="14" height="14" fill="#3A8A5C" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — Live dashboard card */}
            <div className="hidden lg:block animate-[slide-up_0.9s_ease-out_0.5s_both]">
              <div className="relative">
                {/* Glow backdrop */}
                <div className="absolute inset-0 bg-[#3A8A5C]/20 rounded-3xl blur-2xl scale-95"></div>

                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#3A8A5C] rounded-full animate-pulse"></div>
                      <div className="text-white font-semibold text-sm">Live Impact Dashboard</div>
                    </div>
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-400/80"></span>
                      <span className="w-3 h-3 rounded-full bg-yellow-400/80"></span>
                      <span className="w-3 h-3 rounded-full bg-green-400/80"></span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {[
                      { label: 'Trees Planted', value: '42,500+', icon: '🌳', trend: '+12%' },
                      { label: 'CO₂ Offset', value: '8,200 T', icon: '🌍', trend: '+8%' },
                      { label: 'Farmers Helped', value: '1,240', icon: '👨‍🌾', trend: '+24%' },
                      { label: 'ESG Reports', value: '312', icon: '📊', trend: '+15%' },
                    ].map((item) => (
                      <div key={item.label} className="bg-white/15 rounded-xl p-3.5 border border-white/10 hover:bg-white/20 transition-colors group">
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
                          className="flex-1 rounded-t-sm transition-all hover:opacity-100"
                          style={{
                            height: `${h}%`,
                            background: `rgba(58,138,92,${0.35 + (i / 12) * 0.65})`,
                          }}
                        ></div>
                      ))}
                    </div>
                    <div className="flex justify-between text-[10px] text-[#3A8A5C]/70 mt-1.5">
                      {['J','F','M','A','M','J','J','A','S','O','N','D'].map((m, i) => <span key={i}>{m}</span>)}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 bg-[#14532D]/60 rounded-lg p-2.5 border border-[#3A8A5C]/20">
                    <div className="w-2 h-2 bg-[#3A8A5C] rounded-full animate-ping"></div>
                    <span className="text-[#A8C5A3] text-xs">Plot 104A — Sundarbans, WB · Live Tracking</span>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-[#F4B942] text-[#14532D] text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-[float-gentle_4s_ease-in-out_infinite]">
                  ₹45,000 Cr Market by 2030
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[#14532D] border border-[#3A8A5C] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 animate-[float-gentle_5s_ease-in-out_infinite_1s]">
                  <span className="w-1.5 h-1.5 bg-[#3A8A5C] rounded-full animate-pulse"></span>
                  4,800 Carbon Credits Active
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#3A8A5C] animate-bounce z-10">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-8 border-2 border-[#3A8A5C]/50 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-[#3A8A5C] rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      <WaveDivider from="#14532D" to="#ffffff" />

      {/* ═══════════════════════════════════════════
          2. IMPACT COUNTERS
      ═══════════════════════════════════════════ */}
      <ImpactCounters />

      <WaveDivider from="#ffffff" to="#F7EDE2" />

      {/* ═══════════════════════════════════════════
          3. SERVICES
      ═══════════════════════════════════════════ */}
      <ServicesSection />

      <WaveDivider from="#F7EDE2" to="#14532D" />

      {/* ═══════════════════════════════════════════
          4. ESG DASHBOARD PREVIEW
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#14532D] relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#14532D]/40 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <span className="section-label">ESG Dashboard</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 mt-4">Real-Time Sustainability Intelligence</h2>
              <p className="text-[#A8C5A3] text-lg max-w-2xl mx-auto">Monitor all ESG metrics, plantation updates, and carbon credits through a single transparent dashboard.</p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {[
              { label: 'ESG Score', value: '82/100', change: '+12 this quarter', color: '#3A8A5C', icon: '📈' },
              { label: 'Carbon Credits', value: '4,800', change: '320 available to sell', color: '#F4B942', icon: '♻️' },
              { label: 'BRSR Status', value: 'Compliant', change: 'All 9 sections complete', color: '#A8C5A3', icon: '✅' },
            ].map((kpi, i) => (
              <ScrollReveal key={kpi.label} direction="up" delay={i * 100}>
                <div className="glass-dark rounded-2xl p-6 border border-white/15 hover:border-[#3A8A5C]/30 transition-all duration-300 group">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{kpi.icon}</div>
                  <div className="text-sm text-[#A8C5A3] mb-1">{kpi.label}</div>
                  <div className="text-2xl font-bold text-white mb-1">{kpi.value}</div>
                  <div className="text-xs font-medium" style={{ color: kpi.color }}>{kpi.change}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <ScrollReveal direction="left" delay={100}>
              <div className="glass-dark rounded-2xl p-6 border border-white/15">
                <div className="text-sm text-[#A8C5A3] font-semibold mb-4">Monthly Tree Plantation (2024)</div>
                <div className="flex items-end gap-2 h-32">
                  {[1200, 1800, 2400, 3200, 4200, 5800, 5000, 6500, 7200, 8000, 8500, 8400].map((v, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm hover:opacity-80 transition-opacity cursor-default"
                      style={{ height: `${(v / 9000) * 100}%`, background: `rgba(58,138,92,${0.45 + (i / 12) * 0.55})` }}
                      title={`${v.toLocaleString('en-IN')} trees`}
                    ></div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-[#3A8A5C]/70 mt-2">
                  {['J','F','M','A','M','J','J','A','S','O','N','D'].map((m,i) => <span key={i}>{m}</span>)}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={100}>
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
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" delay={200}>
            <div className="text-center">
              <Link href="/impact-dashboard" className="btn-glow sheen text-sm inline-flex">View Full Impact Dashboard →</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveDivider from="#14532D" to="#ffffff" />

      {/* ═══════════════════════════════════════════
          5. CARBON EXCHANGE
      ═══════════════════════════════════════════ */}
      <CarbonExchangeSection />

      <WaveDivider from="#ffffff" to="#F4B942" />

      {/* ═══════════════════════════════════════════
          6. CHALLENGE BANNER — on gold background
      ═══════════════════════════════════════════ */}
      <section className="py-16 bg-[#F4B942] relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#14532D]/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#14532D]/10 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <ScrollReveal direction="left">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🏆</span>
                  <span className="bg-[#14532D] text-white text-xs font-bold px-3 py-1 rounded-full">FLAGSHIP EVENT</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14532D] mb-3">Global Sustainability Challenge 2026</h2>
                <p className="text-[#14532D]/80 text-lg mb-4">June 5th, 2026 · World Environment Day · Students Class 4–12</p>
                <div className="flex flex-wrap gap-3">
                  {['₹50,000 Prize Pool', 'Digital Certificates', 'GPS Plot Ownership', 'Green Twin Badge'].map((r) => (
                    <span key={r} className="flex items-center gap-1.5 bg-[#14532D]/10 px-3 py-1.5 rounded-full text-sm font-medium text-[#14532D]">
                      <svg width="12" height="12" fill="#14532D" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={100}>
              <div className="flex flex-col items-center gap-4">
                <div className="text-center bg-[#14532D] rounded-2xl p-6 text-white min-w-[200px] shadow-xl">
                  <div className="text-xs text-[#A8C5A3] mb-1 uppercase tracking-wider">Event Date</div>
                  <div className="text-4xl font-extrabold text-[#F4B942]">June 5</div>
                  <div className="text-lg font-bold">2026</div>
                  <div className="text-xs text-[#A8C5A3] mt-1">World Environment Day</div>
                </div>
                <Link href="/sustainability-challenge" className="btn-forest-solid w-full text-center justify-center">
                  <span>Register Now — ₹200</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveDivider from="#F4B942" to="#F7EDE2" />

      {/* ═══════════════════════════════════════════
          7. TESTIMONIALS
      ═══════════════════════════════════════════ */}
      <TestimonialsSection />

      <WaveDivider from="#F7EDE2" to="#ffffff" />

      {/* ═══════════════════════════════════════════
          8. BLOG
      ═══════════════════════════════════════════ */}
      <BlogSection />

      <WaveDivider from="#ffffff" to="#14532D" />

      {/* ═══════════════════════════════════════════
          9. CONTACT CTA
      ═══════════════════════════════════════════ */}
      <ContactCTA />
    </main>
  )
}
