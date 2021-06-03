import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import defaultImg from '../../../../public/img/Calender.svg';
import styled from 'styled-components';
import Department from '../Candidate/Department';

const useStyles = makeStyles({
  root: {
    width: '50%',
  },
});

export default function CalenderPreview ({ fileUrl }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {fileUrl ? (
        <Img src={fileUrl} alt='calender' />
      ) : (
        <Img src={defaultImg} alt='calender' />
      )}
    </Card>
  );
}

const Img = styled.img`
  width: 100%;
`;
