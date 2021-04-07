const logger = require('./logger')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {
  logger.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  } else if (error.name === 'JsonWebTokenError') {
    return response.status(401).json({ error: 'invalid token' })
  } else if (error.name === 'TokenExpiredError') {
    return response.status(401).json({ error: 'token expired' })
  }

  next(error)
}

const project = async (request, response, next) => {
  let token

  if (request.headers.authorization && request.headers.authorization.startsWith('Bearer'))
    token = request.headers.authorization.split(' ')[1]

  if (!token)
    return response.status(401).json({
      error: 'Not authorized to access this route'
    })

  const decoded = jwt.verify(token, process.env.JWT_SECRET)

  const user = await User.findById(decoded.id)

  if (!user)
    return response.status(404).json({
      error: 'No user found with this id'
    })

  request.user = user

  next()
}

module.exports = {
  unknownEndpoint,
  errorHandler,
  project
}
