import { useEffect, useState } from 'react';

import Button from '@material-ui/core/Button';
import CalenderPreview from './CalenderPreview';
import client from '../../../lib/api/client';
import Grid from '@material-ui/core/Grid';
import Loader from '../../Common/Loader';
import Paper from '@material-ui/core/Paper';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { useAlert } from 'react-alert';
import useFetch from '../../../lib/hooks/useFetch';
import { withStyles } from '@material-ui/core/styles';

function Canlender (props) {
  const { classes } = props;
  const { loading, fetchData, error } = useFetch('/api/v1//main/calender');
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  const alert = useAlert();

  const processImage = e => {
    const imageFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setFileUrl(imageUrl);
    setFile(imageFile);
  };

  const submitForm = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('img', file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    client
      .post('/api/v1/calendar', formData, config)
      .then(response => {
        if (response.status !== 200) {
          alert.error('이미지 등록 실패');
          return;
        }
        setFile(null);
        alert.success('이미지가 등록되었습니다');
      })
      .catch(e => {
        alert.error('이미지 등록 실패');
      });
  };

  const deleteImg = () => {
    client
      .delete('/api/v1/calender')
      .then(response => {
        alert.success('이미지 삭제 완료');
        setFile(null);
        setFileUrl(null);
      })
      .catch(e => alert.error('이미지 삭제 실패'));
  };

  useEffect(() => {
    if (error) alert.error('이미지 불러오기 실패');
    if (fetchData) setFileUrl(fetchData.image);
  }, [fetchData, error]);

  return (
    <Paper className={classes.paper}>
      <Typography className={classes.title} variant='h4' component='h4'>
        캘린더 등록
      </Typography>
      {loading ? (
        <Loader />
      ) : (
        <form onSubmit={submitForm}>
          <div className={classes.contentWrapper}>
            <CalenderPreview fileUrl={fileUrl} />
            <ButtonBlock>
              <Label className='input-file-button' htmlFor='input-file'>
                <PhotoCameraIcon />
                <span>이미지 업로드</span>
              </Label>
              <Input
                id='input-file'
                type='file'
                accept='image/*'
                onChange={processImage}
              />
            </ButtonBlock>
          </div>
          <Grid item xs={12} className={classes.buttonWrap}>
            <Button
              className={classes.submit}
              variant='contained'
              color='primary'
              type='button'
              onClick={deleteImg}
            >
              삭제
            </Button>
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
      )}
    </Paper>
  );
}

const styles = theme => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
  },
  title: {
    textAlign: 'center',
    margin: '40px',
    fontWeight: 'bold',
    color: '#5d3fe8',
    fontFamily: 'paybooc-medium',
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
    justifyContent: 'start',
    margin: '80px 40px',
  },
  uploader: {
    width: '45%',
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
const ButtonBlock = styled.div`
  width: 50%;
  text-align: center;
`;

const Label = styled.label`
  margin: 0 auto;
  border: 1px solid gray;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  color: white;
  background-color: #252c44;
  &:hover {
    cursor: pointer;
  }
`;

const Input = styled.input`
  display: none;
`;

Canlender.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Canlender);
