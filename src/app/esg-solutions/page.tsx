import type { Metadata } from 'next'
import Link from 'next/link'
import Scroll3DReveal from '@/components/Scroll3DReveal'
import TiltCard from '@/components/TiltCard'

export const metadata: Metadata = {
  title: 'ESG Solutions — My Green Mark',
  description: 'BRSR reporting, ESG score improvement, custom sustainability dashboards, and net-zero consulting for Indian businesses.',
}

const solutions = [
  {
    icon: '📋',
    title: 'BRSR Reporting',
    subtitle: 'Business Responsibility & Sustainability Report',
    desc: 'Complete BRSR preparation as per SEBI guidelines covering all 9 mandatory principles. We handle data collection, analysis, narrative writing, and board-ready formatting.',
    features: ['All 9 BRSR principles covered', 'SEBI-compliant formatting', 'Board-ready presentation', 'Historical data integration', 'Peer benchmarking'],
    price: '₹1.5L–3L per report',
  },
  {
    icon: '📈',
    title: 'ESG Score Improvement',
    subtitle: 'Strategy, Execution & Measurable Uplift',
    desc: 'We don\'t just measure your ESG score — we improve it. Our team develops a 12-month improvement roadmap with specific, measurable actions across E, S, and G dimensions.',
    features: ['Current score assessment', '12-month improvement roadmap', 'Monthly progress tracking', 'Stakeholder communication', 'Score improvement guarantee'],
    price: '₹50K–2L per quarter',
  },
  {
    icon: '💻',
    title: 'ESG Dashboard',
    subtitle: 'Real-time Sustainability KPI Monitoring',
    desc: 'Custom-built ESG dashboards giving your board and sustainability team real-time visibility into all KPIs — from carbon footprint to gender pay equity to supply chain risk.',
    features: ['Custom KPI configuration', 'Real-time data feeds', 'Board & team views', 'Alert & notification system', 'Regulatory reporting export'],
    price: '₹50K setup + ₹15K/mo',
  },
  {
    icon: '🎯',
    title: 'Sustainability Consulting',
    subtitle: 'Net-Zero Roadmaps & SDG Alignment',
    desc: 'Strategic advisory for companies setting science-based targets, building net-zero roadmaps, and aligning business strategy with UN Sustainable Development Goals.',
    features: ['Science-based target setting', 'Net-zero pathway design', 'SDG impact mapping', 'Policy compliance review', 'Investor ESG communication'],
    price: 'Custom engagement',
  },
]

const metrics = [
  { label: 'BRSR Reports Filed', value: '312', icon: '📄' },
  { label: 'Avg ESG Score Uplift', value: '+18 pts', icon: '📈' },
  { label: 'Corporate Clients', value: '50+', icon: '🏢' },
  { label: 'SDG Goals Aligned', value: '17/17', icon: '🌍' },
]

const principles = [
  { no: 'P1', title: 'Businesses should conduct and govern themselves with integrity' },
  { no: 'P2', title: 'Sustainable and safe products and services' },
  { no: 'P3', title: 'Wellbeing of employees and workers' },
  { no: 'P4', title: 'Responsibilities towards stakeholders' },
  { no: 'P5', title: 'Respect and promote human rights' },
  { no: 'P6', title: 'Environmental protection and conservation' },
  { no: 'P7', title: 'Responsible policy advocacy' },
  { no: 'P8', title: 'Inclusive growth and equitable development' },
  { no: 'P9', title: 'Value for customers in a responsible manner' },
]

export default function ESGSolutionsPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-forest-pattern py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#F4B942]/20 text-[#F4B942] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-5">Service 04</span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">📈 Green Mark ESG Solutions</h1>
              <p className="text-[#D6E8D2] text-xl mb-8 leading-relaxed">Complete ESG & BRSR services for Indian businesses — from compliance reporting to strategic transformation.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary justify-center">Book Free ESG Audit</Link>
                <Link href="#brsr" className="btn-secondary justify-center">BRSR Guide</Link>
              </div>
            </div>
            {/* ESG score card */}
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8">
                <div className="text-white text-sm font-semibold mb-4">ESG Score Dashboard</div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: 'Environment', score: 78, color: '#3A8A5C' },
                    { label: 'Social', score: 82, color: '#F4B942' },
                    { label: 'Governance', score: 88, color: '#A8C5A3' },
                  ].map((dim) => (
                    <div key={dim.label} className="text-center">
                      <div className="relative w-16 h-16 mx-auto mb-2">
                        <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                          <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2"/>
                          <circle cx="18" cy="18" r="15.9" fill="none" stroke={dim.color} strokeWidth="2" strokeDasharray={`${dim.score} ${100 - dim.score}`} strokeLinecap="round"/>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">{dim.score}</div>
                      </div>
                      <div className="text-[#A8C5A3] text-xs">{dim.label}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-[#06402B]/50 rounded-xl p-4 text-center">
                  <div className="text-4xl font-extrabold text-[#F4B942]">82</div>
                  <div className="text-white font-semibold text-sm">Overall ESG Score</div>
                  <div className="text-[#A8C5A3] text-xs mt-1">+18 points from last year</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-12 bg-white border-b border-[#D6E8D2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((m, i) => (
              <Scroll3DReveal key={m.label} direction="flip" delay={i * 80}>
                <TiltCard intensity={8} className="h-full">
                  <div className="text-center stats-card rounded-2xl p-6 h-full">
                    <div className="text-3xl mb-2">{m.icon}</div>
                    <div className="text-2xl font-extrabold text-[#06402B] mb-1">{m.value}</div>
                    <div className="text-[#3A8A5C] text-sm">{m.label}</div>
                  </div>
                </TiltCard>
              </Scroll3DReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-[#F7EDE2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Scroll3DReveal direction="up">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06402B] mb-4">Our ESG Services</h2>
              <p className="text-[#06402B] text-lg max-w-2xl mx-auto">From mandatory BRSR compliance to voluntary ESG leadership — we cover the full sustainability spectrum.</p>
            </Scroll3DReveal>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((sol, i) => (
              <Scroll3DReveal key={sol.title} direction={i % 2 === 0 ? 'left' : 'right'} delay={i * 80}>
                <TiltCard intensity={7} className="h-full">
                  <div className="service-card p-8 h-full">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-14 h-14 bg-[#D6E8D2] rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">{sol.icon}</div>
                      <div>
                        <h3 className="font-bold text-[#06402B] text-xl">{sol.title}</h3>
                        <p className="text-[#3A8A5C] text-xs font-semibold">{sol.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-[#06402B] text-sm leading-relaxed mb-5">{sol.desc}</p>
                    <ul className="space-y-2 mb-5">
                      {sol.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-[#06402B]">
                          <svg width="14" height="14" fill="#3A8A5C" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between pt-4 border-t border-[#D6E8D2]">
                      <span className="font-bold text-[#06402B]">{sol.price}</span>
                      <Link href="/contact" className="text-sm bg-[#06402B] text-white px-4 py-2 rounded-lg hover:bg-[#06402B] transition-colors">Get Quote</Link>
                    </div>
                  </div>
                </TiltCard>
              </Scroll3DReveal>
            ))}
          </div>
        </div>
      </section>

      {/* BRSR Principles */}
      <section id="brsr" className="py-20 bg-[#06402B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Scroll3DReveal direction="up">
              <span className="inline-block bg-[#F4B942]/20 text-[#F4B942] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">BRSR Framework</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">All 9 BRSR Principles Covered</h2>
              <p className="text-[#A8C5A3] text-lg max-w-2xl mx-auto">We handle every section of the Business Responsibility & Sustainability Report as mandated by SEBI for top 1000 listed companies.</p>
            </Scroll3DReveal>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {principles.map((p, i) => (
              <Scroll3DReveal key={p.no} direction="up" delay={i * 80}>
                <TiltCard intensity={6} className="h-full">
                  <div className="bg-white/10 border border-white/15 rounded-xl p-5 flex items-start gap-4 h-full">
                    <div className="w-10 h-10 bg-[#F4B942] rounded-xl flex items-center justify-center text-[#06402B] font-extrabold text-sm flex-shrink-0">{p.no}</div>
                    <p className="text-[#D6E8D2] text-sm leading-relaxed">{p.title}</p>
                  </div>
                </TiltCard>
              </Scroll3DReveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/contact" className="btn-primary inline-flex">Start Your BRSR Preparation</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
