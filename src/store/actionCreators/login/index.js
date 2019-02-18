import {
  API,
  USER_LOGIN_SUCCESS,
  LOGIN_REQUEST,
  USER_LOGOUT,
} from '../../actions/actions';

const setUser = ({ username, isAdmin, token = '' }) => ({
  type: USER_LOGIN_SUCCESS,
  payload: { username, token, isAdmin },
  meta: {
    persist: true,
  },
});

export const logoutUser = () => ({
  type: USER_LOGOUT,
  meta: {
    persist: true,
  },
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
