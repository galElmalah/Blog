import { SET_POSTS } from "../actions/actions";
import { combineReducers } from "redux";

const initialState = {
  posts: []
};

function posts(state = initialState.posts, action) {
  switch (action.type) {
    case SET_POSTS:
      return [...state, ...action.posts];
    default:
      return state;
  }
}

export default combineReducers({ posts });
