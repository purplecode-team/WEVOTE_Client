import * as TextData from '../TextData';

import React, { useEffect, useState } from 'react';

import { getNewArrState } from '../../../../../utils/getFunction';
import Grid from '@material-ui/core/Grid';
import IndividualCandidate from './IndividualCandidate';
import Typography from '@material-ui/core/Typography';
import useFetch from '../../../../../lib/hooks/useFetch';
import { withStyles } from '@material-ui/core/styles';

// 전체 등록된 학과 모은 데이터 받기
const defualtMajor = ['없음'];

// 팀당 후보 수(고정)
const candidateCount = 2;

const initialData = Array(candidateCount);
for (let i = 0; i < candidateCount; i++) initialData[i] = '';

const CandidateForm = props => {
  const { classes, getCandidateData, editData } = props;
  const [{ loading, data, error }, setUrl] = useFetch({
    initialUrl: '/api/v1/admin/major',
    initialData: defualtMajor,
  });
  // input 상태 관리
  const [imageArr, setImageArr] = useState(initialData);
  const [urlArr, setUrlArr] = useState(initialData);
  const [nameArr, setNameArr] = useState(initialData);
  const [majorArr, setMajorArr] = useState(initialData);
  const [studentNumArr, setStudentNumArr] = useState(initialData);
  const [positionArr, setPositionArr] = useState(initialData);

  // 후보 팀원 개별 정보 등록
  const handleImageArr = (index, value) => {
    getNewArrState(imageArr, index, value, setImageArr);
  };

  const handleUrlArr = (index, value) => {
    getNewArrState(urlArr, index, value, setUrlArr);
  };

  const handleNameArr = (index, value) => {
    getNewArrState(nameArr, index, value, setNameArr);
  };

  const handleStudentNumArr = (index, value) => {
    getNewArrState(studentNumArr, index, value, setStudentNumArr);
  };

  const handleMajorArr = (index, value) => {
    getNewArrState(majorArr, index, value, setMajorArr);
  };
  const handlePositionArr = (index, value) => {
    getNewArrState(positionArr, index, value, setPositionArr);
  };

  const overwriteEditData = () => {
    const positions = [];
    const majors = [];
    const studentNums = [];
    const urls = [];
    const names = [];

    editData.Runners.map((obj, i) => {
      positions.push(obj.position);
      majors.push(obj.major);
      studentNums.push(obj.studentNum);
      urls.push(obj.picture || '');
      names.push(obj.name);
    });

    setPositionArr(positions);
    setMajorArr(majors);
    setStudentNumArr(studentNums);
    setUrlArr(urls);
    setNameArr(names);
  };

  const isReady =
    nameArr[1] &&
    majorArr[1] &&
    studentNumArr[1] &&
    positionArr[1] &&
    imageArr[1];

  useEffect(() => {
    if (!editData) return;
    overwriteEditData();
  }, [editData]);

  // //개별 input data를 pledgeData Array로 모으기
  useEffect(() => {
    if (!isReady) return;
    if (nameArr && majorArr && studentNumArr && positionArr && imageArr) {
      const candidateData = initialData.map((_, i) => ({
        name: nameArr[i],
        major: majorArr[i],
        studentNum: Number(studentNumArr[i]),
        position: positionArr[i],
        picture: imageArr[i],
      }));
      getCandidateData(candidateData);
    }
  }, [nameArr, majorArr, studentNumArr, positionArr, imageArr]);

  const showCandidate = index => {
    return (
      <Grid container className={classes.section} key={index}>
        <Grid item className={classes.item} xs={12}>
          <Typography
            className={classes.sectionText}
            variant='h4'
            component='h4'
          >
            {TextData.sectionText.candidate}
          </Typography>
        </Grid>
        <IndividualCandidate
          index={Number(index)}
          titleText={TextData.titleText}
          handleImageArr={handleImageArr}
          handleUrlArr={handleUrlArr}
          image={imageArr[index]}
          url={urlArr[index]}
          candidateMajor={majorArr[index]}
          candidateName={nameArr[index]}
          candidateStudentNum={studentNumArr[index]}
          candidatePosition={positionArr[index]}
          handleMajorArr={handleMajorArr}
          handleNameArr={handleNameArr}
          handleStudentNumArr={handleStudentNumArr}
          handlePositionArr={handlePositionArr}
          majorData={data}
          loading={loading}
        />
      </Grid>
    );
  };

  return <Grid container>{initialData.map((d, i) => showCandidate(i))}</Grid>;
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
export default withStyles(styles)(CandidateForm);
