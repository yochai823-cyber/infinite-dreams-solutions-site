import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const REQUESTS_FILE = path.join(process.cwd(), 'contact-requests.json')

export async function DELETE(request, { params }) {
  try {
    const { id } = params

    // קרא את הקובץ הנוכחי
    let requests = []
    if (fs.existsSync(REQUESTS_FILE)) {
      const fileContent = fs.readFileSync(REQUESTS_FILE, 'utf8')
      requests = JSON.parse(fileContent)
    }

    // מצא את הבקשה ומחק אותה
    const filteredRequests = requests.filter(request => request.id !== id)

    // שמור את הקובץ המעודכן
    fs.writeFileSync(REQUESTS_FILE, JSON.stringify(filteredRequests, null, 2))

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
