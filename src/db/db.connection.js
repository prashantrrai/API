const mongoose = require('mongoose');

require('dotenv').config();

const MONGO_URL = process.env.MONGODB_URI;

mongoose.connect(MONGO_URL).then(() => {
    console.log(`Database Connected`)
}).catch((error) => {
    console.log(`Error: ${error}`)
})