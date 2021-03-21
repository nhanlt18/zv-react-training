import { takeLatest, all } from 'redux-saga/effects';

import { LOGIN_REQUEST } from '../ducks/modules/auth';
import { USER_GET_ALL_REQUEST, USER_GET_REQUEST } from '../ducks/modules/user';
import { handleLogin } from './authSaga';
import { handleUserGet, handleUserGetAll } from './userSaga';

function* watchAuth() {
  yield takeLatest(LOGIN_REQUEST, handleLogin);
}

function* watchUserGet() {
  yield takeLatest(USER_GET_REQUEST, handleUserGet);
}

function* watchUserGetAll() {
  yield takeLatest(USER_GET_ALL_REQUEST, handleUserGetAll);
}

export default function* rootSaga() {
  yield all([watchAuth(), watchUserGet(), watchUserGetAll()]);
}
