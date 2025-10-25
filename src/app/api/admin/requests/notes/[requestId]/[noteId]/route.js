import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const NOTES_FILE = path.join(process.cwd(), 'admin-notes.json')

export async function DELETE(request, { params }) {
  try {
    const { requestId, noteId } = params

    // קרא את קובץ ההערות הנוכחי
    let allNotes = {}
    if (fs.existsSync(NOTES_FILE)) {
      const fileContent = fs.readFileSync(NOTES_FILE, 'utf8')
      allNotes = JSON.parse(fileContent)
    }

    // מחק את ההערה הספציפית
    if (allNotes[requestId]) {
      allNotes[requestId] = allNotes[requestId].filter(note => note.id !== parseInt(noteId))
      
      // אם אין יותר הערות לבקשה זו, מחק את המפתח
      if (allNotes[requestId].length === 0) {
        delete allNotes[requestId]
      }
    }

    // שמור את הקובץ המעודכן
    fs.writeFileSync(NOTES_FILE, JSON.stringify(allNotes, null, 2))

    return NextResponse.json({ 
      success: true, 
      message: 'הערה נמחקה בהצלחה' 
    })

  } catch (error) {
    console.error('Error deleting note:', error)
    return NextResponse.json(
      { success: false, error: 'שגיאה במחיקת ההערה' },
      { status: 500 }
    )
  }
}
