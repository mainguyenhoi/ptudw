const Unit = require('@models').unit;
const User = require('@models').user;
const HttpStatusCode = require('@constants/HTTP');

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const units = await Unit.findAll({
        include: [
          {
            model: User,
            as: 'users',
          },
        ],
      });
      return res.success({ units });
    } catch (error) {
      return res.error('Error', HttpStatusCode.HTTP_CODE_INTERNAL_SERVER_ERROR, error);
    }
  },
  getUserByUnitId: async (req, res, next) => {
    const { id } = req.params;
    try {
      const unit = await Unit.findOne({
        where: {
          id,
        },
        include: [
          {
            attributes: { exclude: ['password'] },
            model: User,
            as: 'users',
          },
        ],
      });
      return res.success({ unit });
    } catch (error) {
      return res.error('Error', HttpStatusCode.HTTP_CODE_INTERNAL_SERVER_ERROR, error);
    }
  },
};
