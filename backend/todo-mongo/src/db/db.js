const mongoose = require('mongoose')

const connectToDB = () => {
    mongoose.connect(`${process.env.MONGO_URL}/cohort`)
        .then(() => {
            console.log("connected to db")
        })
}

module.exports = connectToDB
