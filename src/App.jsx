import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import GlobalStyle from './lib/styles/GlobalStyle';
import { Main, Info, Login } from './pages';

const Board = lazy(() => import('./pages/Board'));
const Admin = lazy(() => import('./pages/Admin'));

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Suspense fallback={<div>Loading.....</div>}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/info" component={Info} />
          <Route path="/board" component={Board} />
          <Route path="/admin" component={Admin} />
          <Route path="/login" component={Login} />
          <Redirect from="*" to="/" />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
