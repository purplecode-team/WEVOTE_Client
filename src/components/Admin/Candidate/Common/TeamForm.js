import * as TextData from './TextData';

import React, { useEffect, useState } from 'react';

import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// 카테고리에 맞는 중,소분류 데이터가 컴포넌트 별로 받아져야함
const classificationData = {
  인문대학: ['문예창작학과', '행정학과', '역사학과'],
  예술대학: ['디자인학과', '금속공예학과', '조형학과'],
  공과대학: ['기계자동차공학과', '건축공학과', '전자정보공학과'],
};

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
      { id: 1, organization: '인문대' },
      { id: 2, organization: '공과대' },
      { id: 3, organization: '정통대' },
      { id: 4, organization: '조형대' },
    ],
  },
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

const TeamForm = (props) => {
  const { classes, getTeamData } = props;
  const [middleArr, setMiddleArr] = useState(Object.keys(classificationData));
  const [bottomArr, setBottomArr] = useState(classificationData[middleArr[0]]);

  // input 상태 관리
  const [slogan, setSlogan] = useState('');
  const [currentMiddle, setCurrentMiddle] = useState('');
  const [currentBottom, setCurrentBottom] = useState('');
  const [teamNumber, setTeamNumber] = useState(1);

  // 후보 팀 공통 정보 등록
  const handleSlogan = (event) => {
    setSlogan(event.target.value);
  };
  const handleEjectMiddle = (event) => {
    setCurrentMiddle(event.target.value);
    if (!classificationData[event.target.value]) return;
    setBottomArr(classificationData[event.target.value]);
  };
  const handleEjectBottom = (event) => {
    setCurrentBottom(event.target.value);
  };
  const handleTeamNumber = (event) => {
    setTeamNumber(event.target.value);
  };

  useEffect(() => {
    if (slogan && currentMiddle && currentBottom && teamNumber) {
      const teamData = {
        slogan,
        currentMiddle,
        currentBottom,
        teamNumber,
      };
      getTeamData(teamData);
    }
  }, [slogan, currentMiddle, currentBottom, teamNumber]);

  // 중분류 선택 시, Middle 변경됨. 소분류 데이터 배열 변경되면, 첫 요소로 선택
  useEffect(() => {
    setCurrentBottom('');
  }, [bottomArr]);

  return (
    <Grid container>
      <Grid container wrap="nowrap">
        <Grid item className={classes.item} xs={12}>
          <Typography className={classes.titleText} variant="h4" component="h4">
            {TextData.titleText.slogan}
          </Typography>
          <TextField
            className={classes.textField}
            id="outlined-basic"
            placeholder="슬로건을 30자 내외로 입력하세요"
            variant="outlined"
            value={slogan}
            onChange={handleSlogan}
          />
        </Grid>
        <Grid item className={classes.item} xs={12}>
          <Typography className={classes.titleText} variant="h4" component="h4">
            {TextData.titleText.candidate.teamNumber}
          </Typography>
          <FormControl
            required
            variant="outlined"
            className={classes.formControl}
          >
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
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

      <Grid container wrap="nowrap">
        <Grid item className={classes.item} xs={12}>
          <Typography className={classes.titleText} variant="h4" component="h4">
            {TextData.titleText.candidate.classificationMiddle}
          </Typography>
          <FormControl
            required
            variant="outlined"
            className={classes.formControl}
          >
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={currentMiddle}
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
        {bottomArr && (
          <Grid item className={classes.item} xs={12}>
            <Typography
              className={classes.titleText}
              variant="h4"
              component="h4"
            >
              {TextData.titleText.candidate.classificationBottom}
            </Typography>
            <FormControl
              required
              variant="outlined"
              className={classes.formControl}
            >
              <Select
                labelId="demo-simple-select-required-label"
                id="demo-simple-select-required"
                value={currentBottom}
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
        )}
      </Grid>
    </Grid>
  );
};

const styles = (theme) => ({
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
