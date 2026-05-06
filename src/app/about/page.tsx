import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us — My Green Mark',
  description: 'Learn about My Green Mark — our mission, vision, values and team driving India\'s sustainability transformation.',
}

const values = [
  { icon: '🔍', title: 'Transparent Solutions', desc: 'Every plantation is GPS-tagged. Every carbon credit is verified. Every ESG report is auditable. We believe transparency is the foundation of trust.' },
  { icon: '⚙️', title: 'Technology-Driven Impact', desc: 'We use real-time GPS tracking, blockchain verification, and AI-powered ESG analytics to deliver measurable environmental outcomes.' },
  { icon: '📊', title: 'Measurable ESG Outcomes', desc: 'We don\'t just help companies report ESG — we help them improve. Every metric is tracked, every improvement is documented.' },
  { icon: '🤝', title: 'Community Empowerment', desc: 'From smallholder farmers gaining carbon market access to students winning sustainability titles — impact starts at the community level.' },
]

const focusAreas = [
  { icon: '🌱', label: 'Plantation Tracking', href: '/plantation-tracker' },
  { icon: '♻️', label: 'Carbon Exchange', href: '/carbon-exchange' },
  { icon: '📈', label: 'ESG Consulting', href: '/esg-solutions' },
  { icon: '📣', label: 'Awareness & CSR', href: '/awareness-programs' },
  { icon: '📋', label: 'Subscription Services', href: '/services' },
  { icon: '🎮', label: 'Gamified Impact', href: '/sustainability-challenge' },
]

const team = [
  { name: 'Arjun Verma', role: 'Founder & CEO', bio: 'Former sustainability consultant with 12 years in ESG advisory. Passionate about using technology to democratize environmental impact.', initials: 'AV', color: '#14532D' },
  { name: 'Priya Nair', role: 'CTO & Co-Founder', bio: 'Full-stack engineer with a background in geo-spatial technology and blockchain. Built the GPS plantation tracking system from scratch.', initials: 'PN', color: '#14532D' },
  { name: 'Rahul Gupta', role: 'Head of Carbon Markets', bio: 'Carbon credit specialist with UNFCCC experience. Leads farmer onboarding and corporate carbon offset partnerships.', initials: 'RG', color: '#3A8A5C' },
  { name: 'Deepa Krishnan', role: 'Head of ESG Consulting', bio: 'Certified BRSR expert and sustainability strategist. Has prepared ESG reports for 100+ listed Indian companies.', initials: 'DK', color: '#14532D' },
]

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-forest-pattern py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#F4B942]/20 text-[#F4B942] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-5">About Us</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">My Green Mark</h1>
          <p className="text-[#D6E8D2] text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            A purpose-driven ESG and sustainability organisation that helps businesses, institutions, and individuals create measurable environmental and social impact.
          </p>
          <blockquote className="text-[#F4B942] text-2xl font-bold italic">
            &ldquo;Building a Transparent Future Through Sustainability&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#F7EDE2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-[#D6E8D2] text-[#14532D] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">Our Values</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14532D] mb-4">What Drives Us</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
            {values.map((v) => (
              <div key={v.title} className="service-card p-7 text-center">
                <div className="w-16 h-16 bg-[#D6E8D2] rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5">{v.icon}</div>
                <h3 className="font-bold text-[#14532D] text-lg mb-3">{v.title}</h3>
                <p className="text-[#14532D] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-[#14532D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Our Focus Areas</h2>
            <p className="text-[#A8C5A3] text-lg max-w-2xl mx-auto">Six integrated pillars forming the My Green Mark ecosystem.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {focusAreas.map((area) => (
              <Link key={area.href} href={area.href} className="bg-white/10 hover:bg-white/20 border border-white/15 hover:border-[#F4B942]/50 rounded-2xl p-7 text-center transition-all group">
                <div className="text-4xl mb-4">{area.icon}</div>
                <div className="font-semibold text-white group-hover:text-[#F4B942] transition-colors">{area.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-[#F7EDE2] rounded-2xl p-10 border border-[#D6E8D2]">
              <div className="w-14 h-14 bg-[#14532D] rounded-2xl flex items-center justify-center text-2xl mb-6">🎯</div>
              <h3 className="text-2xl font-extrabold text-[#14532D] mb-4">Our Mission</h3>
              <p className="text-[#14532D] text-lg leading-relaxed">
                To democratize ESG and sustainability — making GPS-verified plantation tracking, carbon credit markets, and BRSR reporting accessible to every business, farmer, and student in India.
              </p>
            </div>
            <div className="bg-[#14532D] rounded-2xl p-10">
              <div className="w-14 h-14 bg-[#F4B942] rounded-2xl flex items-center justify-center text-2xl mb-6">🌟</div>
              <h3 className="text-2xl font-extrabold text-white mb-4">Our Vision</h3>
              <p className="text-[#D6E8D2] text-lg leading-relaxed">
                To become India&apos;s most trusted sustainability platform — where every corporate ESG commitment is GPS-verified, every carbon credit empowers a farmer, and every student grows up as a sustainability champion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#F7EDE2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-[#D6E8D2] text-[#14532D] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">Our Team</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14532D] mb-4">The People Behind the Platform</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
            {team.map((member) => (
              <div key={member.name} className="service-card p-7 text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-5" style={{ background: member.color }}>
                  {member.initials}
                </div>
                <h3 className="font-bold text-[#14532D] text-lg mb-1">{member.name}</h3>
                <p className="text-[#F4B942] text-xs font-semibold mb-3">{member.role}</p>
                <p className="text-[#3A8A5C] text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F4B942]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-[#14532D] mb-4">Ready to Build Your Green Mark?</h2>
          <p className="text-[#14532D]/80 text-lg mb-8">Join 50+ corporates, 1,240 farmers, and thousands of students on India&apos;s sustainability platform.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-forest justify-center">Get Started Today</Link>
            <Link href="/services" className="btn-secondary justify-center" style={{color: '#14532D', borderColor: '#14532D'}}>Explore Services</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
