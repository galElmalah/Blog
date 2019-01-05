import {
  SET_POSTS,
  ADD_TAG_FILTER,
  REMOVE_TAG_FILTER,
  API,
  FETCH_POSTS,
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
