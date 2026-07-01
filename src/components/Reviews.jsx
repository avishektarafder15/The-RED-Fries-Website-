import { Star } from 'lucide-react'
import ScrollSection from './ScrollSection'
import SafeImage from './SafeImage'
import { IMAGES } from '../data/media'
import './Reviews.css'

const REVIEWS = [
  {
    name: 'Sarah Mitchell',
    avatar: IMAGES.avatars[0],
    text: 'The burger literally made me tear up. Crispy, juicy, and arrived in 22 minutes. The RED Fries is my new obsession.',
    rating: 5,
    accent: 'var(--coral)',
  },
  {
    name: 'Marcus Chen',
    avatar: IMAGES.avatars[1],
    text: 'Finally a delivery app that treats food like art. The Smoky Bloom? Life-changing. Premium vibes, fair prices.',
    rating: 5,
    accent: 'var(--teal)',
  },
  {
    name: 'Elena Rodriguez',
    avatar: IMAGES.avatars[2],
    text: 'Ordered for a dinner party — everyone thought I cooked. The fried chicken is unreal. 10/10 would feast again.',
    rating: 5,
    accent: 'var(--magenta)',
  },
]

export default function Reviews() {
  return (
    <ScrollSection id="reviews" className="reviews">
      <div className="reviews__inner">
        <header className="reviews__header">
          <span className="reviews__eyebrow">Customer Love</span>
          <h2 className="reviews__title">
            WHAT THEY'RE <span className="reviews__title--gold">SAYING</span>
          </h2>
        </header>

        <div className="reviews__grid">
          {REVIEWS.map((review) => (
            <article key={review.name} className="reviews__card" style={{ '--review-accent': review.accent }}>
              <div className="reviews__stars" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                ))}
              </div>
              <blockquote className="reviews__text">&ldquo;{review.text}&rdquo;</blockquote>
              <footer className="reviews__author">
                <SafeImage src={review.avatar} alt="" width={40} height={40} />
                <span>{review.name}</span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </ScrollSection>
  )
}