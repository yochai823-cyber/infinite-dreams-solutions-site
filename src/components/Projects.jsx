export default function Projects({ d }){
  const items = [
    { name: 'Smart City Portal / פורטל עיר חכמה', tag: 'Next.js • Maps • Realtime' },
    { name: 'Booking System / מערכת הזמנות', tag: 'React • Calendar • Payments' },
    { name: 'Family‑Map', tag: 'Flutter • Firebase • Geocoding' },
  ]
  return (
    <section id="projects" className="section">
      <div className="container-xl">
        <div className="flex items-end justify-between gap-6 mb-8">
          <h2 className="text-3xl font-semibold">עבודות נבחרות</h2>
          <a href="#contact" className="text-sm" style={{color:'#7aa5ff'}}>בואו נעבוד יחד →</a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(p => (
            <div key={p.name} className="card reveal">
              <div className="h-32 rounded-xl" style={{height:'8rem', borderRadius:'12px', background:'linear-gradient(135deg, rgba(47,107,255,.15), rgba(0,209,255,.15))', boxShadow:'0 0 24px rgba(47,107,255,.18)'}}></div>
              <div className="font-medium">{p.name}</div>
              <div className="text-xs mt-1 text-gray-500">{p.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}