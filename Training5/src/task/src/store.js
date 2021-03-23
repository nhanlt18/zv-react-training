import { createStore, combineReducers, applyMiddleware } from 'redux';
import createMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootSaga } from './sagas/saga';
import { userReducer } from './reducers/userReducers';

const reducer = combineReducers({
  user: userReducer,
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
