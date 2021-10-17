const bcrypt = require('bcryptjs');
const { getRandomInt, getRandomName } = require('../../helpers/generator');
const ENV = require('../../configs/environment');

const salt = bcrypt.genSaltSync(ENV.bcrypt.salt);
const generatePassword = (password) => bcrypt.hashSync(password, salt);

const geneateUser = () => {
  const users = [];
  let uniqueId = 1;
  [1, 2, 3, 4, 5, 6].map((unit) => {
    for (let i = 0; i < 25; i++) {
      users.push({
        name: getRandomName(10, 20),
        unitId: unit,
        phoneNumber: `0${getRandomInt(911111111, 999999999)}`,
        userName: `user${uniqueId}`,
        address: getRandomName(10, 20),
        salary: getRandomInt(7000000, 40000000),
        password: generatePassword('123456'),
        idCard: Date.now() + getRandomInt(1, 10000),
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      uniqueId++;
    }
  });
  return users;
};

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('users', geneateUser()),
  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('users', null, {}),
};
