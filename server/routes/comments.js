const express = require('express');
const router = express.Router();
const Comment = require('../model/comment');

router.get('/:postId', async (req, res) => {
  const { postId } = req.params;
  const { rows: specificPostComments } = await Comment.getPostComments({
    postId,
  });
  console.log(specificPostComments);
  res.send(specificPostComments);
});

router.post('/', async (req, res) => {
  const { postId, userId, body } = req.body;
  console.log(postId, userId, body);
  const { rows: response } = await Comment.createComment({
    postId,
    userId,
    body,
  });
  console.log(response);
  res.send(response);
});

router.delete('/', async (req, res) => {
  const { postId, userId, commentId } = req.body;
  console.log(postId, userId, commentId);
  const { rows: response } = await Comment.deleteComment({
    postId,
    userId,
    commentId,
  });
  res.send(response);
});

module.exports = router;
