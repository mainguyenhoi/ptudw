const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class MissionFormStaff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MissionFormStaff.init({
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
    missionFormId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'mission_forms',
          as: 'mission_form',
        },
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'mission_form_staff',
  });

  MissionFormStaff.associate = function (models) {
    MissionFormStaff.belongsTo(models.mission_form, { foreignKey: 'missionFormId', as: 'missonForm' });
    MissionFormStaff.belongsTo(models.user, { foreignKey: 'userId', as: 'user' });
  };
  return MissionFormStaff;
};
