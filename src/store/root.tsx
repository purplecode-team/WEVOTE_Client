import authSlice from './modules/authSlice';
import { combineReducers } from 'redux';
import toggleSlice from './modules/toggleSlice';
import userSlice from './modules/userSlice';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  user: userSlice.reducer,
  toggle: toggleSlice.reducer,
});

export default rootReducer;
