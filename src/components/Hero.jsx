export default function Hero({ badge, title, subtitle, bgImage, bgGradient, children }) {
  const style = {}
  if (bgImage) style.backgroundImage = `url('${bgImage}')`
  if (bgGradient) { style.background = bgGradient }

  return (
    <section className="hero" style={style}>
      <div className="hero__content">
        {badge && <div className="hero__badge">{badge}</div>}
        <h1 className="hero__title">{title}</h1>
        {subtitle && <p className="hero__subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}