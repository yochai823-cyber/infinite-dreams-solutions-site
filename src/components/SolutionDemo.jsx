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

/* ---------- Classes management — mobile attendance screen with smiley picker ---------- */
function ClassesDemo(){
  const students = [
    ['אוראל לוי','present'],
    ['מיכל רוזן','present'],
    ['יובל כהן','present'],
    ['נועה שקד','present'],
    ['איתמר ב.','absent'],
    ['שחר אלימלך','present'],
  ]
  return (
    <PhoneFrame label="סימון נוכחות בשנייה — בוחרים סמיילי וזהו">
      <div className="pt-7 bg-[var(--surface-2)]" style={{ minHeight:400 }}>
        {/* header */}
        <div className="flex items-center justify-between px-3 py-2.5 bg-white border-b border-[var(--border)]">
          <span className="text-[var(--faint)]">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>
          </span>
          <div className="text-center leading-tight">
            <div className="text-[13px] font-bold text-[var(--text)]">נוכחות · כיתה ז׳1</div>
            <div className="text-[10px] text-[var(--muted)]">יום ראשון · 26.5</div>
          </div>
          <span className="w-7 h-7 rounded-lg grid place-items-center text-[13px]" style={{ background:'var(--grad-soft)' }}>📅</span>
        </div>

        {/* KPI tiles */}
        <div className="grid grid-cols-3 gap-1.5 px-3 pt-3">
          {[['נוכחים','28','70%','#10b981'],['חסרים','10','25%','#ef4444'],['סה״כ','38','','']].map(([l,v,p,c])=>(
            <div key={l} className="rounded-xl bg-white border border-[var(--border)] p-2 text-center">
              <div className="text-[10px] text-[var(--muted)]">{l}</div>
              <div className="text-[18px] font-extrabold text-[var(--text)] leading-none mt-0.5">{v}</div>
              {p && <div className="text-[9px] font-bold" style={{ color:c }}>{p}</div>}
            </div>
          ))}
        </div>

        {/* progress bar */}
        <div className="px-3 pt-2.5">
          <div className="h-2 rounded-full bg-[var(--border)] overflow-hidden">
            <div className="h-full rounded-full" style={{ width:'70%', background:'#10b981' }} />
          </div>
        </div>

        {/* student list + the smiley picker that opens on tap */}
        <div className="relative px-3 pt-2.5 pb-2 space-y-1">
          {students.map(([name,st],i)=>(
            <div key={i} className={`flex items-center justify-between rounded-lg px-2.5 py-1.5 border ${i===1?'border-[var(--grad-from,#8b5cf6)] ring-1 ring-violet-300 bg-violet-50/40':'border-[var(--border)] bg-white'}`}>
              <span className="text-[12px] font-medium text-[var(--text)]">{name}</span>
              {st==='present'
                ? <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600"><span>נוכח</span><span className="w-4 h-4 rounded-full grid place-items-center text-white bg-emerald-500"><svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span></span>
                : <span className="flex items-center gap-1 text-[10px] font-bold text-red-500"><span>חסר</span><span className="w-4 h-4 rounded-full grid place-items-center text-white bg-red-500"><svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg></span></span>
              }
            </div>
          ))}

          {/* smiley status picker popover */}
          <div className="absolute z-30 top-[52px] inset-inline-start-4 inset-inline-end-4">
            <div className="rounded-2xl bg-white shadow-[var(--shadow-lg)] border border-[var(--border)] px-3 py-2.5">
              <div className="text-[10px] font-semibold text-[var(--muted)] text-center mb-2">איך לסמן את מיכל?</div>
              <div className="flex items-center justify-center gap-3">
                <div className="flex flex-col items-center gap-0.5">
                  <span className="w-10 h-10 rounded-full grid place-items-center text-[20px] ring-2 ring-emerald-400 bg-emerald-50 shadow-sm">😃</span>
                  <span className="text-[8px] font-bold text-emerald-600">נוכח</span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <span className="w-10 h-10 rounded-full grid place-items-center text-[20px] bg-amber-50">😐</span>
                  <span className="text-[8px] text-[var(--muted)]">איחר</span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <span className="w-10 h-10 rounded-full grid place-items-center text-[20px] bg-red-50">😞</span>
                  <span className="text-[8px] text-[var(--muted)]">חסר</span>
                </div>
              </div>
            </div>
            <div className="w-3 h-3 rotate-45 bg-white border-b border-e border-[var(--border)] mx-auto -mt-1.5" />
          </div>
        </div>

        {/* CTA */}
        <div className="px-3 pb-3">
          <div className="rounded-xl py-2.5 text-center text-white text-[12px] font-bold flex items-center justify-center gap-1.5" style={{ background:'var(--grad)' }}>
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            סיים ורשום נוכחות
          </div>
        </div>
      </div>
    </PhoneFrame>
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
            <div className="text-[9px] text-white/80 mt-0.5">ניהול חללים ואולמות</div>
            <div className="mt-2 text-[9px] bg-white/20 rounded-md px-1.5 py-0.5 w-fit">מנהל/ת המערכת</div>
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

/* ---------- Interactive event map (real Google-Maps-based screen) ---------- */
function MapDemo(){
  return (
    <BrowserFrame url="map.dreams-solutions.io" label="כל התחנות על מפת גוגל חיה · סינון, מועדפים וניווט בלחיצה">
      <div dir="rtl" className="relative bg-white">
        <img src="/projects/open-houses-map.webp" alt="מפה אינטראקטיבית של בתים פתוחים על גבי מפת גוגל" className="w-full block" />
        {/* clean strip over the source municipal logos */}
        <div className="absolute bottom-0 inset-x-0 h-9 bg-gradient-to-t from-white via-white/95 to-transparent flex items-end justify-center pb-1">
          <span className="text-[9px] font-medium text-[var(--muted)]">מפה אינטראקטיבית · Infinite Dreams Solutions</span>
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
