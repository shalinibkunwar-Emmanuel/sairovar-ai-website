export default function Section({ variant, style, children, id }) {
  const cls = ['section', variant ? `section--${variant}` : ''].filter(Boolean).join(' ')
  return (
    <section className={cls} style={style} id={id}>
      <div className="section__inner">{children}</div>
    </section>
  )
}