const express = require('express');
const employeeRouter = express.Router();
const {createController} = require('../controllers/employee.controllers');

employeeRouter.post('/create', createController);
// employeeRouter.get('/view', getController);
// employeeRouter.put('/update', editController);
// employeeRouter.delete('/delete', deleteController);

module.exports = employeeRouter;