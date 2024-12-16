const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Types = sequelize.define('Types', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false, unique: true},
});

module.exports = Types;