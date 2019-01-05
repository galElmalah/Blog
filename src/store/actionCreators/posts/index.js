import {
  API,
  CREATE_POST_SUCCESS,
  CREATE_POST_REQUEST,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_REQUEST,
} from '../../actions/actions';

const onCreatePostSuccess = post => ({
  type: CREATE_POST_SUCCESS,
  payload: post,
});

export const createPost = post => ({
  type: API,
  payload: {
    data: post,
    method: 'POST',
    url: '/posts',
    onSuccess: onCreatePostSuccess,
    label: CREATE_POST_REQUEST,
  },
});

const onDeletePostSuccess = postId => ({
  type: DELETE_POST_SUCCESS,
  payload: postId,
});

export const deletePost = postId => ({
  type: API,
  payload: {
    method: 'DELETE',
    url: `/posts/${postId}`,
    onSuccess: onDeletePostSuccess,
    label: DELETE_POST_REQUEST,
  },
});

const onUpdatePostSuccess = post => ({
  type: UPDATE_POST_SUCCESS,
  payload: post,
});

export const updatePost = ({ postId, post }) => ({
  type: API,
  payload: {
    data: post,
    method: 'PUT',
    url: `/posts/${postId}`,
    onSuccess: onUpdatePostSuccess,
    label: UPDATE_POST_REQUEST,
  },
});
