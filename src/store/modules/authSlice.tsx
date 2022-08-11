import { createSlice } from '@reduxjs/toolkit';

export interface authType {
  form: string;
  key: string;
  value: string;
}

export interface FormType {
  nickName?: string;
  userId?: string;
  password?: string;
  passwordConfirm?: string;
}

export interface authState {
  register: FormType;
  login: FormType;
  auth?: any | null;
  authError?: any | null;
}

const initialState: authState = {
  register: {
    nickName: '',
    userId: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    userId: '',
    password: '',
  },
  auth: null,
  authError: null,
};
export default createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    // 예: state.register.username을 바꾼다
    changeField: (state, { payload: { form, key, value } }) => {
      state[form][key] = value;
      return state;
    },
    initializeForm: (state, { payload: form }) =>
      // 폼 전환 시 회원 인증 에러 초기화
      ({ ...state, [form]: initialState[form], authError: null }),
  },
});
