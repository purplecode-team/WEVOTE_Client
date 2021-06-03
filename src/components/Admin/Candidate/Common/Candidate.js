import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ImageUploader from 'react-images-upload';

const Candidate = props => {
  const {
    id,
    classes,
    titleText,
    handlePictrueArr,
    handleMajorArr,
    handleNameArr,
    handleStudentNumberArr,
    handlePositionArr,
    majorData,
  } = props;
  const [pictures, setPictures] = useState([]);
  const [individualName, setIndividualName] = useState('');
  const [individualMajor, setIndividualMajor] = useState('');
  const [individualStudentNumber, setIndividualStudentNumber] = useState('');
  const [individualPosition, setIndividualPosition] = useState('');

  const handlePicture = picture => {
    setPictures(picture[0]);
    handlePictrueArr(id, picture[0]);
  };

  const handleName = e => {
    setIndividualName(e.target.value);
    handleNameArr(id, e.target.value);
  };

  const handleStudentNumber = e => {
    setIndividualStudentNumber(e.target.value);
    handleStudentNumberArr(id, e.target.value);
  };

  const handleMajor = e => {
    setIndividualMajor(e.target.value);
    handleMajorArr(id, e.target.value);
  };

  const handlePosition = e => {
    setIndividualPosition(e.target.value);
    handlePositionArr(id, e.target.value);
  };

  return (
    <Grid container wrap='nowrap'>
      <Grid item className={classes.item} xs={12}>
        <Typography className={classes.titleText} variant='h4' component='h4'>
          {titleText.candidate.image}
        </Typography>
        <ImageUploader
          className={classes.uploader}
          withIcon={true}
          buttonText='사진 업로드'
          onChange={handlePicture}
          imgExtension={['.jpg', '.gif', '.png', '.gif']}
          maxFileSize={5242880}
        />
      </Grid>
      <Grid container>
        <Grid item className={classes.item} xs={12}>
          <Typography className={classes.titleText} variant='h4' component='h4'>
            {titleText.candidate.name}
          </Typography>
          <TextField
            id='outlined-basic'
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
            id='outlined-basic'
            placeholder='ex) 21'
            variant='outlined'
            value={individualStudentNumber}
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
              id='demo-simple-select-outlined'
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
            id='outlined-basic'
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
export default withStyles(styles)(Candidate);
