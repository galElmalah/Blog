const express = require('express');
const router = express.Router();

router.post('/login', (req, res, next) => {
  setTimeout(
    () => res.send({ ...req.body, token: `${Math.random()} token` }),
    2000
  );
});

module.exports = router;
