const express = require('express')

/* Import Controller in order to get routes */
const postsController = require('../controllers/post.controller')

/* Calls router */
const router = express.Router()

/* Makes routes based on methods */
router.post('/', postsController.addPost)
router.get('/', postsController.getPosts)
router.delete('/:post_id', postsController.deletePost)
router.put('/:post_id', postsController.updatePost)


/* Module Export */
module.exports = router