import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import ScrollSection from './ScrollSection'
import './Contact.css'

export default function Contact() {
  return (
    <ScrollSection id="contact" className="contact">
      <div className="contact__inner">
        <div className="contact__content">
          <span className="contact__eyebrow">Get In Touch</span>
          <h2 className="contact__title">
            READY TO <span className="contact__title--gold">FEAST?</span>
          </h2>
          <p className="contact__subtitle">
            Download the app, call us, or drop a line. Your next favorite meal is one tap away.
          </p>

          <ul className="contact__details">
            <li>
              <Phone size={18} aria-hidden="true" />
              <span>+1 (800) RED-FRIES</span>
            </li>
            <li>
              <Mail size={18} aria-hidden="true" />
              <span>hello@theredfries.com</span>
            </li>
            <li>
              <MapPin size={18} aria-hidden="true" />
              <span>Available in 40+ cities nationwide</span>
            </li>
          </ul>
        </div>

        <form className="contact__form" onSubmit={(e) => e.preventDefault()} aria-label="Contact form">
          <div className="contact__field">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Your name" autoComplete="name" />
          </div>
          <div className="contact__field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="you@email.com" autoComplete="email" />
          </div>
          <div className="contact__field">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={4} placeholder="Tell us what you're craving..." />
          </div>
          <button type="submit" className="contact__submit">
            Send Message
            <ArrowUpRight size={18} aria-hidden="true" />
          </button>
        </form>
      </div>
    </ScrollSection>
  )
}