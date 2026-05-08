import Link from 'next/link'
import Scroll3DReveal from './Scroll3DReveal'
import TiltCard from './TiltCard'

export default function CarbonExchangeSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Scroll3DReveal direction="up">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-[#D6E8D2] text-[#06402B] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
              <span className="w-2 h-2 bg-[#3A8A5C] rounded-full animate-pulse" />
              Service 02
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06402B] mb-4">Green Mark Carbon Exchange</h2>
            <p className="text-[#06402B] text-lg max-w-2xl mx-auto">A transparent marketplace connecting smallholder farmers with corporates — enabling verified carbon credit trading for a sustainable India.</p>
          </div>
        </Scroll3DReveal>

        {/* Exchange diagram */}
        <div className="grid lg:grid-cols-3 gap-8 items-center mb-14">
          <Scroll3DReveal direction="left" delay={0}>
            <TiltCard intensity={6} className="h-full">
              <div className="bg-[#06402B] rounded-2xl p-8 text-white shadow-xl h-full">
                <div className="text-5xl mb-4 text-center">👨‍🌾</div>
                <h3 className="font-bold text-xl text-center text-[#F4B942] mb-5">FARMERS</h3>
                <ul className="space-y-3">
                  {['Generate carbon credits', 'Receive fair market value', 'Access global carbon markets', 'Monthly income stream'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[#D6E8D2] text-sm">
                      <span className="w-1.5 h-1.5 bg-[#3A8A5C] rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>
          </Scroll3DReveal>

          {/* Hub */}
          <Scroll3DReveal direction="scale" delay={100}>
            <TiltCard intensity={5} className="h-full">
              <div className="text-center relative">
                <div className="bg-[#F7EDE2] border-2 border-[#D6E8D2] rounded-2xl p-8 relative shadow-lg hover:shadow-2xl transition-shadow duration-500">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#06402B] to-[#06402B] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-3xl">♻️</span>
                  </div>
                  <h3 className="font-bold text-[#06402B] text-lg mb-1">MY GREEN MARK</h3>
                  <h4 className="font-semibold text-[#3A8A5C] text-base mb-5">CARBON EXCHANGE</h4>
                  <div className="flex flex-col gap-2 text-sm text-[#06402B]">
                    {['Aggregation', 'Verification', 'Trading', 'Settlement'].map((step) => (
                      <span key={step} className="bg-[#D6E8D2] px-3 py-1.5 rounded-full font-semibold cursor-default">{step}</span>
                    ))}
                  </div>

                  {/* Exchange arrows */}
                  <div className="absolute -left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-2">
                    <svg width="28" height="12" viewBox="0 0 28 12" fill="none">
                      <path d="M0 4h20M14 1l6 3-6 3" stroke="#3A8A5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <svg width="28" height="12" viewBox="0 0 28 12" fill="none">
                      <path d="M28 8H8M14 5l-6 3 6 3" stroke="#3A8A5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="absolute -right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-2">
                    <svg width="28" height="12" viewBox="0 0 28 12" fill="none">
                      <path d="M0 4h20M14 1l6 3-6 3" stroke="#3A8A5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <svg width="28" height="12" viewBox="0 0 28 12" fill="none">
                      <path d="M28 8H8M14 5l-6 3 6 3" stroke="#3A8A5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </TiltCard>
          </Scroll3DReveal>

          <Scroll3DReveal direction="right" delay={0}>
            <TiltCard intensity={6} className="h-full">
              <div className="bg-[#06402B] rounded-2xl p-8 text-white shadow-xl h-full">
                <div className="text-5xl mb-4 text-center">🏢</div>
                <h3 className="font-bold text-xl text-center text-[#F4B942] mb-5">COMPANIES</h3>
                <ul className="space-y-3">
                  {['Buy SEBI-verified offsets', 'Meet net-zero ESG targets', 'CSR & BRSR compliance', 'Transparent audit trail'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[#D6E8D2] text-sm">
                      <span className="w-1.5 h-1.5 bg-[#F4B942] rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>
          </Scroll3DReveal>
        </div>

        {/* Feature pills */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[
            { icon: '📦', title: 'Credit Aggregation', desc: 'Pooling credits from multiple smallholders for scale', delay: 0 },
            { icon: '💰', title: 'Fair Pricing', desc: 'Market-linked rates ensuring farmers get real value', delay: 60 },
            { icon: '👨‍🌾', title: 'Farmer Empowerment', desc: 'First carbon market access for rural India', delay: 120 },
            { icon: '🌐', title: 'Corporate Offsetting', desc: 'Verified offsets with transparent blockchain trail', delay: 180 },
          ].map((feat) => (
            <Scroll3DReveal key={feat.title} direction="up" delay={feat.delay}>
              <TiltCard intensity={9} className="h-full">
                <div className="bg-[#F7EDE2] border border-[#D6E8D2] rounded-xl p-5 hover:border-[#3A8A5C] hover:shadow-md transition-all duration-300 group h-full">
                  <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">{feat.icon}</div>
                  <div className="font-bold text-[#06402B] text-sm mb-2">{feat.title}</div>
                  <div className="text-[#3A8A5C] text-xs leading-relaxed">{feat.desc}</div>
                </div>
              </TiltCard>
            </Scroll3DReveal>
          ))}
        </div>

        <Scroll3DReveal direction="up" delay={100}>
          <div className="bg-gradient-to-r from-[#06402B] to-[#06402B] rounded-2xl p-6 text-center shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
            <p className="relative text-[#D6E8D2] mb-4 text-sm max-w-2xl mx-auto">My Green Mark earns a commission on every carbon credit transaction — creating sustainable, recurring platform revenue while empowering rural farmers.</p>
            <Link href="/carbon-exchange" className="btn-glow sheen text-sm inline-flex">Explore Carbon Exchange →</Link>
          </div>
        </Scroll3DReveal>
      </div>
    </section>
  )
}
