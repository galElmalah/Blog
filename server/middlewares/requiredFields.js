const { emptyFieldsError } = require('../utils');

const requireFields = fields => (req, res, next) => {
  const { body } = req;
  for (let field of fields) {
    if (!body[field]) {
      return emptyFieldsError(res);
    }
  }
  next();
};

module.exports = requireFields;
