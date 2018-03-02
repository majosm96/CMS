const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')


/** Import the Module */
const User = require('../models/SetUp')

/**
 * Adds new user with the body response and creates DB 
 * @func
 * @return {error} 
 */

function authUser(req, res) {
  // find the user
  User.findOne(
    {
      username: req.body.name,
    },
    function(err, user) {
      if (err) throw err

      if (!user) {
        res.json({
          success: false,
          message: 'Authentication failed. User not found.'
        })
      } else if (user) {
        // check if password matches
        if (user.password != req.body.password) {
          res.json({
            success: false,
            message: 'Authentication failed. Wrong password.'
          })
        } else {
          // if user is found and password is right
          // create a token with only our given payload
          // we don't want to pass in the entire user since that has the password
          const payload = {
            name: user.username,
          }

          const token = jwt.sign(payload, 'mysupersecret', {
            expiresIn: '24h'
          })

          // return the information including token as JSON
          res.json({
            success: true,
            message: 'Enjoy your token!',
            token: token
          })
        }
      }
    }
  )
}

/** Module Export */
module.exports = {
  authUser,
}

