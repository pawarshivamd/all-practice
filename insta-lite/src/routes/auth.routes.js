const express = require("express")
const userModel = require("../models/user.modal")
const { registerController, loginController } = require("../controller/auth.controller")

const route = express.Router()

route.post("/register", registerController)
route.post("/login", loginController)

module.exports = route