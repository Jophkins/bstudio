const Users = require('./users');
const Cart = require('./cart');
const CartService = require('./cartService');
const Services = require('./services');
const Types = require('./types');
const Rating = require('./rating');
const ServiceInfo = require('./serviceInfo');

Users.hasOne(Cart);
Cart.belongsTo(Users);

Users.hasMany(Rating);
Rating.belongsTo(Users);

Cart.hasMany(CartService);
CartService.belongsTo(Cart);

Types.hasMany(Services);
Services.belongsTo(Types);

Services.hasMany(Rating);
Rating.belongsTo(Services);

Services.hasMany(CartService);
CartService.belongsTo(Services);

Services.hasMany(ServiceInfo, { as: 'info' });
ServiceInfo.belongsTo(Services);

module.exports = {
  Users,
  Cart,
  CartService,
  Services,
  Types,
  Rating,
  ServiceInfo,
};