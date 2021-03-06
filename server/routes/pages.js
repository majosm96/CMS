const express = require('express')

/* Import Controller in order to get routes */
const pagesController = require('../controllers/page.controller')

/* Calls router */
const router = express.Router()

/* Makes routes based on methods */
router.post('/', pagesController.addPage)
router.get('/', pagesController.getPage)
router.delete('/:page_id', pagesController.deletePage)
router.put('/:page_id', pagesController.updatePage)


/* Module Export */
module.exports = router