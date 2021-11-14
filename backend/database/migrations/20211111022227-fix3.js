module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('mission_form_fixs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      unitId: {
        type: Sequelize.INTEGER,
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
        type: Sequelize.DATE,
        allowNull: false,
      },
      endDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      note: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
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
    await queryInterface.dropTable('mission_form_fixs');
  },
};
