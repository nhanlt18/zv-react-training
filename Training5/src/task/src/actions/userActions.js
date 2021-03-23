import {
  USERS_FETCH_FAIL,
  USERS_FETCH_REQUEST,
  USERS_FETCH_SUCCESS,
  USER_FETCH_FAIL,
  USER_FETCH_REQUEST,
  USER_FETCH_SUCCESS,
  USER_EDIT_FAIL,
  USER_EDIT_REQUEST,
  USER_EDIT_SUCCESS,
  USER_ADD_REQUEST,
  USER_ADD_SUCCESS,
  USER_ADD_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
} from '../constants/userConstants';

/**
 * Get all users actions
 */
export const getUsers = () => ({
  type: USERS_FETCH_REQUEST,
});

export const getUsersSuccess = (users) => ({
  type: USERS_FETCH_SUCCESS,
  payload: users,
});

export const getUsersFailed = (error) => ({
  type: USERS_FETCH_FAIL,
  payload: error,
});

/**
 * Get single user by id action
 */
export const getUser = (id) => ({
  type: USER_FETCH_REQUEST,
  payload: { id },
});

export const getUserSuccess = (user) => ({
  type: USER_FETCH_SUCCESS,
  payload: user,
});

export const getUserFailed = (error) => ({
  type: USER_FETCH_FAIL,
  payload: error,
});

/**
 * Add user
 */
export const addUser = (firstName, lastName, email) => ({
  type: USER_ADD_REQUEST,
  payload: {
    firstName,
    lastName,
    email,
  },
});

export const addUserSuccess = (user) => ({
  type: USER_ADD_SUCCESS,
  payload: user,
});

export const addUserFailed = (error) => ({
  type: USER_ADD_FAIL,
  payload: error,
});

/**
 * Edit user
 */
export const editUser = (id, firstName, lastName, email) => ({
  type: USER_EDIT_REQUEST,
  payload: {
    id,
    firstName,
    lastName,
    email,
  },
});

export const editUserSuccess = (user) => ({
  type: USER_EDIT_SUCCESS,
  payload: user,
});

export const editUserFailed = (error) => ({
  type: USER_EDIT_FAIL,
  payload: error,
});

/**
 * Delete user
 */
export const deleteUser = (id) => ({
  type: USER_DELETE_REQUEST,
  payload: { id },
});

export const deleteUserSuccess = (id) => ({
  type: USER_DELETE_SUCCESS,
  payload: { id },
});

export const deleteUserFailed = (error) => ({
  type: USER_DELETE_FAIL,
  payload: error,
});
