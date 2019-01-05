import {
  SET_POSTS,
  ADD_TAG_FILTER,
  REMOVE_TAG_FILTER,
  FETCH_POSTS,
  CREATE_POST_SUCCESS,
  DELETE_POST_SUCCESS,
} from '../../actions/actions';
import { combineReducers } from 'redux';

const initialState = {
  posts: [],
  filterByTags: {},
  loadingPosts: false,
};

function loadingPosts(state = initialState.loadingPosts, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return true;
    case SET_POSTS:
      return false;
    default:
      return false;
  }
}

const removePostById = (posts, { postId }) => {
  return posts.filter(post => post.id != postId);
};

function posts(state = initialState.posts, action) {
  switch (action.type) {
    case SET_POSTS:
      return [...state, ...action.payload];
    case CREATE_POST_SUCCESS:
      return [...state, action.payload];
    case DELETE_POST_SUCCESS:
      return removePostById(state, action.payload);
    default:
      return state;
  }
}

function filterByTags(state = initialState.filterByTags, action) {
  switch (action.type) {
    case ADD_TAG_FILTER:
      return { ...state, [action.payload]: true };
    case REMOVE_TAG_FILTER: {
      const { [action.payload]: tagToRemove, ...restOfTheTags } = state;
      return restOfTheTags;
    }
    default:
      return state;
  }
}

export default combineReducers({ loadingPosts, filterByTags, posts });
