const express = require('express')

const pagesController = require('../controllers/page.controller')

const router = express.Router()

router.post('/', pagesController.addPage)
router.get('/', pagesController.getPage)

module.exports = router