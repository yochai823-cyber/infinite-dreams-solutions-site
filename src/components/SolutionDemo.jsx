'use client'

/* Hand-built, high-fidelity demo screens modeled on the real apps
   (based on the user's actual app screenshots). Each carries a "דמו" badge. */

function DemoBadge(){
  return (
    <span className="absolute top-2 inset-inline-end-2 z-30 text-[10px] font-bold text-white px-2 py-0.5 rounded-full shadow" style={{ background:'rgba(13,18,32,.7)' }}>
      דמו להמחשה
    </span>
  )
}

function PhoneFrame({ children, label }){
  return (
    <div className="relative mx-auto w-[300px] max-w-full">
      <div className="absolute -inset-5 rounded-[3rem] opacity-40 blur-2xl" style={{ background:'var(--grad)' }} />
      <div className="relative rounded-[2.6rem] bg-[#0d1220] p-2.5 shadow-[var(--shadow-lg)]" dir="rtl">
        <DemoBadge />
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
    <div className="relative mx-auto w-full max-w-3xl">
      <div className="absolute -inset-5 rounded-[2.4rem] opacity-40 blur-2xl" style={{ background:'var(--grad)' }} />
      <div className="relative card-surface overflow-hidden shadow-[var(--shadow-lg)] ring-1 ring-white/60">
        <div className="flex items-center gap-1.5 px-4 h-10 border-b border-[var(--border)] bg-[var(--surface-2)]">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ms-3 text-xs text-[var(--faint)] force-ltr">{url}</span>
          <span className="ms-auto text-[10px] font-bold text-white px-2 py-0.5 rounded-full" style={{ background:'rgba(13,18,32,.7)' }}>דמו להמחשה</span>
        </div>
        {children}
      </div>
      {label && <p className="text-center text-sm text-[var(--muted)] mt-4">{label}</p>}
    </div>
  )
}

/* ---------- WhatsApp AI (kept — user liked it) ---------- */
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

/* ---------- Classes management — desktop dashboard ---------- */
function ClassesDemo(){
  const menu = ['מצב פיננסי','דוחות','חוגים','תלמידים','מורים','הורים','נוכחות','פעילויות','הודעות','הגדרות']
  const bars = [60,72,55,80,66,90,74,88,62,95,70,84]
  return (
    <BrowserFrame url="app.dreams-solutions.io" label="לוח בקרה אחד לכל הפעילות — נוכחות, תלמידים, תשלומים ודוחות">
      <div dir="rtl" className="flex bg-[var(--surface-2)]" style={{ minHeight:360 }}>
        <aside className="w-[132px] shrink-0 bg-white border-s border-[var(--border)] p-2.5">
          <div className="flex items-center gap-1.5 mb-3 px-1">
            <span className="w-6 h-6 rounded-lg grid place-items-center text-white text-[10px] font-black" style={{ background:'var(--grad)' }}>∞</span>
            <span className="text-[12px] font-extrabold text-grad">Dreams</span>
          </div>
          <nav className="space-y-0.5">
            {menu.map((m,i)=>(
              <div key={m} className={`text-[11px] px-2 py-1.5 rounded-lg ${i===0?'text-white font-semibold':'text-[var(--muted)]'}`} style={i===0?{background:'var(--grad)'}:undefined}>{m}</div>
            ))}
          </nav>
        </aside>
        <main className="flex-1 p-3">
          <div className="flex items-center justify-between mb-3">
            <div className="font-bold text-[var(--text)] text-[13px]">מצב פיננסי · כל החוגים</div>
            <div className="flex gap-1">
              {['שנה','רבעון','חודש'].map((t,i)=>(<span key={t} className={`text-[10px] px-2 py-1 rounded-md ${i===2?'text-white':'bg-white border border-[var(--border)] text-[var(--muted)]'}`} style={i===2?{background:'var(--grad)'}:undefined}>{t}</span>))}
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 mb-3">
            {[['₪1,677','רווחים','+131%'],['₪7,820','מחזור',''],['78%','ריטנשן',''],['₪10,070','הכנסות','']].map(([v,l,d])=>(
              <div key={l} className="rounded-xl bg-white border border-[var(--border)] p-2">
                <div className="text-[15px] font-extrabold text-grad force-ltr">{v}</div>
                <div className="text-[10px] text-[var(--muted)]">{l}</div>
                {d && <div className="text-[9px] font-bold text-emerald-600">{d}</div>}
              </div>
            ))}
          </div>
          <div className="rounded-xl bg-white border border-[var(--border)] p-3">
            <div className="text-[11px] font-semibold text-[var(--muted)] mb-2">הכנסות · 12 חודשים</div>
            <div className="flex items-end gap-1.5 h-24">
              {bars.map((h,i)=>(<div key={i} className="flex-1 rounded-t" style={{ height:`${h}%`, background:'var(--grad)', opacity:.35+ (i/bars.length)*0.65 }} />))}
            </div>
          </div>
        </main>
      </div>
    </BrowserFrame>
  )
}

/* ---------- Rooms / halls — desktop month calendar ---------- */
function RoomsDemo(){
  const menu = [['לוח שנה',true],['ההזמנות שלי בלוח',false],['פתיחת הזמנה',false],['אולמות וחדרים',false],['צרכים',false],['יומן הזמנות',false],['ניהול משתמשים',false]]
  const dows = ['א׳','ב׳','ג׳','ד׳','ה׳','ו׳','ש׳']
  const events = {
    '3':[['חוג יצירה','#4f46e5']], '5':[['BNI · אולם','#10b981'],['ריקוד','#e11d8f']],
    '8':[['התעמלות','#8b5cf6']], '12':[['הרצאה','#06b6d4']], '14':[['שירה בציבור','#f59e0b'],['+2','#94a3b8']],
    '17':[['קרמיקה','#4f46e5']], '20':[['מחול','#e11d8f']], '22':[['סדנה','#06b6d4']], '26':[['חוג תופים','#8b5cf6']],
  }
  const cells = Array.from({length:35}, (_,i)=> i-2) // start offset
  return (
    <BrowserFrame url="rooms.dreams-solutions.io" label="לוח שנה ויזואלי לכל החללים — בלי כפילויות והתנגשויות">
      <div dir="rtl" className="flex" style={{ minHeight:360 }}>
        <aside className="w-[150px] shrink-0 bg-[var(--surface-2)] border-s border-[var(--border)] p-2.5">
          <div className="rounded-xl p-2.5 text-white mb-3" style={{ background:'var(--grad)' }}>
            <div className="text-[11px] font-bold leading-tight">מערכת לניהול חדרים</div>
            <div className="text-[9px] text-white/80 mt-0.5">מתנ״ס קדימה־צורן</div>
            <div className="mt-2 text-[9px] bg-white/20 rounded-md px-1.5 py-0.5 w-fit">יוחאי אפללו</div>
          </div>
          <nav className="space-y-0.5">
            {menu.map(([m,act])=>(
              <div key={m} className={`text-[11px] px-2 py-1.5 rounded-lg flex items-center justify-between ${act?'text-white font-semibold':'text-[var(--muted)]'}`} style={act?{background:'var(--grad)'}:undefined}>
                <span>{m}</span>{m==='אולמות וחדרים' && <span className="text-[8px] bg-emerald-500 text-white rounded-full px-1">19</span>}
              </div>
            ))}
          </nav>
          <div className="mt-3 text-[10px] text-white text-center rounded-lg py-1.5 font-semibold" style={{ background:'#f97316' }}>יציאה מהמערכת</div>
        </aside>
        <main className="flex-1 p-3 bg-white">
          <div className="flex items-center justify-between mb-2">
            <div className="font-bold text-grad text-[13px]">יומן הזמנות · נובמבר 2025</div>
            <div className="flex gap-1">
              {['יומי','שבועי','חודשי'].map((t,i)=>(<span key={t} className={`text-[10px] px-2 py-1 rounded-md ${i===2?'text-white':'bg-[var(--surface-2)] text-[var(--muted)]'}`} style={i===2?{background:'var(--grad)'}:undefined}>{t}</span>))}
            </div>
          </div>
          <div className="grid grid-cols-7 gap-px bg-[var(--border)] rounded-lg overflow-hidden">
            {dows.map(d=>(<div key={d} className="bg-[var(--surface-2)] text-center text-[10px] font-semibold text-[var(--muted)] py-1">{d}</div>))}
            {cells.map((day,idx)=>{
              const valid = day>=1 && day<=30
              const evs = events[String(day)] || []
              return (
                <div key={idx} className="bg-white h-[52px] p-0.5">
                  {valid && <div className="text-[9px] text-[var(--faint)] text-start px-1">{day}</div>}
                  <div className="space-y-0.5 mt-0.5">
                    {evs.map(([label,c],i)=>(<div key={i} className="rounded px-1 text-[7px] font-bold text-white truncate leading-tight" style={{ background:c }}>{label}</div>))}
                  </div>
                </div>
              )
            })}
          </div>
        </main>
      </div>
    </BrowserFrame>
  )
}

/* ---------- Interactive event map ---------- */
function MapDemo(){
  const cats = [['❤️','#ec4899'],['🏛️','#14b8a6'],['🎨','#f97316'],['🏃','#22c55e'],['🎭','#8b5cf6'],['🎵','#3b82f6']]
  const pins = [
    { x:30, y:38, n:75, c:'#f97316' }, { x:44, y:30, n:1, c:'#f97316' }, { x:52, y:44, n:130, c:'#14b8a6' },
    { x:40, y:52, n:140, c:'#14b8a6' }, { x:58, y:36, n:9, c:'#f97316' }, { x:63, y:50, n:11, c:'#f97316' },
    { x:48, y:60, n:150, c:'#14b8a6' }, { x:68, y:60, n:14, c:'#f97316' }, { x:36, y:44, n:71, c:'#f97316' },
    { x:56, y:56, n:21, c:'#f97316' }, { x:72, y:42, n:2, c:'#f97316' }, { x:26, y:52, n:67, c:'#f97316' },
  ]
  return (
    <BrowserFrame url="map.kfar-saba.dreams-solutions.io" label="כל התחנות על מפה חיה · סינון, מועדפים וניווט">
      <div dir="rtl" className="relative" style={{ height:380 }}>
        {/* top controls */}
        <div className="absolute top-2 inset-inline-start-2 z-20 flex gap-1.5">
          <span className="text-[10px] font-semibold px-2 py-1 rounded-lg text-white shadow" style={{ background:'var(--grad)' }}>לרשימת הבתים הפתוחים</span>
          <span className="text-[10px] font-semibold px-2 py-1 rounded-lg bg-white shadow text-[var(--text)] border border-[var(--border)]">📁 מקרא וסינון</span>
        </div>
        <div className="absolute top-2 left-2 z-20 text-[10px] px-2 py-1 rounded-lg bg-white shadow text-[var(--muted)] border border-[var(--border)]">⛶ מסך מלא</div>
        {/* search */}
        <div className="absolute top-11 inset-inline-start-2 z-20 w-52 h-7 rounded-full bg-white shadow flex items-center px-3 text-[11px] text-[var(--faint)]">🔍 חיפוש לפי כתובת או שם אמן/ית…</div>
        {/* banner */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 h-9 px-4 rounded-lg text-white text-[12px] font-black flex items-center gap-2 shadow" style={{ background:'linear-gradient(90deg,#e11d8f,#f59e0b)' }}>
          🎨 בתים פתוחים · סופ״ש של אמנות
        </div>
        {/* category toolbar (physical left) */}
        <div className="absolute top-24 left-2 z-20 flex flex-col gap-1.5">
          {cats.map(([ic,c],i)=>(
            <span key={i} className="w-8 h-8 rounded-full grid place-items-center text-[14px] shadow ring-2 ring-white" style={{ background:c }}>{ic}</span>
          ))}
        </div>
        {/* map */}
        <div className="absolute inset-0 -z-0" style={{ background:'linear-gradient(135deg,#eaf2ff,#f3f0ff 55%,#eafcf3)' }}>
          <svg viewBox="0 0 100 76" preserveAspectRatio="none" className="w-full h-full">
            <g stroke="#cdd6ea" strokeWidth="1.2" fill="none">
              <path d="M0 18 H100 M0 40 H100 M0 60 H100 M20 0 V76 M45 0 V76 M70 0 V76 M88 0 V76"/>
            </g>
            <g stroke="#e6d9f5" strokeWidth="2.4" fill="none" opacity=".7"><path d="M0 30 H100 M55 0 V76"/></g>
            <g fill="#dcecdc" opacity=".6"><rect x="4" y="44" width="12" height="12" rx="2"/><rect x="74" y="6" width="14" height="10" rx="2"/></g>
          </svg>
          {pins.map((p,i)=>(
            <div key={i} className="absolute -translate-x-1/2 -translate-y-full" style={{ left:`${p.x}%`, top:`${p.y}%` }}>
              <div className="min-w-[22px] h-[22px] px-1 rounded-full grid place-items-center text-white text-[10px] font-bold shadow-md ring-2 ring-white force-ltr" style={{ background:p.c }}>{p.n}</div>
              <div className="w-2 h-2 rotate-45 mx-auto -mt-1" style={{ background:p.c }} />
            </div>
          ))}
        </div>
        {/* footer */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-20 text-[8px] text-[var(--faint)] bg-white/80 px-2 py-0.5 rounded">© 2026 Mapa GISrael · החברה לתרבות הפנאי כפר-סבא</div>
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
