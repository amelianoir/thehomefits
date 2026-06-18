import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { roomsData } from './data.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.use(cors())
app.use(express.json())

// Serve static files from dist
app.use(express.static(join(__dirname, '../dist')))

// API Routes
app.get('/products', (req, res) => {
  res.json(roomsData)
})

app.get('/products/:room', (req, res) => {
  const { room } = req.params
  const products = roomsData[room]
  if (products) {
    res.json(products)
  } else {
    res.status(404).json({ error: 'Room not found' })
  }
})

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK' })
})

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '../dist/index.html'))
})

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})
