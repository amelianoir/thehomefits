import { motion } from 'framer-motion'
import WayCard from './WayCard'
import './RoomGrid.css'

function RoomGrid({ selectedRoom, products, loading }) {
  if (!selectedRoom) {
    return (
      <section className="room-grid">
        <div className="no-room-selected">
          <p>👈 Select a room to see improvement ideas!</p>
        </div>
      </section>
    )
  }

  const roomProducts = products[selectedRoom] || []

  return (
    <section className="room-grid">
      <div className="grid-container">
        {loading ? (
          <div className="loading">Loading products...</div>
        ) : roomProducts.length > 0 ? (
          <motion.div 
            className="ways-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {roomProducts.map((way, index) => (
              <WayCard key={index} way={way} index={index} />
            ))}
          </motion.div>
        ) : (
          <div className="no-products">No products found for this room</div>
        )}
      </div>
    </section>
  )
}

export default RoomGrid
