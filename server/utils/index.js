module.exports.someEmpty = (...args) => {
  return args.some(value => !value && value !== 0);
};

module.exports.errorResponse = (res, { message = 'Error', status = 500 }) => {
  return res.status(status).send(message);
};
