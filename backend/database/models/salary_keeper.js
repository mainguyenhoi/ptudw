const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SalaryKeeper extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SalaryKeeper.init({
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
    dateTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    overTime: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  }, {
    sequelize,
    modelName: 'salary_keeper',
  });

  SalaryKeeper.associate = function (models) {
    SalaryKeeper.hasMany(models.working_date, { foreignKey: 'salaryKeeperId', as: 'workingDays' });
    SalaryKeeper.belongsTo(models.user, { foreignKey: 'userId', as: 'user' });
  };
  return SalaryKeeper;
};
