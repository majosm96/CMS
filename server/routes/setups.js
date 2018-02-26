const express = require('express')

/* Import Controller in order to get routes */
const setupsController = require('../controllers/setup.controller')

/* Calls router */
const router = express.Router()

/* Makes routes based on methods */
router.post('/', setupsController.addUser)

/* Module Export */
module.exports = router
