import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const StyledButton = props => {
  const { classes, children, color } = props;

  return (
    <Button
      className={classes.button}
      variant='contained'
      style={{ backgroundColor: color }}
    >
      {children}
    </Button>
  );
};

const styles = theme => ({
  button: {
    width: '50px',
    height: '50px',
    borderRadius: '15px',
    fontSize: '1.2rem',
    margin: '15px',
    color: 'white',
  },
});
export default withStyles(styles)(StyledButton);
