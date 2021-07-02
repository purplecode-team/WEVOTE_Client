import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Candidate from './Candidate';
import * as TextData from './TextData';

const majorData = [
  '문예창작학과',
  '행정학과',
  '역사학과',
  '디자인학과',
  '금속공예학과',
  '조형학과',
  '기계자동차공학과',
  '건축공학과',
  '전자정보공학과',
];

const candidateCount = 2;

const CandidateForm = (props) => {
  const { classes, getCandidateData } = props;
  // input 상태 관리
  const [pictureArr, setPictureArr] = useState([Array(candidateCount)]);
  const [nameArr, setNameArr] = useState(Array(candidateCount));
  const [majorArr, setMajorArr] = useState(Array(candidateCount));
  const [studentNumberArr, setStudentNumberArr] = useState(
    Array(candidateCount)
  );
  const [positionArr, setPositionArr] = useState(Array(candidateCount));

  const numberArr = Array(candidateCount);
  for (let i = 0; i < numberArr.length; i++) {
    numberArr[i] = i;
  }

  // 후보 팀원 개별 정보 등록
  // 현재 이미지 재업로드 시, 리뉴얼 안 되는 이슈 있음.
  const handlePictrueArr = (id, picture) => {
    const newPictureArr = pictureArr.slice();
    newPictureArr.splice(id, 1, picture);
    setPictureArr(newPictureArr);
  };

  const handleNameArr = (id, value) => {
    const newNameArr = nameArr.slice();
    newNameArr[id] = value;
    setNameArr(newNameArr);
  };

  const handleStudentNumberArr = (id, value) => {
    const newStudentNumberArr = studentNumberArr.slice();
    newStudentNumberArr[id] = value;
    setStudentNumberArr(newStudentNumberArr);
  };

  const handleMajorArr = (id, value) => {
    const newMajorArr = majorArr.slice();
    newMajorArr[id] = value;
    setMajorArr(newMajorArr);
  };
  const handlePositionArr = (id, value) => {
    const newPositionArr = positionArr.slice();
    newPositionArr[id] = value;
    setPositionArr(newPositionArr);
  };

  // //개별 input data를 pledgeData Array로 모으기
  useEffect(() => {
    if (nameArr && majorArr && studentNumberArr && positionArr && pictureArr) {
      const CandidateData = numberArr.map((i) => ({
        name: nameArr[i],
        major: majorArr[i],
        studentNum: studentNumberArr[i],
        position: positionArr[i],
        picture: pictureArr[i],
      }));
      getCandidateData(CandidateData);
    }
  }, [nameArr, majorArr, studentNumberArr, positionArr, pictureArr]);

  const IndividualCandidate = (id) => {
    return (
      <Candidate
        key={id}
        id={Number(id)}
        titleText={TextData.titleText}
        handlePictrueArr={handlePictrueArr}
        pictureArr={pictureArr[id]}
        candidateMajor={majorArr[id]}
        candidateName={nameArr[id]}
        candidateStudentNumber={studentNumberArr[id]}
        handleMajorArr={handleMajorArr}
        handleNameArr={handleNameArr}
        handleStudentNumberArr={handleStudentNumberArr}
        handlePositionArr={handlePositionArr}
        majorData={majorData}
      />
    );
  };

  return (
    <Grid container>{numberArr.map((num) => IndividualCandidate(num))}</Grid>
  );
};

const styles = (theme) => ({});
export default withStyles(styles)(CandidateForm);
