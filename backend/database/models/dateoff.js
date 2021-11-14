'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dateoff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  dateoff.init({
    DayOff_Start: DataTypes.DATE,
    DayOff_Num: DataTypes.INTEGER,
    UnitManager_Opinion: DataTypes.STRING,
    UnitManager_Opinion_Day: DataTypes.DATE,
    BranchManager_Opinion: DataTypes.STRING,
    BranchManager_Opinion_Day: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'dateoff',
  });
  dateoff.associate = function (models) {
    dateoff.belongsTo(models.user, {
      foreignKey: 'UserId', as: 'users'});
  };
  return dateoff;
};