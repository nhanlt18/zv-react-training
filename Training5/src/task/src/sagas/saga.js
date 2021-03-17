import { takeLatest, all } from 'redux-saga/effects';
import {
  USERS_FETCH_REQUEST,
  USER_ADD_REQUEST,
  USER_DELETE_REQUEST,
  USER_EDIT_REQUEST,
  USER_FETCH_REQUEST,
} from '../constants/userConstants';
import {
  handleAddUser,
  handleDeleteUser,
  handleEditUser,
  handleGetUser,
  handleGetUsers,
} from './handlers/usersHandlers';

function* watchGetUsers() {
  yield takeLatest(USERS_FETCH_REQUEST, handleGetUsers);
}

function* watchGetUser() {
  yield takeLatest(USER_FETCH_REQUEST, handleGetUser);
}

function* watchAddUser() {
  yield takeLatest(USER_ADD_REQUEST, handleAddUser);
}

function* watchEditUser() {
  yield takeLatest(USER_EDIT_REQUEST, handleEditUser);
}

function* watchDeleteUser() {
  yield takeLatest(USER_DELETE_REQUEST, handleDeleteUser);
}

export function* rootSaga() {
  yield all([
    watchGetUsers(),
    watchGetUser(),
    watchEditUser(),
    watchAddUser(),
    watchDeleteUser(),
  ]);
}
