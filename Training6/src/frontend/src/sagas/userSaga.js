import { call, put } from 'redux-saga/effects';

import apiLogin from '../api/apiLogin';
import { userGetFailed, userGetSuccess } from '../ducks/modules/user';

const requestUserGet = (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return apiLogin.get('/api/users/my', config);
};

export function* handleUserGet({ payload }) {
  try {
    const response = yield call(requestUserGet, payload);
    const { data } = response;
    yield put(userGetSuccess(data));
  } catch (error) {
    yield put(userGetFailed(error));
  }
}
