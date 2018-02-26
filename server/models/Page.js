const mongoose = require('mongoose')

/* Schema of the data  */
const pageSchema = mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  text: { type: String, required: true },
})

/* Create de Model with Mongoose */
const Page = mongoose.model('page', pageSchema)
/* Export the Module */
module.exports = Page

