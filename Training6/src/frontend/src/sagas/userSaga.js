import { call, put } from 'redux-saga/effects';

import apiLogin from '../api/apiLogin';
import {
  userGetAllFailed,
  userGetAllSuccess,
  userGetFailed,
  userGetSuccess,
} from '../ducks/modules/user';

/**
 * Requests
 */
const requestUserGet = (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return apiLogin.get('/api/users/my', config);
};

const requestUserGetAll = (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return apiLogin.get('/api/users', config);
};

/**
 * Handlers
 */
export function* handleUserGet({ payload }) {
  try {
    const response = yield call(requestUserGet, payload);
    const { data } = response;
    yield put(userGetSuccess(data));
  } catch (error) {
    yield put(userGetFailed(error));
  }
}

export function* handleUserGetAll({ payload }) {
  try {
    const response = yield call(requestUserGetAll, payload);
    console.log(response);
    const { data } = response;

    yield put(userGetAllSuccess(data.users));
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);

      yield put(
        userGetAllFailed(error.response.data.error, error.response.status)
      );
    } else {
      yield put(userGetAllFailed(error.message, null));
    }
  }
}
