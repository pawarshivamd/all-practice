
const express = require('express')
const SongRoute = require('../routes/song.routes')

const app = express()

app.use(express.json())


app.use('/', SongRoute)
module.exports = app