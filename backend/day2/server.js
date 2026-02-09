const express = require('express')

const app = express()

app.get('/home', (req, res) => {
    res.end('welcome to home')
})

app.get('/about', (req, res) => {
    res.end('welcome to about')
})

app.listen(3000, () => {
    console.log('server is running on port 3000')
})