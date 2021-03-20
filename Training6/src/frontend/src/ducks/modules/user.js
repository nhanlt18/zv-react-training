export const USER_GET_REQUEST = 'user/user_get';
export const USER_GET_SUCCESS = 'user/user_get_success';
export const USER_GET_FAILED = 'user/user_get_failed';

const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_GET_REQUEST:
      return { loading: true };
    case USER_GET_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_GET_FAILED:
      return { loading: false, error: action.payload };
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
