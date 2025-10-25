import './globals.css'
import AccessibilityBar from '../components/AccessibilityBar'
import CookieConsent from '../components/CookieConsent'
import '../styles/accessibility.css'

export const metadata = {
  title: 'Infinite Dreams Solutions',
  description: 'Turning Dreams into Reality - Advanced app development, automation, music productions and training',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <AccessibilityBar />
        <CookieConsent />
      </body>
    </html>
  )
}
