const User = require('../models/User')
const authRouter = require('express').Router()

authRouter.post('/register', async (req, res) => {
  const { username, email, password } = req.body
  const user = await User.create({
    username,
    email,
    password
  })

  sendToken(user, 201, res)
})

authRouter.post('/login', async (req, res) => {
  const { email, password } = req.body

  if (!email || !password)
    return res.status(401).json({
      error: 'Please provide an email and password'
    })

  const user = await User.findOne({ email }).select('+password')

  if (!user)
    return res.status(401).json({
      error: 'Invalid Credentials'
    })

  const isMatch = await user.matchPasswords(password)

  if (!isMatch)
    return res.status(404).json({
      success: false,
      error: 'Invalid Credentials'
    })

  sendToken(user, 200, res)
})

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken()
  res.status(statusCode).json({ success: true, token })
}

module.exports = authRouter
