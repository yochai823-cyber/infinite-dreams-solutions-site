import { NextResponse } from 'next/server'
import { sql, ensureSchema } from '../../../../../lib/db'

export async function POST(request) {
  try {
    const body = await request.json()
    const { requestId, note } = body

    if (!requestId || !note || !note.id || !note.text) {
      return NextResponse.json(
        { success: false, error: 'חסרים פרמטרים נדרשים' },
        { status: 400 }
      )
    }

    await ensureSchema()

    const reqId = BigInt(requestId)
    const noteId = BigInt(note.id)

    // נשמור את הטקסט בלבד, ה-timestamp ייווצר מה-DB
    await sql`
      INSERT INTO request_notes (id, request_id, text)
      VALUES (${noteId}, ${reqId}, ${note.text});
    `

    return NextResponse.json({
      success: true,
      message: 'הערה נשמרה בהצלחה'
    })
  } catch (error) {
    console.error('Error saving note to DB:', error)
    return NextResponse.json(
      { success: false, error: `שגיאה בשמירת ההערה: ${error.message}` },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    await ensureSchema()

    const rows = await sql`
      SELECT id, request_id, text, created_at
      FROM request_notes
      ORDER BY created_at ASC;
    `

    const formatter = new Intl.DateTimeFormat('he-IL', {
      timeZone: 'Asia/Jerusalem',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    })

    const notesByRequest = {}

    for (const row of rows) {
      const reqId = String(row.request_id)
      if (!notesByRequest[reqId]) {
        notesByRequest[reqId] = []
      }
      notesByRequest[reqId].push({
        id: Number(row.id),
        text: row.text,
        timestamp: formatter.format(row.created_at)
      })
    }

    return NextResponse.json({
      success: true,
      notes: notesByRequest
    })
  } catch (error) {
    console.error('Error loading notes from DB:', error)
    return NextResponse.json(
      { success: false, error: 'שגיאה בטעינת ההערות' },
      { status: 500 }
    )
  }
}
