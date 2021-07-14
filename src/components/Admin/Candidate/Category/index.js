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
import useFetch from '../../../../lib/hooks/useFetch';

const initialData = [
  {
    id: 1,
    top: '중앙자치기구',
    middle: [],
  },
  {
    id: 2,
    top: '단과대',
    middle: [],
  },
  {
    id: 3,
    top: '학과',
    middle: [],
    bottom: [],
  },
];

export default function Category () {
  const classes = useStyles();
  const [{ loading, data, error }, setUrl] = useFetch({
    initialUrl: '/api/v1/admin/category',
    initialData: initialData,
  });
  const [currentIndex, setCurrentIndex] = useState({
    top: 0,
    middle: 0,
    bottom: 0,
  });
  const [topList, setTopList] = useState([]);
  const [middleList, setMiddleList] = useState([]);
  const [bottomList, setBottomList] = useState([]);
  const [sendingData, setSendingData] = useState({
    top: '',
    middle: '',
    bottom: '',
  });
  const alert = useAlert();

  let hasBottom = bottomList.length !== 0;

  useEffect(() => {
    if (error) alert.error('카테고리 호출 실패');
  }, [error]);

  const setCategory = newObj => {
    data[currentIndex.top].middle.push(newObj);
  };

  const getNewMiddleList = value => () => {
    const currentTopIndex = topList.indexOf(value);
    const newMiddle = data[currentTopIndex].middle;
    const result = newMiddle.reduce((acc, cur) => {
      acc.push(cur.organization);
      return acc;
    }, []);
    setCurrentIndex({ top: currentTopIndex, middle: 0, bottom: 0 });
    setMiddleList(result);
  };

  const getNewBottomList = value => () => {
    const currentMiddleIndex = middleList.indexOf(value);
    setCurrentIndex({ ...currentIndex, middle: currentMiddleIndex, bottom: 0 });
    const bottomArr = data[currentIndex.top].bottom || [];
    const currentObj = bottomArr.filter(cur => cur.organization === value)[0];
    if (!currentObj) {
      setBottomList(new Array(0));
      return;
    }
    setBottomList(currentObj.major);
  };

  const onClickBottom = value => () => {
    const currentBottomIndex = bottomList.indexOf(value);
    setCurrentIndex({ ...currentIndex, bottom: currentBottomIndex });
  };

  const confirmDeletion = (section, value) => {
    if (window.confirm(`[${value}]의 모든 데이터를 삭제하시겠습니까?`))
      onDelete(section);
  };

  const onDelete = async section => {
    const value = {
      top: topList[currentIndex.top],
      middle: middleList[currentIndex.middle],
      bottom: bottomList[currentIndex.bottom],
    };
    if (section === 'top') {
      value.middle = '';
      value.bottom = '';
    } else if (section === 'middle') {
      value.bottom = '';
    }
    await client
      .post(`/api/v1/admin/category`, value)
      .then(response => {
        if (response.status === 200) alert.success('카테고리 삭제 완료');
        else alert.error('데이터 삭제 실패');
      })
      .catch(e => {
        alert.error('데이터를 삭제 실패');
      });
  };

  const submitData = e => {
    e.preventDefault();
    if (!hasBottom) sendingData.bottom = '';
    client
      .post('/api/v1/admin/category', sendingData)
      .then(response => {
        if (response.status === 200) alert.success('카테고리 등록 완료');
        else alert.error('데이터 등록 실패');
      })
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
                {currentIndex[section] === index && section !== 'top' && (
                  <CloseIcon onClick={() => confirmDeletion(section, value)} />
                )}
              </ListItem>
            );
          })}
        <ListItem />
      </List>
    </Card>
  );

  useEffect(() => {
    setTopList(
      data.reduce((acc, cur) => {
        acc.push(cur.top);
        return acc;
      }, [])
    );
    setMiddleList(
      data[0].middle.reduce((acc, cur) => {
        acc.push(cur.organization);
        return acc;
      }, [])
    );
  }, [data]);

  useEffect(() => {
    getNewBottomList(middleList[0])();
    setCurrentIndex({ ...currentIndex, bottom: 0 });
  }, [topList, middleList]);

  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.paper}>
        {loading ? (
          <Loader />
        ) : (
          <Register
            data={data}
            setCategory={setCategory}
            getNewMiddleList={getNewMiddleList}
            getNewBottomList={getNewBottomList}
            onClickBottom={onClickBottom}
            topList={topList}
            middleList={middleList}
            bottomList={bottomList}
            setTopList={setTopList}
            setMiddleList={setMiddleList}
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
