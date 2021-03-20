export const LOGIN_REQUEST = 'auth/login_request';
export const LOGIN_SUCCESS = 'auth/login_success';
export const LOGIN_INVALID = 'auth/login_invalid';
export const LOGIN_FAIL = 'auth/login_fail';
export const LOGOUT = 'auth/logout';

const token = localStorage.getItem('token')
  ? JSON.parse(localStorage.getItem('token')).token
  : null;

const initialState = { token };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { loading: true };
    case LOGIN_SUCCESS:
      return { loading: false, token: action.payload };
    case LOGIN_INVALID:
      return { loading: false, message: action.payload };
    case LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case LOGOUT:
      return { loggedOut: action.payload };
    default:
      return state;
  }
}

export const login = (email, password) => ({
  type: LOGIN_REQUEST,
  payload: { email, password },
});

export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

export const loginInvalid = (message) => ({
  type: LOGIN_INVALID,
  payload: message,
});

export const loginFailed = (error) => ({
  type: LOGIN_FAIL,
  payload: error,
});

export const logout = () => {
  localStorage.removeItem('token');
  return {
    type: LOGOUT,
    payload: true,
  };
};
