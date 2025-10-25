# תיקיית קבצי השמע

## איך להוסיף קבצי שמע:

### 1. העלה את הקבצים לתיקיה זו
- העלה קבצי MP3, WAV, או OGG
- השתמש בשמות ברורים (למשל: `song1.mp3`, `interview.wav`)

### 2. עדכן את הקוד
עבור ל-`src/app/he/productions/page.js` ועדכן את מערך `audioFiles`:

```javascript
const audioFiles = [
  {
    title: "שם הקובץ",
    description: "תיאור הקובץ",
    url: "/audio/שם_הקובץ.mp3",
    thumbnail: "https://example.com/image.jpg"
  }
]
```

### 3. פורמטים נתמכים:
- **MP3** - מומלץ (קטן ומהיר)
- **WAV** - איכות גבוהה
- **OGG** - קוד פתוח

### 4. דוגמה:
```
public/
  audio/
    song1.mp3
    interview.wav
    demo.ogg
```

## הערות:
- הקבצים יהיו זמינים בכתובת: `https://yoursite.com/audio/filename.mp3`
- השתמש בשמות קבצים באנגלית ללא רווחים
- מומלץ לכווץ קבצים גדולים
