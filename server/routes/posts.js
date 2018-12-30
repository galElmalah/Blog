const express = require('express');
const router = express.Router();
const postsGenerator = require('../data').posts;
// define the home page route
router.get('/', (req, res) => {
  console.log('recived GET req for posts');
  res.send(postsGenerator(Math.random()));
});

router.post('/', (req, res) => {
  console.log('recived POST to create a post');
  res.send(postsGenerator(Math.random()));
});

module.exports = router;
