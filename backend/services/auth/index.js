const jwtHelper = require('@helpers/jwt');
const User = require('@models').user;
const HttpStatusCode = require('@constants/HTTP');

module.exports = {
  login: async (req, res, next) => {
    const { userName, password } = req.body;
    if (!userName || !password) {
      return res.error({ data: null, error: 'invalid payload' });
    }

    try {
      const user = await User.findOne({ where: { userName } });

      if (!user) {
        return res.error('User not found', HttpStatusCode.HTTP_CODE_NOT_FOUND);
      }

      if (user.comparePassword(password)) {
        return res.success({ token: jwtHelper.generateToken(user) });
      }
      return res.error('invalid password', HttpStatusCode.HTTP_CODE_FORBIDDEN);
    } catch (error) {
      return res.error('Error', HttpStatusCode.HTTP_CODE_INTERNAL_SERVER_ERROR, error);
    }
  },

};
