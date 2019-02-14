const jwt = require('jsonwebtoken');
const config = require('../../config');
const secret = config.jwt.secret;
module.exports = class Auth {
  static signToken(payload, options = { expiresIn: '1d' }) {
    return jwt.sign(payload, secret, options);
  }

  static verify(token) {
    return jwt.verify(token, secret);
  }
};
