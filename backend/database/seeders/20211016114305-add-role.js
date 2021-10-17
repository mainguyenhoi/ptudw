module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('roles', [{
    name: 'user',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'admin',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'branch_1',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'branch_2',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'unit_1',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'unit_2',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'unit_3',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'unit_4',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'unit_5',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'unit_6',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  ]),
  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('roles', null, {}),

};
