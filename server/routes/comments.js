const express = require('express');
const router = express.Router();
const Comment = require('../model/comment');
const authenticate = require('../middlewares/auth');
const isAdmin = require('../middlewares/isAdmin');

router.get('/:postId', async (req, res) => {
  const { postId } = req.params;
  const { rows: specificPostComments } = await Comment.getPostComments({
    postId,
  });
  console.log({ postId, specificPostComments });

  res.send(specificPostComments);
});

router.post('/', authenticate, async (req, res) => {
  const { postId, userId, body } = req.body;

  const { rows: response } = await Comment.createComment({
    postId,
    userId,
    body,
  });

  res.send(response);
});

router.post('/:commentId/upvote', authenticate, async (req, res) => {
  const { rows: response } = await Comment.upvoteComment({
    commentId: req.params.commentId,
  });

  res.send(response);
});

router.post('/:commentId/downvote', authenticate, async (req, res) => {
  const { rows: response } = await Comment.downvoteComment({
    commentId: req.params.commentId,
  });

  res.send(response);
});

router.delete('/', authenticate, isAdmin, async (req, res) => {
  const { postId, userId, commentId } = req.body;
  const { rows: response } = await Comment.deleteComment({
    postId,
    userId,
    commentId,
  });
  res.send(response);
});

module.exports = router;
