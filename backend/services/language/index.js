const Language = require('@models').language;
const User = require('@models').user;
const HttpStatusCode = require('@constants/HTTP');

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const languages = await Language.findAll({
        include: [
          {
            model: User,
            as: 'users',
          },
        ],
      });
      return res.success({ languages });
    } catch (error) {
      return res.error('Error', HttpStatusCode.HTTP_CODE_INTERNAL_SERVER_ERROR, error);
    }
  },
  getUserByLanguageId: async (req, res, next) => {
    const { id } = req.params;
    try {
      const language = await Language.findOne({
        where: {
          id,
        },
        include: [
          {
            model: User,
            as: 'users',
          },
        ],
      });
      return res.success({ language });
    } catch (error) {
      console.log(error);
      return res.error('Error', HttpStatusCode.HTTP_CODE_INTERNAL_SERVER_ERROR, error);
    }
  },
};
