import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

function Navigator (props) {
  const { classes, categories, handleCategory, ...other } = props;

  return (
    <Drawer variant='permanent' {...other}>
      <List disablePadding>
        <ListItem className={clsx(classes.firebase, classes.itemCategory)}>
          안녕하세요
        </ListItem>
        <React.Fragment>
          {categories &&
            categories.map(({ id, name, icon, active }) => (
              <ListItem
                key={id}
                button
                className={clsx(classes.item, active && classes.itemActiveItem)}
                onClick={e => handleCategory(e)}
              >
                <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.itemPrimary,
                  }}
                >
                  {name}
                </ListItemText>
              </ListItem>
            ))}
          <Divider className={classes.divider} />
        </React.Fragment>
      </List>
    </Drawer>
  );
}

const styles = theme => ({
  categoryHeader: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.black,
  },
  item: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 30,
    color: theme.palette.common.black,
    '&:hover,&:focus': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
  },
  itemCategory: {
    backgroundColor: theme.palette.primary.background,
    boxShadow: '0 -1px 0 #cccccc inset',
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
  firebase: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.palette.common.black,
  },
  itemActiveItem: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  itemPrimary: {
    fontSize: 13,
  },
  itemIcon: {
    minWidth: 'auto',
    marginRight: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
  },
});

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigator);
