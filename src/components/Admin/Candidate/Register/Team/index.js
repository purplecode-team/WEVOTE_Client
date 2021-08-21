import * as TextData from '../TextData';

import React, { useEffect, useState } from 'react';

import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import { isEmptyArr } from '../../../../../utils/getFunction';
import Loader from '../../../../Common/Loader';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import useGetCategory from '../../../../../lib/hooks/useGetCategory';
import { withStyles } from '@material-ui/core/styles';

const TeamForm = props => {
  const { classes, getTeamData, editData } = props;
  const {
    categoryState,
    topList,
    middleList,
    bottomList,
    setMiddleList,
    setBottomList,
    getNewMiddleList,
    getNewBottomList,
    hasBottom,
    currentIndex,
    setCurrentIndex,
  } = useGetCategory();
  // input 상태 관리
  const [slogan, setSlogan] = useState('');
  const [currentTop, setCurrentTop] = useState('');
  const [currentMiddle, setCurrentMiddle] = useState('');
  const [currentBottom, setCurrentBottom] = useState('');
  const [teamNumber, setTeamNumber] = useState(1);

  const isCompleted =
    Boolean(slogan) &&
    Boolean(currentMiddle) &&
    Boolean((hasBottom && currentBottom) || !hasBottom) &&
    Boolean(teamNumber);

  // 후보 팀 공통 정보 등록
  const handleSlogan = e => {
    setSlogan(e.target.value);
  };

  const handleClassificationTop = e => {
    setCurrentTop(e.target.value);
    getNewMiddleList(e.target.value)();
  };

  const handleClassificationMiddle = e => {
    setCurrentMiddle(e.target.value);
    getNewBottomList(e.target.value)();
  };

  const handleClassificationBottom = e => {
    setCurrentBottom(e.target.value);
  };

  const handleTeamNumber = e => {
    setTeamNumber(e.target.value);
  };

  const overwriteEditData = () => {
    setSlogan(editData.slogan);
    setTeamNumber(editData.order);
    if (editData.majorName) setCurrentBottom(editData.majorName);

    const currentTopIndex = topList.indexOf(editData.categoryName);
    const midList = categoryState.data[currentTopIndex].middle.map(
      mid => mid.organizationName
    );
    const currentMidIndex = midList.indexOf(editData.categoryDetail);
    setMiddleList(midList);
    const botList = hasBottom
      ? categoryState.data[currentTopIndex].middle[currentMidIndex].Majors.map(
          mid => mid.organizationName
        )
      : [];
    const currentBotIndex = hasBottom ? botList.indexOf(editData.majorName) : 0;
    setBottomList(botList);
    setCurrentIndex({
      top: currentTopIndex,
      middle: currentMidIndex,
      bottom: currentBotIndex,
    });
  };

  const renderMenuItem = () => {
    const maxMenuCount = 6;
    const menuArr = Array.from({ length: maxMenuCount }, (_, i) => i + 1);
    return menuArr.map(m => (
      <MenuItem key={m} value={m}>
        {m}
      </MenuItem>
    ));
  };

  useEffect(() => {
    setCurrentTop(topList[currentIndex.top]);
    setCurrentMiddle(middleList[currentIndex.middle]);
    if (hasBottom && editData) setCurrentBottom(editData.majorName);
  }, [currentIndex]);

  useEffect(() => {
    if (!editData) return;
    overwriteEditData();
    return () => {
      null;
    };
  }, [editData, categoryState.data]);

  useEffect(() => {
    setCurrentTop(topList[0] || '');
    return () => setCurrentTop('');
  }, [topList]);

  useEffect(() => {
    if (!editData) setCurrentMiddle(middleList[0] || '');
    return () => setCurrentMiddle('');
  }, [middleList]);

  useEffect(() => {
    if (!editData) {
      setCurrentBottom(bottomList[0] || '');
    }
    return () => setCurrentBottom('');
  }, [bottomList]);

  useEffect(() => {
    if (isCompleted) {
      const teamData = {
        slogan,
        currentTop,
        currentMiddle,
        currentBottom,
        teamNumber,
      };
      getTeamData(teamData);
    }
    return () => {
      null;
    };
  }, [slogan, currentMiddle, currentBottom, teamNumber]);

  return (
    <Grid container className={classes.section}>
      <Grid item className={classes.item} xs={12}>
        <Typography className={classes.sectionText} variant='h4' component='h4'>
          {TextData.sectionText.team}
        </Typography>
      </Grid>
      {categoryState.loading ? (
        <Grid item className={classes.loaderWrapper}>
          <Loader size={80} margin={20} />
        </Grid>
      ) : (
        <Grid container>
          <Grid container wrap='nowrap'>
            <Grid item className={classes.item} xs={12}>
              <Typography
                className={classes.titleText}
                variant='h4'
                component='h4'
              >
                {TextData.titleText.candidate.classificationTop}
              </Typography>
              <FormControl
                required
                variant='outlined'
                className={classes.formControl}
              >
                <Select
                  labelId='label'
                  id='select'
                  value={currentTop}
                  onChange={handleClassificationTop}
                  className={classes.selectEmpty}
                >
                  {topList &&
                    topList.map((data, i) => (
                      <MenuItem key={i} value={data}>
                        {data}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item className={classes.item} xs={12}>
              <Typography
                className={classes.titleText}
                variant='h4'
                component='h4'
              >
                {TextData.titleText.candidate.classificationMiddle}
              </Typography>
              <FormControl
                required
                variant='outlined'
                className={classes.formControl}
              >
                <Select
                  labelId='label2'
                  id='select2'
                  value={currentMiddle}
                  onChange={handleClassificationMiddle}
                  className={classes.selectEmpty}
                >
                  {middleList &&
                    middleList.map((data, i) => (
                      <MenuItem key={i} value={data}>
                        {data}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>
            {!isEmptyArr(bottomList) && (
              <Grid item className={classes.item} xs={12}>
                <Typography
                  className={classes.titleText}
                  variant='h4'
                  component='h4'
                >
                  {TextData.titleText.candidate.classificationBottom}
                </Typography>
                <FormControl
                  required
                  variant='outlined'
                  className={classes.formControl}
                >
                  <Select
                    labelId='label3'
                    id='select3'
                    value={currentBottom}
                    onChange={handleClassificationBottom}
                    className={classes.selectEmpty}
                  >
                    {bottomList &&
                      bottomList.map((data, i) => (
                        <MenuItem key={i} value={data}>
                          {data}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </Grid>
            )}
          </Grid>
          <Grid container wrap='nowrap'>
            <Grid item className={classes.item} xs={12}>
              <Typography
                className={classes.titleText}
                variant='h4'
                component='h4'
              >
                {TextData.titleText.slogan}
              </Typography>
              <TextField
                className={classes.textField}
                id='outlined-basic'
                placeholder='슬로건을 20자 내외로 입력하세요'
                variant='outlined'
                error={!Boolean(slogan)}
                value={slogan}
                onChange={handleSlogan}
              />
            </Grid>
            <Grid item className={classes.item} xs={12}>
              <Typography
                className={classes.titleText}
                variant='h4'
                component='h4'
              >
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
                  {renderMenuItem()}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      )}
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
  loaderWrapper: {
    width: '100%',
    textAlign: 'center',
  },
});
export default withStyles(styles)(TeamForm);
