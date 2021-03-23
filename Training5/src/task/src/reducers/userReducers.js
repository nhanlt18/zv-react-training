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

const initialState = {
  user: { loading: null, user: {}, error: null },
  users: { loading: null, users: [], error: null },
  add: { creating: null, user: {}, error: null },
  delete: { loading: null },
  edit: { loading: null },
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_FETCH_REQUEST:
      return { ...state, users: { ...state.users, loading: true } };
    case USERS_FETCH_SUCCESS:
      return {
        ...state,
        users: { ...state.users, loading: false, users: action.payload },
      };
    case USERS_FETCH_FAIL:
      return {
        ...state,
        users: { ...state.users, loading: false, error: action.payload },
      };
    case USER_FETCH_REQUEST:
      return { ...state, user: { ...state.user, loading: true } };
    case USER_FETCH_SUCCESS:
      return {
        ...state,
        user: { ...state.user, loading: false, user: action.payload },
      };
    case USER_FETCH_FAIL:
      return {
        ...state,
        user: { ...state.user, loading: false, error: action.payload },
      };

    case USER_ADD_REQUEST:
      return { ...state, add: { ...state.add, creating: true } };
    case USER_ADD_SUCCESS:
      return {
        ...state,
        users: {
          ...state.users,
          users: [...state.users.users, action.payload],
        },
        add: { ...state.add, creating: false, user: action.payload },
      };
    case USER_ADD_FAIL:
      return {
        ...state,
        add: { ...state.add, creating: false, error: action.payload },
      };
    case USER_EDIT_REQUEST:
      return {
        ...state,
        edit: { ...state.edit, loading: true, [action.payload.id]: true },
      };
    case USER_EDIT_SUCCESS:
      return {
        ...state,
        users: {
          ...state.users,
          users: state.users.users.map((user) =>
            user.id === action.payload.id ? action.payload : user
          ),
        },
        edit: { ...state.edit, loading: false, [action.payload.id]: false },
      };
    case USER_EDIT_FAIL:
      return {
        ...state,
        edit: {
          ...state.edit,
          loading: false,
          [action.payload.id]: false,
          error: action.payload,
        },
      };
    case USER_DELETE_REQUEST:
      return {
        ...state,
        delete: { ...state.delete, loading: true, [action.payload.id]: true },
      };
    case USER_DELETE_SUCCESS:
      return {
        ...state,
        users: {
          ...state.users,
          users: state.users.users.filter(
            (user) => user.id !== action.payload.id
          ),
        },
        delete: { ...state.delete, loading: false, [action.payload.id]: false },
      };
    case USER_DELETE_FAIL:
      return {
        ...state,
        delete: {
          ...state.delete,
          loading: false,
          [action.payload.id]: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};
