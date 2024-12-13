const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cart = sequelize.define('Cart', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

module.exports = Cart;