require("dotenv").config()
const app = require("./src/app/app")
const connectToDB = require("./src/db/db")
connectToDB()


app.listen(process.env.PORT, () => {
    console.log(`server running on the ${process.env.PORT}`)
})