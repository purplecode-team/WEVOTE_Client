import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

type MatchParams = {
  id: string;
};

const Admin = ({ match }: RouteComponentProps<MatchParams>) => {
  return (
    <>
      <h1>Admin page</h1>
    </>
  );
};

export default Admin;
