const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const logger = require('morgan')

//connect database

app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
var cors = require('cors')

app.use('/test', cors(), (req, res) => {
    res.status(200).json({ server: "server" })
})
module.exports = app