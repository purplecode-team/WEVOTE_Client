import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CalenderImg from '../../../../public/img/Calender.svg';

const useStyles = makeStyles({
  root: {
    width: '45%',
  },
});

export default function SimpleCard () {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <img src={CalenderImg} alt='calender' />
      </CardContent>
    </Card>
  );
}
