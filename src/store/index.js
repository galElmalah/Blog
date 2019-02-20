import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { apiMiddleware } from './middleware/apiMiddleware';
import { persistStateMiddleware } from './middleware/persistStateMiddleware';
import rootReducer from './reducers';
const initialState = JSON.parse(window.localStorage.getItem('reduxState')) || {
  user: {},
  blog: {},
};
console.log({ initialState });

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(logger, apiMiddleware, persistStateMiddleware)
);

window.store = store;

export default store;
