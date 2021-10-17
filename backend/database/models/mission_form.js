const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class MissionForm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MissionForm.init({
    unitId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          table: 'units',
          as: 'unit',
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
    note: DataTypes.STRING,
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'mission_form',
  });
  MissionForm.associate = function (models) {
    MissionForm.hasMany(models.mission_form_staff, { foreignKey: 'missionFormId', as: 'missonFormStaffs' });
    MissionForm.belongsTo(models.unit, { foreignKey: 'unitId', as: 'unit' });
  };
  return MissionForm;
};
