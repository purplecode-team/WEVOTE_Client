import {
  createMuiTheme,
  createStyles,
  ThemeProvider,
  withStyles,
} from '@material-ui/core/styles';

import Calender from './Calender';
import Candidate from './Candidate';
import { cloneDeep } from 'lodash';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Information from './Information';
import media from '../../lib/styles/media';
import { MenuData } from './MenuData';
import Navigator from './Navigator';
import Notice from './Notice';
import PledgeBoard from './PledgeBoard';
import PropTypes from 'prop-types';
import React from 'react';
import { useState } from 'react';

function AdminLayout (props) {
  const { classes } = props;
  const [menus, setMenus] = useState(MenuData);
  const [currentMenuId, setCurrentMenuId] = useState(1);
  const [smallMenu, setSmallMenu] = useState(
    menus[currentMenuId - 1].smallMenu
  );
  const [currentSmallMenuId, setCurrentSmallMenuId] = useState(1);

  const Contents = [
    { id: 1, component: <Notice /> },
    { id: 2, component: <Calender /> },
    { id: 3, component: <Candidate currentSmallMenuId={currentSmallMenuId} /> },
    { id: 4, component: <Information /> },
    { id: 5, component: <PledgeBoard /> },
  ];

  // 클릭한 메뉴를 active true로 변경, 나머지는 false
  // active 상태의 소메뉴 id 세팅
  const handleMenus = e => {
    const copyMenus = cloneDeep(menus);
    const newMenus = copyMenus.map(obj => {
      if (e.target.innerText === obj.name) {
        obj.active = true;
        setCurrentMenuId(obj.id);
        setSmallMenu(copyMenus[obj.id - 1].smallMenu);
      } else {
        obj.active = false;
      }
      return obj;
    });
    setMenus(newMenus);
  };

  const handleCurrentSmallMenu = e => {
    const newSmallMenu = smallMenu.map(obj => {
      if (e.target.innerText === obj.name) {
        obj.active = true;
        setCurrentSmallMenuId(obj.id);
      } else {
        obj.active = false;
      }
      return obj;
    });
    setSmallMenu(newSmallMenu);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <nav className={classes.drawer}>
          <Hidden xsDown implementation='css'>
            <Navigator
              PaperProps={{ style: { width: drawerWidth } }}
              menus={menus}
              handleMenus={handleMenus}
              handleCurrentSmallMenu={handleCurrentSmallMenu}
            />
          </Hidden>
        </nav>
        <div className={classes.app}>
          <main className={classes.main}>
            {
              Contents.filter(component => component.id === currentMenuId)[0]
                .component
            }
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#AE9EFF',
      main: '#5d3fe8',
      dark: '#252c44',
      background: '#F6F3FD',
    },
  },
});

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        position: 'absolute',
        backgroundColor: theme.palette.primary.background,
      },
    },
  },
};

const drawerWidth = 256;

const styles = createStyles({
  root: {
    width: media.laptop,
    margin: '0 auto',
    display: 'flex',
    minHeight: '100vh',
    position: 'relative',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    zIndex: 1,
  },
  app: {
    width: '100%',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
    padding: theme.spacing(6, 4),
    background: '#FAFAFA',
  },
});

AdminLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminLayout);
