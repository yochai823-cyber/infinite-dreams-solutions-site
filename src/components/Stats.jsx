'use client'

export default function Stats({ d }){
  const [value, label] = d.stats[0] || ['20+', '']
  return (
    <section className="container-page -mt-2 md:mt-0 pb-8 md:pb-12">
      <div className="reveal mx-auto max-w-xl card-surface shadow-[var(--shadow-md)] px-6 py-5 flex items-center justify-center gap-4 text-center">
        <span className="text-4xl md:text-5xl font-extrabold text-grad leading-none whitespace-nowrap">{value}</span>
        <span className="w-px h-10 bg-[var(--border)]" />
        <span className="text-[15px] md:text-base font-semibold text-[var(--muted)] text-start leading-snug">{label}</span>
      </div>
    </section>
  )
}
