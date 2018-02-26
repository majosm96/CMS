const mongoose = require('mongoose')

/** Import the Module */
const SetUp = require('../models/SetUp')

/**
 * Gets all the pages
 * @func
 */
function getAll(req, res) {
  SetUp.find()
    .exec((err, users) => {
      if (err) {
        res.status(500)
        res.send(`Ocurrió un error 💩 ${err}`)
      }
      res.status(200)
      res.json(users)
    })
}

/**
 * Adds new user with the body response and creates DB 
 * @func
 * @return {error} 
 */

function addUser(request, response) {
  /** Create data base and connected with mongo  */
  let db_string = `mongodb://localhost:27017/${request.body.database}`;
  mongoose.connect(db_string);

  /** New user object  / Create instance of Model  */
  let user = new SetUp();
  /** Sets data to the new instance */
  user.username = request.body.name;
  user.password = request.body.password;
  /**Saves the new user and checks for errors */
  user.save(function (error) {
    /** Checks if an error happened*/
    if (error) {
        /** An error happened. It sends the error */
        response.send(`An error occurred: ${error}`)
    }
    response.json(user)
  });
}

/** Module Export */
module.exports = {
  getAll,
  addUser,
}

