'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('mission_forms', 'missionFormId',{
      references: {
        model:{
          table: 'mission_form_staffs',
          as: 'mission_form_staff',
        },
        key:'id',
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
