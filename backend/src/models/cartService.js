const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const {Cart, Services} = require('./associations');

const CartService = sequelize.define('CartService', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  cartId: { // FK Cart
    type: DataTypes.INTEGER,
    references: {
      model: Cart,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  serviceId: { // FK Services
    type: DataTypes.INTEGER,
    references: {
      model: Services,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
});

module.exports = CartService;