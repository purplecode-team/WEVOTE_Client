import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import client from '../../../../lib/api/client';
import CloseIcon from '@material-ui/icons/Close';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Loader from '../../../Common/Loader';
import Paper from '@material-ui/core/Paper';
import Register from './Register';
import { useAlert } from 'react-alert';
import useGetCategory from '../../../../lib/hooks/useGetCategory';

const requestTopNames = ['central', 'college', 'major'];

export default function Category (props) {
  const { categoryIndex, setCategoryIndex, initialIndex } = props;
  const classes = useStyles();
  const {
    data,
    loading,
    error,
    setUrl,
    currentIndex,
    setCurrentIndex,
    topList,
    middleList,
    setMiddleList,
    bottomList,
    setBottomList,
    getNewMiddleList,
    getNewBottomList,
    handleBottomCurrentIndex,
    hasBottom,
  } = useGetCategory();
  const [sendingData, setSendingData] = useState({
    top: '',
    middle: '',
    bottom: '',
  });
  const alert = useAlert();

  useEffect(() => {
    if (currentIndex === initialIndex) {
      setCurrentIndex({ ...categoryIndex });
    } else {
      setCategoryIndex({ ...currentIndex });
    }
  }, [currentIndex]);

  //hooks에서 currentIndex 바뀔 경우, 자동으로 index에 맞춰서 list 변경되는 코드 추가할 것!

  const confirmDeletion = (section, value) => () => {
    if (window.confirm(`[${value}]의 모든 데이터를 삭제하시겠습니까?`))
      onDelete(section);
  };

  const deleteItem = section => {
    const deleteIndex = currentIndex[section] > 0 ? currentIndex[section] : 0;
    const nextIndex = deleteIndex - 1 >= 0 ? deleteIndex - 1 : 0;

    if (section === 'middle') {
      const newMiddleList = middleList.filter((m, i) => i !== deleteIndex);
      setMiddleList(newMiddleList);
      getNewBottomList(newMiddleList[0]);
    } else if (section === 'bottom') {
      setBottomList(bottomList.filter((b, i) => i !== deleteIndex));
    }
    setCurrentIndex({
      ...currentIndex,
      [section]: nextIndex,
    });
    setCategoryIndex({
      ...currentIndex,
      [section]: nextIndex,
    });
  };

  const requestDelete = async (section, top, id) => {
    await client
      .delete(`/api/v1/admin/category/${top}/${id}`)
      .then(response => {
        if (response.status === 200) alert.success('카테고리 삭제 완료');
        else alert.error('데이터 삭제 실패');
        deleteItem(section);
      })
      .catch(e => {
        alert.error('데이터 삭제 실패');
      });
    setUrl(new String(`/api/v1/admin/category`));
  };

  const onDelete = section => {
    const value = { top: requestTopNames[currentIndex.top], id: 0 };
    const currentMiddleData =
      data[currentIndex.top].middle[currentIndex.middle];

    if (section === 'middle') {
      value.id = currentMiddleData.id;
    } else if (section === 'bottom') {
      value.id = currentMiddleData.Majors[currentIndex.bottom].id;
    }
    requestDelete(section, value.top, value.id);
  };

  const requestPost = data => {
    if (hasBottom) {
      setBottomList([...bottomList, data.bottom]);
    } else {
      setMiddleList([...middleList, data.middle]);
    }
  };

  const submitData = e => {
    e.preventDefault();
    if (!hasBottom) sendingData.bottom = '';
    client
      .post('/api/v1/admin/category', sendingData)
      .then(response => {
        if (response.status === 200) alert.success('카테고리 등록 완료');
        else alert.error('데이터 등록 실패');
        requestPost(sendingData);
      })
      .then(() => setUrl(new String(`/api/v1/admin/category`)))
      .catch(e => {
        alert.error('데이터를 등록할 수 없습니다.');
      });
  };

  const customList = (section, title, items) => handle => (
    <Card>
      <CardHeader className={classes.cardHeader} title={title} />
      <Divider />
      <List className={classes.list} dense component='div' role='list'>
        {items &&
          items.map((value, index) => {
            const labelId = `label-${index}`;
            return (
              <ListItem
                key={index}
                role='listitem'
                button
                onClick={handle(value)}
                className={
                  currentIndex[section] === index ? classes.active : 'none'
                }
              >
                <ListItemText id={labelId} primary={`${value}`} />
                {currentIndex[section] === index &&
                  section !== 'top' &&
                  !(hasBottom && section === 'middle') && (
                    <CloseIcon onClick={confirmDeletion(section, value)} />
                  )}
              </ListItem>
            );
          })}
        <ListItem />
      </List>
    </Card>
  );

  useEffect(() => {
    if (error) alert.error('카테고리 호출 실패');
  }, [error]);

  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.paper}>
        {loading ? (
          <Loader />
        ) : (
          <Register
            data={data}
            getNewMiddleList={getNewMiddleList}
            getNewBottomList={getNewBottomList}
            handleBottomCurrentIndex={handleBottomCurrentIndex}
            topList={topList}
            middleList={middleList}
            bottomList={bottomList}
            setSendingData={setSendingData}
            setCurrentIndex={setCurrentIndex}
            currentIndex={currentIndex}
            customList={customList}
            submitData={submitData}
            hasBottom={hasBottom}
          />
        )}
      </Paper>
    </ThemeProvider>
  );
}

let theme = createMuiTheme({
  typography: {
    root: {
      fontSize: '1.4rem',
    },
  },
});

theme = {
  ...theme,
  overrides: {
    MuiTypography: {
      body2: {
        fontSize: '1.3rem',
      },
    },
    MuiInputBase: {
      input: {
        fontSize: '1.3rem',
      },
    },
    MuiOutlinedInput: {
      root: {
        height: '40px',
      },
    },
  },
};

const useStyles = makeStyles(theme => ({
  root: {
    margin: 'auto',
  },
  card: {
    width: '30%',
  },
  cardHeader: {
    padding: theme.spacing(1, 2),
  },
  list: {
    width: 200,
    height: 230,
    margin: '0 auto',
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto',
  },
  item: {
    margin: '10px auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  active: {
    backgroundColor: '#eae3ff',
  },
  inputText: {
    width: '70%',
  },
  button: {
    width: '25%',
    height: '40px',
    backgroundColor: theme.palette.primary.main,
  },
  paper: {
    maxWidth: 936,
    margin: '30px auto',
    overflow: 'hidden',
    padding: '20px',
  },
  contentWrapper: {
    margin: '40px 16px',
    display: 'flex',
    flexDirection: 'column',
  },
  buttonWrap: {
    width: '100%',
    textAlign: 'right',
    marginTop: '20px',
  },
  submit: {
    width: '100px',
    height: '40px',
    borderRadius: '15px',
    backgroundColor: theme.palette.primary.main,
  },
}));
