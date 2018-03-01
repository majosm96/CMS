const express = require('express')

/* Import Controller in order to get routes */
const authsController = require('../controllers/auth.controller')

/* Calls router */
const router = express.Router()

/* Makes routes based on methods */
router.post('/', authsController.authUser)



/* Module Export */
module.exports = router