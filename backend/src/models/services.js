const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Types = require('./types');

const Services = sequelize.define('Services', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
  price: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 50 },
  rate: { type: DataTypes.INTEGER, defaultValue: 0 },
  image: { type: DataTypes.STRING, allowNull: false, defaultValue: null },
  typeId: { // Внешний ключ к Types
    type: DataTypes.INTEGER,
    references: {
      model: Types,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
});

module.exports = Services;