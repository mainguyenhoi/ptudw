const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Unit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Unit.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    branchId: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'branchs',
          as: 'branch',
        },
        key: 'id',
      },
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'unit',
  });
  Unit.associate = function (models) {
    Unit.belongsTo(models.branch, { foreignKey: 'branchId', as: 'branch' });
    Unit.hasMany(models.user, { foreignKey: 'unitId', as: 'users' });
  };
  return Unit;
};
