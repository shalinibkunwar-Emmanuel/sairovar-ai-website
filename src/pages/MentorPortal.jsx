import { Link } from 'react-router-dom'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'

const roles = [
  { tag: 'SYSTEMS LAYER', t: 'Engineer', txt: 'Guide students in deploying local weights, configuring standard computing modules, and building optimized network architectures.' },
  { tag: 'LOGIC LAYER', t: 'Researcher', txt: 'Introduce active logical reasoning, model testing datasets, and dynamic token curation methods directly from the lab.' },
  { tag: 'INTERFACE LAYER', t: 'Designer', txt: 'Integrate predictive frameworks with robust human-centric UI/UX design components to shape highly responsive products.' },
  { tag: 'APPLICATION LAYER', t: 'Developer', txt: 'Bring physical code pipelines into action. Bridge student sandboxes directly to standard regional deployment architectures.' },
  { tag: 'SOVEREIGNTY LAYER', t: 'Entrepreneur', txt: 'Help student creators build scalable, localized platforms to support common regional infrastructure and economic growth.' },
]

const tools = [
  { tag: 'NEP COMPLIANT', t: 'AI Teaching Toolkit', txt: 'Comprehensive lesson plans, presentation modules, and code exercises mapped to basic logical levels.' },
  { tag: 'BOOTCAMP ACTIVE', t: 'Workshop Templates', txt: 'Hands-on collaborative session blueprints, ready for weekend hack jams and technical bootcamps.' },
  { tag: 'HARDWARE SPEC', t: 'Classroom Integration Guides', txt: 'Step-by-step instructions on configuring localized computing setups and hardware interfaces safely.' },
  { tag: 'METRIC ENGINE', t: 'Assessment Frameworks', txt: 'Rubrics to evaluate actual build competence rather than theoretical memorization.' },
  { tag: 'SOVEREIGN DATA', t: 'Curriculum Resources', txt: 'Ethical guidelines, prompt architectures, and verified models ready for localized execution.' },
]

const networks = [
  { t: 'Educator Forums', txt: 'Exchange teaching methods, share hardware resources, and collaborate on localized school curricula templates.', lnk: 'Join Forum' },
  { t: 'Expert Talks', txt: 'Regular live events hosted by leading production researchers focusing on ethical boundaries and new frameworks.', lnk: 'View Events' },
  { t: 'AI Conversations', txt: 'Interactive spaces sorted by logic pipelines, vector libraries, and deployment models.', lnk: 'Enter Space' },
]

const stats = [
  { num: '50,000+', label: 'Active Students Reached Directly' },
  { num: '350+', label: 'Partner Schools Active Across India' },
  { num: '130+', label: 'Rural Academies Deployed & Supported' },
  { num: '18,000+', label: 'Students Mentored Personally by Dr. Sandha' },
]

export default function MentorPortal() {
  return (
    <>
      {/* Portal Header */}
      <header className="header">
        <div className="header__inner">
          <Link to="/" className="header__logo">
            <div className="header__logo-icon">S</div>
            <span className="header__logo-text">S.Ai.R.O.V.A.R.</span>
          </Link>
          <nav className="header__nav">
            <Link to="/">Home</Link>
            <a href="#">Teaching Tools</a>
            <a href="#">Programmes</a>
            <a href="#">Mentorship</a>
            <a href="#">Community</a>
            <Link to="/resources">Resources</Link>
            <a href="#" className="header__cta">My Dashboard</a>
          </nav>
          <div className="portal-label portal-label--mentor">MENTOR & EDUCATOR PORTAL</div>
        </div>
      </header>

      {/* Announcement Bar */}
      <div className="announcement-bar">NEW ACADEMIC CYCLE 2026: EXPANDING REGIONAL COMPUTING BLUEPRINTS</div>

      {/* Hero */}
      <div className="hero" style={{ backgroundImage: 'url(/assets/images/mentor-hero.png)' }}>
        <div className="hero__content">
          <h1 className="hero__title">DON'T JUST TEACH ABOUT THE FUTURE. TEACH WITH IT.</h1>
          <p className="hero__subtitle">Discover new tools, approaches, and computational environments designed specifically to make foundational AI relevant, sovereign, and accessible to the classrooms you guide.</p>
          <div className="btn-group">
            <a href="#" className="btn btn--primary">Start Teaching with AI</a>
            <a href="#" className="btn btn--outline" style={{ color: '#fff', borderColor: '#fff' }}>Explore Mentor Syllabus</a>
          </div>
        </div>
      </div>

      {/* Teachers of Practice */}
      <Section>
        <div className="grid-2" style={{ marginBottom: 40 }}>
          <div>
            <span className="section-badge">Teachers of Practice</span>
            <h2 className="section-title" style={{ fontSize: 40 }}>THE PEOPLE WHO BRING AI TO LIFE.</h2>
            <a href="#" className="btn btn--primary" style={{ marginTop: 16 }}>Become a Teacher of Practice</a>
          </div>
          <p style={{ fontSize: 16, color: 'var(--body-text)', lineHeight: 1.6 }}>A Teacher of Practice doesn't simply stand at the front of a classroom. They bring direct production experience, translating theoretical structures into functional regional outcomes.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 20 }}>
          {roles.map(r => (
            <Card key={r.t} subtitle={r.tag} title={r.t} titleSize={18}>
              <p className="card__text" style={{ fontSize: 13 }}>{r.txt}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Teaching Tools */}
      <Section variant="light">
        <SectionHeader badge="Curated Materials" title="TOOLS TO BRING AI INTO THE WAY YOU TEACH" titleSize={40} subtitle="Ready-to-deploy frameworks, hardware configurations, and interactive syllabus sandboxes designed to integrate immediately with existing curricula." />
        <div className="grid-3" style={{ marginBottom: 24 }}>
          {tools.slice(0, 3).map(t => (
            <Card key={t.t} subtitle={t.tag} title={t.t} text={t.txt} />
          ))}
        </div>
        <div className="grid-2">
          {tools.slice(3).map(t => (
            <Card key={t.t} subtitle={t.tag} title={t.t} text={t.txt} />
          ))}
        </div>
      </Section>

      {/* AI Revolution in Classroom */}
      <Section>
        <div className="grid-2">
          <div>
            <span className="section-badge">Institution Collaboration</span>
            <h2 className="section-title" style={{ fontSize: 40 }}>BRING THE AI REVOLUTION INTO THE CLASSROOM.</h2>
            <p className="section-subtitle" style={{ marginBottom: 32 }}>We interlock structured training with school administrations. From setting up localized computing hardware sandboxes to deploying NEP-aligned modular toolkits, we provide the blueprints to prepare entire institutions.</p>
            <div className="btn-group">
              <a href="#" className="btn btn--primary">Explore Programmes</a>
              <a href="#" className="btn btn--outline">Onboard Your Academy</a>
            </div>
          </div>
          <div><img src="/assets/images/mentor-classroom.png" alt="AI in Classroom" style={{ borderRadius: 16, width: '100%' }} /></div>
        </div>
      </Section>

      {/* Right Question */}
      <Section variant="light">
        <div className="grid-2">
          <div><img src="/assets/images/mentor-question.png" alt="Mentoring" style={{ borderRadius: 16, width: '100%' }} /></div>
          <div>
            <span className="section-badge">Impact of Direct Guidance</span>
            <h2 className="section-title" style={{ fontSize: 40 }}>SOMETIMES, THE RIGHT QUESTION CHANGES EVERYTHING.</h2>
            <p className="section-subtitle" style={{ marginBottom: 32 }}>Voluntary Mentors of Record connect directly with curious learners to review code logic, challenge underlying patterns, and guide functional projects to completion.</p>
            <div className="btn-group">
              <a href="#" className="btn btn--primary">Start Mentoring</a>
              <a href="#" className="btn btn--outline">View Case Studies</a>
            </div>
          </div>
        </div>
      </Section>

      {/* Peer Networks */}
      <Section>
        <SectionHeader badge="Peer Networks" title="CONNECT WITH FELLOW EDUCATORS & MENTORS" titleSize={40} subtitle="Participate in expert panels, peer discussions, and coordinated coding challenges to grow the regional knowledge base." />
        <div className="grid-3">
          {networks.map(n => (
            <div className="portal-network-card" key={n.t}>
              <h3 className="portal-network-card__title">{n.t}</h3>
              <p className="portal-network-card__text">{n.txt}</p>
              <a href="#" className="card__link">{n.lnk} →</a>
            </div>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section variant="light">
        <span className="section-badge" style={{ display: 'block', textAlign: 'center' }}>Proven Trajectory</span>
        <h2 className="section-title text-center" style={{ fontSize: 40, marginBottom: 48 }}>YOUR EXPERIENCE COULD BECOME SOMEONE'S STARTING POINT.</h2>
        <div className="grid-4">
          {stats.map(s => (
            <div className="portal-stat" key={s.num}>
              <div className="portal-stat__number">{s.num}</div>
              <div className="portal-stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Worth Sharing CTA */}
      <Section variant="dark" style={{ textAlign: 'center' }}>
        <h2 className="section-title section-title--white" style={{ fontSize: 46, maxWidth: 900, margin: '0 auto 20px' }}>KNOW SOMETHING WORTH SHARING?</h2>
        <p className="section-subtitle mx-auto" style={{ color: 'var(--bg-tint)', marginBottom: 32 }}>You could be someone's first window into the world of AI. Connect with young minds eager to move from passive consumers to system builders.</p>
        <div className="btn-group" style={{ justifyContent: 'center' }}>
          <a href="#" className="btn btn--primary">Join as a Mentor</a>
          <a href="#" className="btn btn--white">Register Your School</a>
        </div>
      </Section>

      {/* Registration Form */}
      <Section>
        <div className="portal-form">
          <SectionHeader badge="Registration" title="Join as a Mentor or Educator" titleSize={40} subtitle="Shape the next generation of AI-confident learners. Whether you're an industry expert, researcher, or classroom educator — there's a place for you in the S.Ai.R.O.V.A.R. ecosystem." />
          <div className="form-grid">
            <div className="form-field">
              <label className="form-field__label">Full Name</label>
              <input className="form-field__input" type="text" placeholder="Your full name" />
            </div>
            <div className="form-field">
              <label className="form-field__label">Email Address</label>
              <input className="form-field__input" type="email" placeholder="you@example.com" />
            </div>
            <div className="form-field">
              <label className="form-field__label">Phone Number</label>
              <input className="form-field__input" type="tel" placeholder="+91 00000 00000" />
            </div>
            <div className="form-field">
              <label className="form-field__label">Organization/Institution</label>
              <input className="form-field__input" type="text" placeholder="Your organization/institution" />
            </div>
            <div className="form-field">
              <label className="form-field__label">Role/Designation</label>
              <input className="form-field__input" type="text" placeholder="e.g., Educator, Researcher, Engineer" />
            </div>
            <div className="form-field">
              <label className="form-field__label">City/State</label>
              <input className="form-field__input" type="text" placeholder="e.g., Chandigarh, Punjab" />
            </div>
            <div className="form-field">
              <label className="form-field__label">Area of Expertise</label>
              <select className="form-field__input"><option>Select an area</option></select>
            </div>
            <div className="form-field">
              <label className="form-field__label">Years of Experience</label>
              <input className="form-field__input" type="text" placeholder="e.g., 3–5 years" />
            </div>
            <div className="form-field form-field--full">
              <label className="form-field__label">How would you like to contribute?</label>
              <textarea className="form-field__textarea" placeholder="Tell us about your goals and what you hope to build..."></textarea>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: 32 }}>
            <button className="btn btn--primary" style={{ width: '100%', maxWidth: 400 }}>Apply as Mentor/Educator</button>
            <p style={{ fontSize: 13, color: 'var(--secondary-text)', marginTop: 12 }}>Our team will review your profile and connect you with relevant opportunities within 48 hours.</p>
          </div>
        </div>
      </Section>

      {/* Portal Footer */}
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__top">
            <div>
              <div className="footer__brand-logo">
                <div className="footer__brand-logo-icon">S</div>
                <span className="footer__brand-logo-text">S.Ai.R.O.V.A.R. Mentor Portal</span>
              </div>
              <p className="footer__brand-text">Enabling sovereign computational potential through certified educators and voluntary mentorship loops across classrooms.</p>
            </div>
            <div className="footer__col">
              <h4 className="footer__col-title">Teaching Resources</h4>
              <a href="#">Teaching Toolkits</a>
              <a href="#">Workshop Templates</a>
              <a href="#">Curriculum Sandbox</a>
            </div>
            <div className="footer__col">
              <h4 className="footer__col-title">Programmes</h4>
              <a href="#">Academy Onboarding</a>
              <a href="#">Educator Training</a>
              <a href="#">Certification Paths</a>
            </div>
            <div className="footer__col">
              <h4 className="footer__col-title">Ecosystem Connect</h4>
              <a href="#">Mentors of Record</a>
              <a href="#">Educator Forums</a>
              <a href="#">Smile & Showup Partner</a>
            </div>
          </div>
          <div className="footer__bottom">
            <span>© 2026 S.Ai.R.O.V.A.R. Mentor & Educator Portal | All sovereign intellectual rights reserved.</span>
            <span>An initiative by S.Ai.R.O.V.A.R. | Knowledge Partner: Smile & Showup Foundation</span>
          </div>
        </div>
      </footer>
    </>
  )
}
