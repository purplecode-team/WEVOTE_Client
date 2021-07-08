import Card from '@material-ui/core/Card';
import defaultImg from '../../../../public/img/noimg.jpg';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import styled from 'styled-components';

const useStyles = makeStyles({
  root: {
    width: '50%',
  },
});

export default function CalenderPreview ({ fileUrl }) {
  const classes = useStyles();

  const handleImgError = e => {
    e.target.src = defaultImg;
  };

  return (
    <Box>
      {fileUrl ? (
        <Img src={fileUrl} alt='calender' onError={handleImgError} />
      ) : (
        <Img src={defaultImg} alt='calender' />
      )}
    </Box>
  );
}

const Box = styled.div`
  width: 50%;
  overflow: hidden;
  border-radius: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const Img = styled.img`
  width: 100%;
  border-radius: 20px;
`;
