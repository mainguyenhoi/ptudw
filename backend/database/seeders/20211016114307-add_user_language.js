const { getRandomInt } = require('../../helpers/generator');

const generateUserLanguage = () => {
  const data = [];

  for (let i = 1; i <= 150; i++) {
    const idLanguage = getRandomInt(1, 5);
    data.push({
      languageId: idLanguage,
      userId: i,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  return data;
};

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('user_languages', generateUserLanguage()),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('user_languages', null, {}),
};
