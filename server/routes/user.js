const express = require('express');
const router = express.Router();
const Users = require('../model/user');
const Password = require('../services/security');
const { someEmpty, errorResponse } = require('../utils');
router.post('/login', async (req, res, next) => {
  const { username, password } = req.body;
  if (someEmpty(username, password)) {
    errorResponse(res, {
      message: 'None of the fields cant be empty.',
      status: 400,
    });
    console.log('empty fields', username, password);
  }
  const isValidCredentials = await Users.validateCredentials({
    username,
    password,
  });
  if (isValidCredentials) {
    return res.send({ username, token: `${Math.random()} token` });
  }
  errorResponse(res, {
    message: 'Not authorize',
    status: 403,
  });
});

router.post('/register', async (req, res, next) => {
  const { username, password } = req.body;
  if (someEmpty(username, password)) {
    console.log('empty fields', username, password);
  }
  if (!(await Users.isUserNameExists(username))) {
    const hashedPassword = await Password.hash(password);
    const user = await Users.createUser({
      username,
      password: hashedPassword,
    });
    return res.send(user);
  }
  return res.status(500).send('username already exists');
});

module.exports = router;
