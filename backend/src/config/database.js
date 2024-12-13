require('dotenv').config();
const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
  process.env.DB_DATABASE_DEV,
  process.env.DB_USERNAME_DEV,
  process.env.DB_PASSWORD_DEV,
  {
    dialect: process.env.DB_DIALECT_DEV,
    host: process.env.DB_HOST_DEV,
    port: process.env.DB_CONNECTION_PORT_DEV || 5432,
  }
)

// module.exports = {
//   production: {
//     username: process.env.DB_USERNAME_DEV,
//     password: process.env.DB_PASSWORD_DEV,
//     database: process.env.DB_DATABASE_DEV,
//     host: process.env.DB_HOST_DEV,
//     dialect: process.env.DB_DIALECT_DEV,
//   }
// }

// {
//   "development": {
//     "username": "root",
//     "password": null,
//     "database": "database_development",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   }
// }
