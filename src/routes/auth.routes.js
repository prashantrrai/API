const express = require('express');
const authRouter = express.Router();
const {registerController, getAuthController, loginController} = require('../controllers/auth.controllers');

authRouter.post('/register', registerController);
authRouter.get('/register/data', getAuthController);
authRouter.post('/login', loginController);

module.exports = authRouter;