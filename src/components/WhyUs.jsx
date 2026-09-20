'use client'

const ICONS = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 6v6c0 5 3.5 7.5 8 10 4.5-2.5 8-5 8-10V6l-8-4z"/><path d="m9 12 2 2 4-4"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21a8 8 0 0 0-16 0"/><circle cx="12" cy="8" r="4"/></svg>,
]

export default function WhyUs({ d, locale = 'he' }){
  const he = locale === 'he'
  return (
    <section className="py-20 md:py-28 relative overflow-hidden" style={{ background:'linear-gradient(180deg,#f7f9fc 0%,#eef6ff 100%)' }}>
      <div className="glow-blob w-[380px] h-[380px] -top-16 inset-inline-start-[-100px]" style={{ background:'rgba(6,182,212,.14)' }} />
      <div className="container-page relative">
        <div className="max-w-2xl mx-auto text-center reveal">
          <span className="eyebrow">{he ? 'למה אנחנו' : 'Why us'}</span>
          <h2 className="display mt-5 text-3xl md:text-5xl text-[var(--text)]">{d.whyTitle}</h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {d.why.map(([title, desc], i) => (
            <div key={title} className="reveal flex gap-4 card-surface p-6 md:p-7 transition-all duration-300 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-md)]" style={{ transitionDelay:`${i*50}ms` }}>
              <div className="shrink-0 w-12 h-12 rounded-xl grid place-items-center text-white shadow-[var(--shadow-sm)]" style={{ background:'var(--grad)' }}>
                <span className="w-6 h-6 block [&_svg]:w-full [&_svg]:h-full">{ICONS[i]}</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--text)]">{title}</h3>
                <p className="mt-1.5 text-[15px] text-[var(--muted)] leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
