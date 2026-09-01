import Hero from '../components/Hero'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import StepCard from '../components/StepCard'

const modules = [
  { icon: '&#129302;', t: 'AI Fundamentals', txt: 'Understand neurons, data parsing, and vectors from the absolute basics up.' },
  { icon: '&#10024;', t: 'Generative AI', txt: 'Run your first model weights and learn to output contextually dense assets.' },
  { icon: '&#128172;', t: 'Prompting', txt: 'Master logical orchestration, prompt structuring, and token guidelines.' },
  { icon: '&#127912;', t: 'AI & Creativity', txt: 'Combine mathematical algorithms with high-stakes creative visual designs.' },
  { icon: '&#128396;', t: 'AI & Design', txt: 'Transform visual interfaces using generative models and robust logic.' },
  { icon: '&#128187;', t: 'AI & Coding', txt: 'Automate codebases, generate logical schemas, and test sandbox scripts.' },
  { icon: '&#127909;', t: 'AI & Media', txt: 'Draft high-fidelity editorial copy, podcasts, and structured media assets.' },
  { icon: '&#128200;', t: 'AI & Business', txt: 'Utilize localized compute configurations to establish regional business systems.' },
  { icon: '&#128161;', t: 'AI & Innovation', txt: 'Reverse engineer complex vectors to establish sovereign technology blueprints.' },
  { icon: '&#9878;', t: 'AI Ethics', txt: 'Safeguard young citizens with robust intent-for-good guidelines.' },
]

const modalities = [
  { t: 'Courses', txt: 'Structured, sequential computational models.', m: '6-8 Weeks' },
  { t: 'Masterclasses', txt: 'Taught directly by voluntary engineers of record.', m: 'Live Session' },
  { t: 'Workshops', txt: 'Hands-on calibration of local compute sandboxes.', m: '3 Hours' },
  { t: 'Challenges', txt: 'Intense competitive vector testing.', m: 'Weekly' },
  { t: 'Projects', txt: 'Practical software development for local problems.', m: 'Self-Paced' },
  { t: 'Learning Paths', txt: 'Systematic journeys from novice to system designer.', m: 'Milestone-Driven' },
]

export default function Learning() {
  return (
    <>
      <Hero bgImage="/assets/images/learning-hero.png" badge="Sovereign Educational Action" title="LEARNING JUST GOT A LOT BIGGER." subtitle="AI isn't just about reading textbooks or learning how to write templates. It's about giving you entirely new ways to learn, think, reason, and build. S.Ai.R.O.V.A.R. makes learning active, practical, and deeply connected.">
        <div className="btn-group"><a href="#" className="btn btn--primary">Start Learning Now</a></div>
      </Hero>
      <Section>
        <SectionHeader badge="Start with Curiosity" title="TEN HIGH-FIDELITY LEARNING MODULES" titleSize={40} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 20 }}>
          {modules.map(m => (
            <Card key={m.t} icon={m.icon} title={m.t} titleSize={16} style={{ padding: 24, textAlign: 'center' }}>
              <p className="card__text" style={{ fontSize: 13 }}>{m.txt}</p>
            </Card>
          ))}
        </div>
      </Section>
      <Section variant="light">
        <SectionHeader badge="Flexible Modalities" title="BECAUSE EVERYONE LEARNS DIFFERENTLY." titleSize={40} />
        <div className="modality-grid">
          {modalities.map(m => (
            <div className="modality-card" key={m.t}>
              <h3 className="modality-card__title">{m.t}</h3>
              <p className="modality-card__text">{m.txt}</p>
              <div className="modality-card__meta">{m.m}</div>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <SectionHeader badge="Pedagogical Blueprint" title="THAT'S WHERE LEARNING BECOMES CAPABILITY." titleSize={40} />
        <div className="steps-row">
          <StepCard num="01" title="Learn a Concept" text="Acquire intuitive logic framework without abstract complexity first." />
          <StepCard num="02" title="Try It Out" text="Immediately run localized code parameters in a safe sandbox environment." />
          <StepCard num="03" title="Question It" text="Evaluate why parameters succeeded or failed; master logical boundaries." />
          <StepCard num="04" title="Build With It" text="Integrate APIs to address real-world community challenges." />
          <StepCard num="05" title="Improve It" text="Optimize code bases and pass your knowledge on to peers." />
        </div>
        <div className="text-center" style={{ marginTop: 40 }}><a href="#" className="btn btn--primary">Start Learning Now</a></div>
      </Section>
    </>
  )
}
