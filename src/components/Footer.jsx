import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__brand-logo">
              <div className="footer__brand-logo-icon">S</div>
              <span className="footer__brand-logo-text">S.Ai.R.O.V.A.R.</span>
            </div>
            <p className="footer__brand-text">
              S.Ai.R.O.V.A.R. Learn. Explore. Create. Share. And pass it on.
              Enabling sovereign computational potential across India.
            </p>
            <p className="footer__brand-curated">
              Curated by Dr. Inderjot Kaur &amp; Dr. Sandeep Singh Sandha
            </p>
          </div>
          <div className="footer__col">
            <div className="footer__col-title">About S.Ai.R.O.V.A.R.</div>
            <Link to="/about">Our Mission</Link>
            <a href="#">Sovereign IP</a>
            <a href="#">Press &amp; Media</a>
          </div>
          <div className="footer__col">
            <div className="footer__col-title">Learn &amp; Create</div>
            <Link to="/learning">Curriculum</Link>
            <a href="#">Mentor Sandbox</a>
            <a href="#">Parivar Gateway</a>
          </div>
          <div className="footer__col">
            <div className="footer__col-title">Connect &amp; Resources</div>
            <Link to="/get-involved">Get Involved</Link>
            <Link to="/initiatives">Initiatives</Link>
            <Link to="/stories">Stories</Link>
          </div>
        </div>
        <div className="footer__bottom">
          <span>&copy; 2026 S.Ai.R.O.V.A.R. All sovereign intellectual rights reserved.</span>
          <span>An Initiative by Network18 · Knowledge Partner: Smile &amp; Showup Foundation</span>
        </div>
      </div>
    </footer>
  )
}