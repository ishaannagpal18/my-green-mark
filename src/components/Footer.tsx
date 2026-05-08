import Link from 'next/link'

const footerLinks = {
  Platform: [
    { label: 'Plantation Tracker', href: '/plantation-tracker' },
    { label: 'Carbon Exchange', href: '/carbon-exchange' },
    { label: 'ESG Solutions', href: '/esg-solutions' },
    { label: 'Impact Dashboard', href: '/impact-dashboard' },
    { label: 'Awareness Programs', href: '/awareness-programs' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Services', href: '/services' },
    { label: 'CSR Partnerships', href: '/csr-partnerships' },
    { label: 'Blog & News', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  Challenge: [
    { label: 'Green Talent Hunt 2026', href: '/sustainability-challenge' },
    { label: 'Register Now', href: '/sustainability-challenge#register' },
    { label: 'Prizes & Rewards', href: '/sustainability-challenge#rewards' },
    { label: 'For Schools', href: '/awareness-programs' },
  ],
}

const socialLinks = [
  { label: 'LinkedIn', href: '#', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
  )},
  { label: 'Twitter', href: '#', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
  )},
  { label: 'Instagram', href: '#', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
  )},
  { label: 'WhatsApp', href: '#', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
  )},
]

export default function Footer() {
  return (
    <footer className="bg-[#06402B] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 bg-[#F4B942] rounded-xl flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8 2 4 5 4 10C4 14 7 17 11 18V22H13V18C17 17 20 14 20 10C20 5 16 2 12 2Z" fill="#06402B"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-lg leading-none">My Green Mark</div>
                <div className="text-[#A8C5A3] text-xs mt-0.5">mygreenmark.in</div>
              </div>
            </div>
            <p className="text-[#A8C5A3] text-sm leading-relaxed mb-6 max-w-xs">
              Building a Transparent Future Through Sustainability. India&apos;s first integrated ESG & sustainability platform connecting businesses, farmers, and communities.
            </p>

            {/* Impact stats */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { value: '42,500+', label: 'Trees Planted' },
                { value: '8,200 T', label: 'CO₂ Offset' },
                { value: '1,240', label: 'Farmers Helped' },
                { value: '312', label: 'ESG Reports' },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#06402B]/50 rounded-xl p-3">
                  <div className="text-[#F4B942] font-bold text-lg">{stat.value}</div>
                  <div className="text-[#A8C5A3] text-xs">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Contact info */}
            <div className="mb-5 space-y-2 text-sm">
              <a href="tel:+919217917695" className="flex items-center gap-2 text-[#A8C5A3] hover:text-white transition-colors">
                <span>📱</span> +91 92179 17695
              </a>
              <a href="mailto:info@mygreenmark.in" className="flex items-center gap-2 text-[#A8C5A3] hover:text-white transition-colors">
                <span>📧</span> info@mygreenmark.in
              </a>
              <div className="flex items-start gap-2 text-[#A8C5A3]">
                <span>📍</span>
                <span>RZ-41/14, Block B, Sadh Nagar,<br/>Palam, New Delhi 110045</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 bg-[#06402B] hover:bg-[#F4B942] text-[#A8C5A3] hover:text-[#06402B] rounded-lg flex items-center justify-center transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-sm uppercase tracking-wider text-[#F4B942] mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#A8C5A3] hover:text-white text-sm transition-colors flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 bg-[#3A8A5C] rounded-full group-hover:bg-[#F4B942] transition-colors"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-[#06402B]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-bold text-base mb-1">Stay Updated on Sustainability</h4>
              <p className="text-[#A8C5A3] text-sm">Get ESG insights, carbon credit updates & challenge news</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 bg-[#06402B] text-white placeholder-[#3A8A5C] text-sm px-4 py-3 rounded-xl border border-[#3A8A5C] focus:outline-none focus:border-[#F4B942] transition-colors"
              />
              <button className="btn-primary whitespace-nowrap text-sm">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#0A2E18] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#3A8A5C]">
          <p>© 2026 My Green Mark. All rights reserved. Built for a greener India.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">BRSR Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
