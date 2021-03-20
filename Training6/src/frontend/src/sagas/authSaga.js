import { call, put } from 'redux-saga/effects';

import apiLogin from '../api/apiLogin';
import { loginFailed, loginInvalid, loginSuccess } from '../ducks/modules/auth';

const requestLogin = (email, password) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return apiLogin.post(
    '/login',
    {
      email,
      password,
    },
    config
  );
};

export function* handleLogin({ payload }) {
  try {
    const response = yield call(requestLogin, payload.email, payload.password);
    const { data } = response;

    if (data.token) {
      yield put(loginSuccess(data.token));
      localStorage.setItem('token', JSON.stringify(data));
    } else {
      yield put(loginInvalid(data.error));
    }
  } catch (error) {
    yield put(loginFailed(error));
  }
}
