import { NextResponse } from 'next/server'
import { sql, ensureSchema } from '../../../../lib/db'

export async function GET() {
  try {
    await ensureSchema()

    const rows = await sql`
      SELECT
        id,
        name,
        email,
        phone,
        project_type,
        project_description,
        budget,
        timeline,
        additional_info,
        created_at
      FROM contact_requests
      ORDER BY created_at DESC;
    `

    const formatter = new Intl.DateTimeFormat('he-IL', {
      timeZone: 'Asia/Jerusalem',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    })

    const requests = rows.map((row) => ({
      id: Number(row.id),
      name: row.name,
      email: row.email,
      phone: row.phone,
      projectType: row.project_type,
      projectDescription: row.project_description,
      budget: row.budget,
      timeline: row.timeline,
      additionalInfo: row.additional_info,
      timestamp: formatter.format(row.created_at)
    }))

    return NextResponse.json({
      success: true,
      requests
    })
  } catch (error) {
    console.error('שגיאה בקריאת הבקשות מה-DB:', error)
    return NextResponse.json(
      { success: false, message: 'שגיאה בקריאת הבקשות' },
      { status: 500 }
    )
  }
}
