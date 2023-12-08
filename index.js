const express = require('express');
const path = require('path');
require('dotenv').config();
require('./src/db/db.connection')

const app = express();
const PORT = process.env.PORT || 4040;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Imp part for getting the file path else will see binary format
const profilepath = path.join(__dirname, 'public', 'uploads');
app.use(express.static(profilepath));


const employeeRouter = require("./src/routes/employee.routes");
const authRouter = require("./src/routes/auth.routes");


app.use("/api/v1/employees", employeeRouter);
app.use("/api/v1/auth", authRouter);


//Express App
app.get('/', async (req, res) => {
    res.status(200).json({
        success: true,
        message: "Hello World"
    });
})

app.listen(PORT, () => {
    console.log(`Successfully Running on http://localhost:${PORT}`)
})