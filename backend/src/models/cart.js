const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Users = require('./associations');

const Cart = sequelize.define('Cart', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  userId: { // FK Users
    type: DataTypes.INTEGER,
    references: {
      model: Users,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
});

module.exports = Cart;