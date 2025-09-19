import '../globals.css'

export default function EnLayout({children}){
  return (
    <div className="font-sans antialiased" dir="ltr">
      {children}
    </div>
  )
}
