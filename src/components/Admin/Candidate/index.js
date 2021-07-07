import Category from './Category';
import Central from './Central';
import College from './College';
import Department from './Department';
import React from 'react';

const Content = [
  { id: 1, component: <Category /> },
  { id: 2, component: <Central /> },
  { id: 3, component: <College /> },
  { id: 4, component: <Department /> },
];

const Candidate = props => {
  const { currentSmallMenuId } = props;

  return (
    <>
      {
        Content.filter(component => component.id === currentSmallMenuId)[0]
          .component
      }
    </>
  );
};
export default Candidate;
