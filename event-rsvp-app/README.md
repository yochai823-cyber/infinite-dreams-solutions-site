# Event RSVP Manager - מערכת אישורי הגעה

מערכת מלאה לניהול אירועים ואישורי הגעה עם Firebase.

## התקנה והפעלה

### דרישות מקדימות
- Node.js 18+
- Firebase CLI (`npm install -g firebase-tools`)
- חשבון Firebase

### 1. התקנת Dependencies

```bash
# Frontend
cd event-rsvp-app
npm install

# Cloud Functions
cd functions
npm install
cd ..
```

### 2. הגדרת Firebase

1. צור פרויקט חדש ב-[Firebase Console](https://console.firebase.google.com)
2. הפעל את השירותים הבאים:
   - Authentication (Email/Password + Google)
   - Firestore Database
   - Storage
   - Functions (דורש Blaze plan)
3. העתק את קובצי ההגדרות:

```bash
cp .env.example .env
```

4. מלא את ערכי ה-Firebase ב-`.env`

### 3. Deploy Rules

```bash
firebase login
firebase use --add  # בחר את הפרויקט שלך
firebase deploy --only firestore:rules,storage
```

### 4. הפעלה מקומית

```bash
# Frontend
npm run dev

# Cloud Functions (בטרמינל נפרד)
cd functions
npm run serve
```

### 5. Deploy לפרודקשן

```bash
# Build Frontend
npm run build

# Deploy הכל
firebase deploy
```

## מבנה הפרויקט

```
event-rsvp-app/
├── src/
│   ├── app/              # Layout, Routes
│   ├── features/
│   │   ├── auth/         # Login, Signup, Settings
│   │   ├── events/       # Dashboard, Wizard, Details
│   │   ├── guests/       # Table, CSV Import, Dedupe
│   │   ├── rsvp/         # Public RSVP pages
│   │   └── admin/        # Admin panel
│   └── shared/
│       ├── ui/           # Button, Modal, Table, etc.
│       ├── firebase/     # Firebase integration
│       ├── i18n/         # Hebrew + English
│       ├── privacy/      # Cookie Banner, Consent
│       ├── accessibility/# Skip Link, Focus Trap
│       └── forms/        # Validators
├── functions/            # Cloud Functions
├── firestore.rules       # Firestore security rules
├── storage.rules         # Storage security rules
└── firebase.json         # Firebase config
```

## פיצ'רים

### Client (מארח)
- יצירת אירועים עם אשף שלבים
- העלאת תמונת הזמנה + PDF
- ניהול מוזמנים + ייבוא CSV
- קישורי RSVP מאובטחים (token hash)
- Dashboard עם KPI
- מרכז שליחה (WhatsApp, Email)
- תזכורות אוטומטיות
- דוחות וייצוא CSV
- הגדרות חשבון

### Guest (מוזמן)
- דף RSVP מותאם למובייל
- אישור/סירוב/אולי + כמות מלווים + הערה
- עדכון תשובה עד הדדליין
- ללא צורך בהתחברות

### Admin
- ניהול משתמשים (חסימה, שינוי תפקיד)
- תבניות הודעה
- תאימות ופרטיות (GDPR-like)
- Audit Log

### אבטחה
- Token hash (לא נשמר הטוקן עצמו)
- Cloud Functions לכתיבת RSVP (Guest לא כותב ישירות)
- Rate Limiting
- App Check
- Firestore rules קשוחות

### נגישות
- WCAG 2.1 AA
- RTL מלא
- ניווט מקלדת
- ARIA labels
- Skip link
- Focus trap במודלים
- Reduced motion support

### חוקי ישראל
- מדיניות פרטיות (חוק הגנת הפרטיות)
- תנאי שימוש
- Cookie Banner (Opt-in לאנליטיקס)
- Data Retention (90 יום אחרי אירוע)
- זכות עיון/תיקון/מחיקה
