require('module-alias/register');

module.exports = {
  development: {
    dialect: 'sqlite',
    storage: './db/database.sqlite3',
  },
  test: {
    dialect: 'sqlite',
    storage: ':memory',
  },
  production: {
    dialect: 'sqlite',
    storage: './db/database.sqlite3',
  },
};
