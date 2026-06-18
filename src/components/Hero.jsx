import { motion } from 'framer-motion'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="hero-title">✨ The Home Fits ✨</h1>
        <p className="hero-subtitle">Transform Your Space with Dopamine-Boosting Home Improvements</p>
        <p className="hero-description">Discover 60 curated ways to upgrade 6 rooms with real Amazon products</p>
        
        <motion.div
          className="hero-cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="cta-button">Explore Now 🏠</button>
        </motion.div>
      </motion.div>

      <motion.div
        className="floating-emoji"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        🎨
      </motion.div>
    </section>
  )
}

export default Hero
