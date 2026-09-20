'use client'

const ICONS = [
  // apps
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18"/><path d="M8 6h.01M11 6h.01"/><path d="M8.5 13.5 7 15l1.5 1.5"/><path d="M13 13l-2 4"/></svg>,
  // automation
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.5 6H14a4 4 0 0 1 4 4v5.5"/><path d="M13 3.5 15.5 6 13 8.5"/></svg>,
  // AI
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v3M12 18v3M5 12H2M22 12h-3M6 6l-1.5-1.5M19.5 19.5 18 18M18 6l1.5-1.5M4.5 19.5 6 18"/><circle cx="12" cy="12" r="4"/></svg>,
]

export default function Offerings({ d, locale = 'he' }){
  const he = locale === 'he'
  return (
    <section id="services" className="py-20 md:py-28 scroll-mt-24 relative overflow-hidden" style={{ background:'linear-gradient(180deg,#ffffff 0%,#f4f3ff 100%)' }}>
      <div className="glow-blob w-[420px] h-[420px] -top-20 inset-inline-end-[-120px]" style={{ background:'rgba(124,58,237,.14)' }} />
      <div className="container-page relative">
        <div className="max-w-2xl mx-auto text-center reveal">
          <span className="eyebrow">{he ? 'שירותים' : 'Services'}</span>
          <h2 className="display mt-5 text-3xl md:text-5xl text-[var(--text)]">{d.servicesTitle}</h2>
          <p className="mt-4 text-lg text-[var(--muted)] leading-relaxed">{d.servicesSub}</p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {d.services.map(([title, desc], i) => {
            const meta = d.serviceMeta[i] || { tag:'', points:[] }
            return (
              <article
                key={title}
                className="reveal group relative card-surface p-7 md:p-8 flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lg)] hover:border-[var(--border-strong)]"
                style={{ transitionDelay:`${i*60}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl grid place-items-center text-white shadow-[0_10px_24px_-8px_rgba(124,58,237,.5)]" style={{ background:'var(--grad)' }}>
                  <span className="w-7 h-7 block [&_svg]:w-full [&_svg]:h-full">{ICONS[i]}</span>
                </div>
                <span className="mt-5 inline-flex w-fit text-xs font-semibold text-[var(--muted)] bg-[var(--surface-2)] border border-[var(--border)] rounded-full px-3 py-1 force-ltr">{meta.tag}</span>
                <h3 className="mt-4 text-xl font-bold text-[var(--text)]">{title}</h3>
                <p className="mt-2.5 text-[15px] text-[var(--muted)] leading-relaxed">{desc}</p>
                <ul className="mt-5 pt-5 border-t border-[var(--border)] space-y-2.5">
                  {meta.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-[14px] text-[var(--text)]">
                      <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full grid place-items-center text-white" style={{ background:'var(--grad)' }}>
                        <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7"/></svg>
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
                {/* colorful top accent bar */}
                <span className="pointer-events-none absolute inset-x-0 top-0 h-1.5 rounded-t-[var(--radius-lg)]" style={{ background:'var(--grad)' }} />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
