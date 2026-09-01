export default function StepCard({ num, title, text }) {
  return (
    <div className="step-card">
      <div className="step-card__num">{num}</div>
      <h3 className="step-card__title">{title}</h3>
      <p className="step-card__text">{text}</p>
    </div>
  )
}