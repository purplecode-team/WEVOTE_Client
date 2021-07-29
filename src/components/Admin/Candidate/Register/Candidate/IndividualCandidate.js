import React, { useEffect, useState } from 'react';

import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import ImageUploader from '../../../Common/ImageUploader';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const IndividualCandidate = props => {
  const {
    index,
    classes,
    titleText,
    candidateMajor,
    candidateName,
    candidateStudentNum,
    candidatePosition,
    handleImageArr,
    handleUrlArr,
    handleMajorArr,
    handleNameArr,
    handleStudentNumArr,
    handlePositionArr,
    majorData,
    image,
    url,
  } = props;
  const [individualName, setIndividualName] = useState('');
  const [individualMajor, setIndividualMajor] = useState('');
  const [individualStudentNum, setIndividualStudentNum] = useState('');
  const [individualPosition, setIndividualPosition] = useState('');

  const handleName = e => {
    setIndividualName(e.target.value);
    handleNameArr(index, e.target.value);
  };

  const handleStudentNumber = e => {
    setIndividualStudentNum(e.target.value);
    handleStudentNumArr(index, e.target.value);
  };

  const handleMajor = e => {
    setIndividualMajor(e.target.value);
    handleMajorArr(index, e.target.value);
  };

  const handlePosition = e => {
    setIndividualPosition(e.target.value);
    handlePositionArr(index, e.target.value);
  };
  const processImage = e => {
    const imageFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);

    const reader = new FileReader();
    reader.readAsDataURL(imageFile);

    reader.onloadend = () => {
      const base64data = reader.result;
      handleImageArr(index, base64data);
    };

    handleUrlArr(index, imageUrl);
  };
  const resetImg = () => {
    handleUrlArr(index, '');
  };

  useEffect(() => {
    setIndividualMajor(candidateMajor);
    setIndividualName(candidateName);
    setIndividualPosition(candidatePosition);
    setIndividualStudentNum(candidateStudentNum);
  }, [candidateStudentNum]);

  useEffect(() => {
    handleUrlArr(index, url);
  }, [url]);

  return (
    <Grid container wrap='nowrap'>
      <Grid item className={classes.item} xs={12}>
        <Typography className={classes.titleText} variant='h4' component='h4'>
          {titleText.candidate.image}
        </Typography>
        <ImageUploader
          alt={`candidate-${index}`}
          fileUrl={url}
          resetImg={resetImg}
          processImage={processImage}
          width={'200px'}
          height={'auto'}
        />
      </Grid>
      <Grid container>
        <Grid item className={classes.item} xs={12}>
          <Typography className={classes.titleText} variant='h4' component='h4'>
            {titleText.candidate.name}
          </Typography>
          <TextField
            index='outlined-basic'
            placeholder='ex) 홍길동'
            variant='outlined'
            value={individualName}
            onChange={handleName}
          />
        </Grid>
        <Grid item className={classes.item} xs={12}>
          <Typography className={classes.titleText} variant='h4' component='h4'>
            {titleText.candidate.studentNumber}
          </Typography>
          <TextField
            index='outlined-basic'
            placeholder='ex) 21'
            variant='outlined'
            value={individualStudentNum}
            onChange={handleStudentNumber}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item className={classes.item} xs={12}>
          <Typography className={classes.titleText} variant='h4' component='h4'>
            {titleText.candidate.major}
          </Typography>
          <FormControl
            variant='outlined'
            required
            className={classes.formControl}
          >
            <Select
              labelId='demo-simple-select-outlined-label'
              index='demo-simple-select-outlined'
              value={individualMajor}
              onChange={handleMajor}
              className={classes.selectEmpty}
            >
              {majorData &&
                majorData.map((data, i) => (
                  <MenuItem key={i} value={data}>
                    {data}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item className={classes.item} xs={12}>
          <Typography className={classes.titleText} variant='h4' component='h4'>
            {titleText.candidate.position}
          </Typography>
          <TextField
            index='outlined-basic'
            placeholder='ex) 정학생회장'
            variant='outlined'
            value={individualPosition}
            onChange={handlePosition}
          />
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
  uploader: {
    width: '200px',
    margin: '0 20px',
    border: '1px solid #ccc',
    borderRadius: '15px',
    textAlign: 'center',
  },
});
export default withStyles(styles)(IndividualCandidate);