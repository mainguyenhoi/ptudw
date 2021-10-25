const { Router } = require('express');
const userCtr = require('@services/user');
const authMiddleWare = require('@middleware/auth');

const apiV1Router = Router();

apiV1Router.get('/users/me', authMiddleWare.authorize(), userCtr.getProfile);

module.exports = apiV1Router;
