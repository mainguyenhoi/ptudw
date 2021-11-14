const constant = require('@constants/HTTP');

class HttpError extends Error {
  constructor({
    message, privateMessage, name, httpStatus, errorCode, errorKey,
  }) {
    super(message);
    this.message = privateMessage || message;
    this.httpStatus = httpStatus || constant.HTTP_CODE_INTERNAL_SERVER_ERROR;
    this.name = name || HttpError.NAMES_ENUM.INTERNAL_SERVER;
    this.errorCode = (errorCode || errorCode === 0) ? errorCode : null;
    this.errorKey = errorKey || null;
  }

  toString() {
    return `[${this.name}] - [${this.httpStatus}] [${this.message}]`;
  }
}

HttpError.NAMES_ENUM = {
  INTERNAL_SERVER: 'InternalServerError',
  BAD_REQUEST: 'BadRequestError',
  MISSING_REQUIRE_FIELD: 'ValidationError',
  AUTHORIZE_FAIL: 'AuthorizeError',
  FORBIDDEN: 'ForbiddenError',
  CONFLICT: 'ConflictError',
  REQUEST_FAIL: 'RequestError',
  NOT_FOUND: 'NotFoundError',
};

module.exports = HttpError;
