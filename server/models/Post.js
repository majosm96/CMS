const mongoose = require('mongoose')

/* Schema of the data  */
const postSchema = mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
  })
  
  /* Create de Model with Mongoose */
  const Post = mongoose.model('post', postSchema)
  /* Export the Module */
  module.exports = Post
  