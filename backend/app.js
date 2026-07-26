import express from "express"
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import dbConnection from './config/db.js'
import carRoutes from './routes/carRoutes.js'
import bookingRoutes from "./routes/bookingRoutes.js"
import authRoutes from './routes/authRoutes.js'

dotenv.config()

const app = express()

// CORS configuration
app.use(
  cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
    credentials: true,
  }),
)

app.use(express.json())
app.use(cookieParser())

const PORT = process.env.PORT || 3001

// Mount auth routes
app.use('/auth', authRoutes)

// Mount car and booking routes both at /api prefix and root level for maximum flexibility
app.use('/cars', carRoutes)
app.use('/bookings', bookingRoutes)

app.use('/api/cars', carRoutes)
app.use('/api/bookings', bookingRoutes)
app.use('/api/auth', authRoutes)

await dbConnection()

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
