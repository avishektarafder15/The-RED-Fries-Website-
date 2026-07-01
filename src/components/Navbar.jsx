import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, ShoppingCart, ChevronDown, Menu, X } from 'lucide-react'
import { useReducedMotion } from '../hooks/useReducedMotion'
import SafeImage from './SafeImage'
import { IMAGES } from '../data/media'
import './Navbar.css'

const NAV_LINKS = ['Home', 'Menu', 'Ambience', 'Location', 'Contact']

export default function Navbar() {
  const [active, setActive] = useState('Home')
  const [mobileOpen, setMobileOpen] = useState(false)
  const reduced = useReducedMotion()

  return (
    <header className="navbar">
      <motion.a
        href="#home"
        className="navbar__logo"
        initial={reduced ? false : { opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        aria-label="The RED Fries home"
      >
        <span className="navbar__logo-icon" aria-hidden="true">🍟</span>
        <span className="navbar__wordmark">The <span className="red">RED</span> Fries</span>
      </motion.a>

      <nav className="navbar__pill" aria-label="Main navigation">
        <ul className="navbar__links">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button
                type="button"
                className={`navbar__link ${active === link ? 'navbar__link--active' : ''}`}
                onClick={() => {
                  setActive(link)
                  setMobileOpen(false)
                  document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
                }}
                aria-current={active === link ? 'page' : undefined}
              >
                {active === link && (
                  <motion.span
                    layoutId="nav-pill"
                    className="navbar__active-pill"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="navbar__link-text">{link}</span>
              </button>
            </li>
          ))}
          <li>
            <button type="button" className="navbar__search" aria-label="Search menu">
              <Search size={18} strokeWidth={2} />
            </button>
          </li>
        </ul>
      </nav>

      <motion.div
        className="navbar__actions"
        initial={reduced ? false : { opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <button type="button" className="navbar__cart" aria-label="Shopping cart, 2 items">
          <ShoppingCart size={20} strokeWidth={2} />
          <span className="navbar__cart-badge">2</span>
        </button>
        <button type="button" className="navbar__profile" aria-label="Account menu" aria-haspopup="true">
          <SafeImage src={IMAGES.profile} alt="" width={40} height={40} />
          <ChevronDown size={14} className="navbar__chevron" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="navbar__mobile-toggle"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.div>

      {mobileOpen && (
        <motion.nav
          className="navbar__mobile-menu"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              type="button"
              className={active === link ? 'active' : ''}
              onClick={() => {
                setActive(link)
                setMobileOpen(false)
                document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {link}
            </button>
          ))}
        </motion.nav>
      )}
    </header>
  )
}