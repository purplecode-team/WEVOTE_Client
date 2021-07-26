import Category from './Category';
import Editor from './Editor';
import React from 'react';
import Register from './Register';

const Candidate = props => {
  const { currentSmallMenuId } = props;

  const Content = [
    { id: 1, component: <Category /> },
    { id: 2, component: <Register /> },
    { id: 3, component: <Editor /> },
  ];

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
