const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({

    FirstName : {
        type: String,
        required: [true, 'First Name is required'],
        trim: true
    },
    LastName : {
        type: String,
        required: [true, 'Last Name is required'],
        trim: true
    },
    Email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true,
    },
    Phone: {
        type: String,
        required: [true, "Phone is required"],
        maxlength: [10, 'Phone number should not exceed 10 digits'],
        minlength: [10, 'Phone number should not be less than 10 digits'],
    },
    Gender: {
        type: String,
        required: [true, 'Gender is required'],
        enum: ['Male', 'Female', 'Others'],
    },
    DOB : {
        type: String,
        required: [true, 'DOB is required'],
    },
    Hobbies : {
        type : String,
        enum : ['Singing', 'Sports', 'Technology', 'Travelling', 'Others'],
        required: [true, 'Hobbies is required'],
    },
    WorkLocation : {
        type: String,
        enum : ['WFO', 'WFH'],
        required: [true, 'Work Location is required'],
    },
    Profile : {
        type: String,
        default: 'https://via.placeholder.com/200x200.png'
    }
},
    { timestamps: true }
)

const EmployeeModel = mongoose.model('EmployeeModel', EmployeeSchema);

module.exports = EmployeeModel;