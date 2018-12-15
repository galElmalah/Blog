import API from "../requester";
const defaultErrorAction = err => console.error(err);
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
export const apiMiddleware = ({
  getState,
  dispatch
}) => next => async action => {
  if (action.type !== "API") {
    return next(action);
  }
  dispatch({ type: action.payload.label });
  const { url, method = "GET", data, onSuccess, onFailure } = action.payload;
  try {
    // should be replaced with axios once the server is in place
    const { data } = await API.request({ url, method });
    console.log("url: ", url);
    console.log("method: ", method);
    console.log("data: ", data);
    console.log("response: ", data);
    dispatch(onSuccess(data));
  } catch (err) {
    onFailure ? onFailure(err) : defaultErrorAction(err);
  }
};
