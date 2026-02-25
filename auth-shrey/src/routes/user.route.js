const express = require('express')
const userModel = require('../models/user.model')

const routes = express.Router()

routes.post('/register', async (req, res) => {

    const { username, password } = req.body

    const user = await userModel.create({
        username, password
    })

    res.status(201).json({
        message: "user register successfully",
        user
    })
})

routes.get('/login', async (req, res) => {
    const { username, password } = req.body

    const isUserAvailable = await userModel.findOne({
        username : username
    })

    if(!isUserAvailable) {
        return res.status(401).json({
            message:"user account not found"
        })
    }

    const isPasswordValid  = password == isUserAvailable.password

    if(!isPasswordValid){
        return res.status(401).json({
            message:"password is wrong"
        })
    }

    res.status(201).json({
        message:"user login successfully"
    })
})

module.exports = routes;