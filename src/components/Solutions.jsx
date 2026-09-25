'use client'

import Link from 'next/link'

export default function Solutions({ d, locale = 'he' }){
  const he = locale === 'he'
  return (
    <section id="solutions" className="py-20 md:py-28 scroll-mt-24">
      <div className="container-page">
        <div className="max-w-2xl mx-auto text-center reveal">
          <span className="eyebrow">{d.solutionsEyebrow}</span>
          <h2 className="display mt-5 text-3xl md:text-5xl text-[var(--text)]">{d.solutionsTitle}</h2>
          <p className="mt-4 text-lg text-[var(--muted)] leading-relaxed">{d.solutionsSub}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {d.solutions.map((s, i) => (
            <Link
              key={s.slug}
              href={`/${locale}/solutions/${s.slug}`}
              className="reveal group relative rounded-[var(--radius-xl)] overflow-hidden shadow-[var(--shadow-md)] border border-[var(--border)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lg)]"
              style={{ transitionDelay:`${(i % 4) * 70}ms` }}
            >
              <div className="aspect-[4/5] w-full bg-[var(--surface-2)] overflow-hidden">
                <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
              {/* badge */}
              <span className="absolute top-3 inset-inline-start-3 text-[11px] font-bold text-white px-2.5 py-1 rounded-full shadow-[var(--shadow-sm)]" style={{ background:'var(--grad)' }}>
                {s.badge}
              </span>
              {/* bottom overlay */}
              <div className="absolute inset-x-0 bottom-0 p-4 pt-14" style={{ background:'linear-gradient(to top, rgba(9,11,20,.92) 20%, rgba(9,11,20,.55) 55%, transparent)' }}>
                <h3 className="text-white font-bold text-lg leading-tight">{s.title}</h3>
                <p className="mt-1 text-white/80 text-[13px] leading-snug">{s.tagline}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-white text-[13px] font-semibold">
                  {d.solutionsCta}
                  <svg viewBox="0 0 24 24" className="w-4 h-4 transition-transform group-hover:-translate-x-0.5 rtl:group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d={he ? 'M11 5l-7 7 7 7' : 'M13 5l7 7-7 7'}/><path d={he ? 'M4 12h16' : 'M20 12H4'}/></svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
