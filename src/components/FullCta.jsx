import { Link } from 'react-router-dom'

export default function FullCta({ title, text, bgImage, buttons }) {
  return (
    <div className="full-cta" style={bgImage ? { backgroundImage: `url('${bgImage}')` } : {}}>
      <div className="full-cta__content">
        <h2 className="full-cta__title">{title}</h2>
        <p className="full-cta__text">{text}</p>
        <div className="btn-group" style={{ justifyContent: 'center' }}>
          {buttons.map((b, i) => (
            <Link key={i} to={b.link || '/get-involved'} className={`btn ${b.variant || 'btn--primary'}`}
              style={b.variant?.includes('outline') ? { color: '#fff', borderColor: '#fff' } : {}}>
              {b.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}