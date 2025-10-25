import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const REQUESTS_FILE = path.join(process.cwd(), 'contact-requests.json')
const NOTES_FILE = path.join(process.cwd(), 'admin-notes.json')

export async function POST(request) {
  try {
    const body = await request.json()
    console.log('Received request body:', body)
    
    const { requestId, note } = body

    if (!requestId || !note) {
      console.error('Missing requestId or note:', { requestId, note })
      return NextResponse.json(
        { success: false, error: 'חסרים פרמטרים נדרשים' },
        { status: 400 }
      )
    }

    // קרא את קובץ ההערות הנוכחי
    let allNotes = {}
    if (fs.existsSync(NOTES_FILE)) {
      const fileContent = fs.readFileSync(NOTES_FILE, 'utf8')
      allNotes = JSON.parse(fileContent)
    }

    // המר נתונים ישנים לפורמט החדש
    Object.keys(allNotes).forEach(id => {
      if (typeof allNotes[id] === 'string') {
        // נתונים ישנים - המר למערך
        // נשתמש ב-ID של הבקשה כבסיס לזמן (אם זה timestamp)
        const baseTime = parseInt(id) || Date.now()
        allNotes[id] = [{
          id: baseTime + Math.random(),
          text: allNotes[id],
          timestamp: new Date(baseTime).toLocaleString('he-IL', {
            timeZone: 'Asia/Jerusalem',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
          })
        }]
      }
    })

    // הוסף הערה חדשה למערך ההערות
    if (!allNotes[requestId]) {
      allNotes[requestId] = []
    }
    allNotes[requestId].push(note)

    console.log('Saving notes to file:', allNotes)

    // שמור את הקובץ המעודכן
    fs.writeFileSync(NOTES_FILE, JSON.stringify(allNotes, null, 2))

    return NextResponse.json({ 
      success: true, 
      message: 'הערה נשמרה בהצלחה' 
    })

  } catch (error) {
    console.error('Error saving note:', error)
    return NextResponse.json(
      { success: false, error: `שגיאה בשמירת ההערה: ${error.message}` },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    // קרא את קובץ ההערות
    let allNotes = {}
    if (fs.existsSync(NOTES_FILE)) {
      const fileContent = fs.readFileSync(NOTES_FILE, 'utf8')
      allNotes = JSON.parse(fileContent)
    }

    // המר נתונים ישנים לפורמט החדש
    Object.keys(allNotes).forEach(id => {
      if (typeof allNotes[id] === 'string') {
        // נתונים ישנים - המר למערך
        // נשתמש ב-ID של הבקשה כבסיס לזמן (אם זה timestamp)
        const baseTime = parseInt(id) || Date.now()
        allNotes[id] = [{
          id: baseTime + Math.random(),
          text: allNotes[id],
          timestamp: new Date(baseTime).toLocaleString('he-IL', {
            timeZone: 'Asia/Jerusalem',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
          })
        }]
      }
    })

    return NextResponse.json({ 
      success: true, 
      notes: allNotes 
    })

  } catch (error) {
    console.error('Error loading notes:', error)
    return NextResponse.json(
      { success: false, error: 'שגיאה בטעינת ההערות' },
      { status: 500 }
    )
  }
}
