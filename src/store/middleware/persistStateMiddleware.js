import API from '../requester';

/**
 * {
 *  url: 'sadsd',
 *  method: '',
 *  label: '', // maybe should be an action creator
 *  onSucesses: ''
 *  onFailure: ''
 * }
 *
 */

export const persistStateMiddleware = ({
  getState,
  dispatch,
}) => next => action => {
  next(action);
  if (action.meta && action.meta.persist) {
    window.localStorage.setItem('reduxState', JSON.stringify(getState()));
  }
};
