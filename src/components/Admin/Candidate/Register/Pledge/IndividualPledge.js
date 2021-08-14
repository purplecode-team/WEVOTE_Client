import React, { useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const Pledge = props => {
  const {
    classes,
    index,
    titleText,
    editTitle,
    editSubTitle,
    editDescription,
    handleTitleArr,
    handleSubTitleArr,
    handleDescriptionArr,
  } = props;
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitle = e => {
    setTitle(e.target.value);
    handleTitleArr(index, e.target.value);
  };
  const handleSubTitle = e => {
    setSubTitle(e.target.value);
    handleSubTitleArr(index, e.target.value);
  };
  const handleDescription = e => {
    setDescription(e.target.value);
    handleDescriptionArr(index, e.target.value);
  };

  useEffect(() => {
    if (!editTitle) return;
    setTitle(editTitle);
    setSubTitle(editSubTitle);
    setDescription(editDescription);
    return () => {
      setTitle('');
      setSubTitle('');
      setDescription('');
    };
  }, [editTitle, editSubTitle, editDescription]);

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
