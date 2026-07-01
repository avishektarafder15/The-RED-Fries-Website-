import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { useReducedMotion } from '../hooks/useReducedMotion'
import './StarRating.css'

export default function StarRating({ rating, reviewCount }) {
  const reduced = useReducedMotion()

  return (
    <div className="star-rating">
      <div className="star-rating__stars" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.span
            key={i}
            className="star-rating__star"
            initial={reduced ? false : { opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: reduced ? 0 : 1.3 + i * 0.1,
              duration: 0.35,
              ease: [0.34, 1.56, 0.64, 1],
            }}
          >
            <Star size={16} fill="currentColor" strokeWidth={0} />
          </motion.span>
        ))}
      </div>
      <p className="star-rating__text">
        <span className="star-rating__score">{rating}</span>
        <span className="star-rating__reviews">({reviewCount.toLocaleString()} reviews)</span>
      </p>
    </div>
  )
}