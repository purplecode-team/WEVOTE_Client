import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const Pledge = props => {
  const {
    classes,
    id,
    titleText,
    handleTitleArr,
    handleSubTitleArr,
    handleDescriptionArr,
  } = props;
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitle = e => {
    setTitle(e.target.value);
    handleTitleArr(id, e.target.value);
  };
  const handleSubTitle = e => {
    setSubTitle(e.target.value);
    handleSubTitleArr(id, e.target.value);
  };
  const handleDescription = e => {
    setDescription(e.target.value);
    handleDescriptionArr(id, e.target.value);
  };
  return (
    <>
      <Grid container wrap='nowrap'>
        <Grid item className={classes.item} xs={12}>
          <Typography className={classes.titleText} variant='h4' component='h4'>
            {titleText.pledge.title}
          </Typography>
          <TextField
            className={classes.textField}
            id='outlined-full-width'
            placeholder='공약 제목을 입력하세요'
            margin='normal'
            value={title}
            onChange={handleTitle}
            InputLabelProps={{
              shrink: true,
            }}
            variant='outlined'
          />
        </Grid>
        <Grid item className={classes.item} xs={12}>
          <Typography className={classes.titleText} variant='h4' component='h4'>
            {titleText.pledge.smallTitle}
          </Typography>
          <TextField
            className={classes.textField}
            id='outlined-full-width'
            placeholder='공약 소제목을 입력하세요'
            margin='normal'
            value={subTitle}
            onChange={handleSubTitle}
            InputLabelProps={{
              shrink: true,
            }}
            variant='outlined'
          />
        </Grid>
      </Grid>
      <Grid item className={classes.item} xs={12}>
        <Typography className={classes.titleText} variant='h4' component='h4'>
          {titleText.pledge.description}
        </Typography>
        <TextField
          id='outlined-full-width'
          placeholder='공약 내용을 입력하세요'
          multiline
          fullWidth
          rows={10}
          margin='normal'
          value={description}
          onChange={handleDescription}
          InputLabelProps={{
            shrink: true,
          }}
          variant='outlined'
        />
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
});

export default withStyles(styles)(Pledge);
