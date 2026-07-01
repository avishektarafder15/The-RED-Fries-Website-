import { Clock, Leaf, Truck, Shield } from 'lucide-react'
import ScrollSection from './ScrollSection'
import './Features.css'

const FEATURES = [
  {
    icon: Clock,
    title: '30-Min Delivery',
    description: 'Hot meals at your door before the craving fades. Real-time tracking included.',
  },
  {
    icon: Leaf,
    title: 'Farm-Fresh Quality',
    description: '100% natural ingredients sourced daily from local farms and artisan suppliers.',
  },
  {
    icon: Truck,
    title: 'Free Over $25',
    description: 'Zero delivery fees on orders above $25. Premium service without the premium price.',
  },
  {
    icon: Shield,
    title: 'Satisfaction Guaranteed',
    description: 'Not thrilled? Full refund, no questions. We stand behind every single bite.',
  },
]

export default function Features() {
  return (
    <ScrollSection id="features" className="features">
      <div className="features__inner">
        <header className="features__header">
          <span className="features__eyebrow">Why The RED Fries</span>
          <h2 className="features__title">
            BUILT FOR <span className="features__title--gold">HUNGER</span>
          </h2>
          <p className="features__subtitle">
            Everything you need for a flawless food experience — from kitchen to doorstep.
          </p>
        </header>

        <div className="features__grid">
          {FEATURES.map((feature) => (
            <article key={feature.title} className="features__card">
              <div className="features__icon" aria-hidden="true">
                <feature.icon size={24} strokeWidth={2} />
              </div>
              <h3 className="features__card-title">{feature.title}</h3>
              <p className="features__card-desc">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </ScrollSection>
  )
}