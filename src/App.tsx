import * as React from 'react';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './lib/styles/GlobalStyle';
import { Home, Info, Login, Register } from './pages';
import Layout from './components/Common/Layout';

const Pledge = lazy(() => import('./pages/Pledge'));
const Board = lazy(() => import('./pages/Board'));
const Admin = lazy(() => import('./pages/Admin'));

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Suspense fallback={<div>Loading.....</div>}>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/info" component={Info} />
            <Route path="/pledge" component={Pledge} />
            <Route path="/board" component={Board} />
            <Route path="/admin" component={Admin} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </Layout>
      </Suspense>
    </Router>
  );
};

export default App;
