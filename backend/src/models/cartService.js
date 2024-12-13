const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const cartService = sequelize.define('cartService', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

module.exports = cartService;