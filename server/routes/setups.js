const express = require('express')

const setupsController = require('../controllers/setup.controller')

const router = express.Router()

router.post('/', setupsController.addUser)

module.exports = router
