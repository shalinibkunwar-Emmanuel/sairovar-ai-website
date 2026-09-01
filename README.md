# S.Ai.R.O.V.A.R. — Sovereign AI Learning Ecosystem

A modern React + Vite website for S.Ai.R.O.V.A.R. (Syllabus of AI on Record, Organized Through Voluntary Affiliated Resource) — a sovereign learning ecosystem connecting students, educators, parents, schools, mentors, and industry.

## Tech Stack

- **React 18** with functional components and hooks
- **Vite 5** for fast development and optimized builds
- **React Router v6** for client-side routing
- **CSS Custom Properties** for design tokens
- **Google Fonts** — Roboto (headings) + Schibsted Grotesk (body)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Section.jsx
│   ├── SectionHeader.jsx
│   ├── Card.jsx
│   ├── StatCard.jsx
│   ├── StepCard.jsx
│   ├── TeamGrid.jsx
│   ├── CtaCards.jsx
│   ├── FullCta.jsx
│   ├── Layout.jsx
│   └── ScrollToTop.jsx
├── pages/            # Page components (one per route)
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Ecosystem.jsx
│   ├── Learning.jsx
│   ├── Create.jsx
│   ├── Connect.jsx
│   ├── Initiatives.jsx
│   ├── PunjabAI.jsx
│   ├── Teachers.jsx
│   ├── Stories.jsx
│   ├── Resources.jsx
│   └── GetInvolved.jsx
├── styles/
│   └── global.css    # Design tokens + all component styles
├── App.jsx           # Route definitions
└── main.jsx          # Entry point
```

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--primary` | `#10B981` | Primary green |
| `--primary-dark` | `#0F766E` | Dark teal |
| `--primary-light` | `#E5FAF5` | Light mint background |
| `--body-text` | `#475569` | Body text color |
| `--dark-text` | `#334155` | Heading text color |

## Pages

- **Home** — Landing page with hero, mandate, stats, stakeholders, team
- **About** — Mission, thesis, pedagogy, methodology comparison
- **Ecosystem** — Stakeholder roles and collaborative lifecycle
- **Learning** — 10 AI modules, learning modalities, pedagogical steps
- **Create** — Creative action hub, creation pipeline
- **Connect** — Community channels, regional chapters
- **Initiatives** — Active programs and projects
- **Punjab AI Excellence** — PAI Excel flagship initiative
- **Teachers** — Educator practitioner tracks
- **Stories** — Impact stories and case studies
- **Resources** — Toolkits, guides, and downloads
- **Get Involved** — Onboarding paths and CTAs

## License

All rights reserved.
