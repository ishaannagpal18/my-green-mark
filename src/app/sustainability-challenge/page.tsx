'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Scroll3DReveal from '@/components/Scroll3DReveal'
import TiltCard from '@/components/TiltCard'

const examHighlights = [
  { icon: '📅', label: 'Exam Date', value: '5 June 2026', sub: 'Friday · World Environment Day' },
  { icon: '💻', label: 'Mode', value: 'Online', sub: 'From anywhere in India' },
  { icon: '🎓', label: 'Classes', value: '4 to 12', sub: 'All boards welcome' },
  { icon: '🌿', label: 'Theme', value: 'Sustainability', sub: 'Environmental Awareness' },
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
  { q: 'What is the registration fee?', a: '₹200 per student only. Payment via UPI, GPay, PhonePe, or Paytm by scanning the QR code.' },
  { q: 'What topics are covered?', a: 'Sustainability & Environmental Awareness — covering climate change, carbon emissions, biodiversity, SDGs, and conservation.' },
  { q: 'What is the exam format?', a: 'Online exam with Multiple-Choice Questions (MCQ). No negative marking. Separate papers for Classes 4–7 and 8–12.' },
  { q: 'Do teachers get anything?', a: 'Yes! School teachers who facilitate student participation receive Certificates of Appreciation from My Green Mark.' },
  { q: 'When will I receive my certificate?', a: 'All participants receive a digital certificate after the exam. Winners receive Distinction/Merit certificates along with cash prizes.' },
]

type FormData = {
  email: string
  full_name: string
  class_grade: string
  city: string
  postal_address: string
  date_of_birth: string
  contact_number: string
  parent_name: string
  parent_contact: string
  parent_email: string
  photo: File | null
}

const emptyForm: FormData = {
  email: '',
  full_name: '',
  class_grade: '',
  city: '',
  postal_address: '',
  date_of_birth: '',
  contact_number: '',
  parent_name: '',
  parent_contact: '',
  parent_email: '',
  photo: null,
}

export default function GreenTalentHuntPage() {
  const [form, setForm] = useState<FormData>(emptyForm)
  const [step, setStep] = useState<'form' | 'success' | 'error'>('form')
  const [loading, setLoading] = useState(false)

  const set = (field: keyof FormData, value: string) =>
    setForm(prev => ({ ...prev, [field]: value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const payload = {
        full_name: form.full_name,
        email: form.email,
        class_grade: form.class_grade,
        city: form.city,
        postal_address: form.postal_address,
        date_of_birth: form.date_of_birth,
        contact_number: form.contact_number,
        parent_name: form.parent_name,
        parent_contact: form.parent_contact,
        parent_email: form.parent_email,
      }
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (res.ok) {
        setStep('success')
      } else {
        setStep('error')
      }
    } catch {
      setStep('error')
    } finally {
      setLoading(false)
    }
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
          <div className="text-[#D6E8D2] text-sm font-semibold uppercase tracking-widest mb-2">My Green Mark is Organising</div>
          <div className="text-white font-semibold mb-4">National Level Online Exam on Environment and Sustainability</div>
          <h1 className="text-5xl sm:text-7xl font-extrabold text-white mt-2 mb-2">
            Green Talent
            <br />
            <span className="text-[#F4B942]">Hunt</span>
          </h1>
          <div className="inline-flex items-center gap-2 bg-[#F4B942] text-[#06402B] font-bold text-lg px-6 py-3 rounded-full mt-5 mb-8">
            📅 5 June 2026 · Friday · World Environment Day
          </div>
          <div className="grid sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
            {examHighlights.map((h, i) => (
              <Scroll3DReveal key={h.label} direction="up" delay={i * 70}>
                <TiltCard intensity={8} className="h-full">
                  <div className="bg-white/10 rounded-xl p-4 h-full text-white text-center">
                    <div className="text-2xl mb-1">{h.icon}</div>
                    <div className="text-xs text-[#A8C5A3] mb-1">{h.label}</div>
                    <div className="font-bold text-[#F4B942] text-sm">{h.value}</div>
                    <div className="text-[#A8C5A3] text-xs">{h.sub}</div>
                  </div>
                </TiltCard>
              </Scroll3DReveal>
            ))}
          </div>
          <a href="#register" className="btn-primary text-base inline-flex">Register Now — ₹200</a>
        </div>
      </section>

      {/* Prizes */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Scroll3DReveal direction="up">
              <span className="inline-block bg-[#F4B942]/20 text-[#F4B942] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">Prizes & Certificates</span>
              <h2 className="text-3xl font-extrabold text-[#06402B]">What You Win</h2>
            </Scroll3DReveal>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {prizes.map((p, i) => (
              <Scroll3DReveal key={p.title} direction="up" delay={i * 80}>
                <TiltCard intensity={8} className="h-full">
                  <div className="service-card p-7 text-center h-full">
                    <div className="text-4xl mb-4">{p.icon}</div>
                    <div className="font-bold text-[#06402B] text-base mb-1">{p.title}</div>
                    <div className="text-[#F4B942] font-extrabold text-2xl mb-1">{p.value}</div>
                    <div className="text-[#3A8A5C] text-xs">{p.desc}</div>
                  </div>
                </TiltCard>
              </Scroll3DReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
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
                    <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold z-10"
                      style={{ background: i === 2 ? '#F4B942' : '#06402B', color: i === 2 ? '#06402B' : 'white' }}>
                      {i + 1}
                    </div>
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

      {/* Registration */}
      <section id="register" className="py-20 bg-[#F7EDE2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <Scroll3DReveal direction="up">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06402B] mb-3">Register Now</h2>
              <p className="text-[#06402B]">Registration closes <strong>31st May 2026</strong> · Fee: <strong>₹200 only</strong></p>
            </Scroll3DReveal>
          </div>

          {step === 'form' && (
            <div className="grid lg:grid-cols-2 gap-8 items-start">

              {/* Form */}
              <Scroll3DReveal direction="left">
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-[#D6E8D2]">
                  <h3 className="font-bold text-[#06402B] text-xl mb-6">📋 Registration Form</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">

                    <div>
                      <label className="text-[#06402B] text-xs font-semibold mb-1.5 block">Full Name of Candidate *</label>
                      <input required type="text" placeholder="Arjun Sharma"
                        value={form.full_name} onChange={e => set('full_name', e.target.value)}
                        className="w-full border border-[#D6E8D2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#06402B] text-[#06402B] bg-white" />
                    </div>

                    <div>
                      <label className="text-[#06402B] text-xs font-semibold mb-1.5 block">Candidate&apos;s Email *</label>
                      <input required type="email" placeholder="student@email.com"
                        value={form.email} onChange={e => set('email', e.target.value)}
                        className="w-full border border-[#D6E8D2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#06402B] text-[#06402B] bg-white" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[#06402B] text-xs font-semibold mb-1.5 block">Class / Grade *</label>
                        <select required value={form.class_grade} onChange={e => set('class_grade', e.target.value)}
                          className="w-full border border-[#D6E8D2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#06402B] text-[#06402B] bg-white">
                          <option value="">Select Class</option>
                          {[4,5,6,7,8,9,10,11,12].map(c => <option key={c} value={`Class ${c}`}>Class {c}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="text-[#06402B] text-xs font-semibold mb-1.5 block">Date of Birth *</label>
                        <input required type="date" value={form.date_of_birth} onChange={e => set('date_of_birth', e.target.value)}
                          className="w-full border border-[#D6E8D2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#06402B] text-[#06402B] bg-white" />
                      </div>
                    </div>

                    <div>
                      <label className="text-[#06402B] text-xs font-semibold mb-1.5 block">Contact Number *</label>
                      <input required type="tel" placeholder="+91 98765 43210"
                        value={form.contact_number} onChange={e => set('contact_number', e.target.value)}
                        className="w-full border border-[#D6E8D2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#06402B] text-[#06402B] bg-white" />
                    </div>

                    <div>
                      <label className="text-[#06402B] text-xs font-semibold mb-1.5 block">City *</label>
                      <input required type="text" placeholder="New Delhi"
                        value={form.city} onChange={e => set('city', e.target.value)}
                        className="w-full border border-[#D6E8D2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#06402B] text-[#06402B] bg-white" />
                    </div>

                    <div>
                      <label className="text-[#06402B] text-xs font-semibold mb-1.5 block">Postal Address *</label>
                      <textarea required rows={2} placeholder="Full postal address with PIN code"
                        value={form.postal_address} onChange={e => set('postal_address', e.target.value)}
                        className="w-full border border-[#D6E8D2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#06402B] text-[#06402B] bg-white resize-none" />
                    </div>

                    <div className="border-t border-[#D6E8D2] pt-4">
                      <div className="text-[#06402B] text-xs font-bold uppercase tracking-wider mb-3">Parent / Guardian Details</div>
                      <div className="space-y-4">
                        <div>
                          <label className="text-[#06402B] text-xs font-semibold mb-1.5 block">Parent / Guardian Name *</label>
                          <input required type="text" placeholder="Parent full name"
                            value={form.parent_name} onChange={e => set('parent_name', e.target.value)}
                            className="w-full border border-[#D6E8D2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#06402B] text-[#06402B] bg-white" />
                        </div>
                        <div>
                          <label className="text-[#06402B] text-xs font-semibold mb-1.5 block">Parent&apos;s Contact *</label>
                          <input required type="tel" placeholder="+91 98765 43210"
                            value={form.parent_contact} onChange={e => set('parent_contact', e.target.value)}
                            className="w-full border border-[#D6E8D2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#06402B] text-[#06402B] bg-white" />
                        </div>
                        <div>
                          <label className="text-[#06402B] text-xs font-semibold mb-1.5 block">Parent&apos;s Email *</label>
                          <input required type="email" placeholder="parent@email.com"
                            value={form.parent_email} onChange={e => set('parent_email', e.target.value)}
                            className="w-full border border-[#D6E8D2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#06402B] text-[#06402B] bg-white" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="text-[#06402B] text-xs font-semibold mb-1.5 block">Passport Size Photograph *</label>
                      <label className="flex items-center justify-center gap-3 border-2 border-dashed border-[#D6E8D2] rounded-xl px-4 py-5 cursor-pointer hover:border-[#06402B] transition-colors">
                        <span className="text-2xl">📷</span>
                        <div>
                          <div className="text-[#06402B] text-sm font-semibold">
                            {form.photo ? form.photo.name : 'Click to upload photo'}
                          </div>
                          <div className="text-[#3A8A5C] text-xs">PDF, JPG, PNG · Max 10 MB</div>
                        </div>
                        <input type="file" accept="image/*,.pdf" className="hidden"
                          onChange={e => setForm(prev => ({ ...prev, photo: e.target.files?.[0] ?? null }))} />
                      </label>
                    </div>

                    <button type="submit" disabled={loading}
                      className="btn-primary w-full justify-center text-base disabled:opacity-60 disabled:cursor-not-allowed">
                      {loading ? 'Submitting…' : 'SUBMIT REGISTRATION →'}
                    </button>
                    <p className="text-[#3A8A5C] text-xs text-center">After submitting, complete payment via QR code on the right</p>
                  </form>
                </div>
              </Scroll3DReveal>

              {/* Payment & QR */}
              <Scroll3DReveal direction="right">
                <div className="space-y-6">
                  <TiltCard intensity={6}>
                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-[#D6E8D2]">
                      <h3 className="font-bold text-[#06402B] text-xl mb-2">💳 Pay ₹200 via QR</h3>
                      <p className="text-[#3A8A5C] text-sm mb-6">Scan the QR code to complete your ₹200 registration payment</p>

                      <div className="flex justify-center mb-6">
                        <div className="relative w-56 h-56 rounded-2xl overflow-hidden border-4 border-[#06402B] shadow-lg">
                          <Image
                            src="/qr-green-talent-hunt.png"
                            alt="Scan to pay ₹200 — Green Talent Hunt Registration"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>

                      <div className="text-center mb-5">
                        <div className="text-2xl font-extrabold text-[#06402B]">Scan to Pay ₹200</div>
                        <div className="text-[#3A8A5C] text-sm mt-1">UPI · GPay · PhonePe · Paytm</div>
                      </div>

                      <div className="bg-[#D6E8D2] rounded-xl p-4 text-center">
                        <div className="text-[#06402B] font-semibold text-sm mb-1">📤 After Payment</div>
                        <div className="text-[#06402B] text-xs">Take a screenshot of the payment confirmation and keep it safe. You may be asked to share it for verification.</div>
                      </div>
                    </div>
                  </TiltCard>

                  <TiltCard intensity={5}>
                    <div className="bg-[#06402B] rounded-2xl p-6 text-white">
                      <div className="font-bold text-lg mb-4">📋 Exam Summary</div>
                      <div className="space-y-2 text-sm">
                        {[
                          ['Date', '5 June 2026 (Friday)'],
                          ['Mode', 'Online Exam'],
                          ['Classes', '4 to 12'],
                          ['Theme', 'Sustainability & Environmental Awareness'],
                          ['Fee', '₹200 only'],
                          ['Marking', 'No Negative Marking'],
                          ['Prizes', '₹50,000 Prize Pool'],
                        ].map(([k, v]) => (
                          <div key={k} className="flex justify-between gap-4">
                            <span className="text-[#A8C5A3]">{k}</span>
                            <span className="font-semibold text-right">{v}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-5 pt-4 border-t border-white/20 space-y-1.5">
                        <a href="tel:+919217917695" className="flex items-center gap-2 text-[#A8C5A3] hover:text-white transition-colors text-sm">
                          📱 +91-9217917695
                        </a>
                        <a href="mailto:info@mygreenmark.in" className="flex items-center gap-2 text-[#A8C5A3] hover:text-white transition-colors text-sm">
                          📧 info@mygreenmark.in
                        </a>
                      </div>
                    </div>
                  </TiltCard>
                </div>
              </Scroll3DReveal>
            </div>
          )}

          {step === 'success' && (
            <div className="max-w-lg mx-auto text-center bg-white rounded-2xl p-10 shadow-lg border border-[#D6E8D2]">
              <div className="text-6xl mb-5">🎉</div>
              <h3 className="text-2xl font-extrabold text-[#06402B] mb-3">Registration Submitted!</h3>
              <p className="text-[#06402B] mb-2">Thank you, <strong>{form.full_name}</strong>!</p>
              <p className="text-[#3A8A5C] text-sm mb-4">Your registration details have been received. A confirmation has been sent to <strong>info@mygreenmark.in</strong>.</p>
              <p className="text-[#3A8A5C] text-sm mb-6">Please complete the ₹200 payment by scanning the QR code and keep your payment screenshot safe.</p>
              <div className="flex justify-center mb-6">
                <div className="relative w-48 h-48 rounded-xl overflow-hidden border-4 border-[#06402B]">
                  <Image src="/qr-green-talent-hunt.png" alt="Pay ₹200" fill className="object-cover" />
                </div>
              </div>
              <Link href="/" className="btn-forest inline-flex">Back to Home</Link>
            </div>
          )}

          {step === 'error' && (
            <div className="max-w-lg mx-auto text-center bg-white rounded-2xl p-10 shadow-lg border border-red-200">
              <div className="text-6xl mb-5">⚠️</div>
              <h3 className="text-2xl font-extrabold text-[#06402B] mb-3">Something Went Wrong</h3>
              <p className="text-[#3A8A5C] text-sm mb-6">Please try again or contact us directly at <strong>info@mygreenmark.in</strong> or <strong>+91 92179 17695</strong>.</p>
              <button onClick={() => setStep('form')} className="btn-forest inline-flex">Try Again</button>
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

      {/* CTA */}
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
