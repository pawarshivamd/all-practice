const mongoose = require("mongoose");

const connectToDB = () => {
    mongoose.connect(`${process.env.MONGO_URL}/moody-player`)
        .then(() => {
            console.log("server is connected")
        })
        .catch((error) => {
            console.error("Error connecting to MongoDB", error)
        })
}

module.exports = connectToDB