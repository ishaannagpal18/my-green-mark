import type { Metadata } from 'next'
import Link from 'next/link'
import Scroll3DReveal from '@/components/Scroll3DReveal'
import TiltCard from '@/components/TiltCard'

export const metadata: Metadata = {
  title: 'Carbon Exchange — My Green Mark',
  description: 'Buy and sell verified carbon credits. Connect farmers with corporates through India\'s transparent carbon market.',
}

const listings = [
  { id: 'CC-2401', type: 'Agroforestry', location: 'Vidarbha, Maharashtra', farmer: 'Ramkumar Yadav', credits: 120, price: '₹950/tonne', co2: '120 tCO₂', status: 'Available', verified: true },
  { id: 'CC-2402', type: 'Mangrove Restoration', location: 'Sundarbans, WB', farmer: 'Coastal Farmers Collective', credits: 450, price: '₹1,100/tonne', co2: '450 tCO₂', status: 'Available', verified: true },
  { id: 'CC-2403', type: 'Dryland Agriculture', location: 'Rajasthan', farmer: 'Desert Green Initiative', credits: 280, price: '₹850/tonne', co2: '280 tCO₂', status: 'Partially Sold', verified: true },
  { id: 'CC-2404', type: 'Rice Paddy Methane', location: 'Punjab', farmer: 'Singh Farmers Group', credits: 650, price: '₹780/tonne', co2: '650 tCO₂', status: 'Available', verified: true },
  { id: 'CC-2405', type: 'Social Forestry', location: 'Jharkhand', farmer: 'Tribal Forest Cooperative', credits: 200, price: '₹1,050/tonne', co2: '200 tCO₂', status: 'Available', verified: true },
  { id: 'CC-2406', type: 'Biochar Production', location: 'Karnataka', farmer: 'Green Tech Farmers', credits: 90, price: '₹1,200/tonne', co2: '90 tCO₂', status: 'Sold Out', verified: true },
]

const howItWorks = {
  farmers: [
    { step: 1, title: 'Register', desc: 'Free farmer registration with basic land & crop details' },
    { step: 2, title: 'Data Submission', desc: 'Submit land use, farming practices, and satellite data' },
    { step: 3, title: 'Verification', desc: 'Third-party field verification and credit calculation' },
    { step: 4, title: 'Listed', desc: 'Credits listed on the exchange with your price' },
    { step: 5, title: 'Earn', desc: 'Receive payment within 7 days of sale settlement' },
  ],
  companies: [
    { step: 1, title: 'Register', desc: 'Corporate onboarding with ESG goals and offset targets' },
    { step: 2, title: 'Browse', desc: 'Search credits by type, location, and price' },
    { step: 3, title: 'Purchase', desc: 'Buy verified credits with transparent transaction record' },
    { step: 4, title: 'Retire', desc: 'Credits retired on blockchain — permanent offset proof' },
    { step: 5, title: 'Report', desc: 'Auto-generated BRSR-ready offset documentation' },
  ],
}

export default function CarbonExchangePage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-forest-pattern py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#F4B942]/20 text-[#F4B942] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-5">Service 02</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">♻️ Green Mark Carbon Exchange</h1>
          <p className="text-[#D6E8D2] text-xl max-w-3xl mx-auto mb-8">
            India&apos;s transparent carbon credit marketplace — connecting smallholder farmers with corporates through verified, fair-priced carbon trading.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#listings" className="btn-primary inline-flex justify-center">Browse Carbon Credits</Link>
            <Link href="#farmers" className="btn-secondary inline-flex justify-center">Farmer Registration</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-[#D6E8D2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '4,800', label: 'Carbon Credits Available', color: '#06402B' },
              { value: '1,240', label: 'Registered Farmers', color: '#06402B' },
              { value: '₹850–1,200', label: 'Price per tCO₂', color: '#06402B' },
              { value: '50+', label: 'Corporate Buyers', color: '#06402B' },
            ].map((stat, i) => (
              <Scroll3DReveal key={stat.label} direction="flip" delay={i * 80}>
                <TiltCard intensity={8} className="h-full">
                  <div className="text-center stats-card rounded-2xl p-6 h-full">
                    <div className="text-3xl font-extrabold mb-2" style={{ color: stat.color }}>{stat.value}</div>
                    <div className="text-[#3A8A5C] text-sm">{stat.label}</div>
                  </div>
                </TiltCard>
              </Scroll3DReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-[#F7EDE2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Scroll3DReveal direction="up">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06402B] mb-4">How It Works</h2>
            </Scroll3DReveal>
          </div>
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Farmers flow */}
            <div id="farmers">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#06402B] rounded-2xl flex items-center justify-center text-2xl">👨‍🌾</div>
                <h3 className="text-xl font-bold text-[#06402B]">For Farmers</h3>
              </div>
              <div className="space-y-4">
                {howItWorks.farmers.map((item, i) => (
                  <Scroll3DReveal key={item.step} direction="left" delay={i * 80}>
                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 bg-[#06402B] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">{item.step}</div>
                      <div>
                        <div className="font-bold text-[#06402B] text-sm">{item.title}</div>
                        <div className="text-[#3A8A5C] text-sm">{item.desc}</div>
                      </div>
                    </div>
                  </Scroll3DReveal>
                ))}
              </div>
              <Link href="/contact" className="btn-forest inline-flex mt-6 text-sm">Register as Farmer</Link>
            </div>

            {/* Companies flow */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#06402B] rounded-2xl flex items-center justify-center text-2xl">🏢</div>
                <h3 className="text-xl font-bold text-[#06402B]">For Companies</h3>
              </div>
              <div className="space-y-4">
                {howItWorks.companies.map((item, i) => (
                  <Scroll3DReveal key={item.step} direction="right" delay={i * 80}>
                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 bg-[#06402B] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">{item.step}</div>
                      <div>
                        <div className="font-bold text-[#06402B] text-sm">{item.title}</div>
                        <div className="text-[#3A8A5C] text-sm">{item.desc}</div>
                      </div>
                    </div>
                  </Scroll3DReveal>
                ))}
              </div>
              <Link href="/contact" className="btn-primary inline-flex mt-6 text-sm">Corporate Registration</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Listings */}
      <section id="listings" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
            <div>
              <span className="inline-block bg-[#D6E8D2] text-[#06402B] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">Live Listings</span>
              <h2 className="text-3xl font-extrabold text-[#06402B]">Available Carbon Credits</h2>
            </div>
            <div className="flex gap-3">
              <select className="border border-[#D6E8D2] rounded-xl px-4 py-2.5 text-sm text-[#06402B] focus:outline-none focus:border-[#06402B]">
                <option>All Types</option>
                <option>Agroforestry</option>
                <option>Mangrove</option>
                <option>Social Forestry</option>
              </select>
              <select className="border border-[#D6E8D2] rounded-xl px-4 py-2.5 text-sm text-[#06402B] focus:outline-none focus:border-[#06402B]">
                <option>All States</option>
                <option>Maharashtra</option>
                <option>West Bengal</option>
                <option>Rajasthan</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#F7EDE2]">
                  {['ID', 'Type', 'Location', 'Farmer/Group', 'Credits (tCO₂)', 'Price', 'Status', 'Action'].map((h) => (
                    <th key={h} className="text-left text-[#06402B] text-xs font-bold uppercase px-4 py-3 first:rounded-tl-xl last:rounded-tr-xl">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D6E8D2]">
                {listings.map((listing) => (
                  <tr key={listing.id} className="hover:bg-[#F7EDE2] transition-colors">
                    <td className="px-4 py-4 text-[#F4B942] font-bold text-sm">{listing.id}</td>
                    <td className="px-4 py-4 text-[#06402B] text-sm font-medium">{listing.type}</td>
                    <td className="px-4 py-4 text-[#3A8A5C] text-sm">{listing.location}</td>
                    <td className="px-4 py-4 text-[#06402B] text-sm">{listing.farmer}</td>
                    <td className="px-4 py-4">
                      <span className="font-bold text-[#06402B]">{listing.credits}</span>
                      {listing.verified && <span className="ml-2 text-xs text-[#3A8A5C]">✓ Verified</span>}
                    </td>
                    <td className="px-4 py-4 font-bold text-[#06402B] text-sm">{listing.price}</td>
                    <td className="px-4 py-4">
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        listing.status === 'Available' ? 'bg-[#D6E8D2] text-[#06402B]' :
                        listing.status === 'Sold Out' ? 'bg-red-100 text-red-700' :
                        'bg-[#FEF3C7] text-amber-700'
                      }`}>{listing.status}</span>
                    </td>
                    <td className="px-4 py-4">
                      {listing.status !== 'Sold Out' && (
                        <Link href="/contact" className="text-xs bg-[#06402B] text-white px-3 py-1.5 rounded-lg hover:bg-[#06402B] transition-colors font-medium">Buy Credits</Link>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Commission model */}
      <section className="py-16 bg-[#06402B]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-extrabold text-white mb-4">Our Commission Model</h2>
          <p className="text-[#A8C5A3] text-lg mb-2">My Green Mark earns <span className="text-[#F4B942] font-bold">10–15% commission</span> on every carbon credit transaction</p>
          <p className="text-[#A8C5A3] text-sm mb-8">Creating sustainable, recurring platform revenue while empowering rural farmers with access to global carbon markets.</p>
          <Link href="/contact" className="btn-primary inline-flex">Partner With Us</Link>
        </div>
      </section>
    </main>
  )
}
