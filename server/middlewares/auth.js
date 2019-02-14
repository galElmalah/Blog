const Auth = require('../services/Auth');
const { unauthorizeError } = require('../utils');

const extractToken = req => {
  const token = req.headers['authorization'] || req.body.token;
  const striped = token.replace('Bearer', '').trim();
  return striped || null;
};
module.exports = (req, res, next) => {
  const token = extractToken(req);
  console.log(token);
  if (!token) {
    return unauthorizeError(res);
  }
  const verified = Auth.verify(token, 'secret');
  req.decoded = verified;

  next();
};
