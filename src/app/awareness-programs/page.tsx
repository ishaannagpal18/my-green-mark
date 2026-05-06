import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Awareness Programs — My Green Mark',
  description: 'Sustainability workshops, school competitions, and community campaigns for environmental education.',
}

const programs = [
  { icon: '🏆', title: 'School Competitions', desc: 'Annual sustainability challenges for classes 4–12. Students compete across knowledge, project, and creative categories.', audience: 'Students Class 4–12', duration: '2–4 weeks', certificate: true },
  { icon: '🏫', title: 'Institution Workshops', desc: 'Half-day and full-day sustainability workshops for schools and colleges, covering climate science, ESG basics, and green careers.', audience: 'Schools & Colleges', duration: '4–8 hours', certificate: true },
  { icon: '🏢', title: 'Corporate ESG Workshops', desc: 'Employee engagement programs on sustainability, ESG reporting basics, carbon footprint reduction, and green workplace practices.', audience: 'Corporates & Teams', duration: '4–8 hours', certificate: true },
  { icon: '📢', title: 'Community Campaigns', desc: 'Tree plantation drives, campus cleanup campaigns, sustainability pledge programs, and awareness rallies across cities and villages.', audience: 'Communities', duration: 'Varies', certificate: false },
  { icon: '🎓', title: 'Green Career Guidance', desc: 'Webinars and seminars for college students on green careers, ESG jobs, sustainability consulting, and climate tech opportunities.', audience: 'College Students', duration: '2–3 hours', certificate: true },
  { icon: '🌐', title: 'Online Learning Hub', desc: 'Self-paced sustainability modules, video lectures, quizzes, and digital badges — available 24/7 on the My Green Mark platform.', audience: 'Everyone', duration: 'Self-paced', certificate: true },
]

export default function AwarenessProgramsPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-forest-pattern py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#F4B942]/20 text-[#F4B942] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-5">Service 03</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">📣 Green Mark Awareness</h1>
          <p className="text-[#D6E8D2] text-xl max-w-3xl mx-auto mb-8">Competitions · Workshops · Campaigns — making sustainability engaging, fun, and impactful for everyone.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sustainability-challenge" className="btn-primary justify-center inline-flex">Join Challenge 2026</Link>
            <Link href="/contact" className="btn-secondary justify-center inline-flex">Book a Workshop</Link>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-[#F7EDE2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14532D] mb-4">Our Programs</h2>
            <p className="text-[#14532D] text-lg max-w-2xl mx-auto">From school competitions to corporate workshops — we make sustainability education accessible and engaging for all.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {programs.map((p) => (
              <div key={p.title} className="service-card p-7">
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="font-bold text-[#14532D] text-lg mb-2">{p.title}</h3>
                <p className="text-[#3A8A5C] text-sm leading-relaxed mb-4">{p.desc}</p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-[#14532D]">
                    <span className="w-1.5 h-1.5 bg-[#3A8A5C] rounded-full"></span>
                    <span><strong>Audience:</strong> {p.audience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#14532D]">
                    <span className="w-1.5 h-1.5 bg-[#3A8A5C] rounded-full"></span>
                    <span><strong>Duration:</strong> {p.duration}</span>
                  </div>
                  {p.certificate && (
                    <div className="flex items-center gap-2 text-[#14532D]">
                      <span className="w-1.5 h-1.5 bg-[#F4B942] rounded-full"></span>
                      <span>Digital certificate included</span>
                    </div>
                  )}
                </div>
                <Link href="/contact" className="inline-flex items-center gap-1 text-[#14532D] font-semibold text-sm mt-4 hover:text-[#3A8A5C] transition-colors">
                  Enquire →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship challenge */}
      <section className="py-16 bg-[#F4B942]">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14532D] mb-4">🏆 Global Sustainability Challenge 2026</h2>
          <p className="text-[#14532D]/80 text-lg mb-8 max-w-2xl mx-auto">Our flagship annual event on World Environment Day — ₹50,000 prizes, GPS plot ownership, and Green Twin connections for students nationwide.</p>
          <Link href="/sustainability-challenge" className="btn-forest inline-flex text-base">Register Now — ₹200</Link>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#14532D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { value: '5,000+', label: 'Students Reached', icon: '🎓' },
              { value: '200+', label: 'Schools Partnered', icon: '🏫' },
              { value: '50+', label: 'Workshops Delivered', icon: '📚' },
              { value: '15+', label: 'Cities Covered', icon: '🌆' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl mb-2">{s.icon}</div>
                <div className="text-3xl font-extrabold text-[#F4B942] mb-1">{s.value}</div>
                <div className="text-[#A8C5A3] text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
