require('dotenv').config()
const app = require('./src/app')
const connectToDb = require('./src/db/db')

connectToDb()

app.listen(process.env.port, () => {
    console.log(`app is running on the ${process.env.port} port`)
})