const express = require('express')
const router = express.Router()

const { createItem } = require('../controllers/dava')

router.route('/todo').post(createItem)

module.exports = router
