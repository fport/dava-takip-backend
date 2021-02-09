const express = require('express')
const router = express.Router()

// Controllers
const { login, register } = require('../controllers/auth')

router.route('/login').post(login)
router.route('/register').post(register)

module.exports = router
