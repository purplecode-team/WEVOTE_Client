import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import ImageUploader from 'react-images-upload';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: 'block',
  },
  addUser: {
    marginRight: theme.spacing(1),
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: '40px 16px',
  },
  uploader: {
    width: '100%',
  },
  buttonWrap: {
    textAlign: 'right',
    margin: '20px',
  },
  submit: {
    width: '100px',
    height: '40px',
    borderRadius: '15px',
  },
});

function InformationForm (props) {
  const { classes } = props;
  const [pictures, setPictures] = useState([]);

  const onDrop = picture => {
    setPictures([...pictures, picture]);
    console.log([...pictures, picture]);
  };

  return (
    <Paper className={classes.paper}>
      <div className={classes.contentWrapper}>
        {/* <Calender fileUrl={fileUrl} /> */}
        <ImageUploader
          {...props}
          className={classes.uploader}
          withIcon={true}
          buttonText='Choose images'
          onChange={onDrop}
          imgExtension={['.jpg', '.gif', '.png', '.gif']}
          maxFileSize={5242880}
          withPreview={true}
        />
      </div>
      <Grid item xs={12} className={classes.buttonWrap}>
        <Button
          className={classes.submit}
          variant='contained'
          color='primary'
          type='submit'
        >
          {'등록'}
        </Button>
      </Grid>
    </Paper>
  );
}
const PreviewImg = styled.img`
  height: 200px;
`;

const Input = styled.input`
  margin: 20px auto;
`;

InformationForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InformationForm);
