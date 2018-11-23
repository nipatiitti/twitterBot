import api from './routes'
import CONFIG from './config'

import express from 'express'
import path from 'path'
import morgan from 'morgan'
import bodyParser from 'body-parser'

const app = express()
const PORT = CONFIG.port

app.use(morgan('tiny'))

// Priority serve static files.
app.use(express.static(path.join(__dirname, '../build')))

// Middlewares
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({ extended: true }))

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

// Use sub routes for routing
app.use('/api', api)

// For everything else return React so react can do extra routing
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../build', 'index.html'))
})

app.listen(PORT, () => {
  console.log("-----------starting-----------")
  console.log(`Listening on port ${PORT}`)
});
