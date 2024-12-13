require('dotenv').config();

const logger = require('./src/config/logger');
const sequelize = require('./src/config/database');
const config = require('./src/config/config');

const app = require('./src/app');

let server;

sequelize
  .authenticate()
  .then(() => {
  logger.info('Sequelize database connection successfully.');
  server = app.listen(config.port, () => {
    logger.info(`Listening to port ${config.port}`);
  });
}).catch((err) => {
  logger.error('Unable to connect the database: ', err);
});