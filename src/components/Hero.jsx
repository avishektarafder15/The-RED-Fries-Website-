import { motion } from 'framer-motion'
import { ArrowUpRight, Leaf } from 'lucide-react'
import { useReducedMotion } from '../hooks/useReducedMotion'
import HeroDish from './HeroDish'
import ProductCards from './ProductCards'
import StarRating from './StarRating'
import SafeImage from './SafeImage'
import { IMAGES } from '../data/media'
import './Hero.css'

const HEADLINE_WORDS = [
  { text: 'SALAD', gold: false },
  { text: 'LEFT', gold: false },
  { text: 'THE', gold: false },
  { text: 'CHAT', gold: true },
]

export default function Hero() {
  const reduced = useReducedMotion()

  const wordVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: reduced ? 0 : 0.15 + i * 0.12,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  const cascade = {
    hidden: { opacity: 0, y: 24 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: reduced ? 0 : delay,
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__glow hero__glow--coral" aria-hidden="true" />
      <div className="hero__glow hero__glow--teal" aria-hidden="true" />

      <div className="hero__grid">
        <div className="hero__content">
          <motion.div
            className="hero__badge"
            custom={0.55}
            initial="hidden"
            animate="visible"
            variants={cascade}
            aria-label="100% Natural Ingredients"
          >
            <Leaf size={16} strokeWidth={2.5} aria-hidden="true" />
            <span>100% Natural Ingredients</span>
          </motion.div>

          <h1 id="hero-heading" className="hero__headline">
            {HEADLINE_WORDS.map((word, i) => (
              <motion.span
                key={word.text}
                className={word.gold ? 'hero__word hero__word--gold' : 'hero__word'}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={wordVariant}
              >
                {word.text}{' '}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="hero__subheading"
            custom={0.75}
            initial="hidden"
            animate="visible"
            variants={cascade}
          >
            Crispy layers, bold flavors, and meals that actually hit different.
          </motion.p>

          <motion.div
            className="hero__ctas"
            custom={0.95}
            initial="hidden"
            animate="visible"
            variants={cascade}
          >
            <a href="#menu" className="hero__btn hero__btn--primary">
              Order Now
              <ArrowUpRight size={18} className="hero__btn-icon" aria-hidden="true" />
            </a>
            <a href="#menu" className="hero__btn hero__btn--outline">
              Explore Menu
              <ArrowUpRight size={18} className="hero__btn-icon" aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div
            className="hero__social-proof"
            custom={1.15}
            initial="hidden"
            animate="visible"
            variants={cascade}
          >
            <div className="hero__avatars" aria-hidden="true">
              {IMAGES.avatars.map((src, i) => (
                <SafeImage key={src} src={src} alt="" style={{ zIndex: IMAGES.avatars.length - i }} />
              ))}
              <span className="hero__avatar-count">1K+</span>
            </div>
            <StarRating rating={4.9} reviewCount={2358} />
          </motion.div>
        </div>

        <div className="hero__visual">
          <HeroDish />
          <ProductCards />
        </div>
      </div>
    </section>
  )
}