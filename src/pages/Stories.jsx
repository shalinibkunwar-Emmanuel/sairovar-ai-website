import Hero from '../components/Hero'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'

const stories = [
  { img: '/assets/images/story-1.png', tag: 'STUDENT STORY', t: 'From Rural Punjab to AI Innovator', txt: 'How a 16-year-old from Moga district built a crop disease detection system using S.Ai.R.O.V.A.R. sandbox tools and open model weights.' },
  { img: '/assets/images/story-2.png', tag: 'TEACHER STORY', t: 'Transforming a Government School', txt: 'A mathematics teacher in Amritsar discovers how AI-assisted lesson planning doubled student engagement in her classroom.' },
  { img: '/assets/images/story-3.png', tag: 'SCHOOL STORY', t: 'Akal Academy Goes Digital', txt: 'How one Akal Academy deployed S.Ai.R.O.V.A.R. sandbox kits across 12 classrooms and saw a 40% increase in computational thinking scores.' },
  { img: '/assets/images/story-4.png', tag: 'COMMUNITY STORY', t: 'Parents Embrace the Future', txt: 'A parent awareness workshop in Ludhiana helped 200 families understand generative AI, turning household anxiety into collective pride.' },
]

export default function Stories() {
  return (
    <>
      <Hero bgImage="/assets/images/stories-hero.png" badge="Real Impact" title="STORIES THAT PROVE THE FUTURE IS ALREADY HERE." subtitle="Every story is a proof point. Every project is evidence that sovereign AI education works — not in theory, but in classrooms, homes, and communities across Punjab." />
      <Section>
        <SectionHeader badge="Impact Stories" title="VOICES FROM THE ECOSYSTEM" titleSize={40} />
        <div className="grid-2">
          {stories.map(s => (
            <div className="story-card" key={s.t}>
              <img className="story-card__image" src={s.img} alt={s.t} />
              <div className="story-card__body">
                <div className="story-card__tag">{s.tag}</div>
                <h3 className="story-card__title">{s.t}</h3>
                <p className="story-card__text">{s.txt}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
