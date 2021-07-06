import { createStyles, makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import React from 'react';

const StyledButton = props => {
  const classes = useStyles();
  const { type, children } = props;

  return (
    <Button
      className={classes.submit}
      variant='contained'
      color='primary'
      type={type}
    >
      {children}
    </Button>
  );
};
const useStyles = makeStyles(theme =>
  createStyles({
    button: {
      textAlign: 'right',
    },
    submit: {
      width: '100px',
      height: '40px',
      borderRadius: '15px',
    },
  })
);

export default StyledButton;
