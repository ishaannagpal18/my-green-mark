import Scroll3DReveal from './Scroll3DReveal'
import TiltCard from './TiltCard'

const testimonials = [
  {
    quote: "My Green Mark gave us the GPS-verified plantation data we needed for our annual CSR report. The digital certificate was exactly what our board wanted — transparent, auditable, and meaningful.",
    name: "Rajesh Mehta",
    role: "CSR Head, Mahindra Group",
    type: "Corporate Sponsor",
    avatar: "RM",
    color: "#06402B",
  },
  {
    quote: "Ab hamare kheti se carbon credit milta hai. Pehle sirf fasal bechtey they, ab carbon market mein bhi hain. My Green Mark ne hum kisan ko global market se joda.",
    name: "Ramkumar Yadav",
    role: "Farmer, Vidarbha, Maharashtra",
    type: "Farmer Partner",
    avatar: "RY",
    color: "#06402B",
  },
  {
    quote: "The BRSR reporting module saved us 3 months of consultant work. The dashboard is intuitive, the data is real-time, and the ESG score improvement recommendations are actually actionable.",
    name: "Priyanka Shah",
    role: "Sustainability Officer, Tata Motors",
    type: "ESG Client",
    avatar: "PS",
    color: "#3A8A5C",
  },
  {
    quote: "I won the Sustainability Challenge and got assigned Plot 104B in the Sundarbans. Tracking my tree via GPS every month gives me such a sense of purpose. This is the future of education!",
    name: "Arjun Sharma",
    role: "Class 10, DPS Ahmedabad",
    type: "Student Participant",
    avatar: "AS",
    color: "#F4B942",
  },
  {
    quote: "We onboarded 200 farmer families through My Green Mark's carbon exchange in just one quarter. The aggregation model solves the scale problem that has always prevented smallholders from accessing carbon markets.",
    name: "Dr. Anita Desai",
    role: "Director, Rural Carbon Initiative",
    type: "NGO Partner",
    avatar: "AD",
    color: "#06402B",
  },
  {
    quote: "The Green Twin feature is brilliant — my daughter connected with a student from Kerala who is protecting the same ecosystem. It made sustainability feel personal and fun for the whole family.",
    name: "Meena Krishnan",
    role: "Parent, Chennai",
    type: "Community Member",
    avatar: "MK",
    color: "#06402B",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#F7EDE2] relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Scroll3DReveal direction="up">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-[#D6E8D2] text-[#06402B] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
              <span className="w-2 h-2 bg-[#3A8A5C] rounded-full animate-pulse" />
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06402B] mb-4">Voices of Impact</h2>
            <p className="text-[#06402B] text-lg max-w-2xl mx-auto">From corporate sponsors to rural farmers — real stories of sustainability in action.</p>
          </div>
        </Scroll3DReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Scroll3DReveal key={t.name} direction="up" delay={i * 70}>
              <TiltCard className="h-full" intensity={7}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#D6E8D2] hover:shadow-xl hover:border-[#3A8A5C]/40 transition-all duration-300 group h-full flex flex-col">
                  <div className="text-5xl text-[#D6E8D2] font-serif leading-none mb-3">&ldquo;</div>
                  <p className="text-[#06402B] text-sm leading-relaxed mb-5 flex-1">{t.quote}</p>

                  <div className="flex items-center gap-3 pt-4 border-t border-[#D6E8D2]">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-sm"
                      style={{ background: t.color }}
                    >
                      {t.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-[#06402B] text-sm">{t.name}</div>
                      <div className="text-[#3A8A5C] text-xs truncate">{t.role}</div>
                    </div>
                    <span className="text-xs bg-[#D6E8D2] text-[#06402B] px-2.5 py-1 rounded-full font-semibold flex-shrink-0">{t.type}</span>
                  </div>
                </div>
              </TiltCard>
            </Scroll3DReveal>
          ))}
        </div>

        {/* Trust bar */}
        <Scroll3DReveal direction="up" delay={200}>
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 py-6 border-y border-[#D6E8D2]">
            {['Mahindra', 'Tata Motors', 'Reliance ESG', 'SEBI Compliant', 'UNFCCC Aligned', '50+ Corporates'].map((brand) => (
              <div key={brand} className="text-[#3A8A5C] font-bold text-sm opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default">
                {brand}
              </div>
            ))}
          </div>
        </Scroll3DReveal>
      </div>
    </section>
  )
}
