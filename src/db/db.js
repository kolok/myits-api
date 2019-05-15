const Sequelize = require("sequelize");
const sequelizeConfig = require('../db/config/sequelize')
console.log(sequelizeConfig);

const sequelize = new Sequelize(sequelizeConfig[process.env.NODE_ENV])

module.exports = {
  sequelize,
  Sequelize
};
