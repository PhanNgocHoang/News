const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const logger = require('morgan') 

//connect database

app.use(logger('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/', (req, res)=>{
    res.send('server')
})
module.exports = app