'use client'
import { useEffect, useState } from 'react'

const typeLabel = (t) => ({ pageview:'צפייה בדף', click:'לחיצה', form_open:'פתיחת טופס', form_submit:'שליחת טופס' }[t] || t)

function StatCard({ label, value, sub, color }){
  return (
    <div className="bg-white rounded-2xl shadow border border-gray-100 p-5">
      <div className="text-3xl font-black" style={{ color }}>{Number(value).toLocaleString('he-IL')}</div>
      <div className="mt-1 text-sm font-semibold text-gray-700">{label}</div>
      {sub && <div className="text-xs text-gray-400 mt-0.5">{sub}</div>}
    </div>
  )
}

export default function AnalyticsPanel(){
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState('')

  const load = async () => {
    setLoading(true); setErr('')
    try {
      const r = await fetch('/api/admin/analytics')
      const j = await r.json()
      if (j.success) setData(j); else setErr(j.message || 'שגיאה')
    } catch { setErr('שגיאה בטעינת האנליטיקס') }
    finally { setLoading(false) }
  }
  useEffect(() => { load() }, [])

  if (loading && !data) return <div className="bg-white rounded-2xl shadow border border-gray-100 p-8 text-center text-gray-500 mb-8">טוען נתונים…</div>
  if (err) return <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-8 text-red-700">{err}</div>
  if (!data) return null

  const t = data.totals
  const maxDay = Math.max(1, ...data.perDay.map(d => d.views))

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">📊 מעקב וסטטיסטיקות</h2>
        <button onClick={load} disabled={loading} className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-lg transition-colors">רענון</button>
      </div>

      {/* summary cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="מבקרים (סשנים)" value={t.sessions} sub={`${t.sessions24h} ב-24ש׳ · ${t.sessions7d} ב-7 ימים`} color="#4f46e5" />
        <StatCard label="צפיות בדפים" value={t.pageviews} color="#2563eb" />
        <StatCard label="לחיצות" value={t.clicks} color="#06b6d4" />
        <StatCard label="פתיחות טופס לידים" value={t.formOpens} sub={`${t.events24h} אירועים ב-24ש׳`} color="#e11d8f" />
      </div>

      {/* per-day chart */}
      <div className="bg-white rounded-2xl shadow border border-gray-100 p-5 mt-4">
        <div className="text-sm font-semibold text-gray-700 mb-3">צפיות ב-14 הימים האחרונים</div>
        {data.perDay.length === 0 ? (
          <div className="text-sm text-gray-400 py-6 text-center">אין נתונים עדיין</div>
        ) : (
          <div className="flex items-end gap-1.5 h-40">
            {data.perDay.map((d) => (
              <div key={d.day} className="flex-1 flex flex-col items-center justify-end group">
                <div className="w-full rounded-t-md transition-all" style={{ height:`${Math.max(4, (d.views/maxDay)*100)}%`, background:'linear-gradient(180deg,#6366f1,#2563eb)' }} title={`${d.day}: ${d.views} צפיות, ${d.sessions} מבקרים`} />
                <div className="text-[10px] text-gray-400 mt-1 rotate-0">{d.day.slice(5)}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* lists */}
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="bg-white rounded-2xl shadow border border-gray-100 p-5">
          <div className="text-sm font-semibold text-gray-700 mb-3">דפים פופולריים</div>
          <ul className="space-y-2">
            {data.byPath.length === 0 && <li className="text-sm text-gray-400">אין נתונים</li>}
            {data.byPath.map((p) => (
              <li key={p.path} className="flex items-center justify-between text-sm">
                <span className="text-gray-700 truncate" dir="ltr">{p.path}</span>
                <span className="font-bold text-gray-900 ms-3">{p.views}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-2xl shadow border border-gray-100 p-5">
          <div className="text-sm font-semibold text-gray-700 mb-3">על מה לחצו הכי הרבה</div>
          <ul className="space-y-2">
            {data.topClicks.length === 0 && <li className="text-sm text-gray-400">אין נתונים</li>}
            {data.topClicks.map((c, i) => (
              <li key={i} className="flex items-center justify-between text-sm">
                <span className="text-gray-700 truncate">{c.label}</span>
                <span className="font-bold text-gray-900 ms-3">{c.clicks}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* device split + recent */}
      <div className="grid md:grid-cols-3 gap-4 mt-4">
        <div className="bg-white rounded-2xl shadow border border-gray-100 p-5">
          <div className="text-sm font-semibold text-gray-700 mb-3">מכשירים</div>
          <ul className="space-y-2">
            {data.byDevice.map((d) => (
              <li key={d.device} className="flex items-center justify-between text-sm">
                <span className="text-gray-700">{d.device === 'mobile' ? '📱 מובייל' : d.device === 'desktop' ? '💻 דסקטופ' : '❔ לא ידוע'}</span>
                <span className="font-bold text-gray-900">{d.sessions}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-2xl shadow border border-gray-100 p-5 md:col-span-2">
          <div className="text-sm font-semibold text-gray-700 mb-3">פעילות אחרונה</div>
          <div className="max-h-72 overflow-y-auto divide-y divide-gray-100">
            {data.recent.length === 0 && <div className="text-sm text-gray-400">אין פעילות עדיין</div>}
            {data.recent.map((e, i) => (
              <div key={i} className="flex items-center gap-3 py-2 text-sm">
                <span className="text-xs text-gray-400 w-16 shrink-0 force-ltr" dir="ltr">{e.time}</span>
                <span className="px-2 py-0.5 rounded-full text-xs font-medium shrink-0" style={{ background:'#eef2ff', color:'#4f46e5' }}>{typeLabel(e.type)}</span>
                <span className="text-gray-700 truncate">{e.label || e.path}</span>
                {e.device === 'mobile' && <span className="ms-auto text-xs shrink-0">📱</span>}
                {e.device === 'desktop' && <span className="ms-auto text-xs shrink-0">💻</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
