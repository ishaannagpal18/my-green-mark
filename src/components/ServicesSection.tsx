import Link from 'next/link'
import ScrollReveal from './ScrollReveal'

const services = [
  {
    number: '01',
    title: 'Green Mark Plantation',
    tagline: 'Sponsor · Track · Verify · Impact',
    description: 'GPS geo-tagged plantation plots with real-time tracking, monthly photo updates, digital certificates & impact reports for corporates and individuals.',
    href: '/plantation-tracker',
    icon: '🌱',
    color: '#D6E8D2',
    features: ['Geo-tagged GPS plots', 'Monthly photo updates', 'Digital certificates', 'Plantation maintenance'],
  },
  {
    number: '02',
    title: 'Carbon Exchange',
    tagline: 'Farmers ↔ Companies',
    description: 'Aggregation, verification & trading of carbon credits between smallholder farmers and corporates — empowering rural India while meeting ESG targets.',
    href: '/carbon-exchange',
    icon: '♻️',
    color: '#D6E8D2',
    features: ['Carbon credit aggregation', 'Fair farmer pricing', 'Verified offsets', 'Corporate ESG compliance'],
  },
  {
    number: '03',
    title: 'Green Mark Awareness',
    tagline: 'Competitions · Workshops · Campaigns',
    description: 'Sustainability awareness through gamified competitions, school programs, workshops & community campaigns — including the Global Sustainability Challenge 2026.',
    href: '/awareness-programs',
    icon: '📣',
    color: '#FEF3C7',
    features: ['School competitions', 'Gamified learning', 'Green Twin feature', 'Community badges'],
  },
  {
    number: '04',
    title: 'ESG Solutions',
    tagline: 'BRSR · Dashboard · Consulting',
    description: 'Complete BRSR reporting as per SEBI guidelines, ESG score improvement strategy, custom real-time dashboards and net-zero roadmap consulting.',
    href: '/esg-solutions',
    icon: '📈',
    color: '#D6E8D2',
    features: ['SEBI BRSR reporting', 'ESG score improvement', 'Custom dashboards', 'Net-zero roadmaps'],
  },
  {
    number: '05',
    title: 'Green Mark Subscription',
    tagline: 'Monthly ESG · CSR · Reporting',
    description: 'Monthly retainer plans for ongoing ESG execution — plantation target tracking, continuous carbon monitoring & end-to-end CSR project management.',
    href: '/services',
    icon: '📋',
    color: '#FEF3C7',
    features: ['Monthly ESG services', 'Carbon tracking', 'CSR execution', 'Compliance documentation'],
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-[#F7EDE2] relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-[#D6E8D2] text-[#14532D] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
              <span className="w-2 h-2 bg-[#3A8A5C] rounded-full animate-pulse"></span>
              Core Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14532D] mb-4">
              Five Integrated Service Pillars
            </h2>
            <p className="text-[#14532D] text-lg max-w-2xl mx-auto">
              Forming the My Green Mark ecosystem — every pillar is independently revenue-generating and built for measurable impact.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, index) => (
            <ScrollReveal
              key={service.number}
              direction={index % 3 === 0 ? 'left' : index % 3 === 2 ? 'right' : 'up'}
              delay={index * 80}
            >
              <Link
                href={service.href}
                className={`service-card p-7 group block h-full ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                    style={{ background: service.color }}
                  >
                    {service.icon}
                  </div>
                  <span className="text-4xl font-black text-[#D6E8D2] group-hover:text-[#D6E8D2] transition-colors">{service.number}</span>
                </div>

                <h3 className="font-bold text-[#14532D] text-xl mb-1">{service.title}</h3>
                <p className="text-[#3A8A5C] text-xs font-semibold mb-3">{service.tagline}</p>
                <p className="text-[#14532D] text-sm leading-relaxed mb-5">{service.description}</p>

                <ul className="space-y-2 mb-5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[#14532D]">
                      <svg width="14" height="14" viewBox="0 0 20 20" fill="#3A8A5C">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 text-[#14532D] text-sm font-semibold group-hover:text-[#3A8A5C] transition-colors mt-auto">
                  Learn more
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1.5 transition-transform duration-300">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={200}>
          <div className="text-center mt-12">
            <Link href="/services" className="btn-forest-solid inline-flex">
              <span>Explore All Services →</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
