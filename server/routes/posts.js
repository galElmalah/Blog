const express = require('express');
const router = express.Router();
const postsGenerator = require('../data').posts;
const Posts = require('../model/posts');
// define the home page route
router.get('/', async (req, res) => {
  const posts = await Posts.getAll();
  const postsWithFakeTags = posts.rows.map((post, i) => ({
    ...post,
    imageUrl: '/test.jpg',
  }));
  res.send(postsWithFakeTags);
});

router.get('/:postId', async (req, res) => {
  const post = await Posts.getPostById({ postId: req.params.postId });
  res.send(post.rows);
});

router.post('/', async (req, res) => {
  const { body, title, tags } = req.body;
  const post = {
    body,
    title,
    author: 'Gal Elmalah',
    dateCreated: new Date(),
    tags,
  };
  try {
    const { rows } = await Posts.createPost(post);
    res.send(rows[0]);
  } catch (err) {
    res.status(504).send(err);
  }
});

router.put('/:postId', (req, res) => {
  console.log(`params::${req.params}, body::${req.body}`);
  res.send(postsGenerator(Math.random()));
});

router.delete('/:postId', async (req, res) => {
  try {
    await Posts.deletePostById({ postId: req.params.postId });
    res.send({ postId: req.params.postId });
  } catch (e) {
    res.status(504).send('error');
  }
});

module.exports = router;
