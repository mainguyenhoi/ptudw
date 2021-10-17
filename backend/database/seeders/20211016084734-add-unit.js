module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('units', [{
    name: 'A1',
    branchId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'A2',
    branchId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'B1',
    branchId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'B2',
    branchId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'B3',
    branchId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'B4',
    branchId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  ]),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('units', null, {}),
};
