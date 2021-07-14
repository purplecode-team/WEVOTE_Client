import auth, { authSaga, authState } from './auth';
import loading, { loadingState } from './loading';
import user, { userSaga, userState } from './user';

import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth,
  loading,
  user
});

export function* rootSaga() {
  yield all([authSaga(), userSaga()]);
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export type rootState = {
  auth: authState,
  loading: loadingState,
  user: userState,
}