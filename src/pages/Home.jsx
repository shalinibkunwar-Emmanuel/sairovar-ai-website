import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import StatCard from '../components/StatCard'
import TeamGrid from '../components/TeamGrid'
import CtaCards from '../components/CtaCards'
import FullCta from '../components/FullCta'

export default function Home() {
  return (
    <>
      <Hero bgImage="/assets/images/home-hero.png" badge="WELCOME TO THE AI REVOLUTION. Built by people. Powered by possibility." title="THE FUTURE ISN'T SOMETHING WE WAIT FOR. IT'S SOMETHING WE LEARN TO CREATE." subtitle="Artificial Intelligence is not just reshaping the tools we use—it is fundamentally transforming how we think, work, learn, and express our creativity. S.Ai.R.O.V.A.R. is the public digital ecosystem designed to make AI accessible, understandable, and sovereign.">
        <div className="btn-group">
          <Link to="/about" className="btn btn--primary">Discover S.Ai.R.O.V.A.R.</Link>
          <a href="#" className="btn btn--outline" style={{ color: '#fff', borderColor: '#fff' }}>Watch Introduction</a>
        </div>
      </Hero>

      <Section>
        <div className="grid-2">
          <div>
            <span className="section-badge">Our Mandate</span>
            <h2 className="section-title" style={{ fontSize: 42 }}>AI IS CHANGING THE WORLD. WE'RE CHANGING HOW WE LEARN IT.</h2>
            <p className="section-subtitle" style={{ marginBottom: 16 }}>S.Ai.R.O.V.A.R. (Syllabus of AI on Record, Organized Through Voluntary Affiliated Resource) is a sovereign learning ecosystem. We bring together students, educators, parents, schools, industry experts, and mentors into one continuously evolving, mutually strengthening network.</p>
            <p className="section-subtitle" style={{ marginBottom: 32 }}>We move away from passive, static curricula toward live, active reasoning, localized compute infrastructure, sandboxes of record, and peer-to-peer mentorship to build regional computational sovereignty.</p>
            <div className="btn-group">
              <Link to="/about" className="btn btn--primary">Our Approach</Link>
              <Link to="/learning" className="btn btn--outline">Explore Modules</Link>
            </div>
          </div>
          <div><img src="/assets/images/home-mandate.png" alt="AI Learning" style={{ borderRadius: 16, width: '100%' }} /></div>
        </div>
      </Section>

      <Hero bgImage="/assets/images/home-urgent.png" badge="The Urgent Need" title="THE FUTURE DIDN'T ASK FOR PERMISSION." subtitle="AI is already operating in our classrooms, our workplaces, and our phones. It is no longer a question of when it arrives—it has already reshaped the baseline. The real question is: Will we remain passive consumers of overseas tools, or will we build sovereign creative capacity?" />

      <Section>
        <div className="grid-3">
          <StatCard number="130+" label="Akal Academies Deployed" text="Bringing high-fidelity computational modules to rural schools." />
          <StatCard number="50k+" label="Active Students Reached" text="Empowering learners from tier-2 and tier-3 communities directly." />
          <StatCard number="#1" label="NEP AI Initiative" text="Fully mapped to the National Education Policy under ethical guidelines." />
        </div>
      </Section>

      <Section variant="light">
        <SectionHeader badge="Our Stakeholders" title="ONE FUTURE. MANY PEOPLE. ONE ECOSYSTEM." titleSize={40} subtitle="To transform digital education, we must interlock every layer of society. Here is how each stakeholder powers the collective capacity of S.Ai.R.O.V.A.R." />
        <div className="grid-3">
          <Card title="Students" text="Discover what's possible by shifting from passive consumers of overseas applications to builders, problem solvers, and systems architects." />
          <Card title="Teachers" text="Discover entirely new ways to guide active classrooms, backed by public sandboxes, ready-made computing resources, and live help desks." />
          <Card title="Parents" text="Understand what is changing in the computational landscape, ensuring tech progress becomes a source of shared household pride and security." />
          <Card title="Mentors" text="Share real-world engineering experiences directly with students as a Voluntary Mentor of Record, passing on verified, production-grade logic." />
          <Card title="Schools" text="Prepare your entire institution for tomorrow with our structured, NEP-aligned modular toolkits, teacher sandbox access, and hardware guides." />
          <Card title="Industry" text="Bring the real world closer by integrating live APIs, industry sandboxes, and actual deployment pipelines with the curriculum." />
        </div>
        <div className="text-center" style={{ marginTop: 40 }}><Link to="/ecosystem" className="btn btn--primary">Meet the Ecosystem</Link></div>
      </Section>

      <Section>
        <div className="grid-2">
          <div>
            <span className="section-badge">Our Core Idea</span>
            <h2 className="section-title" style={{ fontSize: 36 }}>ONE PERSON CAN LEARN AI. AN ECOSYSTEM CAN CHANGE WHAT AI MEANS.</h2>
            <p className="section-subtitle" style={{ marginBottom: 32 }}>Isolated training creates individual exceptions, but fails to change the landscape. To build systemic sovereignty, we need standard public records, open assets, localized hardware sandboxes, and voluntary mentors who embed knowledge in the public infrastructure.</p>
            <div className="btn-group">
              <Link to="/about" className="btn btn--primary">About S.Ai.R.O.V.A.R.</Link>
              <Link to="/stories" className="btn btn--outline">Read Our Case Studies</Link>
            </div>
          </div>
          <div><img src="/assets/images/home-core-idea.jpeg" alt="Core Idea" style={{ borderRadius: 16, width: '100%' }} /></div>
        </div>
      </Section>

      <Section>
        <SectionHeader badge="Our Team" title="THE PEOPLE BEHIND S.Ai.R.O.V.A.R." titleSize={36} />
        <TeamGrid />
      </Section>

      <Section variant="light">
        <div className="pai-excel">
          <div className="pai-excel__content">
            <span className="section-badge">Featured Initiative</span>
            <h2 className="pai-excel__title">PAI EXCEL</h2>
            <p className="pai-excel__text">Punjab AI Excellence — Empowering the next generation of AI-ready learners through structured, sovereign computing education across Punjab.</p>
            <Link to="/punjab-ai-excellence" className="pai-excel__link">Explore PAI Excel →</Link>
            <div style={{ fontSize: 12, color: 'var(--gray-text)', marginTop: 8 }}>sites.google.com/view/pai-excel</div>
          </div>
        </div>
      </Section>

      <section className="cta-section">
        <h2 className="cta-section__title">READY TO BE PART OF THE AI REVOLUTION?</h2>
        <p className="cta-section__subtitle">Choose your path and join the S.Ai.R.O.V.A.R. ecosystem today.</p>
        <CtaCards cards={[
          { title: 'FOR STUDENTS', text: 'I want to learn, experiment and create.', btnText: 'Join as a Student' },
          { title: 'FOR EDUCATORS & MENTORS', text: 'I want to bring AI into the way I teach and mentor.', btnText: 'Join as an Educator' },
          { title: 'FOR SCHOOLS & INDUSTRY', text: 'I want to make my institution AI-ready.', btnText: 'Partner With Us' },
        ]} />
      </section>

      <FullCta bgImage="/assets/images/home-cta-bg.png" title="THE AI REVOLUTION ISN'T SOMETHING TO WATCH. IT'S SOMETHING TO BE PART OF." text="Whether you are a developer ready to mentor, a school seeking direction, or a parent advocating for your community—step forward. Let us write Punjab's digital future together." buttons={[
        { label: 'Join S.Ai.R.O.V.A.R.', variant: 'btn--primary' },
        { label: 'Onboard Your Academy', variant: 'btn--outline' },
      ]} />
    </>
  )
}
