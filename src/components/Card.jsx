export default function Card({ icon, title, subtitle, text, link, linkText, titleSize, children, style, className }) {
  return (
    <div className={`card ${className || ''}`} style={style}>
      {icon && <div className="card__icon" dangerouslySetInnerHTML={{ __html: icon }} />}
      {title && <h3 className="card__title" style={titleSize ? { fontSize: titleSize } : {}}>{title}</h3>}
      {subtitle && <div className="card__subtitle">{subtitle}</div>}
      {text && <p className="card__text">{text}</p>}
      {children}
      {link && <a href={link} className="card__link">{linkText || 'Learn more →'}</a>}
    </div>
  )
}