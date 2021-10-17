const winston = require('@helpers/winston');
const { HTTP_CODE_SUCCESS, HTTP_CODE_INTERNAL_SERVER_ERROR } = require('@constants/HTTP');
const ENV = require('@configs/environment');

module.exports = (app) => {
  app.use((req, res, next) => {
    res.success = (data = null, message = 'Request successful', code = HTTP_CODE_SUCCESS) => {
      // convert data if it isnt object
      if (typeof data !== 'object') {
        data = { data };
      }
      if (Array.isArray(data)) {
        data = { data };
      }
      // only send message with get method when allow

      if (ENV.WINSTON) {
        winston.loggers.get('app').info(
          `Service: backend - Host: ${req.hostname} - API: ${req.path} - Params: ${JSON.stringify(req.params)} - Body: ${JSON.stringify(req.body)} - Message: ${message}`,
        );
      }
      const json = { status: true, message, ...data };
      if (req.adminAccount && req.adminAccount.isTokenExpired !== undefined) {
        json.isTokenExpired = req.adminAccount.isTokenExpired;
      }
      return res.status(code).json(json);
    };
    res.error = (message = 'Request fail', code = HTTP_CODE_INTERNAL_SERVER_ERROR, internalMessage) => {
      if (ENV.WINSTON) {
        winston.loggers.get('app').error(
          `ERROR - Service: backend - Host: ${req.hostname} - API: ${req.path} - Params: ${JSON.stringify(req.params)} - Body: ${JSON.stringify(req.body)} - Message: ${JSON.stringify(message)} - InternalMessage: ${JSON.stringify(internalMessage)}`,
        );
      }
      return res.status(code).json({ status: false, message });
    };
    next();
  });
};
