const AuthenticationModel = require("../models/auth.models");


const registerController = async (req, res) => {
    try {

        const {Username, Password, employeeId} = req.body;



        if (!Username || !Password || !employeeId) {
            return res.status(400).json({ error: 'All Fields are required fields.' });
        }

        if (Password.length < 8) {
            return res.status(400).json({ error: 'Password must be 8 characters' });
          }
          

        const newEmployee = await AuthenticationModel.create({
            Username, 
            Password, 
            employeeId, 
        });

        return res.status(200).json({
            success: true,
            message: "Employee Registered Successfully",
            authData: newEmployee
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}

const getAuthController = async (req, res) => {
    try {
        const authdata = await AuthenticationModel.find();

        return res.status(200).json({
            success: true,
            message: "Auth Data fetched Successfully",
            auth: authdata
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}

const loginController = async (req, res) => {
    try {
        const authdata = await AuthenticationModel.find({ Username: req.body.Username });

        if(!authdata){
            return res.status(404).json({ error: 'No data found' });
        }
        
        if(authdata[0].Password != req.body.Password){
            return res.status(400).json({ error: 'Incorrect password'});
        }

        return res.status(200).json({
            success: true,
            message: "Employee Login Successfully"
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}

module.exports = {registerController, getAuthController, loginController};