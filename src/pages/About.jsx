import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import TeamGrid from '../components/TeamGrid'

export default function About() {
  return (
    <>
      <Hero bgImage="/assets/images/about-hero.png" badge="Sovereign Educational Action" title="WE DON'T WANT TO PREPARE PEOPLE FOR AN AI WORLD. WE WANT TO PREPARE THEM TO SHAPE IT." subtitle="Connecting students, educators, parents, schools, mentors, and industry into one continuously learning, state-wide sovereign computational ecosystem.">
        <div className="btn-group"><Link to="/learning" className="btn btn--primary">Explore How We Learn</Link></div>
      </Hero>
      <Section>
        <SectionHeader badge="Our Ultimate Thesis" title="AI IS A TOOL. HUMAN POTENTIAL IS THE REVOLUTION." titleSize={40} subtitle="S.Ai.R.O.V.A.R. activates different layers of our regional community to transform technological progress into shared household capability." />
        <div className="grid-3">
          <Card title="Student" text="Turns a spark of curiosity into functional software prototypes that solve local community issues." />
          <Card title="Teacher" text="Transforms from a traditional lecturer into a personalized guide backed by open-source systems." />
          <Card title="Creator" text="Explores the deep boundary between logical math algorithms and high-stakes computational art." />
          <Card title="Entrepreneur" text="Builds micro-industries faster by using regional cloud templates and sovereign model weights." />
          <Card title="School" text="Prepares young citizens through hardware sandbox kits and structured, NEP-aligned modular tools." />
          <Card title="Parent" text="Understands artificial intelligence deeply, removing fear and fostering shared household pride." />
        </div>
      </Section>
      <Section variant="light">
        <SectionHeader badge="Pedagogical Blueprint" title="MAKE AI UNDERSTANDABLE. MAKE AI ACCESSIBLE. MAKE AI HUMAN." titleSize={40} subtitle="S.Ai.R.O.V.A.R. de-escalates tech anxiety. We structure standard computing templates, open assets, and ethical safeguards that deliver absolute confidence." />
        <div className="grid-4">
          <Card title="Curious" text="Fostering active questioning instead of passive execution of overseas code bases." />
          <Card title="Creative" text="Using state-of-the-art visual, text, and physical sandboxes to design genuine regional solutions." />
          <Card title="Practical" text="Fusing abstract neural network equations directly with real-world, localized sandbox kits." />
          <Card title="Collaborative" text="Connecting elite mentors, public government schools, and rural communities into a tight support grid." />
        </div>
      </Section>
      <Section>
        <SectionHeader badge="Practice Over Pedagogy" title="WE DON'T JUST WANT TO TEACH AI. WE WANT TO MAKE IT REAL." titleSize={40} />
        <div className="comparison">
          <div className="comparison__col">
            <div className="comparison__label">Traditional AI Curriculum</div>
            <h3 className="comparison__title">Know → Understand → Do</h3>
            <p className="comparison__text">Students memorize mathematical equations, read foreign conceptual whitepapers, and write passive tests. The technology remains highly abstract, exclusive, and detached from local capability.</p>
          </div>
          <div className="comparison__col comparison__col--highlight">
            <div className="comparison__label">S.Ai.R.O.V.A.R. Methodology</div>
            <h3 className="comparison__title">Do → Understand → Know</h3>
            <p className="comparison__text">Students run localized model weights on physical sandbox kits, see abstract vectors fail/succeed immediately, and reverse-engineer parameters. We prioritize intuitive hand-built logical creation first.</p>
          </div>
        </div>
        <div style={{ background: 'linear-gradient(135deg, var(--bg-tint), var(--bg-tint))', borderRadius: 16, padding: 48, marginTop: 48, textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 32, color: 'var(--primary)', marginBottom: 12 }}>Ready to bring sovereign tech to your classroom?</h3>
          <p style={{ fontSize: 16, color: 'var(--body-text)', marginBottom: 24, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>Explore our physical sandbox blueprints, download teacher guidebooks, or register as a mentor of record in Punjab's public excellence chapters.</p>
          <Link to="/learning" className="btn btn--primary">Explore How We Learn</Link>
        </div>
      </Section>
      <Section>
        <SectionHeader badge="Our Team" title="THE PEOPLE DRIVING THE MISSION" titleSize={40} />
        <TeamGrid />
      </Section>
    </>
  )
}
