import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo" aria-hidden="true">🍟</span>
          <span className="footer__wordmark">The <span className="footer__red">RED</span> Fries</span>
          <p className="footer__tagline">Premium food delivery, delivered fast.</p>
        </div>

        <nav className="footer__links" aria-label="Footer navigation">
          <a href="#menu">Menu</a>
          <a href="#ambience">Ambience</a>
          <a href="#location">Location</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>

        <p className="footer__copy">
          &copy; {new Date().getFullYear()} The RED Fries. All rights reserved.
        </p>
      </div>
    </footer>
  )
}