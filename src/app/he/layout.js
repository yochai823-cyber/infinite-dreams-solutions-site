import '../globals.css'

export default function HeLayout({children}){
  return (
    <div className="font-hebrew antialiased" dir="rtl">
      {children}
    </div>
  )
}
