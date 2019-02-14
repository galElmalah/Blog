const express = require('express');
const router = express.Router();
const Users = require('../model/user');
const Password = require('../services/security');
const {
  someEmpty,
  errorResponse,
  emptyFieldsError,
  unauthorizeError,
} = require('../utils');
const Auth = require('../services/Auth');
const authenticate = require('../middlewares/auth');

const signTokenAndRespond = (res, payload) => {
  const token = Auth.signToken(payload);
  return res.send({ username: payload.username, token: `${token}` });
};

router.get('/', authenticate, (req, res) => {
  res.send('yeah');
});

router.post('/login', async (req, res, next) => {
  const { username, password } = req.body;
  if (someEmpty(username, password)) {
    emptyFieldsError(res);
  }
  const isValidCredentials = await Users.validateCredentials({
    username,
    password,
  });
  if (isValidCredentials) {
    return signTokenAndRespond(res, { username, password });
  }
  unauthorizeError(res);
});

router.post('/register', async (req, res, next) => {
  const { username, password } = req.body;
  if (someEmpty(username, password)) {
    return emptyFieldsError(res);
  }

  try {
    if (!(await Users.isUserNameExists(username))) {
      const hashedPassword = await Password.hash(password);
      await Users.createUser({
        username,
        password: hashedPassword,
      });
      return signTokenAndRespond(res, { username, password });
    }
  } catch (err) {
    console.error(err);
  }

  return errorResponse(res, {
    status: 500,
    message: 'username already exists',
  });
});

module.exports = router;
