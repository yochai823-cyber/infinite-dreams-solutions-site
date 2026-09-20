import { NextResponse } from 'next/server'
import { sql, ensureSchema } from '../../../lib/db'

// Lightweight event collector. Never throws to the client — analytics must
// never break the site.
export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}))
    const type = String(body.type || '').slice(0, 40)
    if (!type) return new NextResponse(null, { status: 204 })

    const path = body.path ? String(body.path).slice(0, 300) : null
    const label = body.label ? String(body.label).slice(0, 200) : null
    const sessionId = body.sessionId ? String(body.sessionId).slice(0, 64) : null
    const referrer = body.referrer ? String(body.referrer).slice(0, 300) : null
    const locale = body.locale ? String(body.locale).slice(0, 8) : null
    const device = body.device ? String(body.device).slice(0, 12) : null
    const ua = (request.headers.get('user-agent') || '').slice(0, 300)

    await ensureSchema()
    await sql`
      INSERT INTO analytics_events (type, path, label, session_id, referrer, locale, device, user_agent)
      VALUES (${type}, ${path}, ${label}, ${sessionId}, ${referrer}, ${locale}, ${device}, ${ua});
    `
    return new NextResponse(null, { status: 204 })
  } catch (error) {
    console.error('track error:', error)
    // swallow — analytics failures must be invisible to users
    return new NextResponse(null, { status: 204 })
  }
}
