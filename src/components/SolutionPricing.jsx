'use client'

import { openContact } from './contactBus'

function Check(){
  return (
    <span className="shrink-0 mt-0.5 w-4 h-4 rounded-full grid place-items-center text-white" style={{ background:'var(--grad)' }}>
      <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
    </span>
  )
}

function PlanCard({ plan, cta }){
  const popular = !!plan.badge
  const inner = (
    <div className={`h-full flex flex-col rounded-[1.1rem] p-6 ${popular ? 'bg-[var(--surface)]' : 'bg-[var(--surface)] border border-[var(--border)]'}`}>
      {popular && (
        <span className="self-center -mt-9 mb-3 text-[11px] font-bold text-white px-3 py-1 rounded-full shadow" style={{ background:'var(--grad)' }}>
          {plan.badge}
        </span>
      )}
      <div className="text-lg font-extrabold text-[var(--text)]">{plan.name}</div>
      {plan.sub && <div className="text-[12px] text-[var(--muted)] mt-1 leading-snug">{plan.sub}</div>}
      <div className="mt-4 flex items-baseline gap-1.5">
        <span className="text-4xl font-black text-grad force-ltr">{plan.price}</span>
        <span className="text-[13px] text-[var(--muted)]">{plan.period}</span>
      </div>
      {plan.priceSub && <div className="text-[11px] text-[var(--faint)] mt-0.5">{plan.priceSub}</div>}
      <ul className="mt-5 space-y-2.5 flex-1">
        {plan.features.map((f,i)=>(
          <li key={i} className="flex items-start gap-2 text-[13.5px] text-[var(--text)] leading-snug">
            <Check />{f}
          </li>
        ))}
      </ul>
      <button onClick={openContact} className={`mt-6 w-full ${popular ? 'btn btn-primary' : 'btn btn-ghost'}`}>{cta}</button>
    </div>
  )
  return popular
    ? <div className="rounded-[1.2rem] p-[2px] shadow-[var(--shadow-lg)]" style={{ background:'var(--grad)' }}>{inner}</div>
    : inner
}

export default function SolutionPricing({ d, locale = 'he', slug, heading }){
  const he = locale === 'he'
  const data = d.pricing?.[slug]
  if (!data) return null

  return (
    <section className="py-16 md:py-24 bg-[var(--surface-2)] border-t border-[var(--border)]">
      <div className="container-page">
        <div className="max-w-2xl mx-auto text-center mb-12 reveal">
          <span className="eyebrow">{d.pricingEyebrow}</span>
          <h2 className="display mt-4 text-3xl md:text-4xl text-[var(--text)]">
            {data.custom ? d.pricingCustomTitle : (heading || data.heading)}
          </h2>
        </div>

        {data.custom ? (
          <div className="max-w-xl mx-auto text-center card-surface p-8 md:p-10 reveal">
            <p className="text-lg text-[var(--muted)] leading-relaxed">{d.pricingCustomText}</p>
            <button onClick={openContact} className="btn btn-primary mt-7 text-[17px]">
              {d.pricingCustomCta}
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d={he ? 'M11 5l-7 7 7 7' : 'M13 5l7 7-7 7'}/><path d={he ? 'M4 12h16' : 'M20 12H4'}/></svg>
            </button>
          </div>
        ) : (
          <>
            <div className={`grid gap-5 sm:grid-cols-2 ${data.plans.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} items-stretch max-w-6xl mx-auto reveal`}>
              {data.plans.map((plan,i)=>(
                <PlanCard key={i} plan={plan} cta={d.pricingCta} />
              ))}
            </div>
            {data.note && (
              <p className="mt-8 text-center text-[13px] text-[var(--muted)] max-w-3xl mx-auto reveal">{data.note}</p>
            )}
          </>
        )}
      </div>
    </section>
  )
}
