import React, { useEffect, useState } from 'react';

import AddForm from '../Common/AddForm';
import NoticeForm from './NoticeForm';
import NoticeList from './NoticeList';
import client from '../../../lib/api/client';
import { useAlert } from 'react-alert';

const defaultData = [
  {
    id: '',
    content: '등록된 공지사항이 없습니다',
    startDate: '',
    endDate: '',
  },
];

const NoticeArticle = () => {
  const [data, setData] = useState(defaultData);
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState(defaultData);
  const [editData, setEditData] = useState(null);
  const [open, setOpen] = useState(false);
  const alert = useAlert();

  const onCloseModal = () => setOpen(false);

  const isDefault = id => defaultData[0].id === id;

  const onUpdate = id => {
    if (isDefault(id)) return;
    setEditData(data.filter(obj => obj.id === id)[0]);
    setOpen(true);
  };

  const confirmDeletion = id => {
    if (isDefault(id)) return;
    if (window.confirm('해당 정보를 삭제하시겠습니까?')) onDelete(id);
  };

  const onDelete = id => {
    client
      .delete(`/api/v1/admin/register-banner/:${id}`)
      .then(() => {
        alert.SUCCESS('배너 삭제 완료');
        fetchData();
      })
      .catch(e => alert.error('데이터를 삭제할 수 없습니다.'));
  };

  const fetchData = async () => {
    setLoading(true);
    await client
      .get('/api/v1/main/banner')
      .then(response => {
        const { data } = response;
        if (data) {
          Array.isArray(data) ? setData(data) : setData([data]);
        }
      })
      .catch(e => alert.error('데이터를 불러올 수 없습니다.'))
      .then(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!data || data.length === 0) {
      setRows(defaultData);
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
  }, [data]);

  return (
    <>
      <AddForm component={<NoticeForm fetchData={fetchData} />} />
      <NoticeList
        loading={loading}
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
