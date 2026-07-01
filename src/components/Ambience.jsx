import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Maximize2 } from 'lucide-react'
import ScrollSection from './ScrollSection'
import SafeImage from './SafeImage'
import { IMAGES } from '../data/media'
import { useReducedMotion } from '../hooks/useReducedMotion'
import './Ambience.css'

export default function Ambience() {
  const [lightbox, setLightbox] = useState(null)
  const reduced = useReducedMotion()

  return (
    <ScrollSection id="ambience" className="ambience">
      <div className="ambience__inner">
        <header className="ambience__header">
          <span className="ambience__eyebrow">The Experience</span>
          <h2 className="ambience__title">
            FEEL THE <span className="ambience__title--gold">VIBE</span>
          </h2>
          <p className="ambience__subtitle">
            Step inside The RED Fries — moody lighting, open kitchens, rooftop views, and spaces designed for unforgettable nights.
          </p>
        </header>

        <div className="ambience__gallery">
          {IMAGES.ambience.map((item, i) => (
            <motion.button
              key={item.src}
              type="button"
              className={`ambience__item ambience__item--${item.span}`}
              initial={reduced ? false : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: reduced ? 0 : i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setLightbox(item)}
              aria-label={`View ${item.caption}`}
            >
              <SafeImage src={item.src} alt={item.caption} />
              <div className="ambience__overlay">
                <span className="ambience__caption">{item.caption}</span>
                <Maximize2 size={18} aria-hidden="true" />
              </div>
            </motion.button>
          ))}
        </div>

        <div className="ambience__stats">
          {[
            { value: '3', label: 'Floors', color: 'var(--coral)' },
            { value: '120', label: 'Seats', color: 'var(--teal)' },
            { value: '24/7', label: 'Kitchen', color: 'var(--gold)' },
            { value: '5★', label: 'Ambience', color: 'var(--magenta)' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="ambience__stat"
              style={{ '--stat-color': stat.color }}
              initial={reduced ? false : { opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: reduced ? 0 : 0.3 + i * 0.1, duration: 0.5 }}
            >
              <span className="ambience__stat-value">{stat.value}</span>
              <span className="ambience__stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="ambience__lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-label="Image preview"
          >
            <motion.div
              className="ambience__lightbox-content"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button type="button" className="ambience__lightbox-close" onClick={() => setLightbox(null)} aria-label="Close preview">
                <X size={22} />
              </button>
              <SafeImage src={lightbox.src} alt={lightbox.caption} />
              <p className="ambience__lightbox-caption">{lightbox.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ScrollSection>
  )
}