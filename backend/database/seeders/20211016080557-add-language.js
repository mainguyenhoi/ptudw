module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('languages', [{
    name: 'English',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'France',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Nga',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Germany',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Brasil',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  ]),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('languages', null, {}),
};
