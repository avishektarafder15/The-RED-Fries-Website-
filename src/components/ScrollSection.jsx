import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function ScrollSection({ id, className = '', children }) {
  const { ref, visible } = useScrollReveal()
  const reduced = useReducedMotion()

  return (
    <motion.section
      id={id}
      ref={ref}
      className={className}
      initial={reduced ? false : { opacity: 0, y: 48 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 48 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  )
}