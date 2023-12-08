const mongoose = require('mongoose');
const EmployeeModel = require('./employee.models');

const AuthenticationSchema =  new mongoose.Schema({
    Username: {
        type: String,
        required: [true, 'Username is Required'],
        lowercase: true,
        trim: true,
        unique: true
    },
    Password: {
        type: String,
        required: [true, 'Password is Required'],
        min_length: 8
    },
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: EmployeeModel,
    },
},
    { timestamps: true }
)

const AuthenticationModel = mongoose.model('AuthenticationModel', AuthenticationSchema);

module.exports = AuthenticationModel;