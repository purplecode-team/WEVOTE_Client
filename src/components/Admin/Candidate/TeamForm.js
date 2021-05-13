import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import * as TextData from './TextData';

// 카테고리에 맞는 중,소분류 데이터가 컴포넌트 별로 받아져야함
const classificationData = {
  인문대학: ['문예창작학과', '행정학과', '역사학과'],
  예술대학: ['디자인학과', '금속공예학과', '조형학과'],
  공과대학: ['기계자동차공학과', '건축공학과', '전자정보공학과'],
};

const TeamForm = props => {
  const { classes, getTeamData } = props;
  const [middleArr, setMiddleArr] = useState(Object.keys(classificationData));
  const [bottomArr, setBottomArr] = useState(classificationData[middleArr[0]]);

  // input 상태 관리
  const [slogan, setSlogan] = useState('');
  const [ejectMiddle, setEjectMiddle] = useState('');
  const [ejectBottom, setEjectBottom] = useState('');
  const [teamNumber, setTeamNumber] = useState(1);

  // 후보 팀 공통 정보 등록
  const handleSlogan = event => {
    setSlogan(event.target.value);
  };
  const handleEjectMiddle = event => {
    setEjectMiddle(event.target.value);
    setBottomArr(classificationData[event.target.value]);
  };
  const handleEjectBottom = event => {
    setEjectBottom(event.target.value);
  };
  const handleTeamNumber = event => {
    setTeamNumber(event.target.value);
  };

  useEffect(() => {
    if (slogan && ejectMiddle && ejectBottom && teamNumber) {
      const teamData = {
        slogan: slogan,
        ejectMiddle: ejectMiddle,
        ejectBottom: ejectBottom,
        teamNumber: teamNumber,
      };
      getTeamData(teamData);
    }
  }, [slogan, ejectMiddle, ejectBottom, teamNumber]);

  //중분류 선택 시, Middle 변경됨. 소분류 데이터 배열 변경되면, 첫 요소로 선택
  useEffect(() => {
    setEjectBottom('');
  }, [bottomArr]);

  return (
    <Grid container>
      <Grid container wrap='nowrap'>
        <Grid item className={classes.item} xs={12}>
          <Typography className={classes.titleText} variant='h4' component='h4'>
            {TextData.titleText.slogan}
          </Typography>
          <TextField
            className={classes.textField}
            id='outlined-basic'
            placeholder='슬로건을 30자 내외로 입력하세요'
            variant='outlined'
            value={slogan}
            onChange={handleSlogan}
          />
        </Grid>
        <Grid item className={classes.item} xs={12}>
          <Typography className={classes.titleText} variant='h4' component='h4'>
            {TextData.titleText.candidate.teamNumber}
          </Typography>
          <FormControl
            required
            variant='outlined'
            className={classes.formControl}
          >
            <Select
              labelId='demo-simple-select-required-label'
              id='demo-simple-select-required'
              value={teamNumber}
              onChange={handleTeamNumber}
              className={classes.selectEmpty}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container wrap='nowrap'>
        <Grid item className={classes.item} xs={12}>
          <Typography className={classes.titleText} variant='h4' component='h4'>
            {TextData.titleText.candidate.classificationMiddle}
          </Typography>
          <FormControl
            required
            variant='outlined'
            className={classes.formControl}
          >
            <Select
              labelId='demo-simple-select-required-label'
              id='demo-simple-select-required'
              value={ejectMiddle}
              onChange={handleEjectMiddle}
              className={classes.selectEmpty}
            >
              {middleArr &&
                middleArr.map((data, i) => (
                  <MenuItem key={i} value={data}>
                    {data}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item className={classes.item} xs={12}>
          <Typography className={classes.titleText} variant='h4' component='h4'>
            {TextData.titleText.candidate.classificationBottom}
          </Typography>
          <FormControl
            required
            variant='outlined'
            className={classes.formControl}
          >
            <Select
              labelId='demo-simple-select-required-label'
              id='demo-simple-select-required'
              value={ejectBottom}
              onChange={handleEjectBottom}
              className={classes.selectEmpty}
            >
              {bottomArr &&
                bottomArr.map((data, i) => (
                  <MenuItem key={i} value={data}>
                    {data}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
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
export default withStyles(styles)(TeamForm);
