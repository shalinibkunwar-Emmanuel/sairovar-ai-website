import { Link } from 'react-router-dom'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'

export default function PunjabAI() {
  return (
    <>
      <div style={{ background: 'var(--primary)', color: '#fff', textAlign: 'center', padding: '10px 20px', fontSize: 13, fontWeight: 700, letterSpacing: 0.5 }}>PUNJAB AI EXCELLENCE — A S.Ai.R.O.V.A.R. FLAGSHIP INITIATIVE</div>
      <div className="hero" style={{ backgroundImage: 'url(/assets/images/pai-hero.png)' }}>
        <div className="hero__content">
          <div className="hero__badge">PUNJAB AI EXCELLENCE</div>
          <h1 className="hero__title">THE STATE THAT LEARNS AI FIRST, LEADS FIRST.</h1>
          <p className="hero__subtitle">PAI Excel is the structured, sovereign computing education initiative designed to transform Punjab into India's first AI-literate state — one school, one teacher, one student at a time.</p>
          <div className="btn-group">
            <a href="#" className="btn btn--primary">Join PAI Excel</a>
            <a href="#" className="btn btn--outline" style={{ color: '#fff', borderColor: '#fff' }}>Download Brochure</a>
          </div>
        </div>
      </div>
      <Section>
        <div className="stats-row">
          <div><div className="stats-row__number">130+</div><div className="stats-row__label">Akal Academies</div></div>
          <div><div className="stats-row__number">50,000+</div><div className="stats-row__label">Students Reached</div></div>
          <div><div className="stats-row__number">500+</div><div className="stats-row__label">Teachers Trained</div></div>
          <div><div className="stats-row__number">22</div><div className="stats-row__label">Districts Covered</div></div>
          <div><div className="stats-row__number">#1</div><div className="stats-row__label">NEP AI Program</div></div>
        </div>
      </Section>
      <Section variant="light">
        <div className="quote-block">
          <p className="quote-block__text">"The future of India's AI capability will not be written in Bangalore alone. It will be written in every classroom in Punjab that dares to teach a child how to think computationally."</p>
        </div>
      </Section>
      <Section>
        <div className="grid-2">
          <div>
            <span className="section-badge">Our Approach</span>
            <h2 className="section-title" style={{ fontSize: 36 }}>BUILDING AI CAPABILITY FROM THE GROUND UP</h2>
            <p className="section-subtitle">PAI Excel doesn't parachute technology into classrooms. We build local capacity — training teachers first, equipping schools with physical sandbox kits, and ensuring every student has hands-on access to sovereign computing tools.</p>
          </div>
          <div><img src="/assets/images/pai-approach.png" alt="PAI Approach" style={{ borderRadius: 16, width: '100%' }} /></div>
        </div>
      </Section>
      <Section variant="light">
        <SectionHeader badge="Implementation Roadmap" title="FIVE PHASES OF TRANSFORMATION" titleSize={40} />
        <div className="numbered-list">
          {[
            { t: 'Teacher Certification', txt: 'Train and certify educators through intensive AI literacy bootcamps and ongoing sandbox access.' },
            { t: 'School Infrastructure', txt: 'Deploy physical sandbox kits, configure local compute clusters, and establish help desk support.' },
            { t: 'Curriculum Integration', txt: 'Map S.Ai.R.O.V.A.R. modules to NEP guidelines and integrate with existing school timetables.' },
            { t: 'Student Activation', txt: 'Launch student cohorts with structured learning paths, mentor matching, and project-based assessments.' },
            { t: 'Community Expansion', txt: 'Extend beyond schools to parents, local businesses, and district-level governance through awareness programs.' },
          ].map((item, i) => (
            <div className="numbered-item" key={item.t}>
              <div className="numbered-item__num">{String(i + 1).padStart(2, '0')}</div>
              <div>
                <h3 className="numbered-item__title">{item.t}</h3>
                <p className="numbered-item__text">{item.txt}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <div className="pai-excel">
          <div className="pai-excel__content">
            <span className="section-badge">Get Involved</span>
            <h2 className="pai-excel__title">BRING PAI EXCEL TO YOUR SCHOOL</h2>
            <p className="pai-excel__text">Whether you're a school administrator, district education officer, or community leader — partner with us to bring sovereign AI education to your region.</p>
            <Link to="/get-involved" className="pai-excel__link">Partner With PAI Excel →</Link>
          </div>
        </div>
      </Section>
    </>
  )
}
