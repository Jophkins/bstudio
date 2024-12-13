const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Type = sequelize.define('type', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false, unique: true},
});

module.exports = Type;