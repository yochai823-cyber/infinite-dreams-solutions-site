import { NextResponse } from 'next/server'
import { sql, ensureSchema } from '../../../lib/db'

// פונקציה לשליחת מייל (זמנית - רק הדפסה לקונסול)
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
💡 זכור: התחייבת לחזור תוך 48 שעות!
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

    // לוודא שהטבלאות קיימות
    await ensureSchema()

    // מזהה בקשה ייחודי (שומר על פורמט Date.now שהאדמין כבר מכיר)
    const requestId = Date.now()

    // שמירת הבקשה בבסיס הנתונים
    await sql`
      INSERT INTO contact_requests (
        id,
        name,
        email,
        phone,
        project_type,
        project_description,
        budget,
        timeline,
        additional_info
      ) VALUES (
        ${requestId},
        ${formData.name},
        ${formData.email},
        ${formData.phone},
        ${formData.projectType},
        ${formData.projectDescription},
        ${formData.budget},
        ${formData.timeline},
        ${formData.additionalInfo}
      );
    `

    // שליחת מייל (כרגע רק הדפסה לקונסול)
    await sendEmail(formData, requestId)

    // גם אם שמירת הלוג לקובץ נכשלה – לא נכשיל את הבקשה ללקוח
    return NextResponse.json({
      success: true,
      message: 'הבקשה נשלחה בהצלחה! נחזור אליכם תוך 48 שעות.',
      requestId
    })
  } catch (error) {
    console.error('שגיאה בשרת:', error)
    return NextResponse.json(
      { success: false, message: 'שגיאה בשרת. אנא נסו שוב.' },
      { status: 500 }
    )
  }
}
