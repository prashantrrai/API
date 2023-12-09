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
        minlength: [8, 'Password must be 8 characters'],
    },
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: EmployeeModel,
        trim: true,
        unique: true
    },
},
    { timestamps: true }
)

const AuthenticationModel = mongoose.model('AuthenticationModel', AuthenticationSchema);

module.exports = AuthenticationModel;