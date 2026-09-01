import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'

export default function Ecosystem() {
  return (
    <>
      <Hero bgImage="/assets/images/eco-hero.png" badge="Collective State Capacity" title="AI DOESN'T BELONG TO ONE CLASSROOM. IT BELONGS IN THE CONVERSATION." subtitle="The digital future isn't designed by solitary coders, but through the structured, collaborative alignment of our entire regional community." />
      <Section>
        <SectionHeader badge="Societal Interlock" title="Empowering the Complete Collaborative Lifecycle" titleSize={40} subtitle="S.Ai.R.O.V.A.R. bridges the digital gap. We interlock 6 core stakeholders to convert tier-2, tier-3, and rural schools into active engines of production." />
        <div className="grid-3">
          {[
            { t: 'Students', s: "DON'T JUST LEARN AI. CREATE WITH IT.", txt: 'Explore models, run regional sandboxes, fail gracefully, and build logical tools that address local agricultural or utility standards.', lnk: 'Explore as a Student →' },
            { t: 'Educators', s: "DON'T JUST TEACH ABOUT THE FUTURE. TEACH WITH IT.", txt: 'Gain deep training, live sandbox credits, open assets, and verified local help desks that convert classrooms into live engineering hubs.', lnk: 'Empower Your Teaching →' },
            { t: 'Parents', s: "DON'T FEAR THE FUTURE. UNDERSTAND IT.", txt: 'Learn what generative computing is actually changing, creating shared household confidence, support pathways, and technical pride.', lnk: 'Explore AI for Parents →' },
            { t: 'Schools', s: "DON'T WAIT FOR THE FUTURE TO ENTER THE CLASSROOM.", txt: 'Equip your complete academy using S.Ai.R.O.V.A.R. structural modular toolkits, localized computing assets, and standard curricula.', lnk: 'Partner With Us →' },
            { t: 'Mentors', s: "YOUR EXPERIENCE COULD BECOME SOMEONE'S STARTING POINT.", txt: 'Provide industry-grade guidance, review real-world student code, and donate engineering expertise as a certified mentor of record.', lnk: 'Become a Mentor →' },
            { t: 'Industry', s: 'BRING THE REAL WORLD INTO THE LEARNING WORLD.', txt: "Integrate live production APIs, allocate sandbox credits, and offer priority workspace opportunities directly to Punjab's state centers.", lnk: 'Partner With Industry →' },
          ].map(c => (
            <Card key={c.t} title={c.t} titleSize={24} subtitle={c.s} text={c.txt} link="#" linkText={c.lnk} />
          ))}
        </div>
      </Section>
      <Section>
        <div className="grid-2">
          <div>
            <span className="section-badge">Sovereign Future</span>
            <h2 className="section-title" style={{ fontSize: 36 }}>ONE PERSON CAN LEARN AI. AN ECOSYSTEM CAN CHANGE WHAT AI MEANS.</h2>
            <p className="section-subtitle">Isolated, proprietary training creates single, exceptional experts but fails to elevate the broader community. To build systemic sovereignty, we connect schools, regional compute clusters, voluntary mentor sandbox tools, and family networks into an open public record.</p>
          </div>
          <div><img src="/assets/images/eco-collab.png" alt="Collaboration" style={{ borderRadius: 16, width: '100%' }} /></div>
        </div>
      </Section>
      <Section variant="dark" style={{ textAlign: 'center' }}>
        <h2 className="section-title section-title--white" style={{ fontSize: 40 }}>FIND YOUR PLACE IN THE ECOSYSTEM</h2>
        <p className="section-subtitle mx-auto" style={{ color: '#F0FDF9', marginBottom: 32 }}>Whether you're a student, educator, mentor, parent, school, or industry partner — there's a place for you here.</p>
        <div className="btn-group" style={{ justifyContent: 'center' }}>
          <Link to="/get-involved" className="btn btn--primary">Join as a Student</Link>
          <Link to="/get-involved" className="btn btn--white">Join as an Educator / Mentor</Link>
          <Link to="/get-involved" className="btn btn--outline" style={{ color: '#fff', borderColor: '#fff' }}>Partner as a School</Link>
        </div>
      </Section>
    </>
  )
}
