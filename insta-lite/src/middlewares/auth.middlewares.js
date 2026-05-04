
const jwt = require("jsonwebtoken")
const userModal = require("../models/user.modal");
const authMiddleware = async (req, res,next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({
            message: "Unauthorized access, Please login first"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await userModal.findOne({
            _id: decoded.id
        })
        req.user = user
        next()
    } catch (error) {
        return res.status(401).json({
            message: "Invalid token, please login again"
        })
    }
}
module.exports = authMiddleware