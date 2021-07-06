import * as React from 'react';

import { Provider as AlertProvider, positions, transitions } from 'react-alert';

import AlertTemplate from 'react-alert-template-basic';
import App from './App.tsx';
import { grey } from '@material-ui/core/colors';
import { render } from 'react-dom';

import './index.css';

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 3000,
  offset: '50px',
  transition: transitions.SCALE,
};

const Root = () => (
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>
);

render(<Root />, document.getElementById('root'));
