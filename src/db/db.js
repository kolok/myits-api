const Sequelize = require("sequelize");
const sequelizeConfig = require('../db/config/sequelize')

const sequelize = new Sequelize(sequelizeConfig["development"])

module.exports = {
  sequelize,
  Sequelize
};
