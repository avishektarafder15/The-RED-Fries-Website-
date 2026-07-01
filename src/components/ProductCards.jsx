import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Plus, ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react'
import { useReducedMotion } from '../hooks/useReducedMotion'
import SafeImage from './SafeImage'
import { IMAGES } from '../data/media'
import './ProductCards.css'

const FEATURED = {
  name: 'Smoky Bloom',
  description: 'Smoked mushrooms, garlic cream, pickles',
  price: '$4.39',
  image: IMAGES.burgerThumb,
}

const CATEGORIES = [
  { name: 'Fried Chicken', image: IMAGES.friedChicken, bg: 'linear-gradient(135deg, #f5c4b8, #f472b6)' },
  { name: 'Hot Dogs', image: IMAGES.hotDog, bg: 'linear-gradient(135deg, #ffb088, #f5a623)' },
]

export default function ProductCards() {
  const [liked, setLiked] = useState(false)
  const [cartPop, setCartPop] = useState(false)
  const reduced = useReducedMotion()

  const handleAddToCart = () => {
    setCartPop(true)
    setTimeout(() => setCartPop(false), 400)
  }

  return (
    <motion.div
      className="product-cards"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: reduced ? 0 : 0.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.article
        className="product-cards__featured"
        whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(0,0,0,0.35)' }}
        transition={{ duration: 0.3 }}
      >
        <button
          type="button"
          className={`product-cards__heart ${liked ? 'product-cards__heart--active' : ''}`}
          onClick={() => setLiked((l) => !l)}
          aria-label={liked ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart size={16} fill={liked ? 'currentColor' : 'none'} />
        </button>

        <SafeImage src={FEATURED.image} alt={FEATURED.name} className="product-cards__thumb" />
        <div className="product-cards__info">
          <h3 className="product-cards__name">{FEATURED.name}</h3>
          <p className="product-cards__desc">{FEATURED.description}</p>
          <div className="product-cards__footer">
            <span className="product-cards__price">{FEATURED.price}</span>
            <motion.button
              type="button"
              className="product-cards__add"
              onClick={handleAddToCart}
              aria-label={`Add ${FEATURED.name} to cart`}
              animate={cartPop ? { scale: [1, 1.25, 0.95, 1.05, 1] } : {}}
              transition={{ duration: 0.4 }}
            >
              <Plus size={18} strokeWidth={2.5} />
            </motion.button>
          </div>
        </div>
      </motion.article>

      <div className="product-cards__categories">
        {CATEGORIES.map((cat) => (
          <motion.article
            key={cat.name}
            className="product-cards__category"
            style={{ background: cat.bg }}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ duration: 0.25 }}
          >
            <SafeImage src={cat.image} alt={cat.name} />
            <span>{cat.name}</span>
          </motion.article>
        ))}
      </div>

      <div className="product-cards__carousel" aria-label="Product carousel controls">
        <button type="button" className="product-cards__arrow" aria-label="Previous product">
          <ChevronLeft size={18} />
        </button>
        <button type="button" className="product-cards__arrow product-cards__arrow--active" aria-label="Next product">
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="product-cards__cart-hint" aria-live="polite">
        <ShoppingBag size={14} aria-hidden="true" />
        <span>Swipe for more</span>
      </div>
    </motion.div>
  )
}