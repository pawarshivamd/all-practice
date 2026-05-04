const userModel = require("../models/user.modal")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const registerController = async (req, res) => {
    const { username, password } = req.body
    const hashedPassword = await bcrypt.hash(password,10)

    const existingUser = await userModel.findOne({
        username
    })
    if (existingUser) {
        return res.status(409).json({
            message: "username already exist"
        })
    }
    const user = await userModel.create({
        username, 
        password : hashedPassword
    })
    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET)
    res.cookie("token", token)

    res.status(201).json({
        message: "user register successfully",
        user
    })
}

const loginController = async (req, res) => {
    const { username, password } = req.body
    const isUserAvailable = await userModel.findOne({
        username: username
    })
    if (!isUserAvailable) {
        return res.status(401).json({
            message: "user account not found"
        })
    }

    // const isPasswordValid = password == isUserAvailable.password
    const isPasswordValid = await bcrypt.compare(
    password,
    isUserAvailable.password
)

    if (!isPasswordValid) {
        return res.status(401).json({
            message: "password is wrong"
        })
    }

    const token = jwt.sign({ id: isUserAvailable._id }, process.env.JWT_SECRET)
    res.cookie("token", token);

    res.status(201).json({
        message: "user login successfully",
        user: {
            username: isUserAvailable.username,
            id: isUserAvailable._id
        }
    })

}

module.exports = { registerController, loginController }