import Hero from '../components/Hero'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import { Link } from 'react-router-dom'

export default function Resources() {
  return (
    <>
      <Hero bgImage="/assets/images/resources-hero.png" badge="Tools & Downloads" title="EVERYTHING YOU NEED. ALL IN ONE PLACE." subtitle="Open-source toolkits, teacher guides, sandbox blueprints, and curriculum templates — all designed to accelerate sovereign AI education.">
        <div className="btn-group"><a href="#" className="btn btn--primary">Browse Resources</a></div>
      </Hero>
      <Section>
        <SectionHeader badge="Resource Library" title="CURATED TOOLS FOR EVERY STAKEHOLDER" titleSize={40} />
        <div className="grid-3">
          <Card icon="&#128218;" title="Teacher Guidebooks" text="Comprehensive manuals for integrating AI modules into your classroom, complete with lesson plans and assessment rubrics." link="#" linkText="Download Guides →" />
          <Card icon="&#128421;" title="Sandbox Blueprints" text="Hardware specifications and setup instructions for deploying physical AI sandbox kits in your school or community center." link="#" linkText="View Blueprints →" />
          <Card icon="&#128196;" title="Curriculum Templates" text="NEP-aligned curriculum templates that map S.Ai.R.O.V.A.R. modules to standard school timetables and grade levels." link="#" linkText="Get Templates →" />
          <Card icon="&#127760;" title="Open Model Weights" text="Access sovereign model weights trained on regional datasets, ready for deployment in localized computing environments." link="#" linkText="Access Models →" />
          <Card icon="&#128249;" title="Video Tutorials" text="Step-by-step video guides covering everything from basic AI concepts to advanced sandbox configuration." link="#" linkText="Watch Tutorials →" />
          <Card icon="&#128202;" title="Research Papers" text="Published research on sovereign AI education, computational thinking assessments, and regional model performance." link="#" linkText="Read Papers →" />
        </div>
      </Section>
      <Section variant="light" style={{ textAlign: 'center' }}>
        <h2 className="section-title" style={{ fontSize: 36 }}>CAN'T FIND WHAT YOU NEED?</h2>
        <p className="section-subtitle mx-auto" style={{ marginBottom: 32 }}>Our resource library is continuously growing. Request specific materials or contribute your own open-source tools.</p>
        <div className="btn-group" style={{ justifyContent: 'center' }}>
          <a href="#" className="btn btn--primary">Request a Resource</a>
          <Link to="/connect" className="btn btn--outline">Contact Us</Link>
        </div>
      </Section>
    </>
  )
}
