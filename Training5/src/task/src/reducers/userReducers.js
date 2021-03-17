import {
  USERS_FETCH_FAIL,
  USERS_FETCH_REQUEST,
  USERS_FETCH_SUCCESS,
  USER_ADD_FAIL,
  USER_ADD_REQUEST,
  USER_ADD_SUCCESS,
  USER_DELETE_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_EDIT_FAIL,
  USER_EDIT_REQUEST,
  USER_EDIT_SUCCESS,
  USER_FETCH_FAIL,
  USER_FETCH_REQUEST,
  USER_FETCH_SUCCESS,
} from '../constants/userConstants';

export const getUsersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case USERS_FETCH_REQUEST:
      return { ...state, loading: true };
    case USERS_FETCH_SUCCESS:
      return { users: action.payload, loading: false };
    case USERS_FETCH_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};

export const getUserReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_FETCH_REQUEST:
      return { ...state, loading: true };
    case USER_FETCH_SUCCESS:
      return { user: action.payload, loading: false };
    case USER_FETCH_FAIL:
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};

export const addUserReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_ADD_REQUEST:
      return { ...state, success: false };
    case USER_ADD_SUCCESS:
      return { user: action.payload, success: true };
    case USER_ADD_FAIL:
      return { error: action.payload, success: false };
    default:
      return state;
  }
};

export const editUserReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case USER_EDIT_REQUEST:
      return { ...state, loading: true };
    case USER_EDIT_SUCCESS:
      return { user: action.payload, loading: false };
    case USER_EDIT_FAIL:
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};

export const deleteUserReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DELETE_REQUEST:
      return { loading: true };
    case USER_DELETE_SUCCESS:
      return { loading: false, success: true };
    case USER_DELETE_FAIL:
      return { error: action.payload, success: false };
    default:
      return state;
  }
};