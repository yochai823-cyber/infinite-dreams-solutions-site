import { NextResponse } from 'next/server'
import { sql, ensureSchema } from '../../../../../../../lib/db'

export async function DELETE(request, { params }) {
  try {
    const { noteId } = params

    await ensureSchema()

    const id = BigInt(noteId)
    await sql`DELETE FROM request_notes WHERE id = ${id};`

    return NextResponse.json({
      success: true,
      message: 'הערה נמחקה בהצלחה'
    })
  } catch (error) {
    console.error('Error deleting note from DB:', error)
    return NextResponse.json(
      { success: false, error: 'שגיאה במחיקת ההערה' },
      { status: 500 }
    )
  }
}
