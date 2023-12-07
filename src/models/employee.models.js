const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({

    FirstName : {
        type: String,
        required: true,
    },
    LastName : {
        type: String,
        required: true,
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
        max_length: 10
    },
    Gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female', 'Others'],
    },
    DOB : {
        type: String,
        required: true
    },
    Hobbies : {
        type : String,
        enum : ['Singing', 'Sports', 'Technology', 'Traveling', 'Others'],
        required: true
    },
    WorkLocation : {
        type: String,
        enum : ['WFO', 'WFH'],
        required: true
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