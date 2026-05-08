import type { Metadata } from 'next'
import Link from 'next/link'
import Scroll3DReveal from '@/components/Scroll3DReveal'
import TiltCard from '@/components/TiltCard'

export const metadata: Metadata = {
  title: 'Impact Dashboard — My Green Mark',
  description: 'Real-time sustainability metrics — trees planted, CO₂ offset, farmers benefited, and ESG reports issued.',
}

const kpis = [
  { label: 'Trees Planted', value: '42,500+', icon: '🌳', change: '+3,200 this month', color: '#06402B' },
  { label: 'CO₂ Offset', value: '8,200 T', icon: '🌍', change: '+680 T this month', color: '#06402B' },
  { label: 'Farmers Benefited', value: '1,240', icon: '👨‍🌾', change: '+87 this quarter', color: '#3A8A5C' },
  { label: 'ESG Reports Issued', value: '312', icon: '📊', change: '+24 this month', color: '#06402B' },
  { label: 'Carbon Credits', value: '4,800', icon: '♻️', change: '320 available for sale', color: '#06402B' },
]

const monthlyData = [1200, 1800, 2400, 3200, 4200, 5800, 5000, 6500, 7200, 8000, 8500, 8400]
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const stateData = [
  { state: 'Maharashtra', trees: 8500, co2: '1,530 T', farmers: 284 },
  { state: 'West Bengal', trees: 6800, co2: '1,224 T', farmers: 198 },
  { state: 'Karnataka', trees: 5200, co2: '936 T', farmers: 145 },
  { state: 'Rajasthan', trees: 4800, co2: '864 T', farmers: 167 },
  { state: 'Gujarat', trees: 4200, co2: '756 T', farmers: 132 },
  { state: 'Uttar Pradesh', trees: 3800, co2: '684 T', farmers: 112 },
  { state: 'Others', trees: 9200, co2: '1,656 T', farmers: 202 },
]

export default function ImpactDashboardPage() {
  const maxValue = Math.max(...monthlyData)

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-forest-pattern py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="inline-block bg-[#F4B942]/20 text-[#F4B942] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">Live Data</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Impact Dashboard</h1>
              <p className="text-[#A8C5A3] mt-2">Real-time sustainability metrics across all My Green Mark operations</p>
            </div>
            <div className="flex items-center gap-2 bg-[#D6E8D2]/20 border border-[#3A8A5C]/30 px-4 py-2 rounded-full text-[#3A8A5C] text-sm">
              <span className="w-2 h-2 bg-[#3A8A5C] rounded-full animate-ping"></span>
              Live — Updated every 24 hours
            </div>
          </div>
        </div>
      </section>

      {/* KPI Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {kpis.map((kpi, i) => (
              <Scroll3DReveal key={kpi.label} direction="flip" delay={i * 80}>
                <TiltCard intensity={8} className="h-full">
                  <div className="stats-card rounded-2xl p-6 text-center h-full">
                    <div className="text-3xl mb-3">{kpi.icon}</div>
                    <div className="text-2xl sm:text-3xl font-extrabold mb-1" style={{ color: kpi.color }}>{kpi.value}</div>
                    <div className="text-[#06402B] font-semibold text-sm mb-1">{kpi.label}</div>
                    <div className="text-[#3A8A5C] text-xs">{kpi.change}</div>
                  </div>
                </TiltCard>
              </Scroll3DReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Charts */}
      <section className="py-16 bg-[#F7EDE2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Bar chart */}
            <Scroll3DReveal direction="left" delay={0}>
              <div className="bg-white rounded-2xl border border-[#D6E8D2] p-8">
                <h3 className="font-bold text-[#06402B] text-lg mb-6">Monthly Tree Plantation (2024)</h3>
                <div className="flex items-end gap-2 h-48 mb-3">
                  {monthlyData.map((v, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full rounded-t-lg transition-all hover:opacity-80"
                        style={{ height: `${(v / maxValue) * 100}%`, background: `linear-gradient(180deg, #3A8A5C, #06402B)` }}
                        title={`${months[i]}: ${v.toLocaleString('en-IN')} trees`}
                      ></div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-[#3A8A5C]">
                  {months.map((m) => <span key={m}>{m}</span>)}
                </div>
              </div>
            </Scroll3DReveal>

            {/* Line chart */}
            <Scroll3DReveal direction="right" delay={100}>
              <div className="bg-white rounded-2xl border border-[#D6E8D2] p-8">
                <h3 className="font-bold text-[#06402B] text-lg mb-6">Cumulative CO₂ Offset (Tonnes)</h3>
                <div className="relative h-48 mb-3">
                  <svg viewBox="0 0 300 120" className="w-full h-full" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3A8A5C" stopOpacity="0.3"/>
                        <stop offset="100%" stopColor="#3A8A5C" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                    <polygon points="0,105 50,82.5 100,57 150,33 200,18 250,7.5 300,3 300,120 0,120" fill="url(#areaGrad)"/>
                    <polyline points="0,105 50,82.5 100,57 150,33 200,18 250,7.5 300,3" fill="none" stroke="#06402B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    {[{x:0,y:105},{x:50,y:82.5},{x:100,y:57},{x:150,y:33},{x:200,y:18},{x:250,y:7.5},{x:300,y:3}].map((pt, i) => (
                      <circle key={i} cx={pt.x} cy={pt.y} r="3" fill="#F4B942" stroke="#06402B" strokeWidth="1.5"/>
                    ))}
                  </svg>
                </div>
                <div className="flex justify-between text-xs text-[#3A8A5C]">
                  <span>Q1: 1,200 T</span><span>Q2: 3,200 T</span><span>Q3: 5,800 T</span><span>Q4: 8,200 T</span>
                </div>
              </div>
            </Scroll3DReveal>
          </div>

          {/* ESG Progress bars */}
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <Scroll3DReveal direction="left" delay={0} className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-[#D6E8D2] p-7 h-full">
                <h3 className="font-bold text-[#06402B] text-lg mb-5">ESG Dimension Progress</h3>
                <div className="space-y-5">
                  {[
                    { label: 'Environmental', score: 78, target: 85, color: '#3A8A5C' },
                    { label: 'Social', score: 82, target: 90, color: '#F4B942' },
                    { label: 'Governance', score: 88, target: 95, color: '#06402B' },
                    { label: 'Overall ESG', score: 82, target: 90, color: '#3A8A5C' },
                  ].map((d) => (
                    <div key={d.label}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-semibold text-[#06402B]">{d.label}</span>
                        <span className="text-[#3A8A5C]">{d.score} / {d.target} target</span>
                      </div>
                      <div className="h-3 bg-[#D6E8D2] rounded-full overflow-hidden">
                        <div className="h-full rounded-full transition-all" style={{ width: `${d.score}%`, background: d.color }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Scroll3DReveal>

            <Scroll3DReveal direction="right" delay={100}>
              <div className="bg-white rounded-2xl border border-[#D6E8D2] p-7 h-full">
                <h3 className="font-bold text-[#06402B] text-lg mb-5">SDG Alignment</h3>
                <div className="grid grid-cols-3 gap-2">
                  {[{n:2,c:'#DDA63A'},{n:3,c:'#4C9F38'},{n:7,c:'#FCC30B'},{n:11,c:'#FD9D24'},{n:13,c:'#3F7E44'},{n:15,c:'#56C02B'},{n:17,c:'#19486A'},{n:8,c:'#A21942'},{n:12,c:'#BF8B2E'}].map((sdg) => (
                    <div key={sdg.n} className="rounded-lg p-2 text-center text-white text-xs font-bold flex items-center justify-center h-10" style={{ background: sdg.c }}>SDG {sdg.n}</div>
                  ))}
                </div>
                <p className="text-[#3A8A5C] text-xs mt-3">Aligned with 9 of 17 UN Sustainable Development Goals</p>
              </div>
            </Scroll3DReveal>
          </div>

          {/* State breakdown */}
          <Scroll3DReveal direction="up" delay={100}>
            <div className="bg-white rounded-2xl border border-[#D6E8D2] p-8">
              <h3 className="font-bold text-[#06402B] text-lg mb-6">State-wise Impact</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#F7EDE2]">
                      {['State', 'Trees Planted', 'CO₂ Offset', 'Farmers', 'Share'].map((h) => (
                        <th key={h} className="text-left text-[#06402B] text-xs font-bold uppercase px-4 py-3 first:rounded-tl-xl last:rounded-tr-xl">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#D6E8D2]">
                    {stateData.map((row) => (
                      <tr key={row.state} className="hover:bg-[#F7EDE2] transition-colors">
                        <td className="px-4 py-3 font-semibold text-[#06402B] text-sm">{row.state}</td>
                        <td className="px-4 py-3 text-[#06402B] text-sm">{row.trees.toLocaleString('en-IN')}</td>
                        <td className="px-4 py-3 text-[#06402B] text-sm">{row.co2}</td>
                        <td className="px-4 py-3 text-[#06402B] text-sm">{row.farmers}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <div className="flex-1 h-2 bg-[#D6E8D2] rounded-full overflow-hidden">
                              <div className="h-full bg-[#06402B] rounded-full" style={{ width: `${Math.round((row.trees / 42500) * 100)}%` }}></div>
                            </div>
                            <span className="text-[#3A8A5C] text-xs w-8">{Math.round((row.trees / 42500) * 100)}%</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Scroll3DReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#06402B]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Scroll3DReveal direction="up">
            <h2 className="text-2xl font-extrabold text-white mb-4">Want Your Organization&apos;s Impact Dashboard?</h2>
            <p className="text-[#A8C5A3] mb-8">Get a custom real-time ESG dashboard showing all your sustainability KPIs, plantation data, and carbon credits in one place.</p>
            <Link href="/contact" className="btn-primary inline-flex">Request Custom Dashboard</Link>
          </Scroll3DReveal>
        </div>
      </section>
    </main>
  )
}
