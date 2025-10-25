import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const REQUESTS_FILE = path.join(process.cwd(), 'contact-requests.json')

export async function DELETE(request, { params }) {
  try {
    const { id } = params
    console.log('Deleting request with ID:', id)

    // קרא את הקובץ הנוכחי
    let requests = []
    if (fs.existsSync(REQUESTS_FILE)) {
      const fileContent = fs.readFileSync(REQUESTS_FILE, 'utf8')
      requests = JSON.parse(fileContent)
    }

    console.log('Current requests:', requests.length)
    console.log('Looking for ID:', id)

    // מצא את הבקשה ומחק אותה
    const filteredRequests = requests.filter(request => {
      console.log('Comparing:', request.id, 'with', id, 'type:', typeof request.id, typeof id)
      // המר את שני הערכים למספרים כדי לוודא השוואה נכונה
      return String(request.id) !== String(id)
    })
    
    console.log('After filtering:', filteredRequests.length)
    console.log('Filtered requests:', filteredRequests)

    // שמור את הקובץ המעודכן
    fs.writeFileSync(REQUESTS_FILE, JSON.stringify(filteredRequests, null, 2))
    console.log('File saved successfully')

    // מחק גם את ההערות של הבקשה
    const NOTES_FILE = path.join(process.cwd(), 'admin-notes.json')
    if (fs.existsSync(NOTES_FILE)) {
      const notesContent = fs.readFileSync(NOTES_FILE, 'utf8')
      const allNotes = JSON.parse(notesContent)
      
      if (allNotes[id]) {
        delete allNotes[id]
        fs.writeFileSync(NOTES_FILE, JSON.stringify(allNotes, null, 2))
        console.log('Deleted notes for request:', id)
      }
    }

    return NextResponse.json({ 
      success: true, 
      message: 'בקשה נמחקה בהצלחה' 
    })

  } catch (error) {
    console.error('Error deleting request:', error)
    return NextResponse.json(
      { success: false, error: 'שגיאה במחיקת הבקשה' },
      { status: 500 }
    )
  }
}
