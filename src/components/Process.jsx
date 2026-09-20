'use client'

export default function Process({ d, locale = 'he' }){
  const he = locale === 'he'
  return (
    <section id="process" className="py-20 md:py-28 scroll-mt-24 relative overflow-hidden aurora-dark">
      <div className="glow-blob w-[420px] h-[420px] -top-20 inset-inline-end-[-100px]" style={{ background:'rgba(236,72,153,.5)' }} />
      <div className="glow-blob w-[360px] h-[360px] bottom-[-80px] inset-inline-start-[-80px]" style={{ background:'rgba(6,182,212,.45)' }} />

      <div className="container-page relative">
        <div className="max-w-2xl mx-auto text-center reveal">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 backdrop-blur">
            {he ? 'התהליך' : 'The process'}
          </span>
          <h2 className="display mt-5 text-3xl md:text-5xl text-white">{d.processTitle}</h2>
          <p className="mt-4 text-lg text-white/75 leading-relaxed">{d.processSub}</p>
        </div>

        <div className="relative mt-16 grid gap-6 md:grid-cols-4">
          <div className="hidden md:block absolute top-8 inset-inline-start-[12%] inset-inline-end-[12%] h-px bg-gradient-to-r from-[#ec4899] via-[#8b5cf6] to-[#06b6d4]" />
          {d.process.map(([title, desc], i) => (
            <div key={title} className="reveal relative text-center md:text-start" style={{ transitionDelay:`${i*70}ms` }}>
              <div className="relative z-10 mx-auto md:mx-0 w-16 h-16 rounded-2xl grid place-items-center text-white text-2xl font-extrabold shadow-[0_16px_40px_-10px_rgba(236,72,153,.6)] force-ltr ring-1 ring-white/20" style={{ background:'var(--grad)' }}>
                {i + 1}
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
              <p className="mt-2 text-[15px] text-white/70 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
