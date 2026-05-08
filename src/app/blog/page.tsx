import type { Metadata } from 'next'
import Link from 'next/link'
import Scroll3DReveal from '@/components/Scroll3DReveal'
import TiltCard from '@/components/TiltCard'

export const metadata: Metadata = {
  title: 'Blog — My Green Mark',
  description: 'Latest insights on ESG, BRSR compliance, carbon markets, and sustainability in India.',
}

const posts = [
  {
    slug: 'brsr-reporting-guide-2025',
    category: 'ESG Insights',
    title: "India's BRSR Reporting: What Every Listed Company Must Know in 2025",
    excerpt: "SEBI mandated BRSR for the top 1000 listed companies. Here's a complete guide to the 9 mandatory principles, disclosure requirements, and how to score above 80 on your ESG assessment.",
    date: 'April 28, 2025',
    readTime: '8 min read',
    author: 'Deepa Krishnan',
    tags: ['BRSR', 'SEBI', 'ESG Reporting'],
  },
  {
    slug: 'farmer-carbon-credits-india',
    category: 'Carbon Markets',
    title: 'How Smallholder Farmers Can Access Carbon Credits in India',
    excerpt: "The voluntary carbon market has long excluded rural India's 120 million smallholder farmers. My Green Mark's aggregation model is changing that — here's the complete guide.",
    date: 'April 15, 2025',
    readTime: '6 min read',
    author: 'Rahul Gupta',
    tags: ['Carbon Credits', 'Farmers', 'Rural India'],
  },
  {
    slug: 'sustainability-challenge-2026-guide',
    category: 'Events',
    title: 'Green Talent Hunt 2026: Everything Students Need to Know',
    excerpt: 'June 5, 2026 — the biggest sustainability competition for Indian school students. Registration process, exam format, prizes, and preparation tips.',
    date: 'April 10, 2025',
    readTime: '5 min read',
    author: 'Priya Nair',
    tags: ['Challenge 2026', 'Students', 'Education'],
  },
  {
    slug: 'gps-plantation-tracking-india',
    category: 'Technology',
    title: 'Why GPS-Tracked Plantations Are the Future of Corporate CSR',
    excerpt: "Billions are spent annually on CSR plantations in India with zero accountability. GPS tracking changes everything — here's why it matters for BRSR compliance.",
    date: 'March 25, 2025',
    readTime: '7 min read',
    author: 'Arjun Verma',
    tags: ['GPS Tracking', 'CSR', 'Technology'],
  },
  {
    slug: 'india-esg-market-2030',
    category: 'Market Insights',
    title: "India's ESG Compliance Market: ₹45,000 Crore Opportunity by 2030",
    excerpt: 'With SEBI mandates, investor pressure, and global supply chain requirements, India\'s ESG market is exploding. Who are the key players and what opportunities exist?',
    date: 'March 10, 2025',
    readTime: '10 min read',
    author: 'Arjun Verma',
    tags: ['Market Analysis', 'ESG India', 'Opportunity'],
  },
  {
    slug: 'net-zero-roadmap-indian-companies',
    category: 'ESG Insights',
    title: 'Building a Net-Zero Roadmap for Indian Companies: A Practical Guide',
    excerpt: "Science-based targets, interim milestones, and measurable actions — how Indian companies can credibly commit to and achieve net-zero emissions by 2050.",
    date: 'February 28, 2025',
    readTime: '9 min read',
    author: 'Deepa Krishnan',
    tags: ['Net-Zero', 'Sustainability Strategy', 'Climate'],
  },
]

const categories = ['All', 'ESG Insights', 'Carbon Markets', 'Events', 'Technology', 'Market Insights']

export default function BlogPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-forest-pattern py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#F4B942]/20 text-[#F4B942] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-5">Blog & Insights</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">Sustainability Intelligence</h1>
          <p className="text-[#D6E8D2] text-xl max-w-3xl mx-auto">Expert insights on ESG, BRSR compliance, carbon markets, and India&apos;s sustainability transformation.</p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white border-b border-[#D6E8D2] sticky top-[72px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button key={cat} className={`text-sm font-medium px-4 py-2 rounded-full transition-colors ${cat === 'All' ? 'bg-[#06402B] text-white' : 'bg-[#D6E8D2] text-[#06402B] hover:bg-[#06402B] hover:text-white'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 bg-[#F7EDE2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {posts.map((post, i) => (
              <Scroll3DReveal key={post.slug} direction="up" delay={i * 80}>
                <TiltCard intensity={8} className="h-full">
                  <Link href={`/blog/${post.slug}`} className="service-card overflow-hidden group block h-full">
                    <div className="h-44 bg-gradient-to-br from-[#06402B] to-[#06402B] relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center opacity-10 text-[120px]">🌿</div>
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="bg-[#F4B942] text-[#06402B] text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-[#06402B] text-base leading-snug mb-3 group-hover:text-[#06402B] transition-colors">{post.title}</h3>
                      <p className="text-[#3A8A5C] text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {post.tags.map((tag) => (
                          <span key={tag} className="bg-[#D6E8D2] text-[#06402B] text-xs px-2 py-1 rounded-full">{tag}</span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-xs text-[#3A8A5C] pt-4 border-t border-[#D6E8D2]">
                        <span>By {post.author}</span>
                        <div className="flex items-center gap-3">
                          <span>{post.date}</span>
                          <span>· {post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </TiltCard>
              </Scroll3DReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-[#06402B]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <Scroll3DReveal direction="up">
            <h2 className="text-2xl font-extrabold text-white mb-3">Stay Updated</h2>
            <p className="text-[#A8C5A3] mb-6">Get ESG insights, carbon market updates, and sustainability news delivered to your inbox every week.</p>
            <div className="flex gap-3">
              <input type="email" placeholder="Enter your email" className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F4B942] transition-colors"/>
              <button className="btn-primary whitespace-nowrap text-sm">Subscribe</button>
            </div>
          </Scroll3DReveal>
        </div>
      </section>
    </main>
  )
}
