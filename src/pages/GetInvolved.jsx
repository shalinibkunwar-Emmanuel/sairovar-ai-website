import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import CtaCards from '../components/CtaCards'
import FullCta from '../components/FullCta'
import StepCard from '../components/StepCard'

export default function GetInvolved() {
  return (
    <>
      <Hero bgImage="/assets/images/involved-hero.png" badge="Take the First Step" title="THE AI REVOLUTION ISN'T SOMETHING TO WATCH. IT'S SOMETHING TO JOIN." subtitle="Whether you're a student, educator, parent, mentor, school, or industry partner — there's a place for you in the S.Ai.R.O.V.A.R. ecosystem. Find your path and start today.">
        <div className="btn-group"><a href="#" className="btn btn--primary">Get Started Now</a></div>
      </Hero>
      <section className="cta-section">
        <h2 className="cta-section__title">CHOOSE YOUR PATH</h2>
        <p className="cta-section__subtitle">Every stakeholder has a role in building sovereign AI capability.</p>
        <CtaCards cards={[
          { title: 'FOR STUDENTS', text: 'I want to learn AI, build projects, and create with sovereign tools.', btnText: 'Join as Student' },
          { title: 'FOR EDUCATORS', text: 'I want to transform my teaching with AI-powered tools and methods.', btnText: 'Join as Educator' },
          { title: 'FOR PARTNERS', text: 'I want to bring AI education to my school, district, or organization.', btnText: 'Partner With Us' },
        ]} />
      </section>
      <Section variant="light">
        <SectionHeader badge="How It Works" title="FOUR SIMPLE STEPS TO GET STARTED" titleSize={40} />
        <div className="grid-4">
          <StepCard num="01" title="Register" text="Create your free S.Ai.R.O.V.A.R. account and select your stakeholder role." />
          <StepCard num="02" title="Onboard" text="Complete a short orientation to understand the ecosystem and your pathway." />
          <StepCard num="03" title="Engage" text="Access modules, connect with mentors, join your regional chapter, and start building." />
          <StepCard num="04" title="Contribute" text="Share your work, mentor others, and help grow sovereign AI capacity in your community." />
        </div>
      </Section>
      <FullCta bgImage="/assets/images/involved-cta.png" title="THE FUTURE IS BUILT BY THOSE WHO SHOW UP." text="Don't wait for AI to change your world. Step forward and help shape what it becomes. Punjab's sovereign digital future starts with you." buttons={[
        { label: 'Join S.Ai.R.O.V.A.R.', variant: 'btn--primary' },
        { label: 'Contact Our Team', variant: 'btn--white' },
      ]} />
    </>
  )
}
