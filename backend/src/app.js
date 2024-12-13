const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const xss = require('xss-clean');
const compression = require('compression');
const {credentials, corsOptions} = require('./config/corsOptions');
const cors = require('cors');
const passport = require('passport');
const {jwtStrategy} = require('./config/passport');

const app = express();

app.use(helmet());

app.use(express.json());

app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

app.use(xss());

app.use(compression());

app.use(credentials);
app.use(cors(corsOptions));

app.use(passport.initialize());
passport.use('jwt', jwtStrategy);



app.get('/v1', (req, res) => {
  res.send('Welcome back! GET from /v1');
});

module.exports = app;