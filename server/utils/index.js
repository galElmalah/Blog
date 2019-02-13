module.exports.someEmpty = (...args) => {
  return args.some(value => !value && value !== 0);
};
