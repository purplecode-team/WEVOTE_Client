import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { createStyles, withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const SmallMenu = props => {
  const { classes, smallMenu, handleCurrentSmallMenu } = props;

  return (
    <>
      {smallMenu &&
        smallMenu.map(obj => (
          <ListItem
            key={obj.id}
            className={clsx(
              classes.smallItem,
              obj.active && classes.activeItem
            )}
            button
            onClick={handleCurrentSmallMenu}
          >
            <ListItemText primary={obj.name} />
          </ListItem>
        ))}
    </>
  );
};

const styles = createStyles({
  smallItem: {
    height: '50px',
    paddingLeft: '65px',
  },
  activeItem: {
    background: '#EAE3FF',
  },
});

export default withStyles(styles)(SmallMenu);
