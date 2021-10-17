const winston = require('@helpers/winston');
const HttpError = require('@helpers/httpError');
const constant = require('@constants/HTTP');
const ENV = require('@configs/environment');

module.exports = async (error, req, res, next) => {
  let clientMessage;
  let httpStatusCode;
  let errorCode;
  let errorKey;

  if (error instanceof HttpError) {
    clientMessage = error.message;
    httpStatusCode = error.httpStatus;
    errorCode = error.errorCode;
    errorKey = error.errorKey;
  } else {
    clientMessage = process.env.NODE_ENV === 'production'
      ? constant.MESSAGE_INTERNAL_SERVER_CLIENT
      : error.message;

    httpStatusCode = process.env.NODE_ENV === 'production'
      ? constant.HTTP_CODE_INTERNAL_SERVER_ERROR
      : constant.HTTP_CODE_BAD_REQUEST;
    errorCode = (error.errorCode) ? error.errorCode : null;
    errorKey = (error.errorKey) ? error.errorKey : null;
  }

  if (ENV.WINSTON) {
    const params = {
      query: req.query,
      params: req.params,
    };
    winston.loggers.get('app').error(
      `Service: CMS - Host: ${req.hostname} - API: ${req.path} - Params: ${JSON.stringify(params)} - Body: ${JSON.stringify(req.body)}`,
    );
  }

  return res.status(httpStatusCode).json({
    status: false,
    message: clientMessage,
    errorCode,
    errorKey,
  });
};
