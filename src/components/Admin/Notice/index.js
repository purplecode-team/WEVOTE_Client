import React from 'react';
import AddForm from '../Common/AddForm';
import NoticeList from './NoticeList';
import NoticeForm from './NoticeForm';

const NoticeArticle = () => {
  return (
    <>
      <AddForm component={<NoticeForm />} />
      <NoticeList />
    </>
  );
};

export default NoticeArticle;
