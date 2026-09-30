export const he = {
  brand:'Infinite Dreams Solutions',
  nav:{
    solutions:'פתרונות',
    services:'שירותים',
    process:'איך עובדים',
    work:'עבודות',
    about:'אודות',
    contact:'צרו קשר',
    quote:'בואו נדבר',
    lang:'EN'
  },

  hero:{
    eyebrow:'פיתוח · אוטומציה · בינה מלאכותית',
    title:'פתרונות AI לעסקים ולארגונים\nאפליקציות, אוטומציות ומערכות חכמות',
    // legacy short title (used by some internal pages)
    sub:'הופכים תהליכים ידניים ומורכבים למערכות חכמות, אפליקציות מדויקות ופתרונות בינה מלאכותית — ומלמדים את הצוות שלכם איך לרתום את הטכנולוגיה לעבודה היומיומית.',
    subShort:'היום כבר לא צריך תקציב של מיליונים או ארגון ענק — פתרונות טכנולוגיים חכמים ונגישים שיקדמו כל עסק, גם הקטן.',
    ctaPrimary:'בואו נדבר על הפרויקט',
    ctaSecondary:'לצפייה בעבודות',
    trust:'למעלה מ-20 שנות ניסיון בליווי רשויות, עמותות, חברות ועסקים'
  },

  // Home stat / trust strip (grounded, no invented numbers)
  stats:[
    ['20+', 'שנות ניסיון בליווי עסקים, רשויות וארגונים']
  ],

  solutionsEyebrow:'הפתרונות שלנו',
  solutionsTitle:'פתרונות חכמים, מוכנים לעבוד — לכל עסק',
  solutionsSub:'כל פתרון כבר בנוי, נבדק ועובד בשטח. מתאימים אותו לעסק שלכם — בלי לפתח מאפס ובלי מחירי ענק.',
  solutionsCta:'עוד על הפתרון',
  solutions:[
    {
      slug:'whatsapp-ai', image:'/solutions/whatsapp-ai.webp', badge:'AI',
      title:'עוזר דיגיטלי בוואטסאפ',
      tagline:'עונה ללקוחות, מתאם וסוגר לידים — 24/7',
      pain:'לידים שנופלים כי לא הספקתם לענות בזמן?',
      description:'עוזר דיגיטלי חכם שמחובר לוואטסאפ העסקי שלכם — עונה ללקוחות באופן מיידי, מסנן פניות, מתאם פגישות וסוגר לידים בשבילכם, גם כשאתם עסוקים או ישנים. הלקוחות מקבלים מענה תוך שניות, ואתם מקבלים רק את הפניות החמות.',
      benefits:['מענה מיידי 24/7, גם אחרי שעות העבודה','סינון פניות והעברה חכמה לנציג אנושי','תיאום פגישות ותורים אוטומטי','בנק ידע שמכיר את העסק ועונה כמוכם'],
      forWho:'מושלם לקוסמטיקאיות, קליניקות, נותני שירות ועסקים קטנים שמאבדים לקוחות בגלל מענה איטי.'
    },
    {
      slug:'classes', image:'/solutions/classes.webp', badge:'מערכת',
      title:'מערכת לניהול חוגים',
      tagline:'נוכחות, הורים, תשלומים ומורים — במקום אחד',
      pain:'מנהלים חוגים עם אקסלים, וואטסאפים ופתקים?',
      description:'מערכת מלאה לניהול חוגים ופעילויות: נוכחות בקליק, אפליקציה להורים, ניהול מורים ותלמידים, תשלומים ודוחות — הכל מסונכרן ובמקום אחד. חוסכת שעות עבודה בשבוע ונותנת לכם שליטה מלאה על הפעילות.',
      benefits:['נוכחות דיגיטלית בזמן אמת','אפליקציה להורים — עדכונים, לוז ותשלומים','ניהול מורים, תלמידים ולוח שעות','דוחות והכנסות בלחיצת כפתור'],
      forWho:'מושלם לחוגים, בתי ספר לאמנויות, מתנ״סים, תנועות נוער וכל ארגון עם פעילויות.'
    },
    {
      slug:'dance-studio', image:'/solutions/dance-studio.webp', badge:'לריקוד',
      title:'מערכת לניהול סטודיו לריקוד',
      tagline:'האפליקציה היחידה בישראל לסטודיו לריקוד — ב-100%',
      pain:'מנהלים סטודיו עם וואטסאפים, אקסלים ודפי נוכחות?',
      description:'מערכת מלאה לניהול סטודיו לריקוד: דיווח נוכחות מהנייד, אפליקציה להורים ולתלמידים, מעקב שיעורי ניסיון, גבייה בהוראת קבע ודוחות — הכל מסונכרן במקום אחד. פחות ניירת, יותר זמן לרקוד.',
      benefits:['דיווח נוכחות מהיר מהנייד + הערות תלמיד','אפליקציה להורים ולתלמידים עם עדכוני פוש','מעקב שיעורי ניסיון ותזכורות אוטומטיות','גבייה בהוראת קבע ומעקב תשלומים'],
      forWho:'מותאם ב-100% לסטודיו לריקוד — בלט, היפ-הופ, מודרני, ג׳אז וכל סגנון.'
    },
    {
      slug:'rooms', image:'/solutions/rooms.webp', badge:'מערכת',
      title:'מערכת לניהול חדרים ואולמות',
      tagline:'הזמנות, לוח שנה ותשלומים — בלי כפילויות',
      pain:'חדרים שנתפסים פעמיים ולוח זמנים מבולגן?',
      description:'מערכת חכמה לניהול הזמנות של חדרים, אולמות וחללים: לוח שנה ויזואלי, הזמנות אונליין, מניעת כפילויות, תשלומים ודוחות ניצול. הכל שקוף, מסודר וזמין מכל מכשיר.',
      benefits:['לוח שנה ויזואלי לכל החללים','הזמנות אונליין ואישור אוטומטי','מניעת כפילויות והתנגשויות','דוחות ניצול והכנסות'],
      forWho:'מושלם למתנ״סים, בתי ספר, עמותות, אולמות אירועים וחללי עבודה משותפים.'
    },
    {
      slug:'open-houses', image:'/solutions/map.webp', badge:'מפה',
      title:'מפה אינטראקטיבית לאירועים',
      tagline:'בתים פתוחים, פסטיבלים וסיורים — על מפה חיה',
      pain:'אירוע גדול ואנשים לא מוצאים לאן ללכת?',
      description:'מפה אינטראקטיבית וממותגת לאירועים עירוניים — בתים פתוחים, פסטיבלים, סיורים ותערוכות. המבקרים רואים את כל התחנות על מפה חיה, מסננים לפי קטגוריה, מסמנים מועדפים ומנווטים בקלות. חוויית מבקר מושלמת, ולכם — נתונים על מה שעובד.',
      benefits:['כל התחנות על מפה חיה ומעודכנת','סינון לפי קטגוריה וחיפוש חכם','ניווט וסימון מועדפים','נתוני ביקורים בזמן אמת'],
      forWho:'מושלם לרשויות, מחלקות תרבות, פסטיבלים ואירועי בתים פתוחים.'
    }
  ],

  clientsEyebrow:'לקוחות נבחרים',
  clientsTitle:'אלו חלק מהלקוחות שלנו',
  clientsSub:'רשויות, מתנ״סים, עמותות ועסקים שכבר עובדים איתנו.',

  servicesTitle:'מה אנחנו בונים',
  servicesSub:'שלושה תחומים, מטרה אחת — לתת לכם טכנולוגיה שחוסכת זמן, מפחיתה טעויות ומזניקה את הארגון.',
  // legacy [title, desc] pairs — now tech-focused (used on the home grid)
  services:[
    ['אפליקציות, אתרים ומערכות ניהול','פיתוח אפליקציות ווב, אתרים ומערכות ניהול מותאמות אישית — מהירות, יציבות ועיצוב מוקפד שנבנה סביב המשתמשים שלכם.'],
    ['אוטומציה וחיבור מערכות','מחברים בין הכלים שכבר יש לכם והופכים תהליכים ידניים לאוטומטיים — טפסים, דוחות, סנכרון נתונים והתראות שרצים לבד, מסביב לשעון.'],
    ['הרצאות וסדנאות בינה מלאכותית','הרצאות מעוררות השראה וסדנאות מעשיות שמלמדות צוותים לעבוד עם AI ביום-יום — כלים, פרומפטים ותהליכי עבודה שמייצרים תוצאה.'],
  ],
  serviceMeta:[
    { tag:'Web · Mobile · SaaS', points:['ממשקי ניהול ולוחות בקרה','אפליקציות ללקוחות ולצוות','חיבור לתשלומים, מפות ונתונים'] },
    { tag:'Make · APIs · Integrations', points:['אוטומציה של תהליכים חוזרים','סנכרון בין מערכות ו-CRM','דוחות והתראות אוטומטיים'] },
    { tag:'הרצאות · סדנאות · ליווי', points:['הטמעת AI בצוות ובארגון','סדנאות מעשיות מותאמות תחום','כלים לעבודה חכמה ומהירה'] },
  ],

  productEyebrow:'מוצר דגל',
  productTitle:'מערכת לניהול חוגים',
  productSub:'המערכת שמנהלת חוגים מקצה לקצה — נוכחות, הורים, תלמידים, מורים, פעילויות, תשלומים ודוחות. הכל במקום אחד, בדסקטופ ובאפליקציה למובייל.',
  productFeatures:['ניהול נוכחות','הורים ותלמידים','תשלומים ודוחות','אפליקציה למובייל'],
  productCta:'רוצים מערכת כזו לארגון שלכם?',
  productView:'הגדלה',

  processTitle:'איך עובדים איתנו',
  processSub:'תהליך ברור ושקוף, בלי הפתעות — אתם יודעים בכל רגע איפה הפרויקט עומד.',
  process:[
    ['שיחת היכרות','מבינים את הצורך, המטרות והאתגרים — ומגדירים יחד איך נראית הצלחה.'],
    ['אפיון ותכנון','בונים אפיון מדויק, לוח זמנים ותקציב שקוף. אתם מאשרים לפני שמתחילים.'],
    ['פיתוח והטמעה','בונים בשלבים, עם עדכונים שוטפים והדגמות — כך שאתם רואים התקדמות אמיתית.'],
    ['השקה וליווי','עולים לאוויר, מדריכים את הצוות ונשארים זמינים גם אחרי — לתמיכה ושיפורים.'],
  ],

  whyTitle:'למה לעבוד איתנו',
  why:[
    ['טכנולוגיה שמדברת עסקית','מעל 20 שנה בניהול ארגונים לצד פיתוח — אנחנו מבינים לא רק את הקוד, אלא את התהליך שמאחוריו.'],
    ['שקיפות מלאה','מחיר, לו״ז ותכולה ברורים מראש. בלי אותיות קטנות ובלי הפתעות בדרך.'],
    ['מהירות ותגובה','חוזרים אליכם תוך 48 שעות ומתקדמים מהר — בלי לוותר על איכות.'],
    ['ליווי אישי','אתם לא עוד כרטיס בתור. מלווים אתכם מהרעיון ועד אחרי ההשקה.'],
  ],

  featured:'עבודות נבחרות',
  featuredSub:'הצצה לכמה מהמערכות והאפליקציות שבנינו לארגונים.',
  workCta:'בואו נבנה את הבא בתור →',

  finalTitle:'יש לכם רעיון או תהליך\nשמבזבז לכם זמן?',
  finalSub:'ספרו לנו מה אתם צריכים ונחזור אליכם עם תכנית פעולה קצרה, לו״ז ועלויות שקופות.',

  // legacy contact block (used by CTA component)
  contactTitle:'יש לכם חזון?\nבואו נבנה אותו.',
  contactSub:'תכנית פעולה קצרה וברורה\nעם לו״ז ועלויות שקופות.',

  studioClaimLabel:'למה אנחנו',
  studioCubesTitle:'וזה עוד לא הכל — מה שהמערכת עושה בשבילכם',
  studioPricingTitle:'מסלולים לרכישת האפליקציה',
  studioScreensTitle:'הצצה למסכים מתוך האפליקציה',
  studioAppTodayTitle:'מה קורה היום',
  studioAppAlertsTitle:'דורש את תשומת לבך',
  studioLiveLabel:'תצוגה חיה',
  studio:{
    'dance-studio':{
      pricingSlug:'classes',
      recommend:'סטודיו',
      badge:'מערכת · לסטודיו לריקוד',
      title:'מערכת לניהול\nסטודיו לריקוד',
      tagline:'האפליקציה היחידה בישראל שמותאמת לסטודיו לריקוד — ב-100%',
      desc:'ניהול מלא של הסטודיו במקום אחד — נוכחות מהנייד, אפליקציה להורים ולתלמידים, מעקב שיעורי ניסיון וגבייה בהוראת קבע. פחות ניירת, פחות וואטסאפים, יותר זמן לרקוד.',
      claim:'האפליקציה היחידה בישראל שמותאמת לסטודיו לריקוד ב-100%!',
      claimImage:'/solutions/dance-hero.webp',
      app:{
        greeting:'בוקר טוב, סטודיו במבט אחד ✨',
        alerts:[
          { icon:'🔥', text:'8 שיעורי ניסיון נקבעו להיום', tone:'good' },
          { icon:'🎂', text:'2 ימי הולדת השבוע', tone:'info' },
          { icon:'💰', text:'3 תלמידים טרם שילמו', tone:'bad' },
        ],
        lessons:[
          { time:'16:00', name:'בלט קלאסי · גילאי 6–8', count:'15 תלמידים · 10 קבועים / 5 ניסיון' },
          { time:'17:00', name:'היפ-הופ · נוער', count:'18 תלמידים · 14 קבועים / 4 ניסיון' },
          { time:'18:00', name:'מחול מודרני · מתקדמים', count:'12 תלמידים · 11 קבועים / 1 ניסיון' },
          { time:'19:00', name:'ג׳אז · גילאי 10–12', count:'16 תלמידים · 13 קבועים / 3 ניסיון' },
          { time:'20:00', name:'סטרים־בל · בוגרים', count:'20 תלמידים · 17 קבועים / 3 ניסיון' },
        ],
      },
      features:[
        { icon:'📲', title:'דיווח נוכחות מהיר מהנייד', desc:'המורה מסמן/ת נוכחות בשנייה ישירות מהמכשיר, עם אפשרות להוסיף הערות אישיות לכל תלמיד/ה.', quote:'אין צורך יותר בדפים' },
        { icon:'👨‍👩‍👧', title:'אפליקציה להורים ולתלמידים', desc:'עדכוני פוש לנייד, צפייה במערכת השעות, הרשמה לחוגים וסדנאות ומעקב אחרי תשלומים — הכל במקום אחד.', quote:'אין צורך יותר בקבוצות וואטסאפ' },
        { icon:'🎯', title:'מעקב אחרי שיעורי ניסיון', desc:'רישום לשיעורי ניסיון דרך וואטסאפ, תזכורות אוטומטיות לפני השיעור והמרה חכמה למנוי קבוע.', quote:'אף ליד לא נופל בדרך' },
        { icon:'💳', title:'ניהול תשלומים וגבייה', desc:'מתחברים לסליקה הקיימת שלכם, גובים בהוראת קבע ועוקבים אחרי חובות ותשלומים — בלי אקסלים.', quote:'הכסף נכנס לבד' },
      ],
      cubes:[
        { icon:'🧑‍🏫', title:'נוכחות מורים ועובדים', text:'דיווח שעות ונוכחות של צוות ההוראה — בסיס מסודר לשכר ולדוחות.' },
        { icon:'🏛️', title:'התממשקות למתנ״ס', text:'חיבור למערכות הרישום והגבייה של הרשות והמתנ״ס.' },
        { icon:'📝', title:'רישום והרשמה אונליין', text:'הורים נרשמים לחוגים ולסדנאות ומשלמים ישירות דרך הפורטל.' },
        { icon:'👥', title:'ניהול חוגים, תלמידים ומורים', text:'כל הפרטים, החוגים והשיבוצים מרוכזים במקום אחד.' },
        { icon:'📊', title:'דוחות כספיים מתקדמים', text:'תמונת מצב פיננסית מלאה לכל חוג ולכל סניף.' },
        { icon:'🗓️', title:'מערכת שעות', text:'לוח שיעורים מסודר וזמין לצוות ולהורים.' },
        { icon:'🎟️', title:'אירועים, סדנאות והודעות', text:'פתיחת אירועים וסדנאות עם הרשמה, והודעות ישירות מהמרכז.' },
        { icon:'🤖', title:'עוזר AI חכם מובנה', text:'עוזר AI מובנה בתוך המערכת לניהול היומיום.' },
      ],
    },
    'classes':{
      pricingSlug:'classes',
      heroVideo:'/solutions/video/classes-promo.mp4',
      heroPoster:'/solutions/video/classes-promo.jpg',
      recommend:'מתנ״ס',
      badge:'מערכת · לניהול חוגים',
      title:'מערכת לניהול\nחוגים ופעילויות',
      tagline:'כל החוגים במקום אחד — נוכחות, הורים, תשלומים ודוחות',
      desc:'מערכת מלאה לניהול חוגים ופעילויות: דיווח נוכחות מהנייד, אפליקציה להורים ולתלמידים, ניהול מורים ותלמידים, גבייה ודוחות — הכל מסונכרן במקום אחד. חוסכת שעות עבודה בשבוע.',
      claim:'המערכת שמנהלת את כל החוגים שלכם מקצה לקצה — בלי אקסלים ובלי פתקים',
      app:{
        greeting:'בוקר טוב, כל החוגים במבט אחד ✨',
        alerts:[
          { icon:'🔥', text:'8 שיעורי ניסיון נקבעו להיום', tone:'good' },
          { icon:'🎂', text:'2 ימי הולדת השבוע', tone:'info' },
          { icon:'💰', text:'3 תלמידים טרם שילמו', tone:'bad' },
        ],
        lessons:[
          { time:'16:00', name:'קרמיקה · גילאי 8–10', count:'15 תלמידים · 10 קבועים / 5 ניסיון' },
          { time:'17:00', name:'רובוטיקה · נוער', count:'18 תלמידים · 14 קבועים / 4 ניסיון' },
          { time:'18:00', name:'אנגלית מדוברת · מתקדמים', count:'12 תלמידים · 11 קבועים / 1 ניסיון' },
          { time:'19:00', name:'ג׳ודו · גילאי 10–12', count:'16 תלמידים · 13 קבועים / 3 ניסיון' },
          { time:'20:00', name:'מדעים ומעבדה · בוגרים', count:'20 תלמידים · 17 קבועים / 3 ניסיון' },
        ],
      },
      features:[
        { icon:'📲', title:'דיווח נוכחות מהיר מהנייד', desc:'המורה מסמן/ת נוכחות בשנייה ישירות מהמכשיר, עם אפשרות להוסיף הערות אישיות לכל תלמיד/ה.', quote:'אין צורך יותר בדפים' },
        { icon:'👨‍👩‍👧', title:'אפליקציה להורים ולתלמידים', desc:'עדכוני פוש לנייד, צפייה במערכת השעות, הרשמה לחוגים וסדנאות ומעקב אחרי תשלומים — הכל במקום אחד.', quote:'אין צורך יותר בקבוצות וואטסאפ' },
        { icon:'🎯', title:'מעקב אחרי שיעורי ניסיון', desc:'רישום לשיעורי ניסיון דרך וואטסאפ, תזכורות אוטומטיות לפני השיעור והמרה חכמה למנוי קבוע.', quote:'אף ליד לא נופל בדרך' },
        { icon:'💳', title:'ניהול תשלומים וגבייה', desc:'מתחברים לסליקה הקיימת שלכם, גובים בהוראת קבע ועוקבים אחרי חובות ותשלומים — בלי אקסלים.', quote:'הכסף נכנס לבד' },
      ],
      cubes:[
        { icon:'🧑‍🏫', title:'נוכחות מורים ועובדים', text:'דיווח שעות ונוכחות של צוות ההוראה — בסיס מסודר לשכר ולדוחות.' },
        { icon:'🏛️', title:'התממשקות למתנ״ס', text:'חיבור למערכות הרישום והגבייה של הרשות והמתנ״ס.' },
        { icon:'📝', title:'רישום והרשמה אונליין', text:'הורים נרשמים לחוגים ולסדנאות ומשלמים ישירות דרך הפורטל.' },
        { icon:'👥', title:'ניהול חוגים, תלמידים ומורים', text:'כל הפרטים, החוגים והשיבוצים מרוכזים במקום אחד.' },
        { icon:'📊', title:'דוחות כספיים מתקדמים', text:'תמונת מצב פיננסית מלאה לכל חוג ולכל סניף.' },
        { icon:'🗓️', title:'מערכת שעות', text:'לוח שיעורים מסודר וזמין לצוות ולהורים.' },
        { icon:'🎟️', title:'אירועים, סדנאות והודעות', text:'פתיחת אירועים וסדנאות עם הרשמה, והודעות ישירות מהמרכז.' },
        { icon:'🤖', title:'עוזר AI חכם מובנה', text:'עוזר AI מובנה בתוך המערכת לניהול היומיום.' },
      ],
    },
  },

  pricingEyebrow:'תמחור',
  pricingCustomTitle:'תמחור בהתאמה אישית',
  pricingCustomText:'כל פרויקט נבנה לפי הצרכים, היקף החללים והאינטגרציות שלכם — בלי חבילה שלא מתאימה. ספרו לנו מה תרצו ונחזור אליכם עם הצעת מחיר שקופה.',
  pricingCustomCta:'קבלת הצעת מחיר',
  pricingCta:'דברו איתנו',
  pricingBuy:'בחירת מסלול',
  pricingTrialCta:'התחל/י 7 ימים חינם',
  pricingTrialNote:'7 ימים חינם · נדרש כרטיס · חיוב ראשון ביום ה-8 · אפשר לבטל לפני בלי לשלם',
  pricingPopular:'הכי פופולרי',
  pricingPerMonth:'/ חודש',
  pricingMonthly:'חודשי',
  pricingAnnual:'שנתי',
  pricingSave:'חסכו ~13% בתשלום שנתי',
  pricingBilledAnnual:'בתשלום שנתי',
  pricingBilledMonthly:'בתשלום חודשי',
  pricingAllInclude:'כל המסלולים כוללים את אותן היכולות — ההבדל הוא רק בכמות',
  pricing:{
    'classes':{
      heading:'מחירון לפי גודל הארגון',
      billing:true,
      trialUrl:'', // TODO: classes/studio 7-day free-trial signup link (pending from user) — fill to enable the free-trial button
      note:'מחיר שנתי מחויב מראש לשנה · כל המחירים אינם כוללים מע״מ · אפשר לשדרג בכל עת',
      sharedFeatures:['ניהול חוגים, נוכחות ותלמידים','ניהול מורים ומערכת שעות','פורטל ואפליקציה להורים','דוחות כספיים מתקדמים','אירועים, סדנאות והודעות','עוזר AI חכם מובנה'],
      plans:[
        { name:'סטודיו', members:'עד 400 משתתפים', scope:'תחום / סניף אחד', priceMonthly:'₪459', priceAnnual:'₪399' },
        { name:'מרכז', members:'עד 1,000 משתתפים', scope:'עד 4 תחומים / סניפים', priceMonthly:'₪990', priceAnnual:'₪860' },
        { name:'מתנ״ס', members:'עד 4,000 משתתפים', scope:'עד 5 תחומים / סניפים', priceMonthly:'₪1,790', priceAnnual:'₪1,550' },
        { name:'רשתות וארגונים', members:'משתתפים ללא הגבלה', scope:'סניפים ללא הגבלה', quote:true, price:'הצעת מחיר' },
      ],
    },
    'whatsapp-ai':{
      heading:'מסלולים לעוזר הדיגיטלי',
      trial:'7 ימי ניסיון חינם',
      trialUrl:'https://nynizi.com/start/plan',
      note:'7 ימי ניסיון חינם: מזינים כרטיס בהרשמה, והחיוב הראשון רק ביום ה-8 (אפשר לבטל לפני בלי לשלם) · כל המחירים לחודש · אינם כוללים מע״מ (יתווסף כחוק) · הודעות ואטסאפ יזומות משולמות ישירות ל-Meta לפי התעריף שלהם',
      plans:[
        { name:'עסק קטן', price:'₪349', period:'/ חודש + מע״מ', priceSub:'₪412 כולל מע״מ', sub:'',
          features:['500 יחידות AI בחודש','לידים והעברה לנציג','עד 2 משתמשים','סניף אחד'] },
        { name:'מקצועי', badge:'הכי פופולרי', price:'₪649', period:'/ חודש + מע״מ', priceSub:'₪766 כולל מע״מ', sub:'',
          features:['1,500 יחידות AI בחודש','כל הפעולות: ניסיון, תורים, הזמנות ועוד','עד 5 משתמשים','סניף אחד'] },
        { name:'עסקי', price:'₪949', period:'/ חודש + מע״מ', priceSub:'₪1,120 כולל מע״מ', sub:'',
          features:['4,000 יחידות AI בחודש','כל הפעולות: ניסיון, תורים, הזמנות ועוד','משתמשים ללא הגבלה','ריבוי סניפים'] },
      ],
    },
    'rooms':{ custom:true },
    'open-houses':{ custom:true },
  },

  email:'infinite.dreams.solutions@gmail.com',
  phone:'054‑524‑7997',
  phoneE164:'972545247997',
  calendar:'https://calendar.app.google/dZRmgiLWFz9zmktSA',
  owner:'יוחאי אפללו',
  address:'זוהרה אלפסיה 12, ראש העין',
  serviceArea:'פריסה ארצית',
  hoursTitle:'שעות פעילות',
  hoursWeek:'א׳–ה׳ · 09:00–18:00',
  hoursFri:'ו׳ · 09:00–13:00',
  privacy:'פרטיות',
  terms:'תנאים',
  accessibility:'הצהרת נגישות'
}

export const en = {
  brand:'Infinite Dreams Solutions',
  nav:{
    solutions:'Solutions',
    services:'Services',
    process:'How it works',
    work:'Work',
    about:'About',
    contact:'Contact',
    quote:'Let\'s talk',
    lang:'עברית'
  },

  hero:{
    eyebrow:'Development · Automation · AI',
    title:'AI solutions for businesses\n& organizations of every size',
    sub:'We turn manual, messy processes into smart systems, precise apps and AI-powered solutions — and teach your team how to put the technology to work every day.',
    subShort:'You don\'t need a huge budget or a big organization anymore — accessible, smart technology that moves any business forward, even a small one.',
    ctaPrimary:'Let\'s talk about your project',
    ctaSecondary:'See our work',
    trust:'20+ years supporting municipalities, non-profits, companies and businesses'
  },

  stats:[
    ['20+', 'Years supporting businesses, municipalities & organizations']
  ],

  solutionsEyebrow:'Our solutions',
  solutionsTitle:'Smart, ready-to-run solutions — for any business',
  solutionsSub:'Each solution is already built, tested and proven in the field. We tailor it to your business — no building from scratch, no enterprise price tag.',
  solutionsCta:'More about it',
  solutions:[
    {
      slug:'whatsapp-ai', image:'/solutions/whatsapp-ai.webp', badge:'AI',
      title:'WhatsApp Digital Assistant',
      tagline:'Answers customers, books & closes leads — 24/7',
      pain:'Losing leads because you couldn\'t reply in time?',
      description:'A smart digital assistant connected to your business WhatsApp — it replies to customers instantly, filters inquiries, books appointments and closes leads for you, even when you\'re busy or asleep. Customers get answers in seconds, and you only get the hot leads.',
      benefits:['Instant 24/7 replies, even after hours','Smart filtering and hand-off to a human','Automatic appointment & booking scheduling','A knowledge base that answers like you would'],
      forWho:'Perfect for beauticians, clinics, service providers and small businesses losing customers to slow replies.'
    },
    {
      slug:'classes', image:'/solutions/classes.webp', badge:'System',
      title:'Classes Management System',
      tagline:'Attendance, parents, payments & teachers — in one place',
      pain:'Running classes on spreadsheets, WhatsApp and sticky notes?',
      description:'A complete system for managing classes and activities: one-tap attendance, a parents app, teacher and student management, payments and reports — all synced in one place. Saves hours every week and gives you full control.',
      benefits:['Real-time digital attendance','Parents app — updates, schedule & payments','Manage teachers, students & timetables','Reports and revenue at the tap of a button'],
      forWho:'Perfect for activity programs, arts schools, community centers and youth organizations.'
    },
    {
      slug:'dance-studio', image:'/solutions/dance-studio.webp', badge:'For dance',
      title:'Dance Studio Management System',
      tagline:'The only app in Israel built 100% for dance studios',
      pain:'Running a studio on WhatsApp, spreadsheets and attendance sheets?',
      description:'A complete system for managing a dance studio: mobile attendance, a parents & students app, trial-class tracking, standing-order billing and reports — all synced in one place. Less paperwork, more time to dance.',
      benefits:['Fast mobile attendance with student notes','Parents & students app with push updates','Trial-class tracking with automatic reminders','Standing-order billing and payment tracking'],
      forWho:'Built 100% for dance studios — ballet, hip-hop, modern, jazz and every style.'
    },
    {
      slug:'rooms', image:'/solutions/rooms.webp', badge:'System',
      title:'Rooms & Halls Management',
      tagline:'Bookings, calendar & payments — no double-bookings',
      pain:'Rooms booked twice and a messy schedule?',
      description:'A smart system for managing bookings of rooms, halls and spaces: a visual calendar, online bookings, double-booking prevention, payments and utilization reports. Transparent, organized and available from any device.',
      benefits:['Visual calendar for every space','Online bookings with automatic approval','Double-booking & conflict prevention','Utilization and revenue reports'],
      forWho:'Perfect for community centers, schools, non-profits, event halls and coworking spaces.'
    },
    {
      slug:'open-houses', image:'/solutions/map.webp', badge:'Map',
      title:'Interactive Event Map',
      tagline:'Open houses, festivals & tours — on a live map',
      pain:'A big event and people can\'t find where to go?',
      description:'An interactive, branded map for city events — open houses, festivals, tours and exhibitions. Visitors see every stop on a live map, filter by category, save favorites and navigate with ease. A perfect visitor experience — and real data for you.',
      benefits:['Every stop on a live, updated map','Filter by category & smart search','Navigation and favorites','Real-time visit analytics'],
      forWho:'Perfect for municipalities, culture departments, festivals and open-house events.'
    }
  ],

  clientsEyebrow:'Selected clients',
  clientsTitle:'Some of the clients we work with',
  clientsSub:'Municipalities, community centers, non-profits and businesses already working with us.',

  servicesTitle:'What we build',
  servicesSub:'Three areas, one goal — technology that saves time, cuts errors and pushes your organization forward.',
  services:[
    ['Apps, Websites & Admin Systems','Web apps, websites and custom management systems — fast, stable and thoughtfully designed around your real users.'],
    ['Automation & Integrations','We connect the tools you already use and automate manual work — forms, reports, data sync and alerts that run on their own, 24/7.'],
    ['AI Lectures & Workshops','Inspiring lectures and hands-on workshops that teach teams to work with AI every day — tools, prompts and workflows that deliver results.'],
  ],
  serviceMeta:[
    { tag:'Web · Mobile · SaaS', points:['Admin panels & dashboards','Apps for customers and staff','Payments, maps & data integrations'] },
    { tag:'Make · APIs · Integrations', points:['Automating repetitive processes','Syncing systems and CRMs','Automatic reports & alerts'] },
    { tag:'Lectures · Workshops · Coaching', points:['Embedding AI in your team','Hands-on, field-specific workshops','Tools for faster, smarter work'] },
  ],

  productEyebrow:'Flagship product',
  productTitle:'Classes Management System',
  productSub:'A system that runs activity programs end to end — attendance, parents, students, teachers, activities, payments and reports. All in one place, on desktop and mobile.',
  productFeatures:['Attendance tracking','Parents & students','Payments & reports','Mobile app'],
  productCta:'Want a system like this for your organization?',
  productView:'Enlarge',

  processTitle:'How we work with you',
  processSub:'A clear, transparent process with no surprises — you always know exactly where your project stands.',
  process:[
    ['Discovery call','We understand the need, goals and challenges — and define together what success looks like.'],
    ['Scope & plan','A precise spec, timeline and transparent budget. You approve before we start.'],
    ['Build & integrate','We build in stages with regular updates and demos, so you see real progress.'],
    ['Launch & support','We go live, train your team and stay available afterwards for support and improvements.'],
  ],

  whyTitle:'Why work with us',
  why:[
    ['Technology that speaks business','20+ years running organizations alongside development — we understand not just the code, but the process behind it.'],
    ['Full transparency','Price, timeline and scope clear up front. No fine print, no surprises along the way.'],
    ['Speed & responsiveness','We get back to you within 24 hours and move fast — without cutting corners on quality.'],
    ['Personal partnership','You\'re not just another ticket. We\'re with you from idea to well beyond launch.'],
  ],

  featured:'Featured work',
  featuredSub:'A glimpse at some of the systems and apps we\'ve built for organizations.',
  workCta:'Let\'s build your next one →',

  finalTitle:'Got an idea or a process\nthat\'s wasting your time?',
  finalSub:'Tell us what you need and we\'ll get back with a short action plan, timeline and transparent pricing.',

  contactTitle:'Got a vision?\nLet\'s build it.',
  contactSub:'A short, clear plan\nwith timeline and pricing.',

  studioClaimLabel:'Why us',
  studioCubesTitle:'And that\'s not all — what the system does for you',
  studioPricingTitle:'Plans to get the app',
  studioScreensTitle:'A peek at screens from the app',
  studioAppTodayTitle:'What\'s on today',
  studioAppAlertsTitle:'Needs your attention',
  studioLiveLabel:'Live preview',
  studio:{
    'dance-studio':{
      pricingSlug:'classes',
      recommend:'Studio',
      badge:'System · for dance studios',
      title:'Dance Studio\nManagement System',
      tagline:'The only app in Israel built 100% for dance studios',
      desc:'Run the whole studio in one place — mobile attendance, a parents & students app, trial-class tracking and standing-order billing. Less paperwork, fewer WhatsApp groups, more time to dance.',
      claim:'The only app in Israel built 100% for dance studios!',
      claimImage:'/solutions/dance-hero.webp',
      app:{
        greeting:'Good morning — your studio at a glance ✨',
        alerts:[
          { icon:'🔥', text:'8 trial classes booked for today', tone:'good' },
          { icon:'🎂', text:'2 birthdays this week', tone:'info' },
          { icon:'💰', text:'3 students haven\'t paid yet', tone:'bad' },
        ],
        lessons:[
          { time:'16:00', name:'Classical Ballet · ages 6–8', count:'15 students · 10 regular / 5 trial' },
          { time:'17:00', name:'Hip-Hop · teens', count:'18 students · 14 regular / 4 trial' },
          { time:'18:00', name:'Modern · advanced', count:'12 students · 11 regular / 1 trial' },
          { time:'19:00', name:'Jazz · ages 10–12', count:'16 students · 13 regular / 3 trial' },
          { time:'20:00', name:'Street-ballet · adults', count:'20 students · 17 regular / 3 trial' },
        ],
      },
      features:[
        { icon:'📲', title:'Fast mobile attendance', desc:'Teachers mark attendance in a second from their phone, and can add a personal note for each student.', quote:'No more paper sheets' },
        { icon:'👨‍👩‍👧', title:'Parents & students app', desc:'Push updates, the timetable, sign-up for classes and workshops, and payment tracking — all in one place.', quote:'No more WhatsApp groups' },
        { icon:'🎯', title:'Trial-class tracking', desc:'Sign-ups for trial classes via WhatsApp, automatic reminders before the class and smart conversion to a subscription.', quote:'No lead slips through' },
        { icon:'💳', title:'Payments & billing', desc:'Connects to your existing payment provider, runs standing-order billing and tracks debts and payments — no spreadsheets.', quote:'The money comes in on its own' },
      ],
      cubes:[
        { icon:'🧑‍🏫', title:'Staff attendance', text:'Track teaching-staff hours and attendance — a clean basis for payroll and reports.' },
        { icon:'🏛️', title:'Community-center integration', text:'Connects to the municipality and community-center registration & billing.' },
        { icon:'📝', title:'Online registration', text:'Parents sign up for classes and workshops and pay right through the portal.' },
        { icon:'👥', title:'Classes, students & teachers', text:'All the details, classes and assignments in one place.' },
        { icon:'📊', title:'Advanced financial reports', text:'A full financial picture per class and per branch.' },
        { icon:'🗓️', title:'Timetable', text:'A clear class schedule for staff and parents.' },
        { icon:'🎟️', title:'Events, workshops & messages', text:'Open events and workshops with sign-up, plus messages from the center.' },
        { icon:'🤖', title:'Built-in AI assistant', text:'An AI assistant built into the system for day-to-day management.' },
      ],
    },
    'classes':{
      pricingSlug:'classes',
      heroVideo:'/solutions/video/classes-promo.mp4',
      heroPoster:'/solutions/video/classes-promo.jpg',
      recommend:'Community center',
      badge:'System · classes management',
      title:'Classes &\nActivities System',
      tagline:'Every class in one place — attendance, parents, payments & reports',
      desc:'A complete system for classes and activities: mobile attendance, a parents & students app, teacher and student management, billing and reports — all synced in one place. Saves hours every week.',
      claim:'The system that runs all your classes end to end — no spreadsheets, no sticky notes',
      app:{
        greeting:'Good morning — all classes at a glance ✨',
        alerts:[
          { icon:'🔥', text:'8 trial classes booked for today', tone:'good' },
          { icon:'🎂', text:'2 birthdays this week', tone:'info' },
          { icon:'💰', text:'3 students haven\'t paid yet', tone:'bad' },
        ],
        lessons:[
          { time:'16:00', name:'Ceramics · ages 8–10', count:'15 students · 10 regular / 5 trial' },
          { time:'17:00', name:'Robotics · teens', count:'18 students · 14 regular / 4 trial' },
          { time:'18:00', name:'Spoken English · advanced', count:'12 students · 11 regular / 1 trial' },
          { time:'19:00', name:'Judo · ages 10–12', count:'16 students · 13 regular / 3 trial' },
          { time:'20:00', name:'Science lab · seniors', count:'20 students · 17 regular / 3 trial' },
        ],
      },
      features:[
        { icon:'📲', title:'Fast mobile attendance', desc:'Teachers mark attendance in a second from their phone, and can add a personal note for each student.', quote:'No more paper sheets' },
        { icon:'👨‍👩‍👧', title:'Parents & students app', desc:'Push updates, the timetable, sign-up for classes and workshops, and payment tracking — all in one place.', quote:'No more WhatsApp groups' },
        { icon:'🎯', title:'Trial-class tracking', desc:'Sign-ups for trial classes via WhatsApp, automatic reminders before the class and smart conversion to a subscription.', quote:'No lead slips through' },
        { icon:'💳', title:'Payments & billing', desc:'Connects to your existing payment provider, runs standing-order billing and tracks debts and payments — no spreadsheets.', quote:'The money comes in on its own' },
      ],
      cubes:[
        { icon:'🧑‍🏫', title:'Staff attendance', text:'Track teaching-staff hours and attendance — a clean basis for payroll and reports.' },
        { icon:'🏛️', title:'Community-center integration', text:'Connects to the municipality and community-center registration & billing.' },
        { icon:'📝', title:'Online registration', text:'Parents sign up for classes and workshops and pay right through the portal.' },
        { icon:'👥', title:'Classes, students & teachers', text:'All the details, classes and assignments in one place.' },
        { icon:'📊', title:'Advanced financial reports', text:'A full financial picture per class and per branch.' },
        { icon:'🗓️', title:'Timetable', text:'A clear class schedule for staff and parents.' },
        { icon:'🎟️', title:'Events, workshops & messages', text:'Open events and workshops with sign-up, plus messages from the center.' },
        { icon:'🤖', title:'Built-in AI assistant', text:'An AI assistant built into the system for day-to-day management.' },
      ],
    },
  },

  pricingEyebrow:'Pricing',
  pricingCustomTitle:'Custom pricing',
  pricingCustomText:'Every project is built around your needs, the number of spaces and your integrations — no ill-fitting package. Tell us what you need and we\'ll get back with transparent pricing.',
  pricingCustomCta:'Get a quote',
  pricingCta:'Let\'s talk',
  pricingBuy:'Choose plan',
  pricingTrialCta:'Start your 7-day free trial',
  pricingTrialNote:'7 days free · card required · first charge on day 8 · cancel before and pay nothing',
  pricingPopular:'Most popular',
  pricingPerMonth:'/ mo',
  pricingMonthly:'Monthly',
  pricingAnnual:'Annual',
  pricingSave:'Save ~13% paying annually',
  pricingBilledAnnual:'billed annually',
  pricingBilledMonthly:'billed monthly',
  pricingAllInclude:'Every plan includes the same capabilities — only the volume differs',
  pricing:{
    'classes':{
      heading:'Pricing by organization size',
      billing:true,
      trialUrl:'', // TODO: classes/studio 7-day free-trial signup link (pending from user) — fill to enable the free-trial button
      note:'Annual plans are billed upfront for the year · all prices exclude VAT · upgrade anytime',
      sharedFeatures:['Classes, attendance & students','Teacher management & timetable','Parents portal & app','Advanced financial reports','Events, workshops & messages','Built-in smart AI assistant'],
      plans:[
        { name:'Studio', members:'Up to 400 members', scope:'One track / branch', priceMonthly:'₪459', priceAnnual:'₪399' },
        { name:'Center', members:'Up to 1,000 members', scope:'Up to 4 tracks / branches', priceMonthly:'₪990', priceAnnual:'₪860' },
        { name:'Community center', members:'Up to 4,000 members', scope:'Up to 5 tracks / branches', priceMonthly:'₪1,790', priceAnnual:'₪1,550' },
        { name:'Networks & orgs', members:'Unlimited members', scope:'Unlimited branches', quote:true, price:'Custom quote' },
      ],
    },
    'whatsapp-ai':{
      heading:'Digital assistant plans',
      trial:'7-day free trial',
      trialUrl:'https://nynizi.com/start/plan',
      note:'7-day free trial: a card is required at signup and the first charge is on day 8 (cancel before, pay nothing) · All prices per month · VAT not included (added as required) · proactive WhatsApp messages are paid directly to Meta at their rate',
      plans:[
        { name:'Small business', price:'₪349', period:'/ mo + VAT', priceSub:'₪412 incl. VAT', sub:'',
          features:['500 AI units / month','Leads & hand-off to an agent','Up to 2 users','One branch'] },
        { name:'Professional', badge:'Most popular', price:'₪649', period:'/ mo + VAT', priceSub:'₪766 incl. VAT', sub:'',
          features:['1,500 AI units / month','All actions: trials, bookings, orders & more','Up to 5 users','One branch'] },
        { name:'Business', price:'₪949', period:'/ mo + VAT', priceSub:'₪1,120 incl. VAT', sub:'',
          features:['4,000 AI units / month','All actions: trials, bookings, orders & more','Unlimited users','Multiple branches'] },
      ],
    },
    'rooms':{ custom:true },
    'open-houses':{ custom:true },
  },

  email:'infinite.dreams.solutions@gmail.com',
  phone:'+972‑54‑524‑7997',
  phoneE164:'972545247997',
  calendar:'https://calendar.app.google/dZRmgiLWFz9zmktSA',
  owner:'Yochai Apalu',
  address:'12 Zohara Alfasia St., Rosh HaAyin, Israel',
  serviceArea:'Nationwide (Israel)',
  hoursTitle:'Business hours',
  hoursWeek:'Sun–Thu · 09:00–18:00',
  hoursFri:'Fri · 09:00–13:00',
  privacy:'Privacy',
  terms:'Terms',
  accessibility:'Accessibility'
}
