import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

type MatchParams = {
  id: string;
};

const Login = ({ match }: RouteComponentProps<MatchParams>) => {
  return (
    <>
      <h1>Login page</h1>
    </>
  );
};

export default Login;
