const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Branch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Branch.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'branch',
  });

  Branch.associate = function (models) {
    Branch.hasMany(models.unit, { foreignKey: 'branchId', as: 'branchs' });
  };
  return Branch;
};
