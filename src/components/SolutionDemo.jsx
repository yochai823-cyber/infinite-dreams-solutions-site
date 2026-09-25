'use client'
import { Fragment } from 'react'

/* Hand-built, high-fidelity demo screens that mirror how each real app is
   built — crisp HTML/CSS mockups inside device/browser frames. */

function PhoneFrame({ children, label }){
  return (
    <div className="relative mx-auto w-[300px] max-w-full">
      <div className="absolute -inset-5 rounded-[3rem] opacity-40 blur-2xl" style={{ background:'var(--grad)' }} />
      <div className="relative rounded-[2.6rem] bg-[#0d1220] p-2.5 shadow-[var(--shadow-lg)]" dir="rtl">
        <div className="relative rounded-[2rem] overflow-hidden bg-white">
          <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20 pointer-events-none">
            <div className="mt-1.5 w-24 h-5 bg-[#0d1220] rounded-b-2xl" />
          </div>
          {children}
        </div>
      </div>
      {label && <p className="text-center text-sm text-[var(--muted)] mt-4">{label}</p>}
    </div>
  )
}

function BrowserFrame({ children, url, label }){
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div className="absolute -inset-5 rounded-[2.4rem] opacity-40 blur-2xl" style={{ background:'var(--grad)' }} />
      <div className="relative card-surface overflow-hidden shadow-[var(--shadow-lg)] ring-1 ring-white/60">
        <div className="flex items-center gap-1.5 px-4 h-10 border-b border-[var(--border)] bg-[var(--surface-2)]">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ms-3 text-xs text-[var(--faint)] force-ltr">{url}</span>
        </div>
        {children}
      </div>
      {label && <p className="text-center text-sm text-[var(--muted)] mt-4">{label}</p>}
    </div>
  )
}

/* ---------- WhatsApp AI ---------- */
function WhatsAppDemo(){
  return (
    <PhoneFrame label="מזכירת ה-AI עונה, מתאמת וסוגרת — לבד">
      <div className="pt-7">
        <div className="flex items-center gap-2.5 px-3 py-2.5 text-white" style={{ background:'#075E54' }}>
          <span className="w-9 h-9 rounded-full grid place-items-center font-bold" style={{ background:'var(--grad)' }}>UP</span>
          <div className="leading-tight">
            <div className="font-semibold text-[15px]">Urban Place · מזכירת AI</div>
            <div className="text-[11px] text-white/70">מקליד…</div>
          </div>
        </div>
        <div className="px-3 py-3 space-y-2 text-[13px]" style={{ background:'#ECE5DD', minHeight:360 }}>
          <div className="max-w-[80%] bg-white rounded-2xl rounded-tr-sm px-3 py-2 shadow-sm">היי, יש מקום לחוג היפ-הופ ביום ראשון? 🙏</div>
          <div className="max-w-[85%] ms-auto rounded-2xl rounded-tl-sm px-3 py-2 shadow-sm text-[#0b141a]" style={{ background:'#DCF8C6' }}>
            <div className="flex items-center gap-1 mb-1 text-[10px] font-bold" style={{ color:'#4f46e5' }}>
              <svg viewBox="0 0 24 24" className="w-3 h-3" fill="currentColor"><path d="M12 3l1.9 4.6L18.5 9l-4.6 1.9L12 15.5 10.1 10.9 5.5 9l4.6-1.4z"/></svg>
              מזכירת AI
            </div>
            בטח! 🩰 יש מקום בחוג היפ-הופ ביום ראשון בשעה 17:00. לשריין לך מקום?
          </div>
          <div className="max-w-[80%] bg-white rounded-2xl rounded-tr-sm px-3 py-2 shadow-sm">כן, מושלם 🙌</div>
          <div className="max-w-[85%] ms-auto rounded-2xl rounded-tl-sm px-3 py-2 shadow-sm text-[#0b141a]" style={{ background:'#DCF8C6' }}>
            שריינתי מקום ושלחתי פרטים במייל ✅ נתראה בראשון!
          </div>
          <div className="mx-auto w-fit text-[11px] font-semibold text-white px-3 py-1 rounded-full shadow" style={{ background:'var(--grad)' }}>🟢 ליד נסגר אוטומטית · 22:41</div>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 bg-white border-t border-gray-100">
          <div className="flex-1 h-8 rounded-full bg-gray-100" />
          <span className="w-8 h-8 rounded-full grid place-items-center text-white" style={{ background:'#075E54' }}>
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4 20-7z"/></svg>
          </span>
        </div>
      </div>
    </PhoneFrame>
  )
}

/* ---------- Classes management ---------- */
function ClassesDemo(){
  const rows = [['נועה לוי','בלט · כיתה ב',true],['איתי כהן','היפ-הופ · ד-ו',true],['שירה ברק','ג׳אז · ז-ח',false],['דניאל מזרחי','ברייקדאנס',true]]
  return (
    <PhoneFrame label="נוכחות, תלמידים ותשלומים — במקום אחד">
      <div className="pt-7">
        <div className="px-4 py-3 text-white" style={{ background:'var(--grad)' }}>
          <div className="text-[11px] text-white/80">שלום, מיכל 👋</div>
          <div className="font-bold text-[15px]">מערכת ניהול חוגים</div>
        </div>
        <div className="p-3 space-y-3" style={{ minHeight:370 }}>
          <div className="grid grid-cols-2 gap-2">
            {[['248','תלמידים'],['92%','נוכחות היום'],['14','חוגים'],['₪10,070','הכנסות החודש']].map(([v,l])=>(
              <div key={l} className="rounded-xl border border-[var(--border)] p-2.5">
                <div className="text-lg font-extrabold text-grad force-ltr">{v}</div>
                <div className="text-[11px] text-[var(--muted)]">{l}</div>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-[var(--border)] p-2.5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[12px] font-bold text-[var(--text)]">נוכחות · היפ-הופ 17:00</span>
              <span className="text-[10px] text-[var(--muted)]">היום</span>
            </div>
            <div className="space-y-1.5">
              {rows.map(([n,c,present])=>(
                <div key={n} className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full grid place-items-center text-white text-[11px] font-bold shrink-0" style={{ background:'var(--grad)' }}>{n[0]}</span>
                  <div className="flex-1 leading-tight">
                    <div className="text-[12px] font-semibold text-[var(--text)]">{n}</div>
                    <div className="text-[10px] text-[var(--muted)]">{c}</div>
                  </div>
                  <span className={`w-6 h-6 rounded-full grid place-items-center ${present?'text-white':'text-[var(--faint)] bg-[var(--surface-3)]'}`} style={present?{background:'#22c55e'}:undefined}>
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d={present?'M20 6 9 17l-5-5':'M18 6 6 18M6 6l12 12'}/></svg>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PhoneFrame>
  )
}

/* ---------- Rooms / halls calendar ---------- */
function RoomsDemo(){
  const days = ['א׳','ב׳','ג׳','ד׳','ה׳']
  const events = [
    { d:0, t:1, span:2, label:'חוג יצירה', c:'#4f46e5' },
    { d:1, t:0, span:1, label:'ישיבת צוות', c:'#06b6d4' },
    { d:1, t:2, span:2, label:'חוג ריקוד', c:'#e11d8f' },
    { d:2, t:1, span:1, label:'אולם — הרצאה', c:'#8b5cf6' },
    { d:3, t:0, span:2, label:'קרמיקה', c:'#f59e0b' },
    { d:3, t:3, span:1, label:'BNI', c:'#10b981' },
    { d:4, t:2, span:2, label:'שירה בציבור', c:'#4f46e5' },
  ]
  const times = ['09:00','11:00','13:00','15:00']
  return (
    <BrowserFrame url="rooms.infinite-dreams.io" label="לוח שנה ויזואלי · בלי כפילויות והתנגשויות">
      <div className="p-4" dir="rtl">
        <div className="flex items-center justify-between mb-3">
          <div className="font-bold text-[var(--text)]">יומן הזמנות · נובמבר</div>
          <div className="flex gap-1">
            <span className="text-xs px-2.5 py-1 rounded-lg bg-[var(--surface-2)] text-[var(--muted)]">שבוע</span>
            <span className="text-xs px-2.5 py-1 rounded-lg text-white" style={{ background:'var(--grad)' }}>חודש</span>
          </div>
        </div>
        <div className="grid" style={{ gridTemplateColumns:`48px repeat(5,1fr)` }}>
          <div />
          {days.map(d=>(<div key={d} className="text-center text-[12px] font-semibold text-[var(--muted)] pb-2">{d}</div>))}
          {times.map((tm,ti)=>(
            <Fragment key={tm}>
              <div className="text-[10px] text-[var(--faint)] text-start pt-1 force-ltr">{tm}</div>
              {days.map((_,di)=>{
                const ev = events.find(e=>e.d===di && e.t===ti)
                return (
                  <div key={di+'-'+ti} className="border-t border-s border-[var(--border)] h-10 p-0.5">
                    {ev && (
                      <div className="h-full rounded-md px-1.5 flex items-center text-[9px] font-bold text-white leading-none" style={{ background:ev.c }}>
                        <span className="truncate">{ev.label}</span>
                      </div>
                    )}
                  </div>
                )
              })}
            </Fragment>
          ))}
        </div>
      </div>
    </BrowserFrame>
  )
}

/* ---------- Interactive event map ---------- */
function MapDemo(){
  const pins = [
    { x:22, y:34, n:1, c:'#e11d8f' }, { x:48, y:24, n:2, c:'#4f46e5' },
    { x:70, y:40, n:3, c:'#06b6d4' }, { x:35, y:58, n:4, c:'#f59e0b' },
    { x:60, y:66, n:5, c:'#8b5cf6' }, { x:82, y:60, n:6, c:'#10b981' },
  ]
  return (
    <BrowserFrame url="map.infinite-dreams.io" label="כל התחנות על מפה חיה · סינון וניווט">
      <div dir="rtl">
        <div className="flex items-center gap-2 p-3 border-b border-[var(--border)]">
          <div className="flex-1 h-8 rounded-full bg-[var(--surface-2)] flex items-center px-3 text-[12px] text-[var(--faint)]">חיפוש כתובת או שם אמן…</div>
          {['אמנות','מוזיקה','אוכל'].map((c,i)=>(
            <span key={c} className={`text-[11px] px-2.5 py-1 rounded-full ${i===0?'text-white':'bg-[var(--surface-2)] text-[var(--muted)]'}`} style={i===0?{background:'var(--grad)'}:undefined}>{c}</span>
          ))}
        </div>
        <div className="relative h-64" style={{ background:'linear-gradient(135deg,#eef4ff,#f7f0ff 60%,#eafcff)' }}>
          {/* stylized streets */}
          <svg viewBox="0 0 100 70" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
            <g stroke="#cdd6ea" strokeWidth="1.4" fill="none">
              <path d="M0 20 H100 M0 45 H100 M25 0 V70 M55 0 V70 M80 0 V70"/>
            </g>
            <g stroke="#e6d9f5" strokeWidth="2.5" fill="none" opacity=".7"><path d="M0 33 H100 M42 0 V70"/></g>
          </svg>
          {pins.map(p=>(
            <div key={p.n} className="absolute -translate-x-1/2 -translate-y-full" style={{ left:`${p.x}%`, top:`${p.y}%` }}>
              <div className="w-7 h-7 rounded-full grid place-items-center text-white text-[12px] font-bold shadow-lg ring-2 ring-white force-ltr" style={{ background:p.c }}>{p.n}</div>
              <div className="w-2 h-2 rotate-45 mx-auto -mt-1" style={{ background:p.c }} />
            </div>
          ))}
          <div className="absolute bottom-3 inset-inline-start-3 card-surface px-3 py-2 text-[11px] shadow-[var(--shadow-md)]">
            <div className="font-bold text-[var(--text)]">בתים פתוחים · כפר סבא</div>
            <div className="text-[var(--muted)]">148 תחנות פעילות</div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

const DEMOS = { 'whatsapp-ai': WhatsAppDemo, 'classes': ClassesDemo, 'rooms': RoomsDemo, 'open-houses': MapDemo }

export default function SolutionDemo({ slug }){
  const Demo = DEMOS[slug]
  if (!Demo) return null
  return <Demo />
}
