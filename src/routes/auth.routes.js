const express = require('express');
const authRouter = express.Router();
const {loginController} = require('../controllers/auth.controllers');

authRouter.get('/login', loginController);

module.exports = authRouter;