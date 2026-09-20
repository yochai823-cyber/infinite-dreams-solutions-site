'use client'

import { openContact } from './contactBus'

export default function FinalCTA({ d, locale = 'he' }){
  const he = locale === 'he'
  const [title1, title2] = d.finalTitle.split('\n')

  return (
    <section id="contact" className="pb-20 md:pb-28 pt-4 scroll-mt-24">
      <div className="container-page">
        <div className="reveal relative overflow-hidden rounded-[var(--radius-xl)] px-6 py-14 md:px-16 md:py-20 text-center text-white shadow-[var(--shadow-lg)]" style={{ background:'var(--grad)' }}>
          {/* decorative */}
          <div className="glow-blob w-72 h-72 -top-16 inset-inline-start-[-40px]" style={{ background:'rgba(255,255,255,.35)' }} />
          <div className="glow-blob w-72 h-72 -bottom-16 inset-inline-end-[-40px]" style={{ background:'rgba(6,182,212,.5)' }} />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="display text-3xl md:text-5xl balance">
              {title1}<br />{title2}
            </h2>
            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed balance">{d.finalSub}</p>

            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button onClick={openContact} className="btn w-full sm:w-auto bg-white text-[var(--accent)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] text-[17px] font-bold">
                {he ? 'בואו נדבר על הפרויקט' : 'Let\'s talk about your project'}
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d={he ? 'M11 5l-7 7 7 7' : 'M13 5l7 7-7 7'} /><path d={he ? 'M4 12h16' : 'M20 12H4'} /></svg>
              </button>
              <a href={`https://wa.me/${d.phoneE164}`} target="_blank" rel="noopener noreferrer" className="btn w-full sm:w-auto bg-white/15 border border-white/40 text-white hover:bg-white/25 text-[17px]">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.463 3.488A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413"/></svg>
                {he ? 'וואטסאפ' : 'WhatsApp'}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/80">
              <a href={`mailto:${d.email}`} className="hover:text-white transition-colors force-ltr">{d.email}</a>
              <span className="hidden sm:inline w-1 h-1 rounded-full bg-white/50" />
              <a href={`tel:+${d.phoneE164}`} className="hover:text-white transition-colors force-ltr">{d.phone}</a>
              <span className="hidden sm:inline w-1 h-1 rounded-full bg-white/50" />
              <a href={d.calendar} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{he ? 'קביעת פגישה' : 'Book a meeting'}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
