import { useEffect, useState } from 'react';

import Button from '@material-ui/core/Button';
import client from '../../../lib/api/client';
import Grid from '@material-ui/core/Grid';
import imageCompression from 'browser-image-compression';
import ImageUploader from '../Common/ImageUploader';
import Loader from '../../Common/Loader';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useAlert } from 'react-alert';
import useFetch from '../../../lib/hooks/useFetch';
import { withStyles } from '@material-ui/core/styles';

function Canlender (props) {
  const { classes } = props;
  const [{ loading, data, error }, setUrl] = useFetch({
    initialUrl: '/api/v1/main/calendar',
    initialData: { id: 0, image: '' },
  });
  const [file, setFile] = useState('');
  const [fileUrl, setFileUrl] = useState('');
  const [isLoading, setIsLoading] = useState(loading);
  const alert = useAlert();

  const isDefault = fileUrl === '';

  // DB에 등록된 데이터의 이미지가 미리보기에 보여지고 있을 때만 삭제 버튼 생성하기 위함
  const activeDeletion = data && data.image === fileUrl;

  const processImage = e => {
    const imageFile = e.target.files[0];
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 700,
      useWebWorker: true,
    };
    imageCompression(imageFile, options).then(compressedFile => {
      const imageUrl = URL.createObjectURL(compressedFile);
      setFileUrl(imageUrl);
      setFile(compressedFile);
    });
  };

  const submitForm = async e => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append('img', file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    await client
      .post('/api/v1/admin/calendar', formData, config)
      .then(response => {
        if (response.status !== 200) {
          alert.error('이미지 등록 실패');
          return;
        }
        alert.success('이미지가 등록되었습니다');
      })
      .catch(e => {
        alert.error('이미지 등록 실패');
      });
    setIsLoading(false);
  };

  const deleteImg = async () => {
    setIsLoading(true);
    await client
      .delete('/api/v1/admin/calendar')
      .then(response => {
        alert.success('이미지 삭제 완료');
        resetImg();
      })
      .catch(e => alert.error('이미지 삭제 실패'));
    setIsLoading(false);
  };

  const resetImg = () => {
    setFile('');
    setFileUrl('');
  };

  useEffect(() => {
    setFileUrl(data.image);
    return () => setFileUrl(data.image);
  }, [data]);

  useEffect(() => {
    if (!loading) setIsLoading(false);
    return () => setIsLoading(false);
  }, [loading]);

  return (
    <Paper className={classes.paper}>
      <Typography className={classes.title} variant='h4' component='h4'>
        캘린더 등록
      </Typography>
      {isLoading ? (
        <Loader />
      ) : (
        <form onSubmit={submitForm}>
          <ImageUploader
            alt={'calender'}
            fileUrl={fileUrl}
            resetImg={resetImg}
            processImage={processImage}
            width={'250px'}
            heigth={'250px'}
          />
          <Grid item xs={12} className={classes.buttonWrap}>
            {activeDeletion && (
              <Button
                className={classes.button}
                variant='contained'
                color='primary'
                type='button'
                onClick={deleteImg}
              >
                삭제
              </Button>
            )}
            <Button
              className={classes.button}
              variant='contained'
              color='primary'
              type='submit'
              disabled={isDefault}
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
  button: {
    width: '100px',
    height: '40px',
    borderRadius: '15px',
    margin: '0 10px',
  },
  closeButton: {
    width: '20px',
    height: '20px',
    color: 'white',
    fontSize: '1.3rem',
    position: 'absolute',
    zIndex: '1',
    top: '20px',
    left: '20px',
  },
});

Canlender.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Canlender);
