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
  const body = 'some other awesome post';
  const title = 'some other awesome post';
  await Posts.createPost({
    body,
    title,
    author: 'Gal Elmalah',
    dateCreated: new Date(),
    tags: ['es6', 'tdd', 'react'],
  });
  res.send(postsGenerator(Math.random()));
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
    console.error(e);
    res.send('error');
  }
});

module.exports = router;
