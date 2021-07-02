import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import RegisterMiddle from './RegisterMiddle';
import RegisterBottom from './RegisterBottom';
import client from '../../../../lib/api/client';

// 고정 분류 [중앙자치기구, 단과대, 학과] 선택창
// 고정 분류마다 중분류 입력 => [총학생회, 동아리연합회 등]
// 중분류마다 소분류 입력 => [문예창작학과 등] (미입력 가능)

const category = [
  {
    id: 1,
    top: '중앙자치기구',
    middle: [
      { id: 1, organization: '총학생회' },
      { id: 2, organization: '학생복지위원회' },
      { id: 3, organization: '동아리연합회' },
    ],
  },
  {
    id: 2,
    top: '단과대',
    middle: [
      { id: 10, organization: '인문대' },
      { id: 11, organization: '공과대' },
      { id: 12, organization: '정통대' },
      { id: 13, organization: '조형대' },
    ],
  },
];

const categoryBottom = [
  {
    id: 3,
    top: '학과',
    middle: [
      { id: 1, organization: '인문대' },
      { id: 2, organization: '공과대' },
      { id: 3, organization: '정통대' },
      { id: 4, organization: '조형대' },
      { id: 5, organization: '기경대' },
    ],
    bottom: [
      {
        id: 1,
        organization: '인문대',
        major: ['문예창작학과', '행정학과', '영어영문학과'],
      },
      {
        id: 2,
        organization: '공과대',
        major: ['기계공학과', '전자정보공학과', '건축공학과'],
      },
      {
        id: 3,
        organization: '정통대',
        major: ['컴퓨터공학과', '전자미디어공학과'],
      },
    ],
  },
];

// const top = category.reduce((acc, cur) => {
//   acc.push(cur.top);
//   return acc;
// }, []);

// const initialMiddleArr = arr => {
//   const result = arr.reduce((acc, cur) => {
//     acc.push(cur.organization);
//     return acc;
//   }, []);
//   return result;
// };

export default function TransferList () {
  const classes = useStyles();
  const [current, setCurrent] = useState({ top: 0, middle: 0, bottom: 0 });
  const [topList, setTopList] = useState([]);
  const [middleList, setMiddleList] = useState([]);
  const [bottomList, setBottomList] = useState([]);

  const setCategory = newObj => {
    category[current.top].middle.push(newObj);
  };

  const onClickTop = value => () => {
    const currentTopIndex = topList.indexOf(value);
    const newMiddle = category[currentTopIndex].middle;
    const result = newMiddle.reduce((acc, cur) => {
      acc.push(cur.organization);
      return acc;
    }, []);
    setCurrent({ top: currentTopIndex, middle: 0, bottom: 0 });
    setMiddleList(result);
  };

  const onClickMiddle = value => () => {
    const currentMiddleIndex = middleList.indexOf(value);
    setCurrent({ ...current, middle: currentMiddleIndex, bottom: 0 });
    const bottomArr = category[current.top].bottom || [];
    const currentObj = bottomArr.filter(cur => cur.organization === value)[0];
    if (!currentObj) {
      setBottomList(new Array(0));
      return;
    }
    setBottomList(currentObj.major);
  };

  const onClickBottom = value => () => {
    const currentBottomIndex = bottomList.indexOf(value);
    setCurrent({ ...current, bottom: currentBottomIndex });
  };

  const onDelete = value => {
    console.log(middleList.filter(mid => mid !== value));
    setMiddleList(middleList.filter(mid => mid !== value));
  };

  const submitData = e => {
    e.preventDefault();
    client.post('/admin/post', data);
  };

  useEffect(() => {
    setTopList(
      category.reduce((acc, cur) => {
        acc.push(cur.top);
        return acc;
      }, [])
    );
  }, [category]);

  useEffect(() => {
    onClickMiddle(middleList[0])();
    setCurrent({ ...current, bottom: 0 });
  }, [topList, middleList]);

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
                className={current[section] === index ? classes.active : 'none'}
              >
                <ListItemText id={labelId} primary={`${value}`} />
                <CloseIcon onClick={() => onDelete(value)} />
              </ListItem>
            );
          })}
        <ListItem />
      </List>
    </Card>
  );

  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.paper}>
        <RegisterMiddle
          category={category}
          setCategory={setCategory}
          onClickTop={onClickTop}
          onClickMiddle={onClickMiddle}
          topList={topList}
          middleList={middleList}
          setTopList={setTopList}
          setMiddleList={setMiddleList}
          customList={customList}
          submitData={submitData}
        />
      </Paper>
      <Paper className={classes.paper}>
        <RegisterBottom />
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
