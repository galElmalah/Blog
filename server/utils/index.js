module.exports.someEmpty = (...args) => {
  return args.some(value => !value && value !== 0);
};

const errorResponse = (res, { message = 'Error', status = 500 }) => {
  return res.status(status).send(message);
};
module.exports.errorResponse = errorResponse;
module.exports.emptyFieldsError = res =>
  errorResponse(res, {
    message: "None of the fields can't be empty.",
    status: 400,
  });

module.exports.unauthorizeError = res =>
  errorResponse(res, {
    message: 'Not authorize',
    status: 403,
  });
