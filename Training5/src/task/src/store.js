import { createStore, combineReducers, applyMiddleware } from 'redux';
import createMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootSaga } from './sagas/saga';
import {
  addUserReducer,
  deleteUserReducer,
  editUserReducer,
  getUserReducer,
  getUsersReducer,
} from './reducers/userReducers';

const reducer = combineReducers({
  users: getUsersReducer,
  user: getUserReducer,
  userEdit: editUserReducer,
  userAdd: addUserReducer,
  userDelete: deleteUserReducer,
});

const sagaMiddleware = createMiddleware();

const middleWare = [sagaMiddleware];
const initialState = {};
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

sagaMiddleware.run(rootSaga);

export default store;
