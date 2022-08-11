import * as React from 'react';

import { Provider as AlertProvider, positions, transitions } from 'react-alert';

import AlertTemplate from 'react-alert-template-basic';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import rootReducer from '@store/root';
import userSlice from '@store/modules/userSlice';

import '@styles/index.css';

const store = configureStore({ reducer: rootReducer });

function loadUser() {
  try {
    const user = localStorage.getItem('user');
    if (!user) return;
    store.dispatch(userSlice.actions.tempSetUser(JSON.parse(user)));
  } catch (e) {
    console.log('localStorage is not working');
  }
}

loadUser();

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser');
  worker.start();
}

const alertOptions = {
  position: positions.BOTTOM_CENTER,
  timeout: 3000,
  offset: '50px',
  transition: transitions.SCALE,
};

const Root = () => (
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...alertOptions}>
      <App />
    </AlertProvider>
  </Provider>
);

render(<Root />, document.getElementById('root'));
