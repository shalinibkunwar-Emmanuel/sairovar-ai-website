import { useState } from 'react'

const teamMembers = [
  { name: 'Gurpreet Singh', role: 'Founder - CEO', initials: 'GS', photo: '/assets/images/team-gurpreet.png' },
  { name: 'Dr. Onkar Gupta', role: 'MBBS; MD', initials: 'OG', photo: '/assets/images/team-onkar.png' },
  { name: 'Dr. Sandeep Sandha, Ph.D.', role: 'IIT Roorkee; UCLA\nChief Curator', initials: 'SS', photo: '/assets/images/team-sandeep.png' },
  { name: 'Dr. Manpriya Singh, MBA, Ph.D.', role: 'Curator', initials: 'MS', photo: '/assets/images/team-manpriya.png' },
  { name: 'Dr. Shalini', role: 'Ph.D\nDesign Chief', initials: 'SH', photo: '/assets/images/team-shalini.png' },
  { name: 'Ms. Sandeep Anand', role: 'Curator', initials: 'SA', photo: '/assets/images/team-sandeep-anand.png' },
  { name: 'Ms. Arti Kaur', role: 'Author AI-Quity\nQuality Assurance', initials: 'AK' },
  { name: 'Saurabh Singh', role: 'Chief Facilitator', initials: 'SS' },
  { name: 'Sandeep Goel', role: 'Chief of Mentor\nRelationship', initials: 'SG' },
  { name: 'Gurnoor', role: 'Quality Assurance', initials: 'G' },
]

/**
 * Renders a portrait, falling back to the member's initials when no photo is set
 * or the file fails to load — so a portrait that has not been exported yet shows
 * a styled monogram instead of a broken image.
 */
function TeamPhoto({ member }) {
  const [failed, setFailed] = useState(false)

  if (!member.photo || failed) {
    return <div className="team-card__photo--placeholder" aria-label={member.name}>{member.initials}</div>
  }

  return (
    <img
      src={member.photo}
      alt={member.name}
      className="team-card__photo"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}

export default function TeamGrid() {
  return (
    <div className="team-grid">
      {teamMembers.map(m => (
        <div className="team-card" key={m.name}>
          <TeamPhoto member={m} />
          <div className="team-card__name">{m.name}</div>
          <div className="team-card__role" dangerouslySetInnerHTML={{ __html: m.role.replace(/\n/g, '<br/>') }} />
        </div>
      ))}
    </div>
  )
}
