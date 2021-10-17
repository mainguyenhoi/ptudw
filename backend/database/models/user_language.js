const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserLanguage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserLanguage.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'users',
          as: 'user',
        },
        key: 'id',
      },
    },
    languageId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'languages',
          as: 'language',
        },
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'user_language',
  });

  UserLanguage.associate = function (models) {
    UserLanguage.belongsTo(models.user, { foreignKey: 'roleId', as: 'user' });
    UserLanguage.belongsTo(models.language, { foreignKey: 'languageId', as: 'language' });
  };
  return UserLanguage;
};
