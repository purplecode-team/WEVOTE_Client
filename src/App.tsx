import * as React from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Home, Info, Login, Register } from './pages';
import { lazy, Suspense } from 'react';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { CandidateProvider } from './context/CandidateProvider';
import GlobalStyle from './lib/styles/GlobalStyle';
import Layout from './components/Common/Layout';
import { rootState } from './modules';
import { useSelector } from 'react-redux';

const Pledge = lazy(() => import('./pages/Pledge'));
const Board = lazy(() => import('./pages/Board'));
const Admin = lazy(() => import('./pages/Admin'));

const App = () => {
  const { user } = useSelector((state:rootState) => ({user: state.user.user}));

  const isAdmin = true //user && user.status === 'admin';

  return (
    <CandidateProvider>
      <Router>
      <GlobalStyle />
      <Suspense fallback={<div>Loading.....</div>}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/info" component={Info} />
              <Route path="/pledge/:id" component={Pledge} />
              <Route path="/board" component={Board} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              {isAdmin && <Route exact path="/admin" component={Admin}/>}
              <Redirect path="*" to="/" />
            </Switch>
          </Layout>
        </ThemeProvider>
      </Suspense>
      </Router>
    </CandidateProvider>
  );
};

const theme = createMuiTheme({
  breakpoints: {
    values: {
      mobile: 480,
      tablet: 640,
      laptop: 1024,
      desktop: 1280,
    },
  },
});

export default App;
