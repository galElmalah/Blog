import {
  API,
  CREATE_POST_SUCCESS,
  CREATE_POST_REQUEST,
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
