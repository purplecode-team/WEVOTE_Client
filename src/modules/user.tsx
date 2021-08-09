import * as authAPI from '../lib/api/auth';

import { call, takeLatest } from 'redux-saga/effects';
import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/saga/createRequestSaga';

export type userType = {
  userId: String,
  password: String,
  nickName: String,
  status: String,
}

export type userState = {
  user?: userType | null,
  checkError?: any
}

 // 새로고침 이후 임시 로그인 처리
const TEMP_SET_USER = 'user/TEMP_SET_USER';
// 회원 정보 확인
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes(
  'user/CHECK'
);
const LOGOUT = 'user/LOGOUT';

export const tempSetUser = createAction(TEMP_SET_USER, user => user);
export const check = createAction(CHECK);
export const logoutAction = createAction(LOGOUT);

// const checkSaga = createRequestSaga(CHECK, authAPI.check);

function checkFailureSaga () {
  try {
    localStorage.removeItem('user'); // localStorage 에서 user 제거하고
  } catch (e) {
    console.log('localStorage is not working');
  }
}

function * logoutSaga () {
  try {
    yield call(authAPI.logout); // logout API 호출
    localStorage.removeItem('user'); // localStorage 에서 user 제거
  } catch (e) {
    console.log(e);
  }
}

export function * userSaga () {
  // yield takeLatest(CHECK, checkSaga);
  yield takeLatest(CHECK_FAILURE, checkFailureSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}

const initialState: userState = {
  user: null,
  checkError: null,
};

export default handleActions(
  {
    [TEMP_SET_USER]: (state, { payload: user }) => ({
      ...state,
      user,
    }),
    [CHECK_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user,
      checkError: null,
    }),
    [CHECK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      user: null,
      checkError: error,
    }),
    [LOGOUT]: state => ({
      ...state,
      user: null,
    }),
  },
  initialState
);
