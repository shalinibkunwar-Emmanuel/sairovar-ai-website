export default function StatCard({ number, label, text }) {
  return (
    <div className="stat-card">
      <div className="stat-card__number">{number}</div>
      <div className="stat-card__label">{label}</div>
      {text && <p className="stat-card__text">{text}</p>}
    </div>
  )
}