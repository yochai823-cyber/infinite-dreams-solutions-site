import { NextResponse } from 'next/server'
import { sql, ensureSchema } from '../../../../../lib/db'

export async function DELETE(request, { params }) {
  try {
    const { id } = params

    await ensureSchema()

    const requestId = BigInt(id)

    // מחיקת הערות (יש גם ON DELETE CASCADE, אבל נוודא)
    await sql`DELETE FROM request_notes WHERE request_id = ${requestId};`
    await sql`DELETE FROM contact_requests WHERE id = ${requestId};`

    return NextResponse.json({
      success: true,
      message: 'בקשה נמחקה בהצלחה'
    })
  } catch (error) {
    console.error('Error deleting request from DB:', error)
    return NextResponse.json(
      { success: false, error: 'שגיאה במחיקת הבקשה' },
      { status: 500 }
    )
  }
}
