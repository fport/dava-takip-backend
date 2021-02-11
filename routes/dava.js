const express = require('express')
const router = express.Router()

const { createItem, getTodos } = require('../controllers/dava')

router.route('/').post(createItem)
router.route('/').get(getTodos)

module.exports = router
