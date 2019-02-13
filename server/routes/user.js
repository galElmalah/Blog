const express = require('express');
const router = express.Router();
const Users = require('../model/user');
const Password = require('../services/security');
const { someEmpty } = require('../utils');
router.post('/login', async (req, res, next) => {
  const { username, password } = req.body;
  if (someEmpty(username, password)) {
    console.log('empty fields', username, password);
  }
  console.log('sadadsa', username, password);
  if (await Users.validateCredentials({ username, password })) {
    res.send({ username, token: `${Math.random()} token` });
  } else {
    res.status(403).send(new Error('Invalid credentials'));
  }
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
