const privateRouter = require('express').Router()

privateRouter.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    data: 'You got access to the private data in this route'
  })
})

module.exports = privateRouter
