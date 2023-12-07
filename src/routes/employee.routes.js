const express = require('express');
const employeeRouter = express.Router();
const {createController, getController, getbyIdController, editController} = require('../controllers/employee.controllers');

employeeRouter.post('/create', createController);
employeeRouter.get('/view', getController);
employeeRouter.get('/view/:id', getbyIdController);
employeeRouter.put('/edit', editController);
// employeeRouter.delete('/delete', deleteController);

module.exports = employeeRouter;