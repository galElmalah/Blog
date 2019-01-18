const express = require('express');
const router = express.Router();
const Users = require('../model/user');
const Password = require('../services/security');

router.post('/login', (req, res, next) => {
  setTimeout(
    () => res.send({ ...req.body, token: `${Math.random()} token` }),
    2000
  );
});

router.post('/register', async (req, res, next) => {
  const { username, password } = req.body;
  if (!(await Users.isUserNameExists(username))) {
    const hashedPassword = await Password.hash(password);
    const user = await Users.createUser({
      username,
      password: hashedPassword,
    });
    return res.send(user);
  }
  return res.send('usernme already exists');
});

module.exports = router;
