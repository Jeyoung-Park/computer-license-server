const Sequelize = require("sequelize");
const Description = require("./description");

const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
db.sequelize = sequelize;

db.Description = Description;
Description.init(sequelize);

Description.associate(db);

module.exports = db;
