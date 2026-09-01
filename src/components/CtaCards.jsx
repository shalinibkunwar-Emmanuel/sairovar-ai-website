import { Link } from 'react-router-dom'

export default function CtaCards({ cards }) {
  return (
    <div className="cta-cards">
      {cards.map((c, i) => (
        <div className="cta-card" key={i}>
          <h3 className="cta-card__title">{c.title}</h3>
          <p className="cta-card__text">{c.text}</p>
          <Link to={c.link || '/get-involved'} className="btn btn--primary">{c.btnText}</Link>
        </div>
      ))}
    </div>
  )
}