import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Plus, ArrowUpRight } from 'lucide-react'
import ScrollSection from './ScrollSection'
import SafeImage from './SafeImage'
import { MENU_ITEMS, CATEGORIES } from '../data/menuData'
import { useReducedMotion } from '../hooks/useReducedMotion'
import './Menu.css'

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [addedId, setAddedId] = useState(null)
  const reduced = useReducedMotion()

  const filtered = activeCategory === 'All'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory)

  const handleAdd = (id) => {
    setAddedId(id)
    setTimeout(() => setAddedId(null), 500)
  }

  return (
    <ScrollSection id="menu" className="menu">
      <div className="menu__bg-orbs" aria-hidden="true">
        <span className="menu__orb menu__orb--1" />
        <span className="menu__orb menu__orb--2" />
        <span className="menu__orb menu__orb--3" />
      </div>

      <div className="menu__inner">
        <header className="menu__header">
          <span className="menu__eyebrow">Our Menu</span>
          <h2 className="menu__title">
            TASTE THE <span className="menu__title--gold">DIFFERENCE</span>
          </h2>
          <p className="menu__subtitle">
            Handcrafted dishes with bold flavors, fresh ingredients, and ratings from thousands of happy foodies.
          </p>
        </header>

        <div className="menu__filters" role="tablist" aria-label="Menu categories">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat}
              className={`menu__filter ${activeCategory === cat ? 'menu__filter--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {activeCategory === cat && (
                <motion.span
                  layoutId="menu-filter-pill"
                  className="menu__filter-pill"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span>{cat}</span>
            </button>
          ))}
        </div>

        <motion.div className="menu__grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.article
                key={item.id}
                className="menu__card"
                layout
                initial={reduced ? false : { opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: reduced ? 0 : i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -10 }}
                style={{ '--card-accent': item.accent }}
              >
                <div className="menu__card-image-wrap">
                  <SafeImage src={item.image} alt={item.name} />
                  <span className="menu__tag" style={{ background: item.accent }}>{item.tag}</span>
                  <div className="menu__rating-badge">
                    <Star size={12} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                    <span>{item.rating}</span>
                  </div>
                </div>

                <div className="menu__card-body">
                  <div className="menu__card-top">
                    <h3>{item.name}</h3>
                    <span className="menu__category-label">{item.category}</span>
                  </div>
                  <p className="menu__description">{item.description}</p>

                  <div className="menu__stars" aria-label={`${item.rating} stars, ${item.reviews} reviews`}>
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star
                        key={si}
                        size={13}
                        fill={si < Math.floor(item.rating) ? 'currentColor' : 'none'}
                        strokeWidth={si < Math.floor(item.rating) ? 0 : 1.5}
                        aria-hidden="true"
                      />
                    ))}
                    <span className="menu__review-count">({item.reviews})</span>
                  </div>

                  <div className="menu__card-footer">
                    <span className="menu__price">${item.price.toFixed(2)}</span>
                    <div className="menu__actions">
                      <motion.button
                        type="button"
                        className="menu__add-btn"
                        onClick={() => handleAdd(item.id)}
                        aria-label={`Add ${item.name} to cart`}
                        animate={addedId === item.id ? { scale: [1, 1.3, 0.9, 1.1, 1] } : {}}
                        transition={{ duration: 0.45 }}
                      >
                        <Plus size={18} strokeWidth={2.5} />
                      </motion.button>
                      <button type="button" className="menu__order-btn" aria-label={`Order ${item.name}`}>
                        <ArrowUpRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </ScrollSection>
  )
}