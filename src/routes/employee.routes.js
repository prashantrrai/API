const express = require('express');
const employeeRouter = express.Router();
const {createController, getController, getbyIdController, editController, deleteController} = require('../controllers/employee.controllers');
const {uploadMiddleware} = require("../middlewares/multer.middleware");

employeeRouter.post('/create', uploadMiddleware.single("Profile"), createController);
employeeRouter.get('/view', getController);
employeeRouter.get('/view/:id', getbyIdController);
employeeRouter.put('/edit/:id', editController);
employeeRouter.delete('/delete/:id', deleteController);

module.exports = employeeRouter;