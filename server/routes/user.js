const express = require('express');
const router = express.Router();
const Users = require('../model/user');
const Password = require('../services/security');
const { errorResponse, unauthorizeError } = require('../utils');
const Auth = require('../services/Auth');
const authenticate = require('../middlewares/auth');
const requiredFields = require('../middlewares/requiredFields');

const usernameAndPasswordRequired = requiredFields(['username', 'password']);

const signTokenAndRespond = (res, payload) => {
  const token = Auth.signToken(payload);
  return res.send({
    username: payload.username,
    isAdmin: payload.isAdmin,
    token: `${token}`,
  });
};

router.get('/', authenticate, (req, res) => {
  res.send('yeah');
});

router.post('/login', usernameAndPasswordRequired, async (req, res) => {
  const { username, password } = req.body;

  const isValidCredentials = await Users.validateCredentials({
    username,
    password,
  });
  if (isValidCredentials) {
    const user = await Users.getUser({ username });
    return signTokenAndRespond(res, user);
  }
  return unauthorizeError(res);
});

router.post('/register', usernameAndPasswordRequired, async (req, res) => {
  const { username, password } = req.body;

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
