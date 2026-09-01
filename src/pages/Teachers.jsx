import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'

export default function Teachers() {
  return (
    <>
      <Hero bgImage="/assets/images/teachers-hero.png" badge="Educators of the Future" title="TEACHERS DON'T JUST TEACH AI. THEY BECOME ITS PRACTITIONERS." subtitle="S.Ai.R.O.V.A.R. transforms educators from traditional lecturers into active practitioners — backed by open-source systems, live sandboxes, and verified help desks.">
        <div className="btn-group"><Link to="/get-involved" className="btn btn--primary">Become a Practitioner</Link></div>
      </Hero>
      <Section>
        <SectionHeader badge="Practitioner Tracks" title="FOUR PATHWAYS TO AI MASTERY" titleSize={40} subtitle="Every educator's journey is different. Choose the track that matches your experience level and teaching context." />
        <div className="grid-2">
          <Card title="AI Explorer" subtitle="BEGINNER" text="Start with the fundamentals. Understand what AI is, how it works, and why it matters for your classroom. No coding required — just curiosity and commitment." link="#" linkText="Start Exploring →" />
          <Card title="AI Integrator" subtitle="INTERMEDIATE" text="Learn to weave AI tools into your existing curriculum. Use generative models for lesson planning, assessment design, and personalized student support." link="#" linkText="Start Integrating →" />
          <Card title="AI Innovator" subtitle="ADVANCED" text="Build custom AI-powered learning experiences. Create sandbox environments, develop student projects, and contribute to the S.Ai.R.O.V.A.R. open curriculum." link="#" linkText="Start Innovating →" />
          <Card title="AI Leader" subtitle="EXPERT" text="Lead your school's AI transformation. Train fellow teachers, establish computing labs, and become a certified S.Ai.R.O.V.A.R. mentor of record." link="#" linkText="Lead the Way →" />
        </div>
      </Section>
      <Section variant="dark" style={{ textAlign: 'center' }}>
        <h2 className="section-title section-title--white" style={{ fontSize: 40 }}>READY TO TRANSFORM YOUR TEACHING?</h2>
        <p className="section-subtitle mx-auto" style={{ color: '#F0FDF9', marginBottom: 32 }}>Join hundreds of educators already building sovereign AI capability in their classrooms.</p>
        <div className="btn-group" style={{ justifyContent: 'center' }}>
          <Link to="/get-involved" className="btn btn--primary">Register as an Educator</Link>
          <Link to="/resources" className="btn btn--white">Download Teacher Toolkit</Link>
        </div>
      </Section>
    </>
  )
}
