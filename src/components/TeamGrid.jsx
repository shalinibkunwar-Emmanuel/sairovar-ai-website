const teamMembers = [
  { name: 'Gurpreet Singh', role: 'Founder - CEO', photo: '/assets/images/team-gurpreet.png' },
  { name: 'Dr. Onkar Gupta', role: 'MBBS; MD', photo: '/assets/images/team-onkar.png' },
  { name: 'Dr. Sandeep Sandha, Ph.D.', role: 'IIT Roorkee; UCLA\nChief Curator', photo: '/assets/images/team-sandeep.png' },
  { name: 'Dr. Manpriya Singh, MBA, Ph.D.', role: 'Curator', photo: '/assets/images/team-manpriya.png' },
  { name: 'Dr. Shalini', role: 'Ph.D\nDesign Chief', photo: '/assets/images/team-shalini.png' },
  { name: 'Ms. Sandeep Anand', role: 'Curator', photo: '/assets/images/team-sandeep-anand.png' },
  { name: 'Ms. Arti Kaur', role: 'Author AI-Quity\nQuality Assurance', initials: 'AK' },
  { name: 'Saurabh Singh', role: 'Chief Facilitator', initials: 'SS' },
  { name: 'Sandeep Goel', role: 'Chief of Mentor\nRelationship', initials: 'SG' },
  { name: 'Gurnoor', role: 'Quality Assurance', initials: 'G' },
]

export default function TeamGrid() {
  return (
    <div className="team-grid">
      {teamMembers.map(m => (
        <div className="team-card" key={m.name}>
          {m.photo
            ? <img src={m.photo} alt={m.name} className="team-card__photo" />
            : <div className="team-card__photo--placeholder">{m.initials}</div>
          }
          <div className="team-card__name">{m.name}</div>
          <div className="team-card__role" dangerouslySetInnerHTML={{ __html: m.role.replace(/\n/g, '<br/>') }} />
        </div>
      ))}
    </div>
  )
}