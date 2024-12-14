const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Users = require('./users');
const Services = require('./services');

const Rating = sequelize.define('Rating', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rate: { type: DataTypes.INTEGER, allowNull: false },
  userId: { // FK Users
    type: DataTypes.INTEGER,
    references: {
      model: Users,
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

module.exports = Rating;