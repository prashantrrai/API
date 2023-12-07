const express = require('express');
const employeeRouter = express.Router();
const {createController, getController, getbyIdController, editController, deleteController} = require('../controllers/employee.controllers');

employeeRouter.post('/create', createController);
employeeRouter.get('/view', getController);
employeeRouter.get('/view/:id', getbyIdController);
employeeRouter.put('/edit/:id', editController);
employeeRouter.delete('/delete/:id', deleteController);

module.exports = employeeRouter;