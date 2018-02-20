const mongoose = require('mongoose')

const setupSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  // database: { type: String, required: true },
  // created: { type: Date, default: Date.now }
})

const SetUp = mongoose.model("SetUp", setupSchema)
module.exports = SetUp
