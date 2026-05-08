import type { Metadata } from 'next'
import Link from 'next/link'
import Scroll3DReveal from '@/components/Scroll3DReveal'
import TiltCard from '@/components/TiltCard'

export const metadata: Metadata = {
  title: 'Plantation Tracker — My Green Mark',
  description: 'Track GPS-verified plantation plots in real-time. Sponsor a plot, monitor growth, and receive monthly impact reports.',
}

const plots = [
  { id: 'P-104A', name: 'Sundarbans Mangrove', location: 'West Bengal', gps: '21.9497° N, 89.1833° E', area: '25 sq.m', trees: 3, ecosystem: 'Mangrove Forest', status: 'Active', co2: '45 kg/year', sponsor: 'Arjun Sharma', age: '8 months' },
  { id: 'P-206B', name: 'Sahyadri Forest Plot', location: 'Maharashtra', gps: '17.1234° N, 73.8456° E', area: '50 sq.m', trees: 5, ecosystem: 'Tropical Forest', status: 'Active', co2: '90 kg/year', sponsor: 'Tata Motors CSR', age: '14 months' },
  { id: 'P-318C', name: 'Thar Desert Green Belt', location: 'Rajasthan', gps: '26.9124° N, 70.9124° E', area: '100 sq.m', trees: 12, ecosystem: 'Desert Fringe', status: 'Active', co2: '180 kg/year', sponsor: 'Reliance ESG Fund', age: '22 months' },
  { id: 'P-445D', name: 'Kaziranga Buffer Zone', location: 'Assam', gps: '26.5775° N, 93.1700° E', area: '75 sq.m', trees: 8, ecosystem: 'Grassland', status: 'Active', co2: '120 kg/year', sponsor: 'Individual Sponsor', age: '5 months' },
  { id: 'P-512E', name: 'Western Ghats Reserve', location: 'Karnataka', gps: '13.4124° N, 75.2456° E', area: '200 sq.m', trees: 20, ecosystem: 'Shola Forest', status: 'Active', co2: '360 kg/year', sponsor: 'Mahindra Group', age: '18 months' },
  { id: 'P-628F', name: 'Himalayan Foothill Plot', location: 'Uttarakhand', gps: '29.9457° N, 78.1642° E', area: '150 sq.m', trees: 15, ecosystem: 'Alpine Forest', status: 'Active', co2: '270 kg/year', sponsor: 'HDFC Bank CSR', age: '11 months' },
]

const features = [
  { icon: '📍', title: 'Geo-tagged GPS Plots', desc: 'Every plot has precise GPS coordinates, mapped and verified by our field teams using survey-grade equipment.' },
  { icon: '📡', title: 'Real-time Tracking', desc: 'Monitor your plantation from anywhere. GPS sensors update location and health data every 24 hours.' },
  { icon: '📸', title: 'Monthly Photo Updates', desc: 'High-resolution photos of your plot every month, showing tree growth, canopy spread, and ecosystem health.' },
  { icon: '🏅', title: 'Digital Certificates', desc: 'Blockchain-verified ownership certificates with your name, GPS coordinates, and CO₂ offset data.' },
  { icon: '📊', title: 'Impact Reports', desc: 'Quarterly reports with carbon sequestration data, biodiversity index, and ESG contribution metrics.' },
  { icon: '🔧', title: 'Plantation Maintenance', desc: 'Professional maintenance by trained field teams — watering, pest control, and growth monitoring.' },
]

const packages = [
  { name: 'Individual Plot', price: '₹2,500/year', area: '25 sq.m', trees: '1–3 trees', features: ['GPS certificate', 'Monthly photos', 'CO₂ offset data', 'Digital badge'], color: '#D6E8D2', highlight: false },
  { name: 'Corporate Block', price: '₹50,000/year', area: '500 sq.m', trees: '20–30 trees', features: ['All Individual features', 'Quarterly ESG report', 'BRSR-ready data', 'Company branding', 'Impact dashboard'], color: '#06402B', highlight: true },
  { name: 'CSR Forest', price: 'Custom', area: '5,000+ sq.m', trees: '200+ trees', features: ['All Corporate features', 'Named company forest', 'Annual ceremony', 'Board-level reporting', 'Media coverage'], color: '#D6E8D2', highlight: false },
]

// Direction pattern for 3-col grids: left, up, right repeating
const threeColDirections: Array<'left' | 'up' | 'right'> = ['left', 'up', 'right']

export default function PlantationTrackerPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-forest-pattern py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-leaf-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#F4B942]/20 text-[#F4B942] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-5">Service 01</span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
                🌱 Green Mark Plantation
              </h1>
              <p className="text-[#D6E8D2] text-xl mb-8 leading-relaxed">
                GPS geo-tagged, professionally maintained plantation plots with real-time tracking, monthly photo updates, and verified impact reports.
              </p>
              {/* Process steps */}
              <div className="flex items-center gap-3 mb-8 flex-wrap">
                {['Sponsor', 'Track', 'Verify', 'Impact Report'].map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#F4B942] text-[#06402B] flex items-center justify-center text-xs font-bold">{i + 1}</div>
                      <span className="text-white font-semibold text-sm">{step}</span>
                    </div>
                    {i < 3 && <div className="w-6 h-0.5 bg-[#3A8A5C]"></div>}
                  </div>
                ))}
              </div>
              <Link href="#sponsor" className="btn-primary inline-flex text-base">Sponsor a Plantation Plot</Link>
            </div>
            {/* GPS map mockup */}
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-4 shadow-2xl">
                <div className="text-white text-sm font-semibold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#3A8A5C] rounded-full animate-ping"></span>
                  Interactive Plantation Map · Live
                </div>
                {/* Map placeholder */}
                <div className="h-64 bg-[#0A2E18] rounded-xl relative overflow-hidden">
                  <div className="absolute inset-0 opacity-30" style={{ background: 'repeating-linear-gradient(0deg, #06402B 0px, #06402B 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #06402B 0px, #06402B 1px, transparent 1px, transparent 40px)' }}></div>
                  {/* Plot pins */}
                  {[{top:'30%',left:'25%',label:'104A'},{top:'55%',left:'60%',label:'206B'},{top:'20%',left:'70%',label:'318C'},{top:'70%',left:'35%',label:'445D'}].map((pin) => (
                    <div key={pin.label} className="absolute" style={{top: pin.top, left: pin.left}}>
                      <div className="relative">
                        <div className="w-6 h-6 bg-[#F4B942] rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                          <div className="w-2 h-2 bg-[#06402B] rounded-full"></div>
                        </div>
                        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-white text-xs font-bold whitespace-nowrap">{pin.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Map legend */}
                <div className="flex items-center gap-4 mt-3 text-xs text-[#A8C5A3]">
                  <span className="flex items-center gap-1"><span className="w-3 h-3 bg-[#F4B942] rounded-full"></span> Active Plots</span>
                  <span className="flex items-center gap-1"><span className="w-3 h-3 bg-[#3A8A5C] rounded-full"></span> Eco Zones</span>
                  <span className="flex items-center gap-1"><span className="w-3 h-3 bg-white rounded-full"></span> Cities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Scroll3DReveal direction="up">
              <span className="inline-block bg-[#D6E8D2] text-[#06402B] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">Key Features</span>
            </Scroll3DReveal>
            <Scroll3DReveal direction="up" delay={80}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06402B] mb-4">What Makes Our Plantations Different</h2>
            </Scroll3DReveal>
            <Scroll3DReveal direction="up" delay={160}>
              <p className="text-[#06402B] text-lg max-w-2xl mx-auto">Unlike traditional CSR plantations with zero accountability, every My Green Mark plot is GPS-tracked, photo-verified, and impact-quantified.</p>
            </Scroll3DReveal>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {features.map((f, i) => (
              <Scroll3DReveal key={f.title} direction={threeColDirections[i % 3]} delay={i * 80}>
                <TiltCard intensity={8} className="h-full">
                  <div className="service-card p-7 h-full">
                    <div className="text-3xl mb-4">{f.icon}</div>
                    <h3 className="font-bold text-[#06402B] text-lg mb-2">{f.title}</h3>
                    <p className="text-[#3A8A5C] text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </TiltCard>
              </Scroll3DReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Active Plots */}
      <section className="py-20 bg-[#F7EDE2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Scroll3DReveal direction="up">
              <span className="inline-block bg-[#D6E8D2] text-[#06402B] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">Live Plots</span>
            </Scroll3DReveal>
            <Scroll3DReveal direction="up" delay={80}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06402B] mb-4">Active Plantation Plots</h2>
            </Scroll3DReveal>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plots.map((plot, i) => (
              <Scroll3DReveal key={plot.id} direction={threeColDirections[i % 3]} delay={i * 80}>
                <TiltCard intensity={8} className="h-full">
                  <div className="service-card p-6 h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="text-[#F4B942] text-xs font-bold">{plot.id}</span>
                        <h3 className="font-bold text-[#06402B] text-base">{plot.name}</h3>
                        <p className="text-[#3A8A5C] text-sm">{plot.location}</p>
                      </div>
                      <span className="flex items-center gap-1 bg-[#D6E8D2] text-[#06402B] text-xs px-2 py-1 rounded-full font-medium">
                        <span className="w-1.5 h-1.5 bg-[#3A8A5C] rounded-full animate-pulse"></span>
                        {plot.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                      {[
                        { label: 'Area', value: plot.area },
                        { label: 'Trees', value: `${plot.trees} trees` },
                        { label: 'Ecosystem', value: plot.ecosystem },
                        { label: 'CO₂/year', value: plot.co2 },
                        { label: 'Age', value: plot.age },
                        { label: 'Sponsor', value: plot.sponsor },
                      ].map((d) => (
                        <div key={d.label} className="bg-[#F7EDE2] rounded-lg p-2">
                          <div className="text-[#3A8A5C] text-xs">{d.label}</div>
                          <div className="text-[#06402B] font-semibold text-xs mt-0.5 truncate">{d.value}</div>
                        </div>
                      ))}
                    </div>
                    <div className="text-[#3A8A5C] text-xs">{plot.gps}</div>
                  </div>
                </TiltCard>
              </Scroll3DReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="sponsor" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Scroll3DReveal direction="up">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06402B] mb-4">Sponsor a Plantation</h2>
            </Scroll3DReveal>
            <Scroll3DReveal direction="up" delay={80}>
              <p className="text-[#06402B] text-lg max-w-2xl mx-auto">Choose the package that fits your sustainability goals. Every package includes GPS verification and digital certification.</p>
            </Scroll3DReveal>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {packages.map((pkg, i) => (
              <Scroll3DReveal key={pkg.name} direction={threeColDirections[i]} delay={i * 80}>
                <TiltCard intensity={8} className="h-full">
                  <div className={`rounded-2xl p-8 h-full ${pkg.highlight ? 'bg-[#06402B] text-white shadow-2xl scale-105' : 'bg-[#F7EDE2] border border-[#D6E8D2]'}`}>
                    {pkg.highlight && <div className="text-center mb-4"><span className="bg-[#F4B942] text-[#06402B] text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span></div>}
                    <h3 className={`font-bold text-xl mb-1 ${pkg.highlight ? 'text-white' : 'text-[#06402B]'}`}>{pkg.name}</h3>
                    <div className={`text-3xl font-extrabold mb-1 ${pkg.highlight ? 'text-[#F4B942]' : 'text-[#06402B]'}`}>{pkg.price}</div>
                    <div className={`text-sm mb-1 ${pkg.highlight ? 'text-[#A8C5A3]' : 'text-[#3A8A5C]'}`}>{pkg.area}</div>
                    <div className={`text-xs mb-5 ${pkg.highlight ? 'text-[#A8C5A3]' : 'text-[#3A8A5C]'}`}>{pkg.trees}</div>
                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((f) => (
                        <li key={f} className={`text-sm flex items-center gap-2 ${pkg.highlight ? 'text-[#D6E8D2]' : 'text-[#06402B]'}`}>
                          <svg width="14" height="14" fill={pkg.highlight ? '#3A8A5C' : '#3A8A5C'} viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className={pkg.highlight ? 'btn-primary w-full justify-center block text-center' : 'btn-forest w-full justify-center block text-center'}>
                      {pkg.price === 'Custom' ? 'Contact Us' : 'Sponsor Now'}
                    </Link>
                  </div>
                </TiltCard>
              </Scroll3DReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
