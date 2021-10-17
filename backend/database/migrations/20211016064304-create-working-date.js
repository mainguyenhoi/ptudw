module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('working_dates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      salaryKeeperId: {
        type: Sequelize.INTEGER,
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
        type: Sequelize.DATE,
        allowNull: false,
      },
      value: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('working_dates');
  },
};
