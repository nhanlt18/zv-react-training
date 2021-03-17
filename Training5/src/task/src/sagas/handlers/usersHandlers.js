import { call, put } from 'redux-saga/effects';
import {
  getUsersSuccess,
  getUsersFailed,
  getUserFailed,
  getUserSuccess,
  editUserFailed,
  editUserSuccess,
  addUserFailed,
  addUserSuccess,
  deleteUserFailed,
  deleteUserSuccess,
} from '../../actions/userActions';
import {
  requestAddUser,
  requestDeleteUser,
  requestEditUser,
  requestGetUser,
  requestGetUsers,
} from '../requests/userRequests';

function* handleGetUsers() {
  try {
    const response = yield call(requestGetUsers);
    const { data } = response;

    yield put(getUsersSuccess(data));
  } catch (error) {
    yield put(getUsersFailed(error));
  }
}

function* handleGetUser({ payload }) {
  try {
    const response = yield call(requestGetUser, payload.id);
    const { data } = response;

    yield put(getUserSuccess(data));
  } catch (error) {
    yield put(getUserFailed(error));
  }
}

function* handleAddUser({ payload }) {
  try {
    const response = yield call(
      requestAddUser,
      payload.firstName,
      payload.lastName,
      payload.email
    );
    const { data } = response;

    yield put(addUserSuccess(data));
  } catch (error) {
    yield put(addUserFailed(error));
  }
}

function* handleEditUser({ payload }) {
  try {
    const response = yield call(
      requestEditUser,
      payload.id,
      payload.firstName,
      payload.lastName,
      payload.email
    );
    const { data } = response;

    yield put(editUserSuccess(data));
  } catch (error) {
    yield put(editUserFailed(error));
  }
}

function* handleDeleteUser({ payload }) {
  try {
    yield call(requestDeleteUser, payload.id);

    yield put(deleteUserSuccess());
  } catch (error) {
    yield put(deleteUserFailed(error));
  }
}

export {
  handleGetUsers,
  handleGetUser,
  handleEditUser,
  handleAddUser,
  handleDeleteUser,
};
