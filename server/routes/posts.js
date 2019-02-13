const express = require('express');
const router = express.Router();
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

router.put('/:postId', async (req, res) => {
  try {
    const updatedPost = await Posts.updatePostById({
      postId: req.params.postId,
      ...req.body,
    });

    res.send(updatedPost.rows[0]);
  } catch (err) {
    console.log(err);
  }
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
