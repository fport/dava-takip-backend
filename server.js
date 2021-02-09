require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
const errorHandler = require('./middleware/error')

// Connect db
connectDB()

const app = express()

// that will allow us to get data from the body so request.body
app.use(express.json())

// connect route
app.use('/api/auth', require('./routes/auth'))
app.use('/api/private', require('./routes/private'))

// Error Handler (Should be lasat piece of middleware)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

process.on('unhandleRejection', (err, promise) => {
  console.log(`Logged Error: ${err}`)
  server.close(() => process.exit(1))
})
