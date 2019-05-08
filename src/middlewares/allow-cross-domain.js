import config from '../config';

export default (req, res, next) => {
  const allowedCors = config.CLIENT_URLS;
  let origin = '';
  if (req.headers.origin) {
    origin = allowedCors.includes(req.headers.origin.toLowerCase())
      ? req.headers.origin
      : '';
  }
  res.header('Access-Control-Allow-Origin', origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type,authorization');

  next();
};