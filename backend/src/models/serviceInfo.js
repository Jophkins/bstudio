const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ServiceInfo = sequelize.define('serviceInfo', {
  id: {type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
  title: {type: DataTypes.STRING, allowNull: false},
  description: {type: DataTypes.STRING, allowNull: false},
});

module.exports = ServiceInfo;