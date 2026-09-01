import Hero from '../components/Hero'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'

export default function Connect() {
  return (
    <>
      <Hero bgImage="/assets/images/connect-hero.png" badge="Join the Conversation" title="CONNECT. COLLABORATE. CO-CREATE." subtitle="S.Ai.R.O.V.A.R. isn't just a platform — it's a living network. Connect with mentors, peers, educators, and industry leaders who share your vision for sovereign AI.">
        <div className="btn-group"><a href="#" className="btn btn--primary">Join Our Community</a></div>
      </Hero>
      <Section>
        <SectionHeader badge="Communication Channels" title="FIND YOUR PEOPLE" titleSize={40} subtitle="Multiple pathways to connect, learn, and grow together." />
        <div className="grid-3">
          <Card icon="&#128172;" title="Community Forums" text="Engage in structured discussions on AI modules, share project updates, and get peer feedback in our moderated community spaces." link="#" linkText="Join Forums →" />
          <Card icon="&#128247;" title="Live Events" text="Attend masterclasses, hackathons, and workshops led by voluntary mentors of record and industry practitioners." link="#" linkText="View Calendar →" />
          <Card icon="&#129309;" title="Mentor Matching" text="Get paired with experienced engineers, designers, and researchers who volunteer their expertise to guide your journey." link="#" linkText="Find a Mentor →" />
        </div>
      </Section>
      <Section variant="light">
        <div className="grid-2">
          <Card icon="&#127760;" title="Regional Chapters" text="Join or start a S.Ai.R.O.V.A.R. chapter in your district. Regional chapters organize local meetups, school partnerships, and community computing events." link="#" linkText="Find Your Chapter →" />
          <Card icon="&#128640;" title="Industry Partners" text="Connect with companies offering sandbox credits, API access, internship pipelines, and real-world project opportunities for S.Ai.R.O.V.A.R. learners." link="#" linkText="View Partners →" />
        </div>
      </Section>
    </>
  )
}
