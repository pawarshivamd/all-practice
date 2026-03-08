const express = require('express')
const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model')

const routes = express.Router()

routes.post('/register', async (req, res) => {

    const { username, password } = req.body

    const user = await userModel.create({
        username, password
    })
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
    res.cookie("token", token)
    res.status(201).json({
        message: "user register successfully",
        user
    })
})

routes.get('/login', async (req, res) => {
    const { username, password } = req.body

    const isUserAvailable = await userModel.findOne({
        username: username
    })

    if (!isUserAvailable) {
        return res.status(401).json({
            message: "user account not found"
        })
    }

    const isPasswordValid = password == isUserAvailable.password

    if (!isPasswordValid) {
        return res.status(401).json({
            message: "password is wrong"
        })
    }

    res.status(201).json({
        message: "user login successfully"
    })
})

routes.get('/user', async (req, res) => {
    const { token } = req.cookies

    if (!token) {
        return res.status(401).json({
            message: "unauthorized"
        })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const user = await userModel.findOne({
            _id: decoded.id
        }).select("-password -__v")

        res.status(200).json({
            message: "user data fetched successfully",
            user
        })
    } catch (err) {
        return res.status(404).json({
            message: "invalid token"
        })
    }

})

routes.get('/logout', async (req, res) => {
    res.clearCookie('token')
    res.status(200).json({
        message:"user logout successfully"
    })
})

module.exports = routes;