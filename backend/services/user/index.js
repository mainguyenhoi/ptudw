const User = require('@models').user;
const HttpStatusCode = require('@constants/HTTP');

module.exports = {
  getProfile: async (req, res, next) => {
    const { user } = req;
    try {
      return res.success({ user });
    } catch (error) {
      return res.error('Error', HttpStatusCode.HTTP_CODE_INTERNAL_SERVER_ERROR, error);
    }
  },
};
