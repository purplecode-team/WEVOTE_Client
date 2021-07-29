import * as TextData from '../TextData';

import React, { useEffect, useState } from 'react';

import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Pledge from './IndividualPledge';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const MaxPledgeCount = 10;

const PledgeForm = props => {
  const { classes, getPledgeData, editData } = props;
  const [pledgeCount, setPledgeCount] = React.useState(1);
  const [titleArr, setTitleArr] = useState(Array(pledgeCount));
  const [subTitleArr, setSubTitleArr] = useState(Array(pledgeCount));
  const [descriptionArr, setDescriptionArr] = useState(Array(pledgeCount));
  const [teamId, setTeamId] = useState(null);
  const [id, setId] = useState(null);

  const maxCountArr = Array(MaxPledgeCount);
  for (let i = 0; i < maxCountArr.length; i++) {
    maxCountArr[i] = i + 1;
  }
  const pledgeCountArr = Array(pledgeCount);
  for (let i = 0; i < pledgeCountArr.length; i++) {
    pledgeCountArr[i] = i;
  }
  // 배열로 업데이트한 값을 individual에서 받도록 수정해야함
  const overwriteEditData = () => {
    const ids = [];
    const titles = [];
    const subTitles = [];
    const descriptions = [];
    const teamIds = [];
    editData.Promises.map(promise => {
      titles.push(promise.promiseTitle);
      subTitles.push(promise.promiseType);
      descriptions.push(promise.promiseDetail);
      ids.push(promise.id);
      teamIds.push(promise.teamId);
    });
    setPledgeCount(editData.Promises.length);
    setId(ids);
    setTitleArr(titles);
    setSubTitleArr(subTitles);
    setDescriptionArr(descriptions);
    setTeamId(teamIds);
  };

  useEffect(() => {
    if (!editData) return;
    overwriteEditData();
  }, [editData]);

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

  // 개별 input data를 pledgeData Array로 모으기
  useEffect(() => {
    if (titleArr && subTitleArr && descriptionArr) {
      const pledgeData = pledgeCountArr.map(i => ({
        promiseOrder: i + 1,
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
      />
    );
  };

  return (
    <Grid container className={classes.section}>
      <Grid item className={classes.item} xs={12}>
        <Typography className={classes.sectionText} variant='h4' component='h4'>
          {TextData.sectionText.pledge}
        </Typography>
      </Grid>
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
    </Grid>
  );
};

const styles = theme => ({
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
  section: {
    marginBottom: '40px',
  },
  item: {
    marginBottom: '20px',
  },
  sectionText: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#5d3fe8',
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
  uploader: {
    width: '200px',
    margin: '0 20px',
    border: '1px solid #ccc',
    borderRadius: '15px',
    textAlign: 'center',
  },
  button: {
    textAlign: 'right',
  },
  submit: {
    width: '100px',
    height: '40px',
    borderRadius: '15px',
  },
});

export default withStyles(styles)(PledgeForm);
