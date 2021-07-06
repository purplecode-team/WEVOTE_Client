import React, { useEffect } from 'react';
import { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import './Notice.css';
import { useAlert } from 'react-alert';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import NoticeForm from './NoticeForm';
import client from '../../../api/client';
import Loader from '../../Common/Loader';
import { getFormatDate } from '../../../utils/getFormatDate';

const defaultData = [
  {
    id: '',
    content: '등록된 공지사항이 없습니다',
    startDate: '',
    endDate: '',
  },
];

export default function NoticeList () {
  const classes = useStyles();
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
        const data = response.data;
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

  const showNoticeList = data => {
    return data.map(row => (
      <StyledTableRow key={row.id}>
        <StyledTableCell>{row.content}</StyledTableCell>
        <StyledTableCell>
          {row.startDate
            ? getFormatDate(new Date(row.startDate))
            : row.startDate}
        </StyledTableCell>
        <StyledTableCell>
          {row.endDate ? getFormatDate(new Date(row.endDate)) : row.endDate}
        </StyledTableCell>
        <StyledTableCell>
          <IconButton aria-label='update' onClick={() => onUpdate(row.id)}>
            <EditIcon />
          </IconButton>
        </StyledTableCell>
        <StyledTableCell>
          <IconButton
            aria-label='delete'
            onClick={() => confirmDeletion(row.id)}
          >
            <DeleteIcon />
          </IconButton>
        </StyledTableCell>
      </StyledTableRow>
    ));
  };

  return (
    <>
      {loading ? (
        <>
          <Loader size={50} />
        </>
      ) : (
        <TableContainer className={classes.root} component={Paper}>
          <Table className={classes.table} aria-label='customized table'>
            <TableHead>
              <TableRow>
                <StyledTableCell className={classes.notice}>
                  공지사항
                </StyledTableCell>
                <StyledTableCell className={classes.start}>
                  시작일
                </StyledTableCell>
                <StyledTableCell className={classes.end}>
                  종료일
                </StyledTableCell>
                <StyledTableCell className={classes.button}></StyledTableCell>
                <StyledTableCell className={classes.button}></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>{rows && showNoticeList(rows)}</TableBody>
          </Table>
          <Modal
            open={open}
            onClose={onCloseModal}
            center
            classNames={{
              modal: 'customModal',
            }}
          >
            <NoticeForm
              editData={editData}
              setOpen={setOpen}
              fetchData={fetchData}
            />
          </Modal>
        </TableContainer>
      )}
    </>
  );
}

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  root: {
    width: '98%',
    maxHeight: '100%',
    margin: '20px auto',
    boxShadow: `0px 2px 13px rgba(42, 64, 139, 0.3)`,
    borderRadius: `15px`,
  },
  table: {
    minWidth: 700,
  },
  notice: {
    minWidth: 400,
  },
  start: {
    minWidth: 150,
  },
  end: {
    minWidth: 150,
  },
  button: {
    minWidth: 50,
  },
  loading: {
    marginTop: '50px',
    marginLeft: '-100px',
    textAlign: 'center',
  },
});
