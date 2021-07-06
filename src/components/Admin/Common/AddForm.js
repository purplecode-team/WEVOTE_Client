import { createStyles, withStyles } from '@material-ui/core/styles';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import theme from '../../../lib/styles/theme';
import { useState } from 'react';

function AddBox (props) {
  const { classes, component } = props;
  const [modal, setModal] = useState(false);

  const showForm = () => {
    setModal(!modal);
  };

  return (
    <>
      <Paper className={classes.paper}>
        <div className={classes.contentWrapper}>
          {modal ? (
            <>
              <RemoveCircleIcon
                className={classes.addIcon}
                onClick={showForm}
              />
              <h2 className={classes.title}>닫기</h2>
            </>
          ) : (
            <>
              <AddCircleIcon className={classes.addIcon} onClick={showForm} />
              <h2 className={classes.title}>추가하기</h2>
            </>
          )}
        </div>
      </Paper>
      {modal && component}
    </>
  );
}

const styles = createStyles({
  paper: {
    maxWidth: 936,
    margin: '20px auto',
    overflow: 'hidden',
    boxShadow: `0px 2px 13px rgba(42, 64, 139, 0.3)`,
    borderRadius: `15px`,
  },
  contentWrapper: {
    margin: '40px 16px',
    textAlign: 'center',
  },
  title: {
    fontSize: '1.3rem',
    color: theme.Blue,
  },
  addIcon: {
    width: '42px',
    height: '42px',
    color: theme.Blue,
  },
});

AddBox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddBox);
