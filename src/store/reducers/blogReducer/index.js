import {
  SET_POSTS,
  ADD_TAG_FILTER,
  REMOVE_TAG_FILTER,
  FETCH_POSTS,
  CREATE_POST_SUCCESS,
  DELETE_POST_SUCCESS,
  CREATE_POST_REQUEST,
  DELETE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_REQUEST,
} from '../../actions/actions';
import { combineReducers } from 'redux';

const initialState = {
  posts: [],
  filterByTags: {},
  loading: false,
};

function loading(state = initialState.loading, action) {
  switch (action.type) {
    case FETCH_POSTS:
    case CREATE_POST_REQUEST:
    case DELETE_POST_REQUEST:
    case UPDATE_POST_REQUEST:
      return true;
    case SET_POSTS:
    case CREATE_POST_SUCCESS:
    case DELETE_POST_SUCCESS:
    case UPDATE_POST_SUCCESS:
      return false;
    default:
      return false;
  }
}

const removePostById = (posts, { postId }) => {
  return posts.filter(post => post.id != postId);
};

const updatePostById = (posts, updatedPost) => {
  return posts.map(post => (post.id === updatedPost.id ? updatedPost : post));
};

function posts(state = initialState.posts, action) {
  switch (action.type) {
    case SET_POSTS:
      return [...state, ...action.payload];
    case CREATE_POST_SUCCESS:
      return [...state, action.payload];
    case DELETE_POST_SUCCESS:
      return removePostById(state, action.payload);
    case UPDATE_POST_SUCCESS:
      return updatePostById(state, action.payload);
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

export default combineReducers({ loading, filterByTags, posts });
