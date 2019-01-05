import {
  API,
  CREATE_POST_SUCCESS,
  CREATE_POST_REQUEST,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
} from '../../actions/actions';

const addPost = post => ({
  type: CREATE_POST_SUCCESS,
  payload: post,
});

export const createPost = post => ({
  type: API,
  payload: {
    data: post,
    method: 'POST',
    url: '/posts',
    onSuccess: addPost,
    label: CREATE_POST_REQUEST,
  },
});

const removePost = postId => ({
  type: DELETE_POST_SUCCESS,
  payload: postId,
});

export const deletePost = postId => ({
  type: API,
  payload: {
    method: 'DELETE',
    url: `/posts/${postId}`,
    onSuccess: removePost,
    label: DELETE_POST_REQUEST,
  },
});
