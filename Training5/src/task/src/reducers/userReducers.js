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
  users: [],
  fetchingUsers: null,
  fetchingUsersError: null,

  currentUserId: null,
  fetchingUserDetails: null,
  fetchingUserDetailsError: null,

  addingUser: null,
  addingUserError: null,

  deletingById: {},
  editingById: {},
  errorById: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_FETCH_REQUEST:
      return { ...state, fetchingUsers: true };
    case USERS_FETCH_SUCCESS:
      return { ...state, users: action.payload, fetchingUsers: false };
    case USERS_FETCH_FAIL:
      return {
        ...state,
        fetchingUsers: false,
        fetchingUsersError: action.payload,
      };
    case USER_FETCH_REQUEST:
      return { ...state, fetchingUserDetails: true };
    case USER_FETCH_SUCCESS:
      const listUserIds = state.users.map((user) => user.id);
      return listUserIds.includes(action.payload.id)
        ? {
            ...state,
            users: [...state.users],
            currentUserId: action.payload.id,
            fetchingUserDetails: false,
          }
        : {
            ...state,
            users: [...state.users, action.payload],
            currentUserId: action.payload.id,
            fetchingUserDetails: false,
          };
    case USER_FETCH_FAIL:
      return {
        ...state,
        fetchingUserDetails: false,
        fetchingUserDetailsError: action.payload,
      };
    case USER_ADD_REQUEST:
      return { ...state, addingUser: true };
    case USER_ADD_SUCCESS:
      return {
        ...state,
        addingUser: false,
        users: [...state.users, action.payload],
      };
    case USER_ADD_FAIL:
      return { ...state, addingUser: false, addingUserError: action.payload };
    case USER_EDIT_REQUEST:
      return { ...state, editingById: { [action.payload.id]: true } };
    case USER_EDIT_SUCCESS:
      return {
        ...state,
        users: [
          ...state.users.map((user) =>
            user.id === action.payload.id ? action.payload : user
          ),
        ],
        editingById: { [action.payload.id]: false },
      };
    case USER_EDIT_FAIL:
      return {
        ...state,
        editingById: { [action.payload.id]: false },
        errorById: { [action.payload.id]: true, error: action.payload.error },
      };
    case USER_DELETE_REQUEST:
      return { ...state, deletingById: { [action.payload.id]: true } };
    case USER_DELETE_SUCCESS:
      return {
        ...state,
        users: [...state.users.filter((user) => user.id !== action.payload.id)],
        deletingById: { [action.payload.id]: false },
      };
    case USER_DELETE_FAIL:
      return {
        ...state,
        deletingById: { [action.payload.id]: false },
        errorById: { [action.payload.id]: true, error: action.payload.error },
      };
    default:
      return state;
  }
};
