import React, { useEffect, useState } from 'react';

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export default function Register(props) {
  const {
    submitData,
    data,
    setPostData,
    currentIndex,
    setCurrentIndex,
    getNewMiddleList,
    getNewBottomList,
    handleBottomCurrentIndex,
    topList,
    middleList,
    bottomList,
    customList,
    hasBottom,
  } = props;
  const classes = useStyles();
  const [middleValue, setMiddleValue] = useState<string>('');
  const [bottomValue, setBottomValue] = useState<string>('');

  const buttonText = '입력';

  const handleMiddleInputValue = (e) => {
    setMiddleValue(e.target.value);
  };

  const handleBottomInputValue = (e) => {
    setBottomValue(e.target.value);
  };

  useEffect(() => {
    getNewBottomList(middleList[0])();
    setCurrentIndex({ ...currentIndex, bottom: 0 });
  }, [topList, middleList]);

  useEffect(() => {
    const currentTop = data[currentIndex.top].top;
    let currentMiddle = middleValue;
    const currentBottom = bottomValue;
    if (!middleValue && data[currentIndex.top].middle.length !== 0) {
      currentMiddle = middleList[currentIndex.middle];
    }
    setPostData({
      top: currentTop,
      middle: currentMiddle,
      bottom: currentBottom,
    });
  }, [currentIndex.middle, middleValue, bottomValue]);

  return (
    <form className={classes.contentWrapper} onSubmit={submitData}>
      <Grid container spacing={2} justify="center" className={classes.root}>
        <Grid item className={classes.card}>
          {customList('top', '대분류', topList)(getNewMiddleList)}
        </Grid>
        <Grid item className={classes.card}>
          {customList('middle', '중분류', middleList)(getNewBottomList)}
          {!hasBottom && (
            <Grid item className={classes.item}>
              <TextField
                id="outlined-basic"
                className={classes.inputText}
                placeholder="입력하세요."
                variant="outlined"
                autoFocus
                value={middleValue}
                onChange={handleMiddleInputValue}
              />

              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                type="submit"
              >
                {buttonText}
              </Button>
            </Grid>
          )}
        </Grid>
        {hasBottom && (
          <Grid item className={classes.card}>
            {customList(
              'bottom',
              '소분류',
              bottomList
            )(handleBottomCurrentIndex)}
            <Divider />
            <Grid item className={classes.item}>
              <TextField
                id="outlined-basic"
                className={classes.inputText}
                placeholder="입력하세요."
                variant="outlined"
                autoFocus
                value={bottomValue}
                onChange={handleBottomInputValue}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.button}
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

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
  },
  card: {
    width: '30%',
  },
  item: {
    margin: '10px auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  inputText: {
    width: '70%',
  },
  button: {
    width: '25%',
    height: '40px',
    backgroundColor: theme.palette.primary.main,
  },
  contentWrapper: {
    margin: '40px 16px',
    display: 'flex',
    flexDirection: 'column',
  },
}));
