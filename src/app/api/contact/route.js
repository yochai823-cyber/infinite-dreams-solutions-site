import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// יומן בקשות - נשמור בקובץ JSON
const REQUESTS_LOG_PATH = path.join(process.cwd(), 'contact-requests.json')

// פונקציה לשמירת בקשה ביומן
function saveRequestToLog(formData) {
  const timestamp = new Date().toLocaleString('he-IL', {
    timeZone: 'Asia/Jerusalem',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })

  const requestEntry = {
    id: Date.now(),
    timestamp,
    date: new Date().toISOString(),
    ...formData
  }

  try {
    // קריאת הקובץ הקיים
    let requests = []
    if (fs.existsSync(REQUESTS_LOG_PATH)) {
      const data = fs.readFileSync(REQUESTS_LOG_PATH, 'utf8')
      requests = JSON.parse(data)
    }

    // הוספת הבקשה החדשה
    requests.unshift(requestEntry) // הוספה בתחילת הרשימה

    // שמירת הקובץ המעודכן
    fs.writeFileSync(REQUESTS_LOG_PATH, JSON.stringify(requests, null, 2), 'utf8')
    
    return requestEntry
  } catch (error) {
    console.error('שגיאה בשמירת יומן:', error)
    return null
  }
}

// פונקציה לשליחת מייל (זמנית - רק שמירה ביומן)
async function sendEmail(formData, requestId) {
  try {
    // כרגע רק נשמור ביומן - תוכל להוסיף שליחת מייל מאוחר יותר
    console.log('בקשה חדשה:', {
      id: requestId,
      timestamp: new Date().toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem' }),
      ...formData
    })

    // תרגום סוג הפרויקט
    const projectTypeMap = {
      'app': 'אפליקציה',
      'website': 'אתר אינטרנט',
      'automation': 'אוטומציה',
      'consulting': 'יעוץ והדרכה',
      'production': 'הפקה מוזיקלית',
      'lecture': 'הרצאה',
      'other': 'אחר'
    }

    // תרגום תקציב
    const budgetMap = {
      'under-5k': 'עד 5,000 ₪',
      '5k-15k': '5,000 - 15,000 ₪',
      '15k-30k': '15,000 - 30,000 ₪',
      '30k-50k': '30,000 - 50,000 ₪',
      '50k-100k': '50,000 - 100,000 ₪',
      'over-100k': 'מעל 100,000 ₪',
      'discuss': 'נדבר על זה'
    }

    // תרגום לוח זמנים
    const timelineMap = {
      'asap': 'כמה שיותר מהר',
      '1-month': 'תוך חודש',
      '2-3-months': '2-3 חודשים',
      '3-6-months': '3-6 חודשים',
      '6-months-plus': 'מעל 6 חודשים',
      'flexible': 'גמיש'
    }

    // כרגע רק נדפיס לקונסול - תוכל להוסיף שליחת מייל מאוחר יותר
    console.log('📧 תוכן המייל שהיה נשלח:')
    console.log(`
🎯 בקשה חדשה לפרויקט - Infinite Dreams Solutions

📋 פרטי הלקוח:
• שם: ${formData.name}
• אימייל: ${formData.email}
• טלפון: ${formData.phone}

🚀 פרטי הפרויקט:
• סוג פרויקט: ${projectTypeMap[formData.projectType] || formData.projectType}
• תיאור: ${formData.projectDescription}

💰 תקציב: ${budgetMap[formData.budget] || formData.budget || 'לא צוין'}

⏰ לוח זמנים: ${timelineMap[formData.timeline] || formData.timeline || 'לא צוין'}

📝 מידע נוסף:
${formData.additionalInfo || 'אין מידע נוסף'}

🆔 מזהה בקשה: ${requestId}
📅 תאריך ושעה: ${new Date().toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem' })}

---
💡 זכור: התחייבת לחזור תוך 24 שעות!
    `)
    
    return true
  } catch (error) {
    console.error('שגיאה בשליחת מייל:', error)
    return false
  }
}

export async function POST(request) {
  try {
    const formData = await request.json()

    // שמירה ביומן
    const requestEntry = saveRequestToLog(formData)
    
    if (!requestEntry) {
      return NextResponse.json(
        { success: false, message: 'שגיאה בשמירת הבקשה' },
        { status: 500 }
      )
    }

    // שליחת מייל (כרגע רק הדפסה לקונסול)
    const emailSent = await sendEmail(formData, requestEntry.id)

    return NextResponse.json({
      success: true,
      message: 'הבקשה נשלחה בהצלחה! נחזור אליכם תוך 24 שעות.',
      requestId: requestEntry.id
    })

  } catch (error) {
    console.error('שגיאה בשרת:', error)
    return NextResponse.json(
      { success: false, message: 'שגיאה בשרת. אנא נסו שוב.' },
      { status: 500 }
    )
  }
}
