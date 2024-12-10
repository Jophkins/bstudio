require('dotenv').config();

const logger = require('./src/config/logger');

const app = require('./src/app');

const PORT = process.env.PORT || 3500;

app.listen(PORT, () => {
  logger.info('Server started on port ' + PORT);
});