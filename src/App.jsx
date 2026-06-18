import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import RoomGrid from './components/RoomGrid'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [selectedRoom, setSelectedRoom] = useState(null)
  const [products, setProducts] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchAllProducts()
  }, [])

  const fetchAllProducts = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/products')
      const data = await response.json()
      setProducts(data)
    } catch (error) {
      console.error('Error fetching products:', error)
    }
    setLoading(false)
  }

  return (
    <div className="app">
      <Navigation selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} />
      <Hero />
      <RoomGrid selectedRoom={selectedRoom} products={products} loading={loading} />
      <Footer />
    </div>
  )
}

export default App
