const mongoose = require('mongoose')

/* Schema of the data  */
const setupSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
})


/* Create de Model with Mongoose */
const SetUp = mongoose.model('setup', setupSchema)
/* Export the Module */
module.exports = SetUp
