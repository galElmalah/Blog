import user from './userReducer';
import blog from './blogReducer';
import { combineReducers } from 'redux';

export default combineReducers({ blog, user });
