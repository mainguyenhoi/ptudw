const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class WorkingDate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WorkingDate.init({
    salaryKeeperId: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'salary_keepers',
          as: 'salary_keeper',
        },
        key: 'id',
      },
      allowNull: false,
    },

    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    value: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  }, {
    sequelize,
    modelName: 'working_date',
  });

  return WorkingDate;
};
