import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

type MatchParams = {
  id: string;
};

const Info = ({ match }: RouteComponentProps<MatchParams>) => {
  return (
    <>
      <h1>Info page</h1>
    </>
  );
};

export default Info;
