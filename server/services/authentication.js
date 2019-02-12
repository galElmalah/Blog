const jwt = require('jsonwebtoken');

module.exports = class Auth {
  static async verify({ payload, secret }) {
    return true;
  }
};
