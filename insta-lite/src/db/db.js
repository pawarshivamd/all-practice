const mongoose = require('mongoose')

const connectToDb = () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log("connect to db")
        })
        .catch((error) => {
            console.log(`connection error ${error}`)
        })
}
module.exports = connectToDb