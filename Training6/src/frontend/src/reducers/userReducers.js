import {
  USER_GET_FAILED,
  USER_GET_REQUEST,
  USER_GET_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_INVALID,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from '../constant/userConstants';

export const userLoginReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, token: action.payload };
    case USER_LOGIN_INVALID:
      return { loading: false, message: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userGetReducer = (state = { loading: true }, action) => {
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
};
