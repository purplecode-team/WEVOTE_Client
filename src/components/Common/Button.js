import { createStyles, makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import React from 'react';

const StyledButton = props => {
  const classes = useStyles();
  const { type, disabled, onClick, children } = props;

  return (
    <Button
      className={classes.button}
      variant='contained'
      color='primary'
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
const useStyles = makeStyles(theme =>
  createStyles({
    button: {
      width: '100px',
      height: '40px',
      borderRadius: '15px',
      filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    },
  })
);

export default StyledButton;
