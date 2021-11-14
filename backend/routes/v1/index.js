const { Router } = require('express');
const userCtr = require('@services/user');
const authMiddleWare = require('@middleware/auth');

const dateOff = require('./DateOff');
const WorkForm = require('./WorkForm');
const dateOffLs = require('./dateOffLs');
const apiV1Router = Router();

apiV1Router.get('/users/me', authMiddleWare.authorize(), userCtr.getProfile);
apiV1Router.use('/dateoff', authMiddleWare.authorize(), dateOff);
apiV1Router.use('/POST_WORKING_FORM', authMiddleWare.authorize(), WorkForm);
apiV1Router.use('/FETCH_DATE_OFF_LIST', authMiddleWare.authorize(), dateOffLs)

module.exports = apiV1Router;
