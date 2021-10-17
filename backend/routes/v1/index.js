const { Router } = require('express');
const userCtr = require('@services/user');

const apiV1Router = Router();

apiV1Router.get('/user/me', userCtr.getProfile);

module.exports = apiV1Router;
