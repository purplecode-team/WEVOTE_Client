import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import ImageUploader from 'react-images-upload';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import Typography from '@material-ui/core/Typography';
import CalenderPreview from './CalenderPreview';
import client from '../../../lib/api/client';

function Canlender (props) {
  const { classes } = props;
  const [data, setData] = useState({ image: '/' });
  // const { loading, data, error } = useFetch('/api/v1//main/calender');
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);

  useEffect(() => {
    const response = client.get('http://34.64.235.182/api/v1//main/calender');
    if (!response.data) return;
    setData(response.data);
  }, []);

  function processImage (event) {
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setFileUrl(imageUrl);
    setFile(imageFile);
  }

  useEffect(() => {
    setFileUrl(data.image);
  }, [data]);

  const submitForm = () => {
    const formData = new FormData();
    formData.append('img', file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    try {
      client
        .post('/api/v1/register-calendar', formData, config)
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
    console.log('이미지 등록 실행');
  };

  return (
    <Paper className={classes.paper}>
      <Typography className={classes.title} variant='h4' component='h4'>
        캘린더 등록
      </Typography>
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
            type='submit'
          >
            등록
          </Button>
        </Grid>
      </form>
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
    margin: '40px 16px',
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
