const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
    process.env.DB_DATABASE_DEV,
    process.env.DB_USERNAME_DEV,
    process.env.DB_PASSWORD_DEV,
    {
        dialect: process.env.DB_DIALECT_DEV,
        host: process.env.DB_HOST_DEV,
        port: process.env.DB_CONNECTION_PORT_DEV || 5432,
    },
);