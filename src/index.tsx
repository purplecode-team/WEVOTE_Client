import * as React from 'react';

import { Provider as AlertProvider, positions, transitions } from 'react-alert';
import { applyMiddleware, createStore } from 'redux';
import rootReducer, { rootSaga } from './module';

import AlertTemplate from 'react-alert-template-basic';
import App from './App';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { tempSetUser } from './module/user';

import './style/index.css';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

function loadUser() {
  try {
    const user = localStorage.getItem('user');
    if (!user) return;
    const parsedUser = JSON.parse(user);
    store.dispatch(tempSetUser(parsedUser));
  } catch (e) {
    console.log('localStorage is not working');
  }
}

sagaMiddleware.run(rootSaga);
loadUser();

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 3000,
  offset: '50px',
  transition: transitions.SCALE,
};

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mock/browser');
  worker.start();
}

const Root = () => (
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </Provider>
);

render(<Root />, document.getElementById('root'));
