const AuthenticationModel = require("../models/auth.models");


const loginController = async (req, res) => {

    try {
        console.log(req.body);

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}

module.exports = {loginController};