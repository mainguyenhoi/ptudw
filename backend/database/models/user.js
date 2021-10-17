const {
  Model,
} = require('sequelize');

const ENV = require('@configs/environment');
const bcryptjs = require('bcryptjs');

const salt = bcryptjs.genSaltSync(ENV.bcrypt.salt);
const generatePassword = (password) => bcryptjs.hashSync(password, salt);

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avatar: DataTypes.STRING,
    dateOfBirdth: DataTypes.DATE,
    email: DataTypes.STRING,
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    unitId: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'units',
          as: 'unit',
        },
        key: 'id',
      },
    },
    roleId: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'roles',
          as: 'role',
        },
        key: 'id',
      },
      allowNull: false,
    },
    salary: DataTypes.NUMBER,
    idCard: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'user',
  });
  User.associate = function (models) {
    User.belongsTo(models.role, { foreignKey: 'roleId', as: 'role' });
    User.belongsTo(models.unit, { foreignKey: 'unitId', as: 'unit' });
  };

  User.prototype.comparePassword = function (password) {
    return bcryptjs.compareSync(password, this.password);
  };

  User.addHook('beforeCreate', (user) => {
    user.password = generatePassword(user.password);
  });
  return User;
};
