import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// יומן בקשות - נשמור בקובץ JSON
const REQUESTS_LOG_PATH = path.join(process.cwd(), 'contact-requests.json')

export async function GET(request) {
  try {
    // בדיקה אם הקובץ קיים
    if (!fs.existsSync(REQUESTS_LOG_PATH)) {
      return NextResponse.json({
        success: true,
        requests: []
      })
    }

    // קריאת הקובץ
    const data = fs.readFileSync(REQUESTS_LOG_PATH, 'utf8')
    const requests = JSON.parse(data)

    // החזרת הבקשות (החדשות ביותר ראשונות)
    return NextResponse.json({
      success: true,
      requests: requests || []
    })

  } catch (error) {
    console.error('שגיאה בקריאת יומן הבקשות:', error)
    return NextResponse.json(
      { success: false, message: 'שגיאה בקריאת הבקשות' },
      { status: 500 }
    )
  }
}
