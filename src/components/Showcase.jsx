export default function Showcase(){
  const banners = [
    {src:'/banner1.jpg', title:'אתרים ואפליקציות'},
    {src:'/banner2.jpg', title:'עיצוב • מיתוג • UI/UX'},
    {src:'/banner3.jpg', title:'אוטומציה • AI • דאטה'}
  ]
  return (
    <section className="section">
      <div className="container-xl banner-grid">
        {banners.map((b,i)=>(
          <div className="banner reveal" key={i}>
            <img src={b.src} alt="" />
            <div className="banner-overlay" />
            <div className="banner-title">{b.title}</div>
          </div>
        ))}
      </div>
    </section>
  )
}