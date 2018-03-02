/* Import env config */
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const DB_QUERY_STRING = process.env.DB
  || 'mongodb://localhost:27017/csmdatabase' 

  /* Import Locals */
const setupRoutes = require('./routes/setups')
const pagesRoutes = require('./routes/pages')
const postsRoutes = require('./routes/posts')
const authsRoutes = require('./routes/auths')
const app = express()

/*  This allows to skip the "Same origin policy" to access resources from remote hosts */
app.use(cors())
/*This allows to get data from a POST */
app.use(express.json())
app.use(morgan('tiny'))
app.set('port', process.env.PORT || 3000)

// Chequear si es mejor dejarla en el controlloer 
// mongoose.connect(DB_QUERY_STRING)

app.get('/', (req, res) => {
  res.send('SET UP API HOME PAGE 💩')
})

/* Use Routes as */ 

app.use('/api/v2/setups', setupRoutes)
app.use('/api/v2/pages', pagesRoutes)
app.use('/api/v2/posts', postsRoutes)
app.use('/api/v2/auths', authsRoutes)

/* Listen app at port */
app.listen(app.get('port'), err => {
  if (err) return console.log(`something bad happened 💩 ${err}`)
  console.log(`server listening on ${app.get('port')}`)
})



