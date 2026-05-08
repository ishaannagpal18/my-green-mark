'use client'

import { useState } from 'react'
import Link from 'next/link'
import Scroll3DReveal from '@/components/Scroll3DReveal'
import TiltCard from '@/components/TiltCard'

const offices = [
  { city: 'New Delhi', address: 'RZ-41/14, Block B, Sadh Nagar, Palam, New Delhi, Delhi 110045', phone: '+91 92179 17695', email: 'info@mygreenmark.in' },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-forest-pattern py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#F4B942]/20 text-[#F4B942] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-5">Get In Touch</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">Contact My Green Mark</h1>
          <p className="text-[#D6E8D2] text-xl max-w-2xl mx-auto">Book an ESG consultation, enquire about plantation sponsorship, or connect with our team. We respond within 24 hours.</p>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="py-20 bg-[#F7EDE2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              {!submitted ? (
                <Scroll3DReveal direction="left">
                  <div className="bg-white rounded-2xl shadow-lg border border-[#D6E8D2] p-10">
                    <h2 className="text-2xl font-extrabold text-[#06402B] mb-2">Send Us a Message</h2>
                    <p className="text-[#3A8A5C] text-sm mb-7">Fill out the form and our team will get back to you within 24 hours.</p>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="text-[#06402B] text-xs font-semibold mb-1.5 block">Your Name *</label>
                          <input required type="text" placeholder="Rajesh Sharma" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full border border-[#D6E8D2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#06402B] text-[#06402B] bg-white"/>
                        </div>
                        <div>
                          <label className="text-[#06402B] text-xs font-semibold mb-1.5 block">Company / Organisation</label>
                          <input type="text" placeholder="Acme Corp" value={form.company} onChange={e => setForm({...form, company: e.target.value})} className="w-full border border-[#D6E8D2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#06402B] text-[#06402B] bg-white"/>
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="text-[#06402B] text-xs font-semibold mb-1.5 block">Email Address *</label>
                          <input required type="email" placeholder="rajesh@company.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full border border-[#D6E8D2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#06402B] text-[#06402B] bg-white"/>
                        </div>
                        <div>
                          <label className="text-[#06402B] text-xs font-semibold mb-1.5 block">Phone Number</label>
                          <input type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="w-full border border-[#D6E8D2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#06402B] text-[#06402B] bg-white"/>
                        </div>
                      </div>
                      <div>
                        <label className="text-[#06402B] text-xs font-semibold mb-1.5 block">I&apos;m interested in *</label>
                        <select required value={form.service} onChange={e => setForm({...form, service: e.target.value})} className="w-full border border-[#D6E8D2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#06402B] text-[#06402B] bg-white">
                          <option value="">Select a service</option>
                          <option>ESG Consulting & BRSR Reporting</option>
                          <option>Plantation Sponsorship</option>
                          <option>Carbon Credit Trading</option>
                          <option>Subscription ESG Plans</option>
                          <option>CSR Partnership</option>
                          <option>Green Talent Hunt 2026</option>
                          <option>Farmer Carbon Registration</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-[#06402B] text-xs font-semibold mb-1.5 block">Your Message *</label>
                        <textarea required rows={4} placeholder="Tell us about your sustainability goals, current challenges, and what you hope to achieve..." value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full border border-[#D6E8D2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#06402B] text-[#06402B] bg-white resize-none"/>
                      </div>
                      <button type="submit" className="btn-primary w-full justify-center text-base">Send Message →</button>
                      <p className="text-[#3A8A5C] text-xs text-center">We respond within 24 hours · Your data is safe with us</p>
                    </form>
                  </div>
                </Scroll3DReveal>
              ) : (
                <div className="bg-white rounded-2xl shadow-lg border border-[#D6E8D2] p-10 text-center">
                  <div className="text-6xl mb-5">✅</div>
                  <h2 className="text-2xl font-extrabold text-[#06402B] mb-3">Message Sent!</h2>
                  <p className="text-[#06402B] mb-2">Thank you, <strong>{form.name}</strong>! We&apos;ve received your message.</p>
                  <p className="text-[#3A8A5C] text-sm mb-6">Our team will get back to you at <strong>{form.email}</strong> within 24 hours.</p>
                  <Link href="/" className="btn-forest inline-flex">Back to Home</Link>
                </div>
              )}
            </div>

            {/* Contact info sidebar */}
            <Scroll3DReveal direction="right" delay={100}>
              <div className="space-y-5">
                {/* Quick contact */}
                <TiltCard intensity={5}>
                  <div className="bg-[#06402B] rounded-2xl p-7 text-white">
                    <h3 className="font-bold text-lg mb-5">Quick Connect</h3>
                    <div className="space-y-4">
                      <a href="tel:+919217917695" className="flex items-center gap-3 text-[#D6E8D2] hover:text-white transition-colors">
                        <div className="w-9 h-9 bg-[#06402B] rounded-lg flex items-center justify-center text-lg">📱</div>
                        <div>
                          <div className="text-xs text-[#3A8A5C]">Call / WhatsApp</div>
                          <div className="text-sm font-semibold">+91 92179 17695</div>
                        </div>
                      </a>
                      <a href="mailto:info@mygreenmark.in" className="flex items-center gap-3 text-[#D6E8D2] hover:text-white transition-colors">
                        <div className="w-9 h-9 bg-[#06402B] rounded-lg flex items-center justify-center text-lg">📧</div>
                        <div>
                          <div className="text-xs text-[#3A8A5C]">Email</div>
                          <div className="text-sm font-semibold">info@mygreenmark.in</div>
                        </div>
                      </a>
                      <a href="https://mygreenmark.in" className="flex items-center gap-3 text-[#D6E8D2] hover:text-white transition-colors">
                        <div className="w-9 h-9 bg-[#06402B] rounded-lg flex items-center justify-center text-lg">🌐</div>
                        <div>
                          <div className="text-xs text-[#3A8A5C]">Website</div>
                          <div className="text-sm font-semibold">mygreenmark.in</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </TiltCard>

                {/* Offices */}
                <div className="bg-white rounded-2xl border border-[#D6E8D2] p-7">
                  <h3 className="font-bold text-[#06402B] text-lg mb-5">Our Offices</h3>
                  <div className="space-y-4">
                    {offices.map((office) => (
                      <TiltCard key={office.city} intensity={6}>
                        <div className="border-b border-[#D6E8D2] last:border-0 pb-4 last:pb-0">
                          <div className="font-bold text-[#06402B] text-sm mb-1">📍 {office.city}</div>
                          <div className="text-[#3A8A5C] text-xs">{office.address}</div>
                          <div className="text-[#3A8A5C] text-xs mt-1">{office.email}</div>
                        </div>
                      </TiltCard>
                    ))}
                  </div>
                </div>

                {/* Response time */}
                <TiltCard intensity={5}>
                  <div className="bg-[#D6E8D2] rounded-2xl p-5">
                    <div className="font-bold text-[#06402B] mb-2">⚡ Response Time</div>
                    <div className="space-y-1.5 text-sm text-[#06402B]">
                      <div className="flex justify-between"><span>General enquiries</span><strong>24 hrs</strong></div>
                      <div className="flex justify-between"><span>ESG consultation</span><strong>Same day</strong></div>
                      <div className="flex justify-between"><span>Plantation enquiry</span><strong>12 hrs</strong></div>
                      <div className="flex justify-between"><span>Carbon credits</span><strong>24 hrs</strong></div>
                    </div>
                  </div>
                </TiltCard>
              </div>
            </Scroll3DReveal>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-72 bg-[#0A2E18] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: 'repeating-linear-gradient(0deg, #06402B 0px, #06402B 1px, transparent 1px, transparent 50px), repeating-linear-gradient(90deg, #06402B 0px, #06402B 1px, transparent 1px, transparent 50px)' }}></div>
        <div className="absolute inset-0 flex items-center justify-center flex-col gap-3 text-white">
          <div className="text-4xl">📍</div>
          <div className="font-bold text-lg">Find us on Map</div>
          <div className="text-[#A8C5A3] text-sm">RZ-41/14, Block B, Sadh Nagar, Palam, New Delhi 110045</div>
          <a href="https://maps.google.com/maps?q=RZ-41/14+Block+B+Sadh+Nagar+Palam+New+Delhi+110045" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">Open in Google Maps</a>
        </div>
      </section>
    </main>
  )
}
