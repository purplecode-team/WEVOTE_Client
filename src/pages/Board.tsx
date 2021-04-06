import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

type MatchParams = {
  id: string;
};

const Board = ({ match }: RouteComponentProps<MatchParams>) => {
  return (
    <>
      <h1>Board page</h1>
    </>
  );
};

export default Board;
