const mongoose = require('mongoose')

const pageSchema = mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  text: { type: String, required: true },
})

const Page = mongoose.model('page', pageSchema)
module.exports = Page

