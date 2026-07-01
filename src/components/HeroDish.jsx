import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import SafeImage from './SafeImage'
import { IMAGES } from '../data/media'
import './HeroDish.css'

const FLOATING_ITEMS = [
  { src: IMAGES.tomato, className: 'hero-dish__float hero-dish__float--tomato', delay: 0 },
  { src: IMAGES.onion, className: 'hero-dish__float hero-dish__float--onion', delay: 0.5 },
  { src: IMAGES.sauce, className: 'hero-dish__float hero-dish__float--sauce', delay: 1 },
]

export default function HeroDish() {
  const containerRef = useRef(null)
  const reduced = useReducedMotion()

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { stiffness: 120, damping: 20 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig)

  const handleMouseMove = (e) => {
    if (reduced || !containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div
      ref={containerRef}
      className="hero-dish"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {FLOATING_ITEMS.map((item, i) => (
        <motion.div
          key={item.src}
          className={item.className}
          aria-hidden="true"
          animate={reduced ? {} : {
            y: [0, -12, 0],
            rotate: [0, i % 2 === 0 ? 8 : -8, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: item.delay,
          }}
        >
          <SafeImage src={item.src} alt="" />
        </motion.div>
      ))}

      <motion.div
        className="hero-dish__main"
        style={reduced ? {} : {
          rotateX,
          rotateY,
          transformPerspective: 1200,
        }}
        initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
        animate={
          reduced
            ? { opacity: 1, scale: 1, rotate: -4 }
            : { opacity: 1, scale: 1, rotate: -4, y: [0, -14, 0] }
        }
        transition={{
          opacity: { duration: 0.8, delay: 0.3 },
          scale: { duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
          rotate: { duration: 0.8, delay: 0.3 },
          y: reduced ? {} : { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.1 },
        }}
      >
        <SafeImage
          src={IMAGES.burger}
          alt="Premium gourmet burger with melted cheese, fresh lettuce, and dynamic sauce splash"
          className="hero-dish__image"
        />
        <div className="hero-dish__sauce-splash" aria-hidden="true" />
        <div className="hero-dish__ring hero-dish__ring--1" aria-hidden="true" />
        <div className="hero-dish__ring hero-dish__ring--2" aria-hidden="true" />
      </motion.div>

      <motion.div
        className="hero-dish__delivery-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
      >
        <span className="hero-dish__delivery-label">Deliver in</span>
        <span className="hero-dish__delivery-time">30 Min</span>
        <span className="hero-dish__delivery-sub">Super fast Delivery</span>
      </motion.div>
    </div>
  )
}