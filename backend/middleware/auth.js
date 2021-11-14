const HttpError = require('@helpers/httpError');
const jwtHepler = require('@helpers/jwt');
const constant = require('@constants/HTTP');
const User = require('@models').user;
const Role = require('@models').role;

module.exports = {
  authorize: (roles = []) => {
    if (typeof roles === 'string') {
      roles = [roles];
    }

    return async (req, res, next) => {
      try {
        
        let token = req.get('Authorization');
        if (!token) {
          throw new HttpError({
            message: constant.MISSING_REQUIRED_HEADERS,
            privateMessage: 'validate Login Failed. Missing required header(s).',
            name: HttpError.NAMES_ENUM.MISSING_REQUIRE_FIELD,
            httpStatus: constant.HTTP_CODE_BAD_REQUEST,
          });
        }

        token = (token.replace('Bearer', '')).trim();

        const decoded = jwtHepler.verifyToken(token);

        if (!decoded || !decoded.userName) {
          throw new HttpError({
            message: constant.LOGIN_FAILED,
            privateMessage: 'ADMIN validateLogin Failed. Decoded Failed',
            name: HttpError.NAMES_ENUM.AUTHORIZE_FAIL,
            httpStatus: constant.HTTP_CODE_UNAUTHORIZED,
          });
        }

        const account = await User.findOne({
          params: { userName: decoded.userName },
          attributes: { exclude: ['password'] },
          include: [{
            model: Role,
            as: 'role',
            attributes: { exclude: ['createdAt', 'updatedAt'] },

          }],
        });
        if (!account) {
          throw new HttpError({
            message: constant.LOGIN_FAILED,
            privateMessage: 'ADMIN validate Login Failed. Email or Token are invalid',
            name: HttpError.NAMES_ENUM.AUTHORIZE_FAIL,
            httpStatus: constant.HTTP_CODE_UNAUTHORIZED,
          });
        }

        if (roles.length && !roles.includes(account.role.name)) {
          return res.status(401).json({ message: 'Unauthorized' });
        }

        req.user = { ...account.dataValues, isTokenExpired: decoded.isTokenExpired || false };
      } catch (error) {
        next(error);
      }
      return next();
    };
  },

};
