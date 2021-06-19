import React, { useEffect } from 'react';
import { useState } from 'react';
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
import NoticeData from '../../../api/dummyData/NoticeData.json';
import NoticeForm from './NoticeForm';
import useFetch from '../../../lib/hooks/useFetch';
import client from '../../../api/client';

export default function NoticeList () {
  const classes = useStyles();
  const [data, setData] = useState();
  const [rows, setRows] = useState([]);
  const [modal, setModal] = useState(false);
  const [updateData, setUpdateData] = useState({});
  // let { loading, data, error } = useFetch('/api/v1/main/banner');

  const getFormatDate = date => {
    const year = date.getFullYear(); //yyyy
    let month = 1 + date.getMonth(); //M
    month = month >= 10 ? month : '0' + month; //month 두자리로 저장
    let day = date.getDate(); //d
    day = day >= 10 ? day : '0' + day; //day 두자리로 저장
    return year + '/' + month + '/' + day; //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
  };

  useEffect(() => {
    const response = client.get('http://34.64.235.182/api/v1/main/banner');
    setData(response.data);
  }, []);

  // useEffect(() => {
  //   if (!data || data.length === 0) {
  //     setData(NoticeData);
  //   }
  // }, [data]);

  const onUpdate = id => {
    setUpdateData(data.filter(obj => obj.id === id)[0]);
    setModal(true);
  };

  const onDelete = id => {
    setData(data.filter(obj => obj.id !== id));
    try {
      client
        .post('/admin/post', data)
        .then(response => console.log(response.data))
        .catch(error => console.log('error:', error));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!data || data.length === 0) return;
    console.log(data);
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
    <TableContainer className={classes.root} component={Paper}>
      <Table className={classes.table} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell className={classes.notice}>
              공지사항
            </StyledTableCell>
            <StyledTableCell className={classes.start}>시작일</StyledTableCell>
            <StyledTableCell className={classes.end}>종료일</StyledTableCell>
            <StyledTableCell className={classes.delete}></StyledTableCell>
            <StyledTableCell className={classes.delete}></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component='th' scope='row'>
                {row.content}
              </StyledTableCell>
              <StyledTableCell>
                {getFormatDate(new Date(row.startDate))}
              </StyledTableCell>
              <StyledTableCell>
                {getFormatDate(new Date(row.endDate))}
              </StyledTableCell>
              <StyledTableCell>
                <IconButton
                  aria-label='update'
                  onClick={() => onUpdate(row.id)}
                >
                  <EditIcon />
                </IconButton>
              </StyledTableCell>
              <StyledTableCell>
                <IconButton
                  aria-label='delete'
                  onClick={() => onDelete(row.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      {modal && <NoticeForm updateData={updateData} />}
    </TableContainer>
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
  delete: {
    minWidth: 50,
  },
});
