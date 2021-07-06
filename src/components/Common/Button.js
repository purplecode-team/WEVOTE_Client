import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const StyledButton = props => {
  const { type } = props;

  return (
    <Grid item xs={12} className={classes.button}>
      <Button
        className={classes.submit}
        variant='contained'
        color='primary'
        type={type}
      >
        {children}
      </Button>
    </Grid>
  );
};

const styles = theme => ({
  button: {
    textAlign: 'right',
  },
  submit: {
    width: '100px',
    height: '40px',
    borderRadius: '15px',
  },
});
export default withStyles(styles)(StyledButton);
