'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [requests, setRequests] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [editingNotes, setEditingNotes] = useState({})
  const [notes, setNotes] = useState({})
  const router = useRouter()

  // סיסמה להגנה על העמוד (תוכל לשנות אותה)
  const ADMIN_PASSWORD = '23081982'

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      setError('')
      loadRequests()
    } else {
      setError('סיסמה שגויה')
    }
  }

  const loadRequests = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/admin/requests')
      if (response.ok) {
        const data = await response.json()
        setRequests(data.requests || [])
      } else {
        setError('שגיאה בטעינת הבקשות')
      }
    } catch (error) {
      setError('שגיאה בטעינת הבקשות')
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('he-IL', {
      timeZone: 'Asia/Jerusalem',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getProjectTypeLabel = (type) => {
    const types = {
      'app': 'אפליקציה',
      'website': 'אתר אינטרנט',
      'automation': 'אוטומציה',
      'consulting': 'יעוץ והדרכה',
      'production': 'הפקה מוזיקלית',
      'lecture': 'הרצאה',
      'other': 'אחר'
    }
    return types[type] || type
  }

  const getBudgetLabel = (budget) => {
    const budgets = {
      'under-5k': 'עד 5,000 ₪',
      '5k-15k': '5,000 - 15,000 ₪',
      '15k-30k': '15,000 - 30,000 ₪',
      '30k-50k': '30,000 - 50,000 ₪',
      '50k-100k': '50,000 - 100,000 ₪',
      'over-100k': 'מעל 100,000 ₪',
      'discuss': 'נדבר על זה'
    }
    return budgets[budget] || budget || 'לא צוין'
  }

  const getTimelineLabel = (timeline) => {
    const timelines = {
      'asap': 'כמה שיותר מהר',
      '1-month': 'תוך חודש',
      '2-3-months': '2-3 חודשים',
      '3-6-months': '3-6 חודשים',
      '6-months-plus': 'מעל 6 חודשים',
      'flexible': 'גמיש'
    }
    return timelines[timeline] || timeline || 'לא צוין'
  }

  const deleteRequest = async (requestId) => {
    if (!confirm('האם אתה בטוח שברצונך למחוק בקשה זו?')) {
      return
    }
    
    try {
      const response = await fetch(`/api/admin/requests/${requestId}`, {
        method: 'DELETE'
      })
      
      if (response.ok) {
        setRequests(requests.filter(req => req.id !== requestId))
        setError('')
      } else {
        setError('שגיאה במחיקת הבקשה')
      }
    } catch (error) {
      setError('שגיאה במחיקת הבקשה')
    }
  }

  const saveNotes = (requestId, newNotes) => {
    setNotes(prev => ({
      ...prev,
      [requestId]: newNotes
    }))
    setEditingNotes(prev => ({
      ...prev,
      [requestId]: false
    }))
  }

  const startEditingNotes = (requestId) => {
    setEditingNotes(prev => ({
      ...prev,
      [requestId]: true
    }))
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">🔐 פאנל ניהול</h1>
            <p className="text-gray-600">Infinite Dreams Solutions</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                סיסמה
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="הכנס סיסמה"
                required
              />
            </div>
            
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-center">
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              התחבר
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">📋 יומן בקשות</h1>
              <p className="text-gray-600">Infinite Dreams Solutions</p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={loadRequests}
                disabled={loading}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2"
              >
                {loading ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                )}
                רענן
              </button>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                התנתק
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-8">
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {requests.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">אין בקשות עדיין</h3>
            <p className="text-gray-600">כשיגיעו בקשות חדשות, הן יופיעו כאן</p>
          </div>
        ) : (
          <div className="space-y-6">
            {requests.map((request) => (
              <div key={request.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                {/* Request Header */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold">{request.name}</h3>
                      <p className="text-blue-100">{getProjectTypeLabel(request.projectType)}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-sm text-blue-100">מזהה: #{request.id}</p>
                        <p className="text-sm text-blue-100">{request.timestamp}</p>
                      </div>
                      <button
                        onClick={() => deleteRequest(request.id)}
                        className="text-white hover:text-red-200 transition-colors duration-200 p-2 hover:bg-white/10 rounded-full"
                        title="מחק בקשה"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Request Content */}
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Contact Info */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        פרטי קשר
                      </h4>
                      <div className="space-y-2">
                        <p><strong>אימייל:</strong> <a href={`mailto:${request.email}`} className="text-blue-600 hover:underline">{request.email}</a></p>
                        <p><strong>טלפון:</strong> <a href={`tel:${request.phone}`} className="text-blue-600 hover:underline">{request.phone}</a></p>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        פרטי הפרויקט
                      </h4>
                      <div className="space-y-2">
                        <p><strong>תקציב:</strong> {getBudgetLabel(request.budget)}</p>
                        <p><strong>לוח זמנים:</strong> {getTimelineLabel(request.timeline)}</p>
                      </div>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      תיאור הפרויקט
                    </h4>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <p className="text-gray-700 whitespace-pre-wrap">{request.projectDescription}</p>
                    </div>
                  </div>

                  {/* Additional Info */}
                  {request.additionalInfo && (
                    <div className="mt-6">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        מידע נוסף
                      </h4>
                      <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
                        <p className="text-gray-700 whitespace-pre-wrap">{request.additionalInfo}</p>
                      </div>
                    </div>
                  )}

                  {/* Internal Notes */}
                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      הערות פנימיות
                    </h4>
                    {editingNotes[request.id] ? (
                      <div className="space-y-3">
                        <textarea
                          defaultValue={notes[request.id] || ''}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
                          rows={3}
                          placeholder="הוסף הערות פנימיות (טופל, דיברתי עם הלקוח, וכו')"
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && e.ctrlKey) {
                              saveNotes(request.id, e.target.value)
                            }
                          }}
                        />
                        <div className="flex gap-2">
                          <button
                            onClick={(e) => saveNotes(request.id, e.target.previousElementSibling.value)}
                            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm"
                          >
                            שמור
                          </button>
                          <button
                            onClick={() => setEditingNotes(prev => ({ ...prev, [request.id]: false }))}
                            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm"
                          >
                            ביטול
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-orange-50 rounded-xl p-4 border border-orange-200 min-h-[60px]">
                        {notes[request.id] ? (
                          <p className="text-gray-700 whitespace-pre-wrap">{notes[request.id]}</p>
                        ) : (
                          <p className="text-gray-500 italic">אין הערות פנימיות</p>
                        )}
                        <button
                          onClick={() => startEditingNotes(request.id)}
                          className="mt-2 text-orange-600 hover:text-orange-700 text-sm font-medium"
                        >
                          {notes[request.id] ? 'ערוך הערות' : 'הוסף הערות'}
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 flex gap-4">
                    <a
                      href={`mailto:${request.email}?subject=תגובה לבקשתך - ${getProjectTypeLabel(request.projectType)}&body=שלום ${request.name},%0D%0A%0D%0Aתודה על פנייתך!%0D%0A%0D%0A`}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      שלח אימייל
                    </a>
                    <a
                      href={`https://wa.me/972${request.phone.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
