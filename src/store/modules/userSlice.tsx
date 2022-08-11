import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface userType {
  userId: string;
  password?: string | undefined;
  nickName: string;
  status: string;
}

export interface userState {
  user?: userType | null;
  checkError?: any;
}

const initialState: userState = {
  user: null,
  checkError: null,
};

// 새로고침 이후 임시 로그인 처리
export default createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    tempSetUser: (state, action: PayloadAction<userState>) => ({
      ...state,
      user: action.payload.user,
    }),
    logout: (state) => ({ ...state, user: null }),
  },
});
