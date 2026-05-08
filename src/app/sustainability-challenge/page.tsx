'use client'

import { useState } from 'react'
import Link from 'next/link'
import Scroll3DReveal from '@/components/Scroll3DReveal'
import TiltCard from '@/components/TiltCard'

const examDetails = [
  { icon: '💰', label: 'Registration Fee', value: '₹200/student', sub: 'including taxes' },
  { icon: '🎓', label: 'Eligible Classes', value: 'Class 4 to 12', sub: 'All boards welcome' },
  { icon: '💻', label: 'Exam Format', value: 'Online MCQ', sub: 'Multiple-choice questions' },
  { icon: '✅', label: 'Marking Scheme', value: 'No Negative', sub: 'No negative marking' },
]

const prizes = [
  { icon: '🏆', title: 'Total Prize Pool', value: '₹50,000/-', desc: 'Cash prizes across categories' },
  { icon: '📜', title: 'Student Certificates', value: '3 Levels', desc: 'Participation, Merit & Distinction' },
  { icon: '🏅', title: 'Teacher Recognition', value: 'Certificate', desc: 'Certificates of Appreciation for school teachers' },
]

const timeline = [
  { date: 'Now Open', event: 'Registrations Open', desc: 'Online registration at ₹200/student' },
  { date: '31 May 2026', event: 'Registration Deadline', desc: 'Last date to register' },
  { date: '5 June 2026', event: 'Green Talent Hunt Exam', desc: 'World Environment Day — National Online Exam' },
  { date: 'Post Exam', event: 'Results & Certificates', desc: 'Winners announced, certificates issued' },
]

const faqs = [
  { q: 'Who can participate?', a: 'Students of Classes 4 to 12 from any school in India. Both CBSE and state board students are eligible.' },
  { q: 'What is the registration fee?', a: '₹200 per student including taxes. Payment via UPI, GPay, PhonePe, or Paytm.' },
  { q: 'What topics are covered?', a: 'The exam covers environment, sustainability, climate change, carbon emissions, biodiversity, and sustainable development goals (SDGs).' },
  { q: 'What is the exam format?', a: 'Online exam with Multiple-Choice Questions (MCQ). There is no negative marking. Separate papers for Classes 4–7 and 8–12.' },
  { q: 'Do teachers get anything?', a: 'Yes! School teachers who facilitate student participation receive Certificates of Appreciation from My Green Mark.' },
  { q: 'When will I receive my certificate?', a: 'All participants receive a digital certificate after the exam. Winners receive Distinction/Merit certificates along with cash prizes.' },
]

export default function GreenTalentHuntPage() {
  const [formData, setFormData] = useState({ name: '', school: '', class: '', city: '', state: '', email: '', phone: '' })
  const [step, setStep] = useState(1)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(2)
  }

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-forest-pattern py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-leaf-pattern opacity-20"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-[#F4B942]/20 border border-[#F4B942]/40 text-[#F4B942] text-xs font-semibold px-4 py-2 rounded-full mb-6">
            <span className="text-lg">🌍</span> FLAGSHIP EVENT · WORLD ENVIRONMENT DAY · 5 JUNE 2026
          </div>
          <div className="text-[#D6E8D2] text-sm font-semibold uppercase tracking-widest mb-3">My Green Mark is Organising</div>
          <div className="text-white text-lg font-semibold mb-2">National Level Online Exam on Environment and Sustainability</div>
          <h1 className="text-5xl sm:text-7xl font-extrabold text-white mb-2 mt-4">
            Green Talent
            <br />
            <span className="text-[#F4B942]">Hunt</span>
          </h1>
          <div className="inline-flex items-center gap-2 bg-[#F4B942] text-[#06402B] font-bold text-lg px-6 py-3 rounded-full mb-8 mt-6">
            📅 5 June 2026 — Friday · World Environment Day
          </div>
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8 text-white">
            <Scroll3DReveal direction="up" delay={0}>
              <TiltCard intensity={8} className="h-full">
                <div className="bg-white/10 rounded-xl p-4 h-full">
                  <div className="text-2xl font-bold text-[#F4B942]">Classes 4–12</div>
                  <div className="text-[#A8C5A3] text-sm">Eligible Students</div>
                </div>
              </TiltCard>
            </Scroll3DReveal>
            <Scroll3DReveal direction="up" delay={80}>
              <TiltCard intensity={8} className="h-full">
                <div className="bg-white/10 rounded-xl p-4 h-full">
                  <div className="text-2xl font-bold text-[#F4B942]">₹50,000</div>
                  <div className="text-[#A8C5A3] text-sm">Total Prize Pool</div>
                </div>
              </TiltCard>
            </Scroll3DReveal>
            <Scroll3DReveal direction="up" delay={160}>
              <TiltCard intensity={8} className="h-full">
                <div className="bg-white/10 rounded-xl p-4 h-full">
                  <div className="text-2xl font-bold text-[#F4B942]">₹200</div>
                  <div className="text-[#A8C5A3] text-sm">Registration Fee</div>
                </div>
              </TiltCard>
            </Scroll3DReveal>
          </div>
          <a href="#register" className="btn-primary text-base inline-flex">Register Now — ₹200</a>
        </div>
      </section>

      {/* Exam Details & Prizes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Exam Details */}
            <Scroll3DReveal direction="left">
              <div>
                <span className="inline-block bg-[#D6E8D2] text-[#06402B] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">Exam Details</span>
                <h2 className="text-3xl font-extrabold text-[#06402B] mb-8">How It Works</h2>
                <div className="grid grid-cols-2 gap-4">
                  {examDetails.map((d, i) => (
                    <Scroll3DReveal key={d.label} direction="up" delay={i * 80}>
                      <TiltCard intensity={8} className="h-full">
                        <div className="service-card p-5 h-full">
                          <div className="text-3xl mb-3">{d.icon}</div>
                          <div className="text-xs text-[#3A8A5C] font-semibold mb-1">{d.label}</div>
                          <div className="font-extrabold text-[#06402B] text-base">{d.value}</div>
                          <div className="text-[#3A8A5C] text-xs mt-1">{d.sub}</div>
                        </div>
                      </TiltCard>
                    </Scroll3DReveal>
                  ))}
                </div>
              </div>
            </Scroll3DReveal>

            {/* Prizes */}
            <Scroll3DReveal direction="right">
              <div>
                <span className="inline-block bg-[#F4B942]/20 text-[#F4B942] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">Prizes & Certificates</span>
                <h2 className="text-3xl font-extrabold text-[#06402B] mb-8">What You Win</h2>
                <div className="space-y-4">
                  {prizes.map((p, i) => (
                    <Scroll3DReveal key={p.title} direction="up" delay={i * 80}>
                      <TiltCard intensity={7}>
                        <div className="service-card p-5 flex items-center gap-4">
                          <div className="text-4xl">{p.icon}</div>
                          <div>
                            <div className="font-bold text-[#06402B] text-base">{p.title}</div>
                            <div className="text-[#F4B942] font-extrabold text-xl">{p.value}</div>
                            <div className="text-[#3A8A5C] text-xs">{p.desc}</div>
                          </div>
                        </div>
                      </TiltCard>
                    </Scroll3DReveal>
                  ))}
                </div>
              </div>
            </Scroll3DReveal>
          </div>
        </div>
      </section>

      {/* Important Dates Banner */}
      <section className="py-12 bg-[#06402B]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Scroll3DReveal direction="up">
            <h2 className="text-2xl font-extrabold text-white mb-8">Important Dates</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <TiltCard intensity={10}>
                <div className="bg-white/10 border border-white/20 rounded-2xl p-7 text-center">
                  <div className="text-4xl mb-3">📅</div>
                  <div className="text-[#A8C5A3] text-sm font-semibold uppercase tracking-wider mb-2">Registration Deadline</div>
                  <div className="text-white font-extrabold text-3xl">31st May 2026</div>
                </div>
              </TiltCard>
              <TiltCard intensity={10}>
                <div className="bg-[#F4B942]/20 border border-[#F4B942]/40 rounded-2xl p-7 text-center">
                  <div className="text-4xl mb-3">🎓</div>
                  <div className="text-[#F4B942] text-sm font-semibold uppercase tracking-wider mb-2">Examination Date</div>
                  <div className="text-white font-extrabold text-3xl">5th June 2026</div>
                  <div className="text-[#A8C5A3] text-xs mt-1">World Environment Day</div>
                </div>
              </TiltCard>
            </div>
          </Scroll3DReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <Scroll3DReveal direction="up">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06402B] mb-4">Event Timeline</h2>
            </Scroll3DReveal>
          </div>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-0.5 timeline-line"></div>
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <Scroll3DReveal key={item.event} direction="up" delay={i * 80}>
                  <div className="flex gap-6 items-start">
                    <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold z-10" style={{ background: i === 2 ? '#F4B942' : '#06402B', color: i === 2 ? '#06402B' : 'white' }}>{i + 1}</div>
                    <div className="bg-[#F7EDE2] rounded-xl p-5 flex-1">
                      <div className="text-[#3A8A5C] text-xs font-bold mb-1">{item.date}</div>
                      <div className="font-bold text-[#06402B] text-base">{item.event}</div>
                      <div className="text-[#06402B] text-sm mt-1">{item.desc}</div>
                    </div>
                  </div>
                </Scroll3DReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="py-20 bg-[#F7EDE2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06402B] mb-4">Register Now</h2>
            <p className="text-[#06402B] text-lg">Join students across India for the Green Talent Hunt 2026 — Registration closes 31st May 2026</p>
          </div>

          {step === 1 ? (
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Form */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-[#D6E8D2]">
                <h3 className="font-bold text-[#06402B] text-xl mb-6">📋 Registration Form</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-[#06402B] text-xs font-semibold mb-1.5 block">Student Name *</label>
                    <input required type="text" placeholder="Arjun Sharma" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full border border-[#D6E8D2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#06402B] text-[#06402B] bg-white"/>
                  </div>
                  <div>
                    <label className="text-[#06402B] text-xs font-semibold mb-1.5 block">School Name *</label>
                    <input required type="text" placeholder="DPS New Delhi" value={formData.school} onChange={e => setFormData({...formData, school: e.target.value})} className="w-full border border-[#D6E8D2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#06402B] text-[#06402B] bg-white"/>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[#06402B] text-xs font-semibold mb-1.5 block">Class (4–12) *</label>
                      <select required value={formData.class} onChange={e => setFormData({...formData, class: e.target.value})} className="w-full border border-[#D6E8D2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#06402B] text-[#06402B] bg-white">
                        <option value="">Select</option>
                        {[4,5,6,7,8,9,10,11,12].map(c => <option key={c} value={c}>Class {c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-[#06402B] text-xs font-semibold mb-1.5 block">City *</label>
                      <input required type="text" placeholder="New Delhi" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} className="w-full border border-[#D6E8D2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#06402B] text-[#06402B] bg-white"/>
                    </div>
                  </div>
                  <div>
                    <label className="text-[#06402B] text-xs font-semibold mb-1.5 block">State *</label>
                    <input required type="text" placeholder="Delhi" value={formData.state} onChange={e => setFormData({...formData, state: e.target.value})} className="w-full border border-[#D6E8D2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#06402B] text-[#06402B] bg-white"/>
                  </div>
                  <div>
                    <label className="text-[#06402B] text-xs font-semibold mb-1.5 block">Parent&apos;s Email *</label>
                    <input required type="email" placeholder="parent@email.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full border border-[#D6E8D2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#06402B] text-[#06402B] bg-white"/>
                  </div>
                  <div>
                    <label className="text-[#06402B] text-xs font-semibold mb-1.5 block">Phone Number *</label>
                    <input required type="tel" placeholder="+91 98765 43210" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full border border-[#D6E8D2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#06402B] text-[#06402B] bg-white"/>
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">SUBMIT & PROCEED TO PAYMENT →</button>
                </form>
              </div>

              {/* Payment */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-[#D6E8D2]">
                <h3 className="font-bold text-[#06402B] text-xl mb-6">💳 Payment — Scan to Pay</h3>
                <div className="flex items-center justify-center mb-6">
                  <div className="w-48 h-48 bg-[#06402B] rounded-xl grid grid-cols-7 gap-1 p-3">
                    {Array.from({length: 49}, (_, i) => (
                      <div key={i} className="rounded-sm" style={{ background: Math.random() > 0.4 ? 'white' : 'transparent' }}></div>
                    ))}
                  </div>
                </div>
                <div className="text-center mb-4">
                  <div className="text-3xl font-extrabold text-[#06402B] mb-1">Scan to Pay ₹200</div>
                  <div className="text-[#3A8A5C] text-sm">UPI · GPay · PhonePe · Paytm</div>
                </div>
                <div className="bg-[#D6E8D2] rounded-xl p-4 text-center mb-4">
                  <div className="text-[#06402B] font-semibold text-sm">📤 Upload Payment Screenshot to Complete Registration</div>
                  <button className="mt-3 border-2 border-[#06402B] text-[#06402B] text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#06402B] hover:text-white transition-colors">Upload Screenshot</button>
                </div>
                <div className="bg-[#F7EDE2] rounded-xl p-4 space-y-2 text-sm text-[#06402B]">
                  <div className="font-bold mb-2">📞 Need Help?</div>
                  <a href="tel:+919217917695" className="flex items-center gap-2 hover:text-[#3A8A5C] transition-colors">
                    <span>📱</span> +91-9217917695
                  </a>
                  <a href="mailto:info@mygreenmark.in" className="flex items-center gap-2 hover:text-[#3A8A5C] transition-colors">
                    <span>📧</span> info@mygreenmark.in
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-lg mx-auto text-center bg-white rounded-2xl p-10 shadow-lg border border-[#D6E8D2]">
              <div className="text-6xl mb-5">🎉</div>
              <h3 className="text-2xl font-extrabold text-[#06402B] mb-3">Registration Submitted!</h3>
              <p className="text-[#06402B] mb-2">Thank you, <strong>{formData.name}</strong>!</p>
              <p className="text-[#3A8A5C] text-sm mb-6">Please complete the payment and upload your screenshot. Your registration will be confirmed within 24 hours at your email.</p>
              <Link href="/" className="btn-forest inline-flex">Back to Home</Link>
            </div>
          )}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <Scroll3DReveal direction="up">
              <h2 className="text-3xl font-extrabold text-[#06402B] mb-4">Frequently Asked Questions</h2>
            </Scroll3DReveal>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Scroll3DReveal key={faq.q} direction="up" delay={i * 80}>
                <div className="border border-[#D6E8D2] rounded-xl p-6">
                  <div className="font-bold text-[#06402B] mb-2">Q: {faq.q}</div>
                  <div className="text-[#06402B] text-sm leading-relaxed">{faq.a}</div>
                </div>
              </Scroll3DReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-[#06402B]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Scroll3DReveal direction="up">
            <h2 className="text-3xl font-extrabold text-white mb-4">Let&apos;s Work Together for a Better, More Sustainable Future!</h2>
            <p className="text-[#A8C5A3] mb-8">Register before 31st May 2026 · Exam on 5th June 2026 · mygreenmark.in</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a href="#register" className="btn-primary justify-center">Register Now — ₹200</a>
              <Link href="/contact" className="btn-secondary justify-center">Contact Us</Link>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-[#A8C5A3] text-sm">
              <a href="tel:+919217917695" className="hover:text-white transition-colors">📱 +91-9217917695</a>
              <a href="mailto:info@mygreenmark.in" className="hover:text-white transition-colors">📧 info@mygreenmark.in</a>
            </div>
          </Scroll3DReveal>
        </div>
      </section>
    </main>
  )
}
