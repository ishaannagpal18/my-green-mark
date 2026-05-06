import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'CSR Partnerships — My Green Mark',
  description: 'Corporate sustainability partnerships — CSR plantations, employee engagement, and verified ESG impact for Indian companies.',
}

const packages = [
  {
    name: 'CSR Starter',
    price: '₹2.5L/year',
    ideal: 'SMEs & startups',
    features: [
      '500 sq.m GPS plantation',
      '20 geo-tagged trees',
      'Quarterly impact reports',
      'Digital CSR certificate',
      'Annual photo documentation',
      'BRSR-ready data export',
    ],
    color: '#D6E8D2',
    textColor: '#14532D',
    highlight: false,
  },
  {
    name: 'CSR Professional',
    price: '₹10L/year',
    ideal: 'Mid-size corporates',
    features: [
      '2,000 sq.m GPS plantation',
      '100 geo-tagged trees',
      'Monthly impact reports',
      'Real-time ESG dashboard',
      'Branded plantation plot',
      'Employee volunteering event',
      'Carbon credit generation',
      'Media kit & press release',
    ],
    color: '#14532D',
    textColor: 'white',
    highlight: true,
  },
  {
    name: 'CSR Enterprise',
    price: 'Custom',
    ideal: 'Large corporates',
    features: [
      'Named company forest (5,000+ sq.m)',
      'Annual plantation ceremony',
      'Board-level ESG dashboard',
      'BRSR full report preparation',
      'Employee engagement program',
      'Carbon offsetting package',
      'Media & PR coverage',
      'Dedicated relationship manager',
    ],
    color: '#D6E8D2',
    textColor: '#14532D',
    highlight: false,
  },
]

const partners = [
  { name: 'Mahindra Group', trees: '5,000+', category: 'Plantation' },
  { name: 'Tata Motors', trees: '3,200', category: 'Carbon Offset' },
  { name: 'Reliance Industries', trees: '8,500', category: 'Full ESG' },
  { name: 'HDFC Bank', trees: '2,100', category: 'Plantation' },
  { name: 'Infosys Foundation', trees: '4,800', category: 'Full ESG' },
  { name: 'Wipro GreenTech', trees: '1,800', category: 'Carbon Offset' },
]

export default function CSRPartnershipsPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-forest-pattern py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#F4B942]/20 text-[#F4B942] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-5">For Corporates</span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">CSR Partnerships</h1>
              <p className="text-[#D6E8D2] text-xl mb-8 leading-relaxed">Transform your CSR commitment into GPS-verified, BRSR-compliant, stakeholder-ready sustainability impact. Every rupee spent is accounted for.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary justify-center">Book CSR Consultation</Link>
                <Link href="#packages" className="btn-secondary justify-center">View Packages</Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '📍', title: 'GPS Verified', desc: 'Every tree tracked' },
                { icon: '📊', title: 'BRSR Ready', desc: 'All data export-ready' },
                { icon: '🏅', title: 'Certified', desc: 'Digital proof' },
                { icon: '📸', title: 'Monthly Updates', desc: 'Photo evidence' },
              ].map((f) => (
                <div key={f.title} className="bg-white/10 border border-white/20 rounded-2xl p-5 text-center">
                  <div className="text-3xl mb-2">{f.icon}</div>
                  <div className="text-white font-bold text-sm">{f.title}</div>
                  <div className="text-[#A8C5A3] text-xs">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why My Green Mark */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14532D] mb-4">Why Partner With Us?</h2>
            <p className="text-[#14532D] text-lg max-w-2xl mx-auto">Unlike traditional CSR where billions are spent with zero accountability, My Green Mark provides complete transparency from sponsorship to impact.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {[
              { icon: '🔍', title: 'Full Transparency', desc: 'GPS coordinates, monthly photos, satellite verification — your board can see exactly where every rupee went.' },
              { icon: '📋', title: 'BRSR & Compliance', desc: 'All impact data is pre-formatted for SEBI BRSR submission, annual reports, and stakeholder communication.' },
              { icon: '🌍', title: 'Real Impact', desc: 'Verified CO₂ sequestration, biodiversity improvement, and farmer income data — not just "trees planted" numbers.' },
              { icon: '👩‍💼', title: 'Employee Engagement', desc: 'GPS plantation visits, virtual tours, plantation adoption programs — connect your team to your CSR impact.' },
              { icon: '🏆', title: 'Award Recognition', desc: 'Our CSR partners have won CII, NASSCOM, and GreenCo sustainability awards with our documentation.' },
              { icon: '📱', title: 'Digital First', desc: 'Mobile app access, QR-coded certificates, and live dashboard — share your impact story digitally.' },
            ].map((f) => (
              <div key={f.title} className="service-card p-7">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-[#14532D] text-lg mb-2">{f.title}</h3>
                <p className="text-[#3A8A5C] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-20 bg-[#F7EDE2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14532D] mb-4">CSR Partnership Packages</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`rounded-2xl p-8 ${pkg.highlight ? 'shadow-2xl scale-105' : 'border border-[#D6E8D2]'}`} style={{ background: pkg.color }}>
                {pkg.highlight && <div className="text-center mb-4"><span className="bg-[#F4B942] text-[#14532D] text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span></div>}
                <h3 className="font-bold text-xl mb-1" style={{ color: pkg.textColor }}>{pkg.name}</h3>
                <p className="text-sm mb-2 opacity-70" style={{ color: pkg.textColor }}>Ideal for: {pkg.ideal}</p>
                <div className="text-3xl font-extrabold mb-5" style={{ color: pkg.highlight ? '#F4B942' : '#14532D' }}>{pkg.price}</div>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm" style={{ color: pkg.highlight ? '#D6E8D2' : '#14532D' }}>
                      <svg width="14" height="14" fill={pkg.highlight ? '#3A8A5C' : '#3A8A5C'} viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={pkg.highlight ? 'btn-primary w-full justify-center block text-center' : 'btn-forest w-full justify-center block text-center'}>
                  {pkg.price === 'Custom' ? 'Contact Us' : 'Get Started'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-[#14532D] mb-4">Our Corporate Partners</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {partners.map((p) => (
              <div key={p.name} className="text-center p-5 bg-[#F7EDE2] border border-[#D6E8D2] rounded-xl">
                <div className="font-bold text-[#14532D] text-sm mb-1">{p.name}</div>
                <div className="text-[#F4B942] font-bold text-lg">{p.trees}</div>
                <div className="text-[#3A8A5C] text-xs">trees · {p.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
