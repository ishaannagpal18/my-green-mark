import Scroll3DReveal from './Scroll3DReveal'
import TiltCard from './TiltCard'
import LeafParticles from './LeafParticles'

export default function BrochureSection() {
  return (
    <section className="py-20 bg-[#06402B] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0A2E18]/60 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#3A8A5C]/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-dots opacity-10 pointer-events-none" />
      <LeafParticles count={8} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text */}
          <Scroll3DReveal direction="left">
            <div>
              <span className="inline-flex items-center gap-2 bg-[#F4B942]/20 text-[#F4B942] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
                <span className="w-2 h-2 bg-[#F4B942] rounded-full animate-pulse" />
                Official Brochure
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 mt-2">
                Download the{' '}
                <span className="text-[#F4B942]">Green Talent Hunt 2026</span>{' '}
                Brochure
              </h2>
              <p className="text-[#A8C5A3] text-lg mb-8 leading-relaxed">
                Get the complete guide to India&apos;s biggest student sustainability challenge — exam format, prizes, eligibility, registration steps, and more. Share with students, teachers &amp; parents.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: '📅', label: 'Exam Date', value: '5 June 2026' },
                  { icon: '🏆', label: 'Prize Pool', value: '₹50,000' },
                  { icon: '🎓', label: 'For Classes', value: '4 to 12' },
                  { icon: '🌿', label: 'Theme', value: 'Sustainability' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 glass-dark rounded-xl p-3 border border-white/10"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="text-[#A8C5A3] text-xs">{item.label}</div>
                      <div className="text-white font-semibold text-sm">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/Green Talent Hunt 2026 Brochure.pdf"
                  download
                  className="btn-glow sheen justify-center"
                >
                  ⬇&nbsp; Download Brochure
                </a>
                <a
                  href="https://bit.ly/4u4F3Wn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-white justify-center"
                >
                  View Online ↗
                </a>
              </div>
            </div>
          </Scroll3DReveal>

          {/* Right: PDF card */}
          <Scroll3DReveal direction="right" delay={100}>
            <TiltCard intensity={8}>
              <div className="glass-dark border border-white/20 rounded-2xl p-8 shadow-2xl text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-[#F4B942]/10 border-2 border-[#F4B942]/30 rounded-2xl flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12" stroke="#F4B942" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>

                <div className="text-[#F4B942] text-xs font-bold uppercase tracking-widest mb-2">PDF Document</div>
                <h3 className="text-white font-extrabold text-xl mb-1">Green Talent Hunt 2026</h3>
                <p className="text-[#A8C5A3] text-sm mb-2">Official Brochure · My Green Mark</p>
                <p className="text-[#3A8A5C] text-xs mb-6">World Environment Day · 5 June 2026</p>

                <div className="space-y-3">
                  <a
                    href="/Green Talent Hunt 2026 Brochure.pdf"
                    download
                    className="btn-glow sheen w-full justify-center text-sm"
                  >
                    ⬇&nbsp; Download PDF
                  </a>
                  <a
                    href="https://bit.ly/4u4F3Wn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-white w-full justify-center text-sm"
                  >
                    View Online ↗
                  </a>
                </div>

                <p className="text-[#3A8A5C] text-xs mt-5">Share with students, parents &amp; teachers</p>
              </div>
            </TiltCard>
          </Scroll3DReveal>
        </div>
      </div>
    </section>
  )
}