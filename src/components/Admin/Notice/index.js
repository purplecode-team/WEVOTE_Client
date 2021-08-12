import React, { useEffect, useState } from 'react';

import AddForm from '../Common/AddForm';
import client from '../../../lib/api/client';
import NoticeForm from './NoticeForm';
import NoticeList from './NoticeList';
import { useAlert } from 'react-alert';
import useFetch from '../../../lib/hooks/useFetch';

const initialData = [
  {
    id: '',
    content: '등록된 공지사항이 없습니다',
    startDate: '',
    endDate: '',
  },
];

const NoticeArticle = () => {
  const [{ loading, data, error }, fetchData] = useFetch({
    initialUrl: '/api/v1/main/banner',
    initialData: initialData,
  });
  const [rows, setRows] = useState(initialData);
  const [editData, setEditData] = useState(null);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(loading);
  const alert = useAlert();

  const onCloseModal = () => setOpen(false);

  const isDefault = id => initialData[0].id === id;

  const onUpdate = id => {
    if (isDefault(id)) return;
    setEditData(data.filter(obj => obj.id === id)[0]);
    setOpen(true);
  };

  const confirmDeletion = id => {
    if (isDefault(id)) return;
    if (window.confirm('해당 정보를 삭제하시겠습니까?')) onDelete(id);
  };

  const onDelete = async id => {
    setIsLoading(true);
    await client
      .delete(`/api/v1/admin/banner/${id}`)
      .then(response => {
        alert.success('배너 삭제 완료');
        fetchData();
      })
      .catch(e => {
        alert.error('데이터를 삭제할 수 없습니다.');
      });
    setIsLoading(false);
  };

  useEffect(() => {
    if (!data || data.length === 0) {
      setRows(initialData);
      return;
    }
    setRows(
      data.map(obj => {
        return {
          id: obj.id,
          content: obj.content,
          startDate: obj.startDate,
          endDate: obj.endDate,
        };
      })
    );
    return () => setRows(initialData);
  }, [data]);

  useEffect(() => {
    if (!loading) setIsLoading(false);
    return () => setIsLoading(false);
  }, [loading]);

  return (
    <>
      <AddForm component={<NoticeForm fetchData={fetchData} />} />
      <NoticeList
        loading={isLoading}
        rows={rows}
        editData={editData}
        open={open}
        setOpen={setOpen}
        fetchData={fetchData}
        onCloseModal={onCloseModal}
        onUpdate={onUpdate}
        confirmDeletion={confirmDeletion}
      />
    </>
  );
};

export default NoticeArticle;
