const { unauthorizeError } = require('../utils');

module.exports = (req, res, next) => {
  if (req.user.isadmin) {
    return next();
  }
  return unauthorizeError(res);
};
