const mongoose = require('mongoose');

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
    }
},
    { timestamps: true }
)

const AuthenticationModel = mongoose.model('AuthenticationModel', AuthenticationSchema);

module.exports = AuthenticationModel;