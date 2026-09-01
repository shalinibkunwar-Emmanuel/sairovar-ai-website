import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Ecosystem', path: '/ecosystem' },
  { label: 'Learning', path: '/learning' },
  { label: 'Create', path: '/create' },
  { label: 'Connect', path: '/connect' },
  { label: 'Initiatives', path: '/initiatives' },
  { label: 'Stories', path: '/stories' },
  { label: 'Resources', path: '/resources' },
  { label: 'Get Involved', path: '/get-involved' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__logo">
          <div className="header__logo-icon">S</div>
          <span className="header__logo-text">S.Ai.R.O.V.A.R.</span>
        </Link>
        <nav className={`header__nav ${mobileOpen ? 'header__nav--open' : ''}`}>
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={pathname === item.path ? 'active' : ''}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/get-involved" className="header__cta" onClick={() => setMobileOpen(false)}>
            Join the Movement
          </Link>
        </nav>
        <button
          className="header__mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          ☰
        </button>
      </div>
    </header>
  )
}