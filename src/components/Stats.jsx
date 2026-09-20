'use client'

export default function Stats({ d }){
  return (
    <section className="container-page -mt-4 md:-mt-2 pb-6 md:pb-10">
      <div className="reveal card-surface shadow-[var(--shadow-md)] grid grid-cols-2 lg:grid-cols-4 divide-y divide-x-0 lg:divide-y-0 lg:divide-x divide-[var(--border)] rtl:lg:divide-x-reverse overflow-hidden">
        {d.stats.map(([value, label], i) => (
          <div key={i} className="px-2 py-4 md:px-3 md:py-6 text-center min-w-0">
            <div className="font-extrabold text-grad leading-tight whitespace-nowrap text-[clamp(1.1rem,2.1vw,1.9rem)]">{value}</div>
            <div className="mt-2 text-[12px] md:text-sm text-[var(--muted)] leading-snug px-1">{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
