const Auth = require('../services/Auth');
const { unauthorizeError } = require('../utils');

module.exports = (req, res, next) => {
  const token = req.body.token || req.headers['Auth'];
  if (!token) {
    return unauthorizeError(res);
  }
  const verified = Auth.verify(token, 'secret');
  req.decoded = verified;

  next();
};
