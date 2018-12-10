import {
  SET_POSTS,
  ADD_TAG_FILTER,
  REMOVE_TAG_FILTER
} from "../actions/actions";
import { combineReducers } from "redux";

const initialState = {
  posts: [],
  filterByTags: {}
};

function posts(state = initialState.posts, action) {
  switch (action.type) {
    case SET_POSTS:
      return [...state, ...action.posts];
    default:
      return state;
  }
}

function filterByTags(state = initialState.filterByTags, action) {
  switch (action.type) {
    case ADD_TAG_FILTER:
      return { ...state, [action.tag]: true };
    case REMOVE_TAG_FILTER: {
      const { [action.tag]: tagToRemove, ...restOfTheTags } = state;
      return restOfTheTags;
    }
    default:
      return state;
  }
}

export default combineReducers({ posts, filterByTags });
