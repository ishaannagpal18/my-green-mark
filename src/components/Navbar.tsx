'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  {
    label: 'Platform',
    href: '#',
    children: [
      { label: '🌱 Plantation Tracker', href: '/plantation-tracker', desc: 'GPS-verified plots' },
      { label: '♻️ Carbon Exchange', href: '/carbon-exchange', desc: 'Buy & sell credits' },
      { label: '📊 Impact Dashboard', href: '/impact-dashboard', desc: 'Live metrics' },
      { label: '📈 ESG Solutions', href: '/esg-solutions', desc: 'BRSR & consulting' },
      { label: '📣 Awareness', href: '/awareness-programs', desc: 'Workshops & campaigns' },
    ],
  },
  { label: 'Challenge 2026', href: '/sustainability-challenge', highlight: true },
  { label: 'CSR', href: '/csr-partnerships' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? 'glass-dark shadow-2xl shadow-black/30 py-1'
          : 'bg-transparent py-2'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative w-10 h-10 group-hover:scale-110 transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(244,185,66,0.6)]">
              <Image
                src="/My Green logo.jpeg"
                alt="My Green Mark"
                width={40}
                height={40}
                className="w-10 h-10 rounded-xl object-contain shadow-lg"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-bold text-base leading-none tracking-tight">My Green Mark</div>
              <div className="text-[#A8C5A3] text-[10px] leading-none mt-0.5 tracking-wider">SUSTAINABILITY PLATFORM</div>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="nav-link flex items-center gap-1.5">
                    {link.label}
                    <svg
                      width="10" height="10" viewBox="0 0 10 10"
                      className={`transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`}
                      fill="none" stroke="currentColor" strokeWidth="1.5"
                    >
                      <path d="M2 3.5l3 3 3-3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-60 rounded-2xl shadow-2xl border border-[#D6E8D2] overflow-hidden transition-all duration-300 ${
                      activeDropdown === link.label
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
                    style={{ background: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(20px)' }}
                  >
                    <div className="h-1 bg-gradient-to-r from-[#14532D] via-[#3A8A5C] to-[#F4B942]"></div>
                    {link.children.map((child, i) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex items-start gap-3 px-4 py-3 hover:bg-[#F7EDE2] transition-colors group/item border-b border-[#D6E8D2]/50 last:border-0"
                        style={{ animationDelay: `${i * 50}ms` }}
                      >
                        <span className="text-lg mt-0.5">{child.label.split(' ')[0]}</span>
                        <div>
                          <div className="text-[#14532D] text-sm font-semibold group-hover/item:text-[#3A8A5C] transition-colors">
                            {child.label.replace(/^[^ ]+ /, '')}
                          </div>
                          <div className="text-[#3A8A5C] text-xs">{child.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (link as { highlight?: boolean }).highlight ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-1.5 bg-[#F4B942]/20 hover:bg-[#F4B942]/30 text-[#F4B942] text-sm font-semibold px-3 py-2 rounded-lg transition-all border border-[#F4B942]/30 hover:border-[#F4B942]/60"
                >
                  <span className="w-1.5 h-1.5 bg-[#F4B942] rounded-full animate-pulse"></span>
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${pathname === link.href ? 'text-[#F4B942]' : ''}`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* ── CTA Buttons ── */}
          <div className="hidden lg:flex items-center gap-2.5">
            <Link href="/sustainability-challenge" className="text-[#F4B942] text-sm font-semibold px-4 py-2 rounded-xl border border-[#F4B942]/30 hover:bg-[#F4B942]/10 transition-all">
              Join Challenge
            </Link>
            <Link href="/contact" className="btn-glow text-sm px-5 py-2.5 sheen">
              Book Consultation
            </Link>
          </div>

          {/* ── Mobile toggle ── */}
          <button
            className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 rounded-xl hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}/>
            <span className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`}/>
            <span className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}/>
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu ── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${mobileOpen ? 'max-h-screen' : 'max-h-0'}`}
        style={{ background: 'rgba(10,46,24,0.98)', backdropFilter: 'blur(20px)' }}
      >
        <div className="px-4 py-5 space-y-1">
          {navLinks.map((link) => (
            <div key={link.label}>
              {link.children ? (
                <>
                  <div className="text-[#3A8A5C] text-[10px] font-bold uppercase tracking-widest px-3 py-2 mt-3">{link.label}</div>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="flex items-center gap-3 text-[#D6E8D2] hover:text-[#F4B942] text-sm px-4 py-2.5 rounded-xl hover:bg-white/5 transition-all"
                    >
                      <span>{child.label}</span>
                    </Link>
                  ))}
                </>
              ) : (
                <Link
                  href={link.href}
                  className={`block text-sm font-medium px-3 py-2.5 rounded-xl transition-all ${
                    (link as { highlight?: boolean }).highlight
                      ? 'text-[#F4B942] bg-[#F4B942]/10 border border-[#F4B942]/20'
                      : 'text-[#D6E8D2] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <div className="flex flex-col gap-3 mt-5 pt-5 border-t border-white/10">
            <Link href="/sustainability-challenge" className="btn-glow justify-center text-sm">Join Challenge 2026 →</Link>
            <Link href="/contact" className="btn-forest-solid justify-center text-sm"><span>Book ESG Consultation</span></Link>
          </div>
        </div>
      </div>
    </header>
  )
}
