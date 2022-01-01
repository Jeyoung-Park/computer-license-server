const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  development: {
    username: process.env.USERNAME,
    password: process.env.SEQUELIZE_PASSWORD,
    database: "computerlicense",
    host: process.env.HOST,
    dialect: "mysql",
  },
  test: {
    username: process.env.USERNAME,
    password: process.env.SEQUELIZE_PASSWORD,
    database: "computerlicense",
    host: process.env.HOST,
    dialect: "mysql",
  },
  production: {
    username: process.env.USERNAME,
    password: process.env.SEQUELIZE_PASSWORD,
    database: "computerlicense",
    host: process.env.HOST,
    dialect: "mysql",
    logging: false,
  },
};
