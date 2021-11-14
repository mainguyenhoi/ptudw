'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('dateoffs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      DayOff_Start: {
        type: Sequelize.DATE
      },
      DayOff_Num: {
        type: Sequelize.INTEGER
      },
      UnitManager_Opinion: {
        type: Sequelize.STRING
      },
      UnitManager_Opinion_Day: {
        type: Sequelize.DATE
      },
      BranchManager_Opinion: {
        type: Sequelize.STRING
      },
      BranchManager_Opinion_Day: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('dateoffs');
  }
};