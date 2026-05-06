import Link from 'next/link'
import ScrollReveal from './ScrollReveal'

const posts = [
  {
    category: 'ESG Insights',
    title: "India's BRSR Reporting: What Every Listed Company Must Know in 2025",
    excerpt: "SEBI mandated BRSR for top 1000 listed companies. Here's a complete guide to the 9 mandatory principles and how to score above 80.",
    date: 'April 28, 2025',
    readTime: '8 min read',
    slug: 'brsr-reporting-guide-2025',
    color: '#D6E8D2',
    textColor: '#14532D',
    gradient: 'from-[#14532D] to-[#14532D]',
  },
  {
    category: 'Carbon Markets',
    title: 'How Smallholder Farmers Can Now Access Carbon Credits in India',
    excerpt: "The voluntary carbon market has long excluded rural farmers. My Green Mark's aggregation model is changing that — here's how it works.",
    date: 'April 15, 2025',
    readTime: '6 min read',
    slug: 'farmer-carbon-credits-india',
    color: '#FEF3C7',
    textColor: '#92400E',
    gradient: 'from-[#14532D] to-[#3A8A5C]',
  },
  {
    category: 'Sustainability Challenge',
    title: 'Global Sustainability Challenge 2026: Everything Students Need to Know',
    excerpt: 'June 5, 2026 is World Environment Day — and the biggest sustainability competition for Indian school students. Registration, prizes, and how to prepare.',
    date: 'April 10, 2025',
    readTime: '5 min read',
    slug: 'sustainability-challenge-2026-guide',
    color: '#D6E8D2',
    textColor: '#14532D',
    gradient: 'from-[#3A8A5C] to-[#3A8A5C]',
  },
]

export default function BlogSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-15 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
            <div>
              <span className="inline-flex items-center gap-2 bg-[#D6E8D2] text-[#14532D] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
                <span className="w-2 h-2 bg-[#3A8A5C] rounded-full animate-pulse"></span>
                Latest Insights
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14532D]">Sustainability Intelligence</h2>
            </div>
            <Link href="/blog" className="btn-forest-solid text-sm flex-shrink-0">
              <span>View All Articles →</span>
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-7">
          {posts.map((post, i) => (
            <ScrollReveal key={post.slug} direction="up" delay={i * 100}>
              <Link href={`/blog/${post.slug}`} className="service-card overflow-hidden group block h-full flex flex-col">
                {/* Thumbnail */}
                <div className={`h-44 bg-gradient-to-br ${post.gradient} relative overflow-hidden flex-shrink-0`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-9xl opacity-10 group-hover:opacity-15 group-hover:scale-110 transition-all duration-500">🌿</div>
                  </div>
                  {/* Category pill */}
                  <span
                    className="absolute top-4 left-4 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm"
                    style={{ background: post.color, color: post.textColor }}
                  >
                    {post.category}
                  </span>
                  {/* Read time */}
                  <span className="absolute bottom-4 right-4 text-xs text-white/70 bg-black/20 px-2 py-1 rounded-full backdrop-blur-sm">
                    {post.readTime}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-[#14532D] text-base leading-snug mb-3 group-hover:text-[#14532D] transition-colors line-clamp-2 flex-1">{post.title}</h3>
                  <p className="text-[#3A8A5C] text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-[#3A8A5C] pt-3 border-t border-[#D6E8D2]">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1 font-semibold group-hover:text-[#14532D] transition-colors">
                      Read more
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
