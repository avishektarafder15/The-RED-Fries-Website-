import { motion } from 'framer-motion'
import { Play, Pause } from 'lucide-react'
import { useRef, useState } from 'react'
import ScrollSection from './ScrollSection'
import SafeImage from './SafeImage'
import { VIDEOS, IMAGES } from '../data/media'
import { useReducedMotion } from '../hooks/useReducedMotion'
import './Showcase.css'

export default function Showcase() {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(true)
  const [videoSrc, setVideoSrc] = useState(VIDEOS.showcase)
  const reduced = useReducedMotion()

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play()
      setPlaying(true)
    } else {
      video.pause()
      setPlaying(false)
    }
  }

  const handleVideoError = () => {
    if (videoSrc !== VIDEOS.showcaseFallback) {
      setVideoSrc(VIDEOS.showcaseFallback)
    }
  }

  return (
    <ScrollSection id="showcase" className="showcase">
      <div className="showcase__inner">
        <div className="showcase__text">
          <span className="showcase__eyebrow">Behind the Scenes</span>
          <h2 className="showcase__title">
            WHERE THE <span className="showcase__title--gradient">MAGIC</span> HAPPENS
          </h2>
          <p className="showcase__desc">
            Watch our chefs sizzle RED fries to perfection, flame-grill burgers, and craft every dish with fire, precision, and passion.
          </p>

          <div className="showcase__highlights">
            {['Crispy RED Fries', 'Flame-Grilled Burgers', 'Made Fresh Daily'].map((text, i) => (
              <motion.span
                key={text}
                className="showcase__pill"
                initial={reduced ? false : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: reduced ? 0 : 0.2 + i * 0.1 }}
              >
                {text}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.div
          className="showcase__media"
          initial={reduced ? false : { opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="showcase__video-wrap">
            <video
              ref={videoRef}
              key={videoSrc}
              className="showcase__video"
              autoPlay
              muted
              loop
              playsInline
              poster={IMAGES.friedChicken}
              onError={handleVideoError}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
            <button
              type="button"
              className="showcase__play-btn"
              onClick={togglePlay}
              aria-label={playing ? 'Pause video' : 'Play video'}
            >
              {playing ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <div className="showcase__video-border" aria-hidden="true" />
            <span className="showcase__live-badge" aria-hidden="true">
              <span className="showcase__live-dot" />
              Live Kitchen
            </span>
          </div>

          <motion.div
            className="showcase__floating-img showcase__floating-img--1"
            animate={reduced ? {} : { y: [0, -10, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <SafeImage src={IMAGES.burger} alt="Flame-grilled burger" />
          </motion.div>
          <motion.div
            className="showcase__floating-img showcase__floating-img--2"
            animate={reduced ? {} : { y: [0, 12, 0], rotate: [0, -4, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <SafeImage src={IMAGES.hotDog} alt="Golden crispy fries" />
          </motion.div>
        </motion.div>
      </div>
    </ScrollSection>
  )
}