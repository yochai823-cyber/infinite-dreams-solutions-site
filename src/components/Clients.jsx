'use client'

const LOGOS = [
  { src:'/clients/hevra-matnasim.jpg', he:'החברה למתנ״סים', en:'The Company for Community Centers' },
  { src:'/clients/kadima-tzoran.png', he:'רשת המתנ״סים קדימה-צורן', en:'Kadima-Tzoran Community Centers' },
  { src:'/clients/tarbut-pnai-ks.png', he:'החברה לתרבות הפנאי כפר-סבא', en:'Kfar Saba Leisure Culture Company' },
  { src:'/clients/matnas-talmond.avif', he:'מתנ״ס תלמונד', en:'Talmond Community Center' },
  { src:'/clients/ramat-shikma.jpg', he:'מרכז קהילתי רמת שקמה', en:'Ramat Shikma Community Center' },
  { src:'/clients/merhav-givat-shmuel.png', he:'מתנ״ס מרחב גבעת שמואל', en:'Merhav Givat Shmuel Community Center' },
  { src:'/clients/urban-place.png', he:'URBAN PLACE', en:'URBAN PLACE' },
  { src:'/clients/gc-mishlochim.png', he:'ג.כ משלוחים', en:'G.C Deliveries' },
]

export default function Clients({ d, locale = 'he' }){
  const he = locale === 'he'
  // repeat enough to overflow any viewport, then duplicate for a seamless -50% loop
  const base = [...LOGOS, ...LOGOS, ...LOGOS]
  const row = [...base, ...base]
  return (
    <section className="py-16 md:py-20 bg-[var(--surface)] border-y border-[var(--border)]">
      <div className="container-page text-center reveal">
        <span className="eyebrow">{d.clientsEyebrow}</span>
        <h2 className="display mt-4 text-2xl md:text-4xl text-[var(--text)]">{d.clientsTitle}</h2>
        <p className="mt-3 text-[var(--muted)]">{d.clientsSub}</p>
      </div>

      <div className="mt-12 marquee-wrap" dir="ltr">
        <div className="marquee-track">
          {row.map((logo, i) => (
            <div
              key={i}
              className="group shrink-0 me-4 md:me-6 w-[180px] md:w-[210px] h-[104px] md:h-[116px] grid place-items-center rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-[var(--shadow-sm)] px-6 transition-all duration-300 hover:shadow-[var(--shadow-md)] hover:-translate-y-1"
              title={he ? logo.he : logo.en}
            >
              <img
                src={logo.src}
                alt={he ? logo.he : logo.en}
                loading="lazy"
                className="max-h-[68px] md:max-h-[76px] max-w-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
