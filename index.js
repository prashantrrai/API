const express = require('express');
require('dotenv').config();
require('./src/db/db.connection')

const app = express();
const PORT = process.env.PORT || 4040;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static("public"));


const authRouter = require("./src/routes/auth.routes");
const employeeRouter = require("./src/routes/employee.routes");


app.use("/api/v1/auth", authRouter);
app.use("/api/v1/employees", employeeRouter);


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