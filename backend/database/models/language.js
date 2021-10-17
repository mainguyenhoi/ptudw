const {
  Model,
} = require('sequelize');
const User = require('.').user;

module.exports = (sequelize, DataTypes) => {
  class Language extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Language.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'language',
  });

  Language.associate = function (models) {
    Language.belongsToMany(models.user, {
      through: 'user_languages',
      as: 'users',
      foreignKey: 'languageId',
    });
  };

  return Language;
};
