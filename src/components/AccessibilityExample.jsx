import React from 'react';
import AccessibilityBar from './AccessibilityBar';

const AccessibilityExample = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* כותרת ראשית */}
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">דוגמה לסרגל נגישות</h1>
        </nav>
      </header>

      {/* תוכן ראשי */}
      <main className="container mx-auto px-4 py-8">
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">כותרת משנה</h2>
          <p className="text-gray-700 mb-4">
            זהו טקסט לדוגמה שמדגים כיצד סרגל הנגישות משפיע על התוכן. 
            תוכל לנסות את כל הפעולות השונות ולראות איך הן משנות את המראה.
          </p>
          <p className="text-gray-700 mb-4">
            הטקסט הזה כולל קישור לדוגמה: <a href="#" className="text-blue-600 hover:text-blue-800">קישור לדוגמה</a>
          </p>
        </section>

        {/* טפסים */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">טפסים</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                שם מלא
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="הזן את שמך המלא"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                אימייל
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="הזן את כתובת האימייל שלך"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                הודעה
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="הזן את ההודעה שלך"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              שליחה
            </button>
          </form>
        </section>

        {/* תמונות */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">תמונות</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src="https://via.placeholder.com/300x200/4F46E5/FFFFFF?text=תמונה+1"
              alt="תמונה לדוגמה 1"
              className="w-full h-48 object-cover rounded-lg"
            />
            <img
              src="https://via.placeholder.com/300x200/059669/FFFFFF?text=תמונה+2"
              alt="תמונה לדוגמה 2"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        </section>

        {/* רשימות */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">רשימות</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>פריט ראשון ברשימה</li>
            <li>פריט שני ברשימה</li>
            <li>פריט שלישי ברשימה</li>
          </ul>
        </section>

        {/* אנימציות */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">אנימציות</h3>
          <div className="space-y-4">
            <div className="bg-blue-100 p-4 rounded-lg animate-pulse">
              <p className="text-blue-800">זהו אלמנט עם אנימציה</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg transition-all duration-300 hover:bg-green-200">
              <p className="text-green-800">זהו אלמנט עם transition</p>
            </div>
          </div>
        </section>
      </main>

      {/* סרגל נגישות */}
      <AccessibilityBar />
    </div>
  );
};

export default AccessibilityExample;
