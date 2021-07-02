import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import styled from 'styled-components';
import defaultImg from '../../../../public/img/noimg.jpg';
import Department from '../Candidate/Department';

const useStyles = makeStyles({
  root: {
    width: '50%',
  },
});

export default function CalenderPreview({ fileUrl }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {fileUrl ? (
        <Img src={fileUrl} alt="calender" />
      ) : (
        <Img src={defaultImg} alt="calender" />
      )}
    </Card>
  );
}

const Img = styled.img`
  width: 100%;
`;
