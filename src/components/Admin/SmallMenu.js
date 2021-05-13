import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { createStyles, withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const SmallMenu = props => {
  const { classes, data } = props;
  const [smallMenu, setSmallMenu] = useState(data);

  const handleCurrent = e => {
    const newMenu = smallMenu.map(obj => {
      if (e.target.innerText === obj.name) {
        obj.active = true;
      } else {
        obj.active = false;
      }
      return obj;
    });
    setSmallMenu(newMenu);
  };

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
            onClick={handleCurrent}
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
