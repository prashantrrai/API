const EmployeeModel = require("../models/employee.models");

const createController = async (req, res) => {
    try {
        
        const {FirstName, LastName, Email, Phone, Gender, DOB, Hobbies, WorkLocation} = req.body

        const existingEmployee = await EmployeeModel.findOne({ Email });

        if (existingEmployee) {
            return res.status(400).json({ error: 'Email already exists.' });
        }

        const newEmployee = await EmployeeModel.create({
            FirstName, 
            LastName, 
            Email, 
            Phone, 
            Gender, 
            DOB, 
            Hobbies, 
            WorkLocation
        });

        return res.status(201).json({
            success: true,
            message: "Employee added Successfully",
            data: newEmployee
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}

module.exports = {createController};