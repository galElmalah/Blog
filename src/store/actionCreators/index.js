import {
  SET_POSTS,
  ADD_TAG_FILTER,
  REMOVE_TAG_FILTER,
  API,
  FETCH_POSTS,
  USER_LOGIN_SUCCESS,
  LOGIN_REQUEST,
} from '../actions/actions';

export const setPosts = posts => ({ type: SET_POSTS, payload: posts });
export const addTagFilter = tag => ({ type: ADD_TAG_FILTER, payload: tag });
export const removeTagFilter = tag => ({
  type: REMOVE_TAG_FILTER,
  payload: tag,
});

export const fetchPosts = () => ({
  type: API,
  payload: {
    url: '/posts',
    onSuccess: setPosts,
    label: FETCH_POSTS,
  },
});

const setUser = user => ({ type: USER_LOGIN_SUCCESS, payload: user.username });

export const loginUser = credentials => ({
  type: API,
  payload: {
    data: credentials,
    method: 'POST',
    url: '/login',
    onSuccess: setUser,
    label: LOGIN_REQUEST,
  },
});
