module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('off_requests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
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
        type: Sequelize.DATE,
        allowNull: false,
      },
      endDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      reason: {
        type: Sequelize.STRING,
      },
      unitManagerResponse: {
        type: Sequelize.STRING,
      },
      unitManagerUpdatedAt: {
        type: Sequelize.DATE,
      },
      branchManagerResponse: {
        type: Sequelize.STRING,
      },
      branchManagerUpdatedAt: {
        type: Sequelize.DATE,
      },
      status: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('off_requests');
  },
};