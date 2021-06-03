import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Pledge from './Pledge';
import * as TextData from './TextData';

const MaxPledgeCount = 10;

const PledgeForm = props => {
  const { classes, getPledgeData } = props;
  const [pledgeCount, setPledgeCount] = React.useState(1);
  const [titleArr, setTitleArr] = useState(Array(pledgeCount));
  const [subTitleArr, setSubTitleArr] = useState(Array(pledgeCount));
  const [descriptionArr, setDescriptionArr] = useState(Array(pledgeCount));

  const maxCountArr = Array(MaxPledgeCount);
  for (let i = 0; i < maxCountArr.length; i++) {
    maxCountArr[i] = i + 1;
  }
  const pledgeCountArr = Array(pledgeCount);
  for (let i = 0; i < pledgeCountArr.length; i++) {
    pledgeCountArr[i] = i;
  }

  const handlePledgeCount = event => {
    setPledgeCount(event.target.value);
  };

  const pledgeCountMenu = num => (
    <MenuItem key={num} value={num}>
      {num}
    </MenuItem>
  );

  const handleTitleArr = (id, value) => {
    const newTitleArr = titleArr.slice();
    newTitleArr[id] = value;
    setTitleArr(newTitleArr);
  };
  const handleSubTitleArr = (id, value) => {
    const newSubTitleArr = subTitleArr.slice();
    newSubTitleArr[id] = value;
    setSubTitleArr(newSubTitleArr);
  };
  const handleDescriptionArr = (id, value) => {
    const newDescriptionArr = descriptionArr.slice();
    newDescriptionArr[id] = value;
    setDescriptionArr(newDescriptionArr);
  };

  //개별 input data를 pledgeData Array로 모으기
  useEffect(() => {
    if (titleArr && subTitleArr && descriptionArr) {
      let pledgeData = pledgeCountArr.map(i => ({
        promiseType: titleArr[i],
        promiseTitle: subTitleArr[i],
        promiseDetail: descriptionArr[i],
      }));
      getPledgeData(pledgeData);
    }
  }, [titleArr, subTitleArr, descriptionArr]);

  const individualPledge = num => {
    return (
      <Pledge
        key={num}
        id={num}
        titleText={TextData.titleText}
        handleTitleArr={handleTitleArr}
        handleSubTitleArr={handleSubTitleArr}
        handleDescriptionArr={handleDescriptionArr}
      ></Pledge>
    );
  };

  return (
    <>
      <Grid container>
        <Grid item className={classes.item} xs={12}>
          <Typography className={classes.titleText} variant='h4' component='h4'>
            {TextData.titleText.pledge.Number}
          </Typography>
          <FormControl
            required
            variant='outlined'
            className={classes.formControl}
          >
            <Select
              labelId='demo-simple-select-required-label'
              id='demo-simple-select-required'
              value={pledgeCount}
              onChange={handlePledgeCount}
              className={classes.selectEmpty}
            >
              {maxCountArr.map(num => pledgeCountMenu(num))}
            </Select>
          </FormControl>
        </Grid>
        {pledgeCountArr.map(num => individualPledge(num))}
      </Grid>
    </>
  );
};

const styles = theme => ({
  item: {
    marginBottom: '20px',
  },
  titleText: {
    fontSize: '14px',
    fontWeight: 'bold',
    margin: '10px',
  },
  formControl: {
    minWidth: 200,
  },
  selectEmpty: {},
  textField: {
    minWidth: 400,
  },
});

export default withStyles(styles)(PledgeForm);
