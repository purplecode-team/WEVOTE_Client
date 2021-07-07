import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ImageUploader from 'react-images-upload';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';

function InformationForm (props) {
  const { classes } = props;
  const [pictures, setPictures] = useState([]);

  const onDrop = picture => {
    setPictures(picture);
    console.log(picture);
  };

  const submitImg = () => {
    const formData = new FormData();
    formData.append('img', pictures);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    try {
      client
        .post('/api/v1/register-info', formData, config)
        .then(response => {
          if (response.status !== 200) {
            alert('이미지 등록 실패');
            return;
          }
          setFile(null);
          alert('이미지가 등록되었습니다');
        })
        .catch(error => {
          alert('이미지 등록 실패');
        });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Paper className={classes.paper}>
      <div className={classes.contentWrapper}>
        <form onSubmit={submitImg}>
          {/* <Calender fileUrl={fileUrl} /> */}
          <ImageUploader
            {...props}
            className={classes.uploader}
            withIcon
            buttonText='Choose images'
            onChange={onDrop}
            imgExtension={['.jpg', '.gif', '.png', '.gif']}
            maxFileSize={5242880}
            withPreview
          />
          <Grid item xs={12} className={classes.buttonWrap}>
            <Button
              className={classes.submit}
              variant='contained'
              color='primary'
              type='submit'
            >
              등록
            </Button>
          </Grid>
        </form>
      </div>
    </Paper>
  );
}

const styles = theme => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
  },
  contentWrapper: {
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
