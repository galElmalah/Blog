const express = require('express');
const router = express.Router();
const Posts = require('../model/posts');
const authenticate = require('../middlewares/auth');
const isAdmin = require('../middlewares/isAdmin');
const { errorResponse } = require('../utils');

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

router.post('/', authenticate, isAdmin, async (req, res) => {
  const { body, title, tags } = req.body;
  const post = {
    body,
    title,
    author: 'Gal Elmalah',
    tags,
  };
  try {
    const {
      rows: [newPost],
    } = await Posts.createPost(post);
    res.send(newPost);
  } catch (err) {
    console.log(err);
    res.status(504).send(err);
  }
});

router.put('/:postId', authenticate, isAdmin, async (req, res) => {
  try {
    const updatedPost = await Posts.updatePostById({
      postId: req.params.postId,
      ...req.body,
    });

    res.send(updatedPost.rows[0]);
  } catch (err) {
    return errorResponse(res, { status: 504, message: 'Error' });
  }
});

router.delete('/:postId', authenticate, isAdmin, async (req, res) => {
  try {
    await Posts.deletePostById({ postId: req.params.postId });
    res.send({ postId: req.params.postId });
  } catch (e) {
    return errorResponse(res, { status: 504, message: 'Error' });
  }
});

module.exports = router;
