export const USER_GET_REQUEST = 'user/user_get';
export const USER_GET_SUCCESS = 'user/user_get_success';
export const USER_GET_FAILED = 'user/user_get_failed';
export const USER_GET_ALL_REQUEST = 'user/user_get_all';
export const USER_GET_ALL_SUCCESS = 'user/user_get_all_success';
export const USER_GET_ALL_FAILED = 'user/user_get_all_failed';
export const USER_LOGOUT = 'user/user_logout';

const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_GET_REQUEST:
      return { ...state, loadingUser: true };
    case USER_GET_SUCCESS:
      return { ...state, loadingUser: false, user: action.payload };
    case USER_GET_FAILED:
      return { ...state, loadingUser: false, errorUser: action.payload };
    case USER_GET_ALL_REQUEST:
      return { ...state, loadingUserAll: true };
    case USER_GET_ALL_SUCCESS:
      return { ...state, loadingUserAll: false, users: action.payload };
    case USER_GET_ALL_FAILED:
      return {
        ...state,
        loadingUserAll: false,
        errorUserAll: {
          error: action.payload.error,
          code: action.payload.statusCode,
        },
      };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
}

export const userGet = (token) => ({
  type: USER_GET_REQUEST,
  payload: token,
});

export const userGetSuccess = (user) => ({
  type: USER_GET_SUCCESS,
  payload: user,
});

export const userGetFailed = (error) => ({
  type: USER_GET_FAILED,
  payload: error,
});

export const userGetAll = (token) => ({
  type: USER_GET_ALL_REQUEST,
  payload: token,
});

export const userGetAllSuccess = (users) => ({
  type: USER_GET_ALL_SUCCESS,
  payload: users,
});

export const userGetAllFailed = (error, statusCode) => ({
  type: USER_GET_ALL_FAILED,
  payload: { error, statusCode },
});

export const userLogout = () => ({
  type: USER_LOGOUT,
});
