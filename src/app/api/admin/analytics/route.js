import { NextResponse } from 'next/server'
import { sql, ensureSchema } from '../../../../lib/db'

export async function GET() {
  try {
    await ensureSchema()

    const [totals] = await sql`
      SELECT
        COUNT(*) FILTER (WHERE type = 'pageview') AS pageviews,
        COUNT(*) FILTER (WHERE type = 'click') AS clicks,
        COUNT(*) FILTER (WHERE type = 'form_open') AS form_opens,
        COUNT(DISTINCT session_id) AS sessions,
        COUNT(*) FILTER (WHERE created_at >= now() - interval '24 hours') AS events_24h,
        COUNT(DISTINCT session_id) FILTER (WHERE created_at >= now() - interval '24 hours') AS sessions_24h,
        COUNT(DISTINCT session_id) FILTER (WHERE created_at >= now() - interval '7 days') AS sessions_7d
      FROM analytics_events;
    `

    const byPath = await sql`
      SELECT path, COUNT(*) AS views
      FROM analytics_events
      WHERE type = 'pageview' AND path IS NOT NULL
      GROUP BY path ORDER BY views DESC LIMIT 12;
    `

    const topClicks = await sql`
      SELECT label, COUNT(*) AS clicks
      FROM analytics_events
      WHERE type = 'click' AND label IS NOT NULL AND label <> ''
      GROUP BY label ORDER BY clicks DESC LIMIT 12;
    `

    const byDevice = await sql`
      SELECT COALESCE(device,'unknown') AS device, COUNT(DISTINCT session_id) AS sessions
      FROM analytics_events
      GROUP BY device ORDER BY sessions DESC;
    `

    const perDay = await sql`
      SELECT to_char(date_trunc('day', created_at AT TIME ZONE 'Asia/Jerusalem'), 'YYYY-MM-DD') AS day,
             COUNT(*) FILTER (WHERE type='pageview') AS views,
             COUNT(DISTINCT session_id) AS sessions
      FROM analytics_events
      WHERE created_at >= now() - interval '14 days'
      GROUP BY day ORDER BY day ASC;
    `

    const fmt = new Intl.DateTimeFormat('he-IL', {
      timeZone: 'Asia/Jerusalem', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'
    })
    const recentRows = await sql`
      SELECT type, path, label, device, locale, created_at
      FROM analytics_events
      ORDER BY created_at DESC LIMIT 40;
    `
    const recent = recentRows.map(r => ({
      type: r.type, path: r.path, label: r.label, device: r.device, locale: r.locale,
      time: fmt.format(r.created_at)
    }))

    const num = (v) => Number(v || 0)
    return NextResponse.json({
      success: true,
      totals: {
        pageviews: num(totals.pageviews),
        clicks: num(totals.clicks),
        formOpens: num(totals.form_opens),
        sessions: num(totals.sessions),
        events24h: num(totals.events_24h),
        sessions24h: num(totals.sessions_24h),
        sessions7d: num(totals.sessions_7d),
      },
      byPath: byPath.map(r => ({ path: r.path, views: num(r.views) })),
      topClicks: topClicks.map(r => ({ label: r.label, clicks: num(r.clicks) })),
      byDevice: byDevice.map(r => ({ device: r.device, sessions: num(r.sessions) })),
      perDay: perDay.map(r => ({ day: r.day, views: num(r.views), sessions: num(r.sessions) })),
      recent,
    })
  } catch (error) {
    console.error('analytics error:', error)
    return NextResponse.json({ success: false, message: 'שגיאה בטעינת האנליטיקס' }, { status: 500 })
  }
}
