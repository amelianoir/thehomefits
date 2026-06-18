import { motion } from 'framer-motion'
import './Navigation.css'

const ROOMS = [
  { id: 'bathroom', name: '🚿 Bathroom', emoji: '🚿' },
  { id: 'bedroom', name: '🛏️ Bedroom', emoji: '🛏️' },
  { id: 'living', name: '🛋️ Living Room', emoji: '🛋️' },
  { id: 'kitchen', name: '🍳 Kitchen', emoji: '🍳' },
  { id: 'office', name: '💼 Home Office', emoji: '💼' },
  { id: 'entryway', name: '🚪 Entryway', emoji: '🚪' },
]

function Navigation({ selectedRoom, setSelectedRoom }) {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-title">Pick a Room 🏠</div>
        <div className="nav-rooms">
          {ROOMS.map((room) => (
            <motion.button
              key={room.id}
              className={`nav-btn ${selectedRoom === room.id ? 'active' : ''}`}
              onClick={() => setSelectedRoom(room.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="room-emoji">{room.emoji}</span>
              <span className="room-name">{room.name.split(' ')[1]}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navigation
