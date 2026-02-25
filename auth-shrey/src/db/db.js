const mongoose = require('mongoose')

const connectToDB = () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log("connected to db")
        })
        .catch((error) => {
            console.error(`connection error is ${error}`)
        })
}
module.exports = connectToDB