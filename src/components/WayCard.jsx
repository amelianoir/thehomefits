import { motion } from 'framer-motion'
import ProductList from './ProductList'
import './WayCard.css'

function WayCard({ way, index }) {
  return (
    <motion.div
      className="way-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="way-header">
        <h3 className="way-title">{way.title}</h3>
        <span className="way-number">#{index + 1}</span>
      </div>
      <p className="way-description">{way.description}</p>
      <ProductList products={way.products} />
    </motion.div>
  )
}

export default WayCard
