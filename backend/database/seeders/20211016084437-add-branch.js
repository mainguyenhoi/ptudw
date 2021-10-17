module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('branches', [{
    name: 'A',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'B',
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  ]),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('branches', null, {}),
};
