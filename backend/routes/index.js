const { Router } = require('express');
const middlewareResponse = require('@middleware/response');
const authMiddleWare = require('@middleware/auth');
const authV1Ctr = require('@services/auth');

const apiV1 = require('./v1');

module.exports = (app) => {
  middlewareResponse(app);
  const appRoutes = Router();

  appRoutes.get('/health-check', (req, res, next) => res.status(200).json({ status: true }));

  app.use('/', appRoutes);
  app.use('/api/v1/auth', authV1Ctr.login);
  app.use('/api/v1', authMiddleWare.validateLogin, apiV1);
};
