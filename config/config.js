const dotenv = require("dotenv");
dotenv.config();

export const USERNAME = process.env._USERNAME;
export const SEQUELIZE_PASSWORD = process.env._SEQUELIZE_PASSWORD;
export const HOST = process.env._HOST;
export const COOKIE_SECRET = process.env._COOKIE_SECRET;

module.exports = {
  development: {
    username: USERNAME,
    password: SEQUELIZE_PASSWORD,
    database: "computerlicense",
    host: HOST,
    dialect: "mysql",
  },
  test: {
    username: USERNAME,
    password: SEQUELIZE_PASSWORD,
    database: "computerlicense",
    host: HOST,
    dialect: "mysql",
  },
  production: {
    username: USERNAME,
    password: SEQUELIZE_PASSWORD,
    database: "computerlicense",
    host: HOST,
    dialect: "mysql",
    logging: false,
  },
};
