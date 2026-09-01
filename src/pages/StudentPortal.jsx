import { Link } from 'react-router-dom'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'

const modules = [
  { icon: '&#129302;', t: 'AI Fundamentals', txt: 'Neurons, data processing, and simple vectors from the absolute basics up.' },
  { icon: '&#10024;', t: 'Generative AI', txt: 'Run model weights and learn to output contextually rich creative assets.' },
  { icon: '&#128172;', t: 'Prompting', txt: 'Master logical orchestration, prompt structures, and dynamic token guidelines.' },
  { icon: '&#127912;', t: 'AI & Creativity', txt: 'Combine mathematical algorithms with high-fidelity creative visual expressions.' },
  { icon: '&#128396;', t: 'AI & Design', txt: 'Transform functional UI layouts using predictive modules and robust logic.' },
  { icon: '&#128187;', t: 'AI & Coding', txt: 'Automate codebases, generate complex logical schemas, and test safe code.' },
  { icon: '&#127909;', t: 'AI & Media', txt: 'Draft cinematic narratives, audio podcasts, and rich interactive media blocks.' },
  { icon: '&#128200;', t: 'AI & Business', txt: 'Configure localized computing profiles to scale systems and startups.' },
  { icon: '&#128161;', t: 'AI & Innovation', txt: 'Reverse engineer models to establish sovereign tech blueprints.' },
  { icon: '&#9878;', t: 'AI Ethics', txt: 'Safeguard user spaces and logical outputs under intent-for-good guidelines.' },
]

const actions = [
  { tag: 'HANDS-ON', t: 'Build Projects', txt: 'Build actual apps, design systems, or data trackers from scratch.', lnk: 'Browse project guides' },
  { tag: 'SANDBOX', t: 'Experiment in AI Labs', txt: 'Play inside open sandbox systems and run real neural networks safely.', lnk: 'Enter the labs' },
  { tag: 'WEEKLY', t: 'Take on Challenges', txt: 'Solve real-world system issues and climb the regional leaderboard.', lnk: 'Join active challenge' },
  { tag: 'COMPETITIONS', t: 'Join Hackathons', txt: 'Collaborate in live virtual events to prototype systems over a weekend.', lnk: 'Register for HackSairovar' },
  { tag: 'TEAMS', t: 'Collaborate', txt: 'Partner with young creators across campuses on shared vector datasets.', lnk: 'Start team-up' },
  { tag: 'BLUEPRINTS', t: 'Prototype', txt: 'Build minimum viable products to test localized computing theories.', lnk: 'Launch draft lab' },
]

const projects = [
  { img: '/assets/images/project-1.png', t: 'Agricultural Yield Vector Optimizer', by: 'By Karanpreet Singh', school: 'Akal Academy, Muktsar' },
  { img: '/assets/images/project-2.png', t: 'Smart Waste Grid Model', by: 'By Harpreet Kaur', school: 'Akal Academy, Cheema' },
  { img: '/assets/images/project-3.png', t: 'Folk Narrative AI Story Generator', by: 'By Simranjeet Singh', school: 'Akal Academy, Baru Sahib' },
]

export default function StudentPortal() {
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
            <Link to="/learning">Learn</Link>
            <Link to="/create">Create</Link>
            <a href="#">Challenges</a>
            <a href="#">Community</a>
            <Link to="/resources">Resources</Link>
            <a href="#" className="header__cta">My Dashboard</a>
          </nav>
          <div className="portal-label portal-label--student">STUDENT PORTAL</div>
        </div>
      </header>

      {/* Announcement Bar */}
      <div className="announcement-bar">NOW LIVE: SPRINT CHALLENGE 04 — OPTIMIZING REGIONAL MODELS</div>

      {/* Hero */}
      <div className="hero" style={{ backgroundImage: 'url(/assets/images/student-hero.png)' }}>
        <div className="hero__content">
          <h1 className="hero__title">DON'T JUST LEARN AI. CREATE WITH IT.</h1>
          <p className="hero__subtitle">Explore. Experiment. Fail. Try again. S.Ai.R.O.V.A.R. Student Portal is your playground to turn ideas inside your head into real models, pipelines, and functional software structures.</p>
          <div className="btn-group">
            <a href="#" className="btn btn--primary">Start Your Journey</a>
            <a href="#" className="btn btn--outline" style={{ color: '#fff', borderColor: '#fff' }}>Explore Sandbox</a>
          </div>
        </div>
      </div>

      {/* Ten Learning Modules */}
      <Section>
        <SectionHeader badge="Curated Paths" title="TEN HIGH-FIDELITY LEARNING MODULES" titleSize={40} subtitle="Step-by-step pathways designed specifically to take you from a curious beginner to a sovereign digital system builder." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 20 }}>
          {modules.map(m => (
            <Card key={m.t} icon={m.icon} title={m.t} titleSize={16} style={{ padding: 24, textAlign: 'center' }}>
              <p className="card__text" style={{ fontSize: 13 }}>{m.txt}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Action Over Theory */}
      <Section variant="light">
        <SectionHeader badge="ACTION OVER THEORY" title="YOUR FIRST PROJECT DOESN'T HAVE TO BE PERFECT. IT JUST HAS TO EXIST." titleSize={40} subtitle="S.Ai.R.O.V.A.R. values raw build potential over memorized formulas. Dive straight into action with our six core workspace methods." />
        <div className="grid-3">
          {actions.map(a => (
            <Card key={a.t} subtitle={a.tag} title={a.t} text={a.txt} link="#" linkText={a.lnk} />
          ))}
        </div>
      </Section>

      {/* Student Portfolio */}
      <Section>
        <SectionHeader badge="Student Portfolio" title="IDEAS WORTH SEEING. PEOPLE WORTH DISCOVERING." titleSize={40} />
        <div className="grid-3">
          {projects.map(p => (
            <div className="story-card" key={p.t}>
              <img className="story-card__image" src={p.img} alt={p.t} />
              <div className="story-card__body">
                <h3 className="story-card__title" style={{ fontSize: 18 }}>{p.t}</h3>
                <p style={{ fontSize: 14, color: 'var(--body-text)', marginBottom: 4 }}>{p.by}</p>
                <p style={{ fontSize: 12, color: 'var(--secondary-text)', marginBottom: 12 }}>{p.school}</p>
                <a href="#" className="card__link">View Project →</a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center" style={{ marginTop: 32 }}>
          <a href="#" className="btn btn--outline">View All Student Projects</a>
        </div>
      </Section>

      {/* Mentorship + Parivar */}
      <Section variant="light">
        <div className="grid-2">
          <div className="portal-connect-card">
            <div className="portal-connect-card__tag">MENTORSHIP OF RECORD</div>
            <h3 className="portal-connect-card__title">Learn from people who've already walked the path.</h3>
            <p className="portal-connect-card__text">Connect directly with Voluntary Mentors of Record—seasoned production engineers, researchers, and systems designers ready to code-review your logic.</p>
            <a href="#" className="btn btn--primary">Find a Mentor</a>
          </div>
          <div className="portal-connect-card portal-connect-card--accent">
            <div className="portal-connect-card__tag">PARIVAR NETWORKS</div>
            <h3 className="portal-connect-card__title">Find people who are curious about the same things you are.</h3>
            <p className="portal-connect-card__text">Join region-wide channels sorted by logic frameworks, creative designs, and localized project goals. Form teams and host active hack jams together.</p>
            <a href="#" className="btn btn--primary">Join Student Discord & Forum</a>
          </div>
        </div>
      </Section>

      {/* Ambassador CTA */}
      <Section variant="dark" style={{ textAlign: 'center' }}>
        <span className="section-badge" style={{ color: 'var(--cta-accent)' }}>LEADERSHIP PROGRAM</span>
        <h2 className="section-title section-title--white" style={{ fontSize: 40, maxWidth: 800, margin: '0 auto 20px' }}>PASS KNOWLEDGE FORWARD TO YOUR PEERS. BECOME A STUDENT AMBASSADOR.</h2>
        <p className="section-subtitle mx-auto" style={{ color: 'var(--bg-tint)', marginBottom: 32 }}>Help set up computing labs inside your home academies, run weekend workshops, guide fellow classmates on dynamic templates, and represent Punjab's rising computing generation.</p>
        <a href="#" className="btn btn--primary">Apply to Program</a>
      </Section>

      {/* Registration Form */}
      <Section>
        <div className="portal-form">
          <SectionHeader badge="Registration" title="Join the S.Ai.R.O.V.A.R. Student Community" titleSize={40} subtitle="Start your AI learning journey today. Fill out the form below and we'll connect you with mentors, resources, and a community of fellow learners." />
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
              <label className="form-field__label">School/College Name</label>
              <input className="form-field__input" type="text" placeholder="Your school/college name" />
            </div>
            <div className="form-field">
              <label className="form-field__label">Class/Year</label>
              <input className="form-field__input" type="text" placeholder="e.g., Class 11, 2nd Year" />
            </div>
            <div className="form-field">
              <label className="form-field__label">City/State</label>
              <input className="form-field__input" type="text" placeholder="e.g., Chandigarh, Punjab" />
            </div>
            <div className="form-field">
              <label className="form-field__label">Area of AI Interest</label>
              <select className="form-field__input"><option>Select an area</option></select>
            </div>
            <div className="form-field form-field--full">
              <label className="form-field__label">Why do you want to learn AI?</label>
              <textarea className="form-field__textarea" placeholder="Tell us about your goals and what you hope to build..."></textarea>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: 32 }}>
            <button className="btn btn--primary" style={{ width: '100%', maxWidth: 400 }}>Submit Application</button>
            <p style={{ fontSize: 13, color: 'var(--secondary-text)', marginTop: 12 }}>We'll review your application and get back within 48 hours.</p>
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
                <span className="footer__brand-logo-text">S.Ai.R.O.V.A.R. Student Portal</span>
              </div>
              <p className="footer__brand-text">Enabling sovereign computational potential and hands-on AI execution across India. Designed to help rural and urban classrooms create the future together.</p>
              <p className="footer__brand-curated">Curated by Dr. Inderjot Kaur & Dr. Sandeep Singh Sandha</p>
            </div>
            <div className="footer__col">
              <h4 className="footer__col-title">Portal Portals</h4>
              <a href="#">My Learning Sandbox</a>
              <a href="#">Weekly Challenge Log</a>
              <a href="#">Public Project Gallery</a>
            </div>
            <div className="footer__col">
              <h4 className="footer__col-title">Resources</h4>
              <a href="#">API Guidelines</a>
              <a href="#">Ethics Protocol</a>
              <a href="#">Hardware Documentation</a>
            </div>
          </div>
          <div className="footer__bottom">
            <span>© 2026 S.Ai.R.O.V.A.R. Student Portal | All sovereign intellectual rights reserved.</span>
            <span>An initiative by S.Ai.R.O.V.A.R. | Knowledge Partner: Smile & Showup Foundation</span>
          </div>
        </div>
      </footer>
    </>
  )
}
