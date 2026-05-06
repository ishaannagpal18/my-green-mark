'use client'

import { useState } from 'react'
import Link from 'next/link'

const rewards = [
  { icon: '💰', title: '₹50,000 Prize Pool', desc: 'Cash prizes across 5 categories' },
  { icon: '📜', title: 'Digital Certificates', desc: 'Blockchain-verified participation certificates' },
  { icon: '🏅', title: 'Sustainability Badges', desc: 'Shareable digital achievement badges' },
  { icon: '🌳', title: 'Plot Ownership', desc: 'GPS-assigned plantation plot protector title' },
  { icon: '🌿', title: 'Green Twin Access', desc: 'Join the Green Twin community network' },
  { icon: '👑', title: 'Protector Title', desc: 'Become "Protector of Plot 104A" — Sundarbans' },
]

const timeline = [
  { date: 'May 1, 2026', event: 'Registrations Open', desc: 'Online registration at ₹200/student' },
  { date: 'May 25, 2026', event: 'Registration Closes', desc: 'Last date to register and pay' },
  { date: 'June 1, 2026', event: 'Challenge Materials', desc: 'Study materials & guidelines released' },
  { date: 'June 5, 2026', event: 'Challenge Day', desc: 'World Environment Day — Main event' },
  { date: 'June 15, 2026', event: 'Results & Awards', desc: 'Winners announced, certificates issued' },
]

const faqs = [
  { q: 'Who can participate?', a: 'Students of Classes 4 to 12 from any school in India. Both CBSE and state board students are eligible.' },
  { q: 'What is the registration fee?', a: '₹200 per student. Payment can be made via UPI, GPay, PhonePe, or Paytm by scanning the QR code.' },
  { q: 'What topics are covered?', a: 'The challenge covers climate change, carbon emissions, ESG, biodiversity, sustainable development goals (SDGs), and environmental conservation.' },
  { q: 'How is the competition conducted?', a: 'It\'s an online challenge with MCQs, short answers, and a sustainability project submission. Classes 4-7 and 8-12 have separate papers.' },
  { q: 'What is the Green Twin feature?', a: 'After registration, you are matched with a student from a different state protecting the same ecosystem. You collaborate, compete, and grow together.' },
  { q: 'When will I receive my certificate?', a: 'All participants receive a digital certificate within 10 days of the challenge. Winners receive additional physical certificates and prizes.' },
]

export default function SustainabilityChallengeClient() {
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
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-[#F4B942]/20 border border-[#F4B942]/40 text-[#F4B942] text-xs font-semibold px-4 py-2 rounded-full mb-6">
            <span className="text-lg">🌍</span> FLAGSHIP EVENT · WORLD ENVIRONMENT DAY
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-4">
            Global Sustainability
            <br />
            <span className="text-[#F4B942]">Challenge 2026</span>
          </h1>
          <div className="inline-flex items-center gap-2 bg-[#F4B942] text-[#14532D] font-bold text-lg px-6 py-3 rounded-full mb-6">
            📅 June 5th, 2026 — World Environment Day
          </div>
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8 text-white">
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-2xl font-bold text-[#F4B942]">Classes 4–12</div>
              <div className="text-[#A8C5A3] text-sm">Target Audience</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-2xl font-bold text-[#F4B942]">₹50,000</div>
              <div className="text-[#A8C5A3] text-sm">Prize Pool</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-2xl font-bold text-[#F4B942]">₹200</div>
              <div className="text-[#A8C5A3] text-sm">Registration Fee</div>
            </div>
          </div>
          <a href="#register" className="btn-primary text-base inline-flex">Register Now — ₹200</a>
        </div>
      </section>

      {/* Rewards */}
      <section className="py-20 bg-[#F7EDE2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-[#D6E8D2] text-[#14532D] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">Rewards</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14532D] mb-4">What You Win</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {rewards.map((r) => (
              <div key={r.title} className="service-card p-7 text-center">
                <div className="text-4xl mb-4">{r.icon}</div>
                <h3 className="font-bold text-[#14532D] text-lg mb-2">{r.title}</h3>
                <p className="text-[#3A8A5C] text-sm">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Green Twin Feature */}
      <section className="py-20 bg-[#14532D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#F4B942]/20 text-[#F4B942] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-5">Exclusive Feature</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5">Meet Your Green Twin! 🌿</h2>
              <p className="text-[#D6E8D2] text-lg leading-relaxed mb-6">
                After registering, you&apos;re matched with a student from a different state who is protecting the same ecosystem. Together, you&apos;ll compete, collaborate, and grow as sustainability champions.
              </p>
              <ul className="space-y-3">
                {['Community building across states', 'Peer engagement & learning', 'Gamified joint missions', 'Leaderboard rankings', 'Shared ecosystem protection'].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-[#A8C5A3]">
                    <svg width="16" height="16" fill="#3A8A5C" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-8">
              <div className="font-bold text-white mb-5">🌍 Sample Green Twin Connection</div>
              <div className="bg-[#D6E8D2] rounded-xl p-5 mb-4 text-[#14532D]">
                <div className="font-bold text-lg">🎉 Congratulations, Arjun Sharma!</div>
                <div className="text-sm mt-2">You are now the Protector of:</div>
                <div className="font-extrabold text-xl my-1">Plot 104A — Sundarbans, WB</div>
                <div className="text-xs text-[#14532D]">GPS: 21.9497° N, 89.1833° E · Mangrove Forest · 25 sq.m</div>
              </div>
              <div className="bg-white/15 rounded-xl p-5 text-white">
                <div className="font-semibold mb-2">🌿 Your Green Twin:</div>
                <div className="font-bold">Priya Patel from Ahmedabad</div>
                <div className="text-[#A8C5A3] text-sm">Also protecting the Sundarbans ecosystem</div>
                <div className="flex gap-2 mt-3">
                  {['Peer engagement', 'Joint missions', 'Leaderboard'].map((tag) => (
                    <span key={tag} className="bg-[#3A8A5C]/30 text-[#D6E8D2] text-xs px-2 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14532D] mb-4">Event Timeline</h2>
          </div>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-0.5 timeline-line"></div>
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={item.date} className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white text-sm font-bold z-10" style={{ background: i === 3 ? '#F4B942' : '#14532D', color: i === 3 ? '#14532D' : 'white' }}>{i + 1}</div>
                  <div className="bg-[#F7EDE2] rounded-xl p-5 flex-1">
                    <div className="text-[#3A8A5C] text-xs font-bold mb-1">{item.date}</div>
                    <div className="font-bold text-[#14532D] text-base">{item.event}</div>
                    <div className="text-[#14532D] text-sm mt-1">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="py-20 bg-[#F7EDE2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14532D] mb-4">Register Now</h2>
            <p className="text-[#14532D] text-lg">Join thousands of students across India for the Global Sustainability Challenge 2026</p>
          </div>

          {step === 1 ? (
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Form */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-[#D6E8D2]">
                <h3 className="font-bold text-[#14532D] text-xl mb-6">📋 Registration Form</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-[#14532D] text-xs font-semibold mb-1.5 block">Student Name *</label>
                    <input required type="text" placeholder="Arjun Sharma" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full border border-[#D6E8D2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#14532D] text-[#14532D] bg-white"/>
                  </div>
                  <div>
                    <label className="text-[#14532D] text-xs font-semibold mb-1.5 block">School Name *</label>
                    <input required type="text" placeholder="DPS Ahmedabad" value={formData.school} onChange={e => setFormData({...formData, school: e.target.value})} className="w-full border border-[#D6E8D2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#14532D] text-[#14532D] bg-white"/>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[#14532D] text-xs font-semibold mb-1.5 block">Class (4–12) *</label>
                      <select required value={formData.class} onChange={e => setFormData({...formData, class: e.target.value})} className="w-full border border-[#D6E8D2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#14532D] text-[#14532D] bg-white">
                        <option value="">Select</option>
                        {[4,5,6,7,8,9,10,11,12].map(c => <option key={c} value={c}>Class {c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-[#14532D] text-xs font-semibold mb-1.5 block">City *</label>
                      <input required type="text" placeholder="Ahmedabad" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} className="w-full border border-[#D6E8D2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#14532D] text-[#14532D] bg-white"/>
                    </div>
                  </div>
                  <div>
                    <label className="text-[#14532D] text-xs font-semibold mb-1.5 block">State *</label>
                    <input required type="text" placeholder="Gujarat" value={formData.state} onChange={e => setFormData({...formData, state: e.target.value})} className="w-full border border-[#D6E8D2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#14532D] text-[#14532D] bg-white"/>
                  </div>
                  <div>
                    <label className="text-[#14532D] text-xs font-semibold mb-1.5 block">Parent&apos;s Email *</label>
                    <input required type="email" placeholder="parent@email.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full border border-[#D6E8D2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#14532D] text-[#14532D] bg-white"/>
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">SUBMIT & PROCEED TO PAYMENT →</button>
                </form>
              </div>

              {/* Payment */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-[#D6E8D2]">
                <h3 className="font-bold text-[#14532D] text-xl mb-6">💳 Payment — Scan to Pay</h3>
                <div className="flex items-center justify-center mb-6">
                  {/* QR Code placeholder */}
                  <div className="w-48 h-48 bg-[#14532D] rounded-xl grid grid-cols-7 gap-1 p-3">
                    {Array.from({length: 49}, (_, i) => (
                      <div key={i} className="rounded-sm" style={{ background: Math.random() > 0.4 ? 'white' : 'transparent' }}></div>
                    ))}
                  </div>
                </div>
                <div className="text-center mb-6">
                  <div className="text-3xl font-extrabold text-[#14532D] mb-1">Scan to Pay ₹200</div>
                  <div className="text-[#3A8A5C] text-sm">UPI · GPay · PhonePe · Paytm</div>
                </div>
                <div className="bg-[#D6E8D2] rounded-xl p-4 text-center">
                  <div className="text-[#14532D] font-semibold text-sm">📤 Upload Payment Screenshot to Complete Registration</div>
                  <button className="mt-3 border-2 border-[#14532D] text-[#14532D] text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#14532D] hover:text-white transition-colors">Upload Screenshot</button>
                </div>
                <div className="mt-4 text-[#3A8A5C] text-xs text-center">
                  UPI ID: mygreenmark@upi · Account verified ✓
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-lg mx-auto text-center bg-white rounded-2xl p-10 shadow-lg border border-[#D6E8D2]">
              <div className="text-6xl mb-5">🎉</div>
              <h3 className="text-2xl font-extrabold text-[#14532D] mb-3">Registration Submitted!</h3>
              <p className="text-[#14532D] mb-2">Thank you, <strong>{formData.name}</strong>!</p>
              <p className="text-[#3A8A5C] text-sm mb-6">Please complete the payment and upload your screenshot. Your registration will be confirmed within 24 hours.</p>
              <Link href="/" className="btn-forest inline-flex">Back to Home</Link>
            </div>
          )}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#14532D] mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-[#D6E8D2] rounded-xl p-6">
                <div className="font-bold text-[#14532D] mb-2">Q: {faq.q}</div>
                <div className="text-[#14532D] text-sm leading-relaxed">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
