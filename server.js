require('dotenv').config()
const express = require('express')
const connect = require('./config/db')
const errorHandler = require('./middleware/error')
const cors = require('cors')

const PORT = process.env.PORT || 5000

// Connect db
// connectDB()

const app = express()

// that will allow us to get data from the body so request.body
app.use(cors())
app.use(express.json())

// connect route
app.use('/api/auth', require('./routes/auth'))
app.use('/api/private', require('./routes/private'))
app.use('/api/dava', require('./routes/dava'))

// Error Handler (Should be lasat piece of middleware)
app.use(errorHandler)

connect().then(() => {
  app.listen(PORT, '0.0.0.0', () => console.log(`running on ${PORT}`))
})

// const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
//
// process.on('unhandleRejection', (err, promise) => {
//   console.log(`Logged Error: ${err}`)
//   server.close(() => process.exit(1))
// })
// o
