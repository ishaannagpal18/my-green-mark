import Link from 'next/link'
import Scroll3DReveal from './Scroll3DReveal'
import LeafParticles from './LeafParticles'

export default function ContactCTA() {
  return (
    <section className="py-20 bg-forest-deep relative overflow-hidden">
      {/* Atmospheric elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#06402B]/40 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#3A8A5C]/30 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none"></div>
      <div className="absolute inset-0 bg-dots opacity-10 pointer-events-none"></div>
      <LeafParticles count={10} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left */}
          <Scroll3DReveal direction="left">
            <div>
              <span className="inline-flex items-center gap-2 bg-[#F4B942]/20 text-[#F4B942] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
                <span className="w-2 h-2 bg-[#F4B942] rounded-full animate-pulse"></span>
                Get Started
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 mt-2">
                Ready to Make Your{' '}
                <span className="text-[#F4B942]">Green Mark</span>?
              </h2>
              <p className="text-[#A8C5A3] text-lg mb-8 leading-relaxed">
                Whether you&apos;re a corporate looking for verified ESG impact, a farmer wanting to access carbon markets, or a student ready to join the sustainability challenge — we&apos;ve got you covered.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact" className="btn-glow sheen justify-center">Book ESG Consultation</Link>
                <Link href="/sustainability-challenge" className="btn-outline-white justify-center">Join Challenge 2026</Link>
              </div>

              {/* Contact info */}
              <div className="flex flex-col gap-3">
                {[
                  { icon: '📧', label: 'info@mygreenmark.in', href: 'mailto:info@mygreenmark.in' },
                  { icon: '📱', label: '+91 98765 43210 (WhatsApp)', href: '#' },
                  { icon: '📍', label: 'Mumbai · Ahmedabad · Delhi', href: '#' },
                ].map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="flex items-center gap-3 text-[#A8C5A3] text-sm hover:text-[#F4B942] transition-colors group"
                  >
                    <span className="text-base">{c.icon}</span>
                    <span className="group-hover:underline">{c.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </Scroll3DReveal>

          {/* Right: contact form */}
          <Scroll3DReveal direction="right" delay={100}>
            <div className="glass-dark border border-white/20 rounded-2xl p-8 shadow-2xl">
              <h3 className="font-bold text-white text-xl mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#A8C5A3] text-xs font-semibold mb-1.5 block">Your Name</label>
                    <input
                      type="text"
                      placeholder="Rajesh Sharma"
                      className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F4B942] focus:ring-1 focus:ring-[#F4B942]/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-[#A8C5A3] text-xs font-semibold mb-1.5 block">Company</label>
                    <input
                      type="text"
                      placeholder="Acme Corp"
                      className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F4B942] focus:ring-1 focus:ring-[#F4B942]/30 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[#A8C5A3] text-xs font-semibold mb-1.5 block">Email</label>
                  <input
                    type="email"
                    placeholder="rajesh@company.com"
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F4B942] focus:ring-1 focus:ring-[#F4B942]/30 transition-all"
                  />
                </div>
                <div>
                  <label className="text-[#A8C5A3] text-xs font-semibold mb-1.5 block">I&apos;m interested in</label>
                  <select className="w-full bg-[#06402B] border border-white/20 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F4B942] focus:ring-1 focus:ring-[#F4B942]/30 transition-all">
                    <option>ESG Consulting &amp; BRSR Reporting</option>
                    <option>Plantation Sponsorship</option>
                    <option>Carbon Credit Trading</option>
                    <option>Subscription ESG Plans</option>
                    <option>Green Talent Hunt 2026</option>
                  </select>
                </div>
                <div>
                  <label className="text-[#A8C5A3] text-xs font-semibold mb-1.5 block">Message</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your sustainability goals..."
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F4B942] focus:ring-1 focus:ring-[#F4B942]/30 transition-all resize-none"
                  ></textarea>
                </div>
                <button type="submit" className="btn-glow sheen w-full justify-center">
                  Send Message
                </button>
              </form>
            </div>
          </Scroll3DReveal>
        </div>
      </div>
    </section>
  )
}
