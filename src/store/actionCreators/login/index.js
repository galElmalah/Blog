import { API, USER_LOGIN_SUCCESS, LOGIN_REQUEST } from '../../actions/actions';

const setUser = ({ username, token = '' }) => ({
  type: USER_LOGIN_SUCCESS,
  payload: { username, token },
});

export const loginUser = credentials => ({
  type: API,
  payload: {
    data: credentials,
    method: 'POST',
    url: '/login',
    onSuccess: setUser,
    label: LOGIN_REQUEST,
  },
});

export const registerUser = credentials => ({
  type: API,
  payload: {
    data: credentials,
    method: 'POST',
    url: '/register',
    onSuccess: setUser,
    label: LOGIN_REQUEST,
  },
});