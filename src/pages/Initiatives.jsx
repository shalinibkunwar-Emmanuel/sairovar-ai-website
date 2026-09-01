import Hero from '../components/Hero'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'

const initiatives = [
  { img: '/assets/images/init-1.png', tag: 'FLAGSHIP', t: 'PAI Excel', txt: 'Punjab AI Excellence — structured sovereign computing education across Punjab state schools.' },
  { img: '/assets/images/init-2.png', tag: 'COMMUNITY', t: 'Rural AI Labs', txt: 'Deploying physical sandbox kits to tier-3 and rural schools for hands-on AI learning.' },
  { img: '/assets/images/init-3.png', tag: 'RESEARCH', t: 'Sovereign Models', txt: 'Building and training regional language models that respect local linguistic diversity.' },
  { img: '/assets/images/init-4.png', tag: 'EDUCATION', t: 'Teacher Training', txt: 'Comprehensive AI literacy programs for educators across government and private schools.' },
  { img: '/assets/images/init-5.png', tag: 'INDUSTRY', t: 'Startup Incubator', txt: 'Supporting student-led AI ventures with mentorship, compute credits, and market access.' },
  { img: '/assets/images/init-6.png', tag: 'OUTREACH', t: 'Parent Awareness', txt: 'Community workshops helping families understand and embrace AI as a household capability.' },
]

export default function Initiatives() {
  return (
    <>
      <Hero bgGradient="linear-gradient(135deg, #0B3D3D 0%, #0A2E2E 100%)" badge="Programs & Projects" title="INITIATIVES THAT MOVE THE NEEDLE." subtitle="From flagship state programs to grassroots community labs — every initiative is designed to build lasting, sovereign AI capability across Punjab and beyond." />
      <Section>
        <SectionHeader badge="Active Programs" title="SIX PILLARS OF CHANGE" titleSize={40} />
        <div className="initiative-grid">
          {initiatives.map(i => (
            <div className="initiative-card" key={i.t}>
              <img className="initiative-card__image" src={i.img} alt={i.t} />
              <div className="initiative-card__body">
                <div className="initiative-card__tag">{i.tag}</div>
                <h3 className="initiative-card__title">{i.t}</h3>
                <p className="initiative-card__text">{i.txt}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
