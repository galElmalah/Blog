import {
  SET_POSTS,
  ADD_TAG_FILTER,
  REMOVE_TAG_FILTER
} from "../actions/actions";

export const setPosts = posts => ({ type: SET_POSTS, posts });
export const addTagFilter = tag => ({ type: ADD_TAG_FILTER, tag });
export const removeTagFilter = tag => ({ type: REMOVE_TAG_FILTER, tag });
