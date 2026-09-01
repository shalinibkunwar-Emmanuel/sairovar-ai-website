export default function SectionHeader({ badge, title, subtitle, titleSize, center = true }) {
  return (
    <div className={center ? 'text-center' : ''} style={{ marginBottom: 48 }}>
      {badge && <span className="section-badge">{badge}</span>}
      <h2 className="section-title" style={titleSize ? { fontSize: titleSize } : {}}>{title}</h2>
      {subtitle && <p className={`section-subtitle ${center ? 'mx-auto' : ''}`}>{subtitle}</p>}
    </div>
  )
}