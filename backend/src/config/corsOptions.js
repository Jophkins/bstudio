const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3200',
  'http://localhost:3500',
];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error(`Not allowed by CORS. Origin: ${origin}`));
    }
  },
  optionsSuccessStatus: 200,
};

const credentials = (req, res, next) => {
  const { origin } = req.headers;
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Expose-Headers', 'Content-Range');
  }
  next();
};

module.exports = { corsOptions, credentials };