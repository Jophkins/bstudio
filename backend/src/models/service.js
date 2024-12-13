const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Service = sequelize.define('service', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false, unique: true},
  price: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 50},
  rate: {type: DataTypes.INTEGER, defaultValue: 0},
  image: {type: DataTypes.STRING, allowNull: false, defaultValue: null},
});

module.exports = Service;