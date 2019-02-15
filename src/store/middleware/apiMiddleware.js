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
const generateHeaders = ({ user: { token } }) =>
  token ? { Authorization: `Bearer ${token}` } : {};

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
    const { data: response } = await API.request({
      url,
      method,
      data,
      headers,
    });

    console.group('Request middleware paramaters');
    console.log('%curl\n ', 'color: green; font-weight: bold;', url);
    console.log('%cmethod\n ', 'color: green; font-weight: bold;', method);
    console.log('%cdata\n ', 'color: green; font-weight: bold;', data);
    console.log('%cheaders\n ', 'color: green; font-weight: bold;', headers);
    console.log('%cresponse\n ', 'color: green; font-weight: bold;', response);
    console.groupEnd();

    dispatch(onSuccess(response));
  } catch (err) {
    onFailure
      ? dispatch(onFailure(err, label))
      : dispatch(defaultErrorAction(err, label));
  }
};
