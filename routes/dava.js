const express = require('express')
const router = express.Router()

const { createDava, getDava, getDavaId, updateDava, deleteDava } = require('../controllers/dava')

router.route('/').post(createDava)
router.route('/').get(getDava)
router.route('/:id').get(getDavaId)
router.route('/:id').put(updateDava)
router.route('/:id').delete(deleteDava)

module.exports = router
