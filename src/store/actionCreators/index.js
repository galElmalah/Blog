import { ADD_TAG_FILTER, REMOVE_TAG_FILTER } from '../actions/actions';

export const addTagFilter = tag => ({ type: ADD_TAG_FILTER, payload: tag });
export const removeTagFilter = tag => ({
  type: REMOVE_TAG_FILTER,
  payload: tag,
});
