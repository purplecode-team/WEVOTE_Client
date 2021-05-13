import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Calender from './Calender';
import ImageUploader from 'react-images-upload';

const styles = theme => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: 'block',
  },
  addUser: {
    marginRight: theme.spacing(1),
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: '40px 16px',
  },
  uploader: {
    width: '45%',
  },
});

function Canlender (props) {
  const { classes } = props;
  const [pictures, setPictures] = useState([]);

  const onDrop = picture => {
    setPictures([...pictures, picture]);
    console.log(picture);
  };

  return (
    <Paper className={classes.paper}>
      <div className={classes.contentWrapper}>
        <Calender />
        <ImageUploader
          {...props}
          className={classes.uploader}
          withIcon={true}
          buttonText='Choose images'
          onChange={onDrop}
          imgExtension={['.jpg', '.gif', '.png', '.gif']}
          maxFileSize={5242880}
        />
      </div>
    </Paper>
  );
}

Canlender.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Canlender);
