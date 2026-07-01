import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, Navigation } from 'lucide-react'
import ScrollSection from './ScrollSection'
import { useReducedMotion } from '../hooks/useReducedMotion'
import './Location.css'

const HOURS = [
  { day: 'Mon – Thu', time: '11:00 AM – 11:00 PM' },
  { day: 'Fri – Sat', time: '11:00 AM – 1:00 AM' },
  { day: 'Sunday', time: '10:00 AM – 10:00 PM' },
]

export default function Location() {
  const reduced = useReducedMotion()

  return (
    <ScrollSection id="location" className="location">
      <div className="location__bg-glow" aria-hidden="true" />

      <div className="location__inner">
        <header className="location__header">
          <span className="location__eyebrow">Find Us</span>
          <h2 className="location__title">
            VISIT <span className="location__title--gold">THE RED FRIES</span>
          </h2>
        </header>

        <div className="location__grid">
          <motion.div
            className="location__info"
            initial={reduced ? false : { opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="location__card location__card--address">
              <div className="location__icon-wrap location__icon-wrap--coral">
                <MapPin size={22} aria-hidden="true" />
              </div>
              <div>
                <h3>Address</h3>
                <p>2847 Gourmet Avenue, Suite 100<br />Manhattan, New York, NY 10001</p>
              </div>
            </div>

            <div className="location__card location__card--hours">
              <div className="location__icon-wrap location__icon-wrap--teal">
                <Clock size={22} aria-hidden="true" />
              </div>
              <div>
                <h3>Opening Hours</h3>
                <ul className="location__hours-list">
                  {HOURS.map((h) => (
                    <li key={h.day}>
                      <span>{h.day}</span>
                      <span>{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="location__card location__card--phone">
              <div className="location__icon-wrap location__icon-wrap--gold">
                <Phone size={22} aria-hidden="true" />
              </div>
              <div>
                <h3>Reservations</h3>
                <p>+1 (800) RED-FRIES<br />hello@theredfries.com</p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=2847+Gourmet+Avenue+Manhattan+NY"
              target="_blank"
              rel="noopener noreferrer"
              className="location__directions-btn"
            >
              <Navigation size={18} aria-hidden="true" />
              Get Directions
            </a>
          </motion.div>

          <motion.div
            className="location__map-wrap"
            initial={reduced ? false : { opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="location__map-badge">
              <span className="location__map-pulse" aria-hidden="true" />
              We&apos;re Open Now
            </div>
            <iframe
              title="The RED Fries restaurant location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b30eac9f%3A0x25905d65055607a7!2sChelsea%20Market!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="location__map"
            />
          </motion.div>
        </div>
      </div>
    </ScrollSection>
  )
}