const mongoose = require('mongoose')

const pageSchema = mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  text: { type: String, required: true },
  // database: { type: String, required: true },
  // created: { type: Date, default: Date.now }
})

const Page = mongoose.model("Page", pageSchema)
module.exports = Page
