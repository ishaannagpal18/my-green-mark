import type { Metadata } from 'next'
import Link from 'next/link'
import Scroll3DReveal from '@/components/Scroll3DReveal'
import TiltCard from '@/components/TiltCard'
import BrochureSection from '@/components/BrochureSection'

export const metadata: Metadata = {
  title: 'Services — My Green Mark',
  description: 'Explore all 5 service pillars: Plantation Tracking, Carbon Exchange, ESG Consulting, Awareness Programs & Subscription Plans.',
}

const services = [
  {
    id: '01',
    title: 'Green Mark Plantation',
    tagline: 'Sponsor · Track · Verify · Impact',
    href: '/plantation-tracker',
    icon: '🌱',
    bgColor: '#06402B',
    revenue: '35%',
    description: 'GPS geo-tagged plantation plots with real-time tracking, monthly photo updates, digital certificates & comprehensive impact reports for corporates and individuals.',
    flow: ['Sponsor a plot', 'GPS tracking begins', 'Monthly photo updates', 'Impact verification', 'Digital certificate'],
    features: [
      { icon: '📍', title: 'Geo-tagged Plantations', desc: 'Every tree has a GPS coordinate' },
      { icon: '📡', title: 'GPS Real-time Tracking', desc: 'Monitor growth from anywhere' },
      { icon: '🏅', title: 'Digital Certificates', desc: 'Blockchain-verified ownership proof' },
      { icon: '📸', title: 'Monthly Photo Updates', desc: 'Visual progress documentation' },
      { icon: '📊', title: 'Impact Reports', desc: 'CO₂ offset, biodiversity metrics' },
      { icon: '🔧', title: 'Plantation Maintenance', desc: 'End-to-end care by trained teams' },
    ],
    pricing: [
      { name: 'Individual Plot', price: '₹2,500/year', desc: '25 sq.m, 1 tree, certificate' },
      { name: 'Corporate Block', price: '₹50,000/year', desc: '500 sq.m, 20 trees, ESG report' },
      { name: 'CSR Forest', price: 'Custom', desc: '5,000 sq.m+, full dashboard' },
    ],
  },
  {
    id: '02',
    title: 'Green Mark Carbon Exchange',
    tagline: 'Farmers ↔ Companies',
    href: '/carbon-exchange',
    icon: '♻️',
    bgColor: '#06402B',
    revenue: '25%',
    description: 'A transparent marketplace for verified carbon credit trading between smallholder farmers and corporates. My Green Mark aggregates, verifies, and facilitates every transaction.',
    flow: ['Farmer enrolls', 'Credits aggregated', 'Third-party verification', 'Listed on exchange', 'Corporate buys'],
    features: [
      { icon: '📦', title: 'Credit Aggregation', desc: 'Pool credits from multiple farmers' },
      { icon: '✅', title: 'Verification', desc: 'Third-party validated credits' },
      { icon: '💰', title: 'Fair Pricing', desc: 'Market-linked rates for farmers' },
      { icon: '👨‍🌾', title: 'Farmer Onboarding', desc: 'Simple registration & support' },
      { icon: '🏢', title: 'Corporate Access', desc: 'Buy verified offsets easily' },
      { icon: '📃', title: 'Audit Trail', desc: 'Full transaction history' },
    ],
    pricing: [
      { name: 'Farmer Registration', price: 'Free', desc: 'No upfront cost for farmers' },
      { name: 'Corporate Offset', price: '₹800–1,200/tonne', desc: 'Verified Indian carbon credits' },
      { name: 'Platform Commission', price: '10–15%', desc: 'Per transaction on exchange' },
    ],
  },
  {
    id: '03',
    title: 'Green Mark ESG Solutions',
    tagline: 'BRSR · Dashboard · Consulting',
    href: '/esg-solutions',
    icon: '📈',
    bgColor: '#3A8A5C',
    revenue: '20%',
    description: 'Complete ESG consulting from BRSR report preparation as per SEBI guidelines to custom real-time dashboards, ESG score improvement strategies, and net-zero roadmaps.',
    flow: ['ESG audit', 'Gap analysis', 'Strategy & execution', 'Dashboard setup', 'Report submission'],
    features: [
      { icon: '📋', title: 'BRSR Reporting', desc: 'All 9 principles, SEBI compliant' },
      { icon: '📈', title: 'ESG Score Improvement', desc: 'Strategy + execution support' },
      { icon: '💻', title: 'ESG Dashboards', desc: 'Real-time KPI monitoring' },
      { icon: '🎯', title: 'Sustainability Consulting', desc: 'Net-zero roadmaps' },
      { icon: '🌍', title: 'SDG Alignment', desc: 'Map to UN Sustainable Dev Goals' },
      { icon: '📊', title: 'Benchmarking', desc: 'Peer comparison & gap analysis' },
    ],
    pricing: [
      { name: 'BRSR Report', price: '₹1.5L–3L', desc: 'One-time annual report preparation' },
      { name: 'ESG Dashboard', price: '₹50K setup + ₹15K/mo', desc: 'Custom real-time dashboard' },
      { name: 'Full Consulting', price: 'Custom', desc: 'End-to-end sustainability strategy' },
    ],
  },
  {
    id: '04',
    title: 'Green Mark Awareness',
    tagline: 'Competitions · Workshops · Campaigns',
    href: '/awareness-programs',
    icon: '📣',
    bgColor: '#06402B',
    revenue: '15%',
    description: 'Sustainability awareness through gamified school competitions, corporate workshops, community campaigns — including the flagship Green Talent Hunt 2026.',
    flow: ['Registration', 'Workshops & training', 'Competition / campaign', 'Awards & certificates', 'Community badge'],
    features: [
      { icon: '🏆', title: 'School Competitions', desc: 'For classes 4–12 nationwide' },
      { icon: '🎮', title: 'Gamified Learning', desc: 'Leaderboards, badges, missions' },
      { icon: '🌿', title: 'Green Twin Feature', desc: 'Peer ecosystem connections' },
      { icon: '🏫', title: 'Corporate Workshops', desc: 'ESG awareness for employees' },
      { icon: '📢', title: 'Social Campaigns', desc: 'Community sustainability drives' },
      { icon: '🎓', title: 'Digital Certificates', desc: 'Shareable participation proof' },
    ],
    pricing: [
      { name: 'Student Registration', price: '₹200', desc: 'Green Talent Hunt' },
      { name: 'School Program', price: '₹25K–75K', desc: 'Per school per year' },
      { name: 'Corporate Workshop', price: '₹50K–1.5L', desc: 'Half-day to full-day sessions' },
    ],
  },
  {
    id: '05',
    title: 'Green Mark Subscription',
    tagline: 'Monthly ESG · CSR · Reporting',
    href: '/contact',
    icon: '📋',
    bgColor: '#06402B',
    revenue: '5%',
    description: 'Monthly retainer subscription plans for ongoing ESG execution — continuous plantation tracking, carbon footprint monitoring, and end-to-end CSR project management.',
    flow: ['Onboard', 'Set targets', 'Monthly monitoring', 'Reporting', 'Continuous improvement'],
    features: [
      { icon: '📅', title: 'Monthly ESG Services', desc: 'Ongoing execution support' },
      { icon: '🌳', title: 'Plantation Targets', desc: 'Set & track annual tree goals' },
      { icon: '🏭', title: 'Carbon Tracking', desc: 'Continuous footprint monitoring' },
      { icon: '📌', title: 'CSR Execution', desc: 'End-to-end project management' },
      { icon: '📄', title: 'Compliance Docs', desc: 'Monthly reporting packages' },
      { icon: '🔔', title: 'Alerts & Updates', desc: 'Real-time ESG notifications' },
    ],
    pricing: [
      { name: 'Starter', price: '₹15,000/mo', desc: 'Carbon tracking + plantation' },
      { name: 'Professional', price: '₹35,000/mo', desc: '+ CSR execution + reports' },
      { name: 'Enterprise', price: 'Custom', desc: 'Full ESG + Board dashboard' },
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-forest-pattern py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#F4B942]/20 text-[#F4B942] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-5">Our Services</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">5 Diversified Revenue Streams</h1>
          <p className="text-[#D6E8D2] text-xl max-w-3xl mx-auto leading-relaxed">
            Five integrated service pillars, each independently revenue-generating, forming the complete My Green Mark sustainability ecosystem.
          </p>
        </div>
      </section>

      {/* Revenue pie summary */}
      <section className="py-12 bg-white border-b border-[#D6E8D2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {services.map((s, i) => (
              <Scroll3DReveal key={s.id} direction="flip" delay={i * 80}>
                <TiltCard intensity={8} className="h-full">
                  <div className="text-center p-4 rounded-xl h-full" style={{ background: `${s.bgColor}15` }}>
                    <div className="text-3xl mb-2">{s.icon}</div>
                    <div className="text-2xl font-extrabold mb-1" style={{ color: s.bgColor }}>{s.revenue}</div>
                    <div className="text-[#06402B] text-xs font-semibold">{s.title.replace('Green Mark ', '')}</div>
                  </div>
                </TiltCard>
              </Scroll3DReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services detail */}
      <section className="py-20 bg-[#F7EDE2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, idx) => (
            <div key={service.id} className={`grid lg:grid-cols-2 gap-10 items-start ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Info */}
              <Scroll3DReveal direction={idx % 2 === 0 ? 'left' : 'right'} delay={0}>
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl text-white" style={{ background: service.bgColor }}>
                      {service.icon}
                    </div>
                    <div>
                      <span className="text-[#3A8A5C] text-xs font-bold uppercase">Service {service.id}</span>
                      <h2 className="text-2xl font-extrabold text-[#06402B]">{service.title}</h2>
                    </div>
                  </div>
                  <p className="text-[#06402B] text-base leading-relaxed mb-6">{service.description}</p>

                  {/* Process flow */}
                  <div className="mb-6">
                    <div className="text-[#06402B] text-sm font-semibold mb-3">How it works</div>
                    <div className="flex flex-wrap items-center gap-2">
                      {service.flow.map((step, i) => (
                        <div key={step} className="flex items-center gap-2">
                          <span className="bg-[#D6E8D2] text-[#06402B] text-xs font-medium px-3 py-1.5 rounded-full">{step}</span>
                          {i < service.flow.length - 1 && <span className="text-[#A8C5A3] text-sm">→</span>}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <Scroll3DReveal direction="up" delay={100}>
                    <div className="bg-white border border-[#D6E8D2] rounded-xl p-5">
                      <div className="text-[#06402B] text-sm font-bold mb-3">Pricing</div>
                      <div className="space-y-2">
                        {service.pricing.map((plan) => (
                          <div key={plan.name} className="flex items-center justify-between text-sm">
                            <div>
                              <span className="font-semibold text-[#06402B]">{plan.name}</span>
                              <span className="text-[#3A8A5C] text-xs ml-2">{plan.desc}</span>
                            </div>
                            <span className="font-bold text-[#06402B]">{plan.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Scroll3DReveal>

                  <Link href={service.href} className="btn-forest inline-flex mt-5 text-sm">Learn More →</Link>
                </div>
              </Scroll3DReveal>

              {/* Features grid */}
              <Scroll3DReveal direction={idx % 2 === 0 ? 'right' : 'left'} delay={0}>
                <div className="grid grid-cols-2 gap-4">
                  {service.features.map((feat) => (
                    <TiltCard key={feat.title} intensity={8} className="h-full">
                      <div className="service-card p-5 h-full">
                        <div className="text-2xl mb-2">{feat.icon}</div>
                        <div className="font-semibold text-[#06402B] text-sm mb-1">{feat.title}</div>
                        <div className="text-[#3A8A5C] text-xs">{feat.desc}</div>
                      </div>
                    </TiltCard>
                  ))}
                </div>
              </Scroll3DReveal>
            </div>
          ))}
        </div>
      </section>

      <BrochureSection />

      {/* CTA */}
      <section className="py-16 bg-[#06402B]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Scroll3DReveal direction="up">
            <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Start Your ESG Journey?</h2>
            <p className="text-[#A8C5A3] text-lg mb-8">Choose the right service for your organisation — or combine them for maximum impact.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary justify-center">Book Free Consultation</Link>
              <Link href="/impact-dashboard" className="btn-secondary justify-center">View Impact Dashboard</Link>
            </div>
          </Scroll3DReveal>
        </div>
      </section>
    </main>
  )
}
