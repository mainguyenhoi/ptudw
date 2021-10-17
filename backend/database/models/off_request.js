const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OffRequest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OffRequest.init({
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
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    reason: {
      type: DataTypes.STRING,
    },
    unitManagerResponse: DataTypes.STRING,
    unitManagerUpdatedAt: DataTypes.DATE,
    branchManagerResponse: DataTypes.STRING,
    branchManagerUpdatedAt: DataTypes.DATE,
    status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'off_request',
  });

  OffRequest.associate = function (models) {
    OffRequest.belongsTo(models.user, { foreignKey: 'userId', as: 'user' });
  };
  return OffRequest;
};
