import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'

const actions = [
  { icon: '&#128187;', t: 'Code Generation', txt: 'Auto-generate functional code from natural language prompts using sovereign model weights.' },
  { icon: '&#127912;', t: 'Visual Design', txt: 'Create posters, UI mockups, and brand assets using generative image pipelines.' },
  { icon: '&#127911;', t: 'Audio Production', txt: 'Compose music, generate voiceovers, and design sound effects with AI audio tools.' },
  { icon: '&#127909;', t: 'Video Creation', txt: 'Produce educational content, animations, and visual narratives using AI-assisted workflows.' },
  { icon: '&#128221;', t: 'Content Writing', txt: 'Draft research papers, blog posts, and editorial content with AI writing assistants.' },
  { icon: '&#128202;', t: 'Data Visualization', txt: 'Transform raw datasets into compelling visual stories and interactive dashboards.' },
]

const stages = [
  { t: 'Ideate', txt: 'Use AI brainstorming tools to explore concepts and generate creative directions.' },
  { t: 'Prototype', txt: 'Build rapid prototypes using generative code and design sandboxes.' },
  { t: 'Refine', txt: 'Iterate with AI feedback loops, testing and improving outputs systematically.' },
  { t: 'Deploy', txt: 'Ship your creation to the world using sovereign infrastructure and open tools.' },
]

export default function Create() {
  return (
    <>
      <Hero bgImage="/assets/images/create-hero.png" badge="Build. Design. Ship." title="CREATE WITH AI. DON'T JUST CONSUME IT." subtitle="S.Ai.R.O.V.A.R. gives you the tools, sandboxes, and mentorship to move from passive learning to active creation. Build real projects that solve real problems.">
        <div className="btn-group"><a href="#" className="btn btn--primary">Start Creating</a></div>
      </Hero>
      <Section>
        <SectionHeader badge="Action Hub" title="SIX CREATIVE DIMENSIONS OF AI" titleSize={40} subtitle="Every module in S.Ai.R.O.V.A.R. is designed to move you from theory to tangible output. Pick your dimension and start building." />
        <div className="grid-3">
          {actions.map(a => (
            <Card key={a.t} icon={a.icon} title={a.t} text={a.txt} />
          ))}
        </div>
      </Section>
      <Section variant="light">
        <SectionHeader badge="Creation Pipeline" title="FROM IDEA TO IMPACT IN FOUR STAGES" titleSize={40} />
        <div className="grid-4">
          {stages.map((s, i) => (
            <Card key={s.t} title={`${String(i + 1).padStart(2, '0')}. ${s.t}`} text={s.txt} />
          ))}
        </div>
      </Section>
      <Section variant="dark" style={{ textAlign: 'center' }}>
        <h2 className="section-title section-title--white" style={{ fontSize: 40 }}>YOUR CREATION GALLERY AWAITS</h2>
        <p className="section-subtitle mx-auto" style={{ color: '#F0FDF9', marginBottom: 32 }}>Showcase your AI-powered projects, get feedback from mentors, and inspire the next generation of creators.</p>
        <div className="btn-group" style={{ justifyContent: 'center' }}>
          <a href="#" className="btn btn--primary">Submit Your Project</a>
          <Link to="/stories" className="btn btn--white">View Gallery</Link>
        </div>
      </Section>
    </>
  )
}
