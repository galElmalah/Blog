import API from '../requester';
const defaultErrorAction = (error, label) => ({
  type: `${label ? label + '_' : ''}NETWORK_FAILURE`,
  error,
});
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
const generateHeaders = state => ({
  Authorization: `Bearer ${state.user.token}`,
});

export const apiMiddleware = ({
  getState,
  dispatch,
}) => next => async action => {
  if (action.type !== 'API') {
    return next(action);
  }

  const {
    url,
    method = 'GET',
    data,
    onSuccess,
    onFailure,
    label,
  } = action.payload;

  const headers = generateHeaders(getState());

  dispatch({ type: label });
  try {
    // should be replaced with axios once the server is in place
    const { data: response } = await API.request({
      url,
      method,
      data,
      headers,
    });

    console.group('Request middleware paramaters');
    console.log('url:: ', url);
    console.log('method:: ', method);
    console.log('data:: ', data);
    console.log('headers:: ', headers);
    console.log('response:: ', response);
    console.groupEnd();

    dispatch(onSuccess(response));
  } catch (err) {
    onFailure
      ? dispatch(onFailure(err, label))
      : dispatch(defaultErrorAction(err, label));
  }
};
