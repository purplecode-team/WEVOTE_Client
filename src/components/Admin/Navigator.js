import React, { useEffect, useState } from 'react';

import clsx from 'clsx';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';
import SmallMenu from './SmallMenu';
import { withStyles } from '@material-ui/core/styles';

function Navigator (props) {
  const {
    classes,
    menus,
    handleMenus,
    handleCurrentSmallMenu,
    ...other
  } = props;

  return (
    <Drawer variant='permanent' {...other}>
      <List className={classes.paper} disablePadding>
        <ListItem className={clsx(classes.firebase, classes.itemCategory)}>
          안녕하세요
        </ListItem>
        <>
          {menus &&
            menus.map(({ id, name, icon, active, smallMenu }) => (
              <div key={id}>
                <ListItem
                  button
                  className={clsx(
                    classes.item,
                    active && classes.itemActiveItem
                  )}
                  onClick={e => handleMenus(e)}
                >
                  <ListItemIcon className={classes.itemIcon}>
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.itemPrimary,
                    }}
                  >
                    {name}
                  </ListItemText>
                </ListItem>
                {smallMenu && active && (
                  <SmallMenu
                    handleCurrentSmallMenu={handleCurrentSmallMenu}
                    smallMenu={smallMenu}
                  />
                )}
              </div>
            ))}
          <Divider className={classes.divider} />
        </>
      </List>
    </Drawer>
  );
}

const styles = theme => ({
  paper: {
    zIndex: 1,
  },
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
  smallMenu: {
    height: '50px',
    paddingLeft: '65px',
  },
  MuiTypography: {
    root: {
      fontSize: '16px',
    },
  },
});

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigator);
