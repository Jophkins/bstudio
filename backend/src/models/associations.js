const User = require('./user');
const Cart = require('./cart');
const CartService = require('./cartService');
const Service = require('./service');
const Type = require('./type');
const Rating = require('./rating');
const ServiceInfo = require('./serviceInfo');

User.hasOne(Cart);
Cart.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Cart.hasMany(CartService);
CartService.belongsTo(Cart);

Type.hasMany(Service);
Service.belongsTo(Type);

Service.hasMany(Rating);
Rating.belongsTo(Service);

Service.hasMany(CartService);
CartService.belongsTo(Service);

Service.hasMany(ServiceInfo, { as: 'info' });
ServiceInfo.belongsTo(Service);

module.exports = {
  User,
  Cart,
  CartService,
  Service,
  Type,
  Rating,
  ServiceInfo,
};