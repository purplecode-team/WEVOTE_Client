import AddForm from '../Common/AddForm';
import NoticeForm from './NoticeForm';
import NoticeList from './NoticeList';
import React from 'react';

const NoticeArticle = () => {
  return (
    <>
      <AddForm component={<NoticeForm />} />
      <NoticeList />
    </>
  );
};

export default NoticeArticle;
