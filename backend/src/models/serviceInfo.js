const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Services = require('./associations');

const ServiceInfo = sequelize.define('ServiceInfo', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
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

module.exports = ServiceInfo;