const EmployeeModel = require("../models/employee.models");
const mongoose = require('mongoose');


//Create Controller
const createController = async (req, res) => {
    try {
        
        const {FirstName, LastName, Email, Phone, Gender, DOB, Hobbies, WorkLocation} = req.body;

        if (!FirstName || !LastName || !Email || !Phone || !Gender || !DOB || !Hobbies || !WorkLocation) {
            return res.status(400).json({ error: 'All Fields are required fields.' });
          }

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




//View Controller
const getController = async (req, res) => {
    try {
        const employeedata = await EmployeeModel.find();

        res.status(200).json({
            success: true,
            message: "Employee Get Successfully",
            data: employeedata 
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}


//View Controller using Id
const getbyIdController = async (req, res) => {
    try {
        const employeeId = req.params.id;
        // console.log(employeeId)

        if (!mongoose.Types.ObjectId.isValid(employeeId)) {
            return res.status(400).json({ error: 'Invalid employee ID' });
        }

        const employee = await EmployeeModel.findById(employeeId);
        // console.log(employee)
        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }

        res.status(200).json({
            success: true,
            message: "Employee Get Successfully",
            data: employee 
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}

//Edit Controller
const editController = async (req, res) => {
    try {
        const {Email} = req.params
        const employeedata = await EmployeeModel.find({ Email });
        console.log(employeedata)

        res.status(200).json({
            success: true,
            message: "Employee Updated Successfully",
            data: employeedata 
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}

module.exports = {createController, getController, getbyIdController, editController};