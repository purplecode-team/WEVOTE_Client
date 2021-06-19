import React from 'react';
import { useState } from 'react';
import theme from '../../../lib/styles/theme';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { createStyles, withStyles } from '@material-ui/core/styles';
import NoticeForm from './NoticeForm';

function AddBox (props) {
  const { classes } = props;
  const [modal, setModal] = useState(false);

  const showNoticeForm = () => {
    setModal(!modal);
  };

  return (
    <>
      <Paper className={classes.paper}>
        <div className={classes.contentWrapper}>
          <AddCircleIcon className={classes.addIcon} onClick={showNoticeForm} />
          {modal ? (
            <h2 className={classes.title}>닫기</h2>
          ) : (
            <h2 className={classes.title}>추가하기</h2>
          )}
        </div>
      </Paper>
      {modal && <NoticeForm />}
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
