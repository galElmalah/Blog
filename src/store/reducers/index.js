import {
  SET_POSTS,
  ADD_TAG_FILTER,
  REMOVE_TAG_FILTER,
  FETCH_POSTS,
} from '../actions/actions';
import user from './userReducer';
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

function posts(state = initialState.posts, action) {
  switch (action.type) {
    case SET_POSTS:
      return [...state, ...action.payload];
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

export default combineReducers({ posts, filterByTags, loadingPosts, user });
