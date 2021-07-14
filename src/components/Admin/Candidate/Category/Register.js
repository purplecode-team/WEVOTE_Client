import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export default function Register ({
  submitData,
  data,
  setSendingData,
  currentIndex,
  setCurrentIndex,
  getNewMiddleList,
  getNewBottomList,
  onClickBottom,
  topList,
  middleList,
  bottomList,
  customList,
  hasBottom,
}) {
  const classes = useStyles();
  const [middleValue, setMiddleValue] = useState('');
  const [bottomValue, setBottomValue] = useState('');

  const buttonText = '입력';

  const handleMiddleInputValue = e => {
    setMiddleValue(e.target.value);
  };

  const handleBottomInputValue = e => {
    setBottomValue(e.target.value);
  };

  useEffect(() => {
    getNewBottomList(middleList[0])();
    setCurrentIndex({ ...currentIndex, bottom: 0 });
  }, [topList, middleList]);

  useEffect(() => {
    const currentTop = data[currentIndex.top].top;
    let currentMiddle = middleValue;
    let currentBottom = bottomValue;
    if (!middleValue && data[currentIndex.top].middle.length !== 0) {
      currentMiddle =
        data[currentIndex.top].middle[currentIndex.middle].organization;
    }
    setSendingData({
      top: currentTop,
      middle: currentMiddle,
      bottom: currentBottom,
    });
  }, [middleValue, bottomValue]);

  return (
    <form className={classes.contentWrapper} onSubmit={submitData}>
      <Grid container spacing={2} justify='center' className={classes.root}>
        <Grid item className={classes.card}>
          {customList('top', '대분류', topList)(getNewMiddleList)}
        </Grid>
        <Grid item className={classes.card}>
          {customList('middle', '중분류', middleList)(getNewBottomList)}
          {!hasBottom && (
            <Grid item className={classes.item} xs={12}>
              <TextField
                id='outlined-basic'
                className={classes.inputText}
                placeholder='입력하세요.'
                variant='outlined'
                value={middleValue}
                onChange={handleMiddleInputValue}
              />

              <Button
                variant='contained'
                color='primary'
                className={classes.button}
                onClick={submitData}
              >
                {buttonText}
              </Button>
            </Grid>
          )}
        </Grid>
        {hasBottom && (
          <Grid item className={classes.card}>
            {customList('bottom', '소분류', bottomList)(onClickBottom)}
            <Divider />
            <Grid item className={classes.item} xs={12}>
              <TextField
                id='outlined-basic'
                className={classes.inputText}
                placeholder='입력하세요.'
                variant='outlined'
                value={bottomValue}
                onChange={handleBottomInputValue}
              />
              <Button
                variant='contained'
                color='primary'
                className={classes.button}
                onClick={submitData}
              >
                {buttonText}
              </Button>
            </Grid>
          </Grid>
        )}
      </Grid>
    </form>
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
