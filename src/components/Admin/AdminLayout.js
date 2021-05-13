import React from 'react';
import { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  createMuiTheme,
  createStyles,
  ThemeProvider,
  withStyles,
} from '@material-ui/core/styles';
import PeopleIcon from '@material-ui/icons/People';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import PermMediaOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActual';
import PublicIcon from '@material-ui/icons/Public';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Navigator from './Navigator';
import Notice from './Notice';
import Information from './Information';
import Calender from './Calender';
import Candidate from './Candidate';
import PledgeBoard from './PledgeBoard';
import media from '../../lib/styles/media';

const initialMenus = [
  { id: 1, name: '공지사항 관리', icon: <PeopleIcon />, active: false },
  { id: 2, name: '캘린더 관리', icon: <DnsRoundedIcon />, active: false },
  {
    id: 3,
    name: '메인 선거 정보 관리',
    icon: <PermMediaOutlinedIcon />,
    active: false,
  },
  {
    id: 4,
    name: '후보자 관리',
    icon: <PublicIcon />,
    active: true,
    detail: [
      { id: 6, name: '세부 조직 등록', active: false },
      { id: 7, name: '중앙자치기구', active: true },
      { id: 8, name: '단과대', active: false },
      { id: 9, name: '학과', active: false },
    ],
  },
  {
    id: 5,
    name: '공약 게시판 관리',
    icon: <SettingsEthernetIcon />,
    active: false,
  },
];

const Content = [
  { id: 1, component: <Notice /> },
  { id: 2, component: <Calender /> },
  { id: 3, component: <Information /> },
  { id: 4, component: <Candidate /> },
  { id: 5, component: <PledgeBoard /> },
];

const initialCurrentId = () => {
  return initialMenus.filter(obj => obj.active)[0].id;
};
function AdminLayout (props) {
  const { classes } = props;
  const [currentId, setCurrentId] = useState(initialCurrentId);
  const [menus, setMenus] = useState(initialMenus);

  const handleMenus = e => {
    const newMenus = menus.map(obj => {
      if (e.target.innerText === obj.name) {
        obj.active = true;
        setCurrentId(obj.id);
      } else {
        obj.active = false;
      }
      return obj;
    });
    setMenus(newMenus);
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
            />
          </Hidden>
        </nav>
        <div className={classes.app}>
          <main className={classes.main}>
            {
              Content.filter(component => component.id === currentId)[0]
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
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        position: 'absolute',
        backgroundColor: '#F6F3FD',
      },
    },
    MuiButton: {
      label: {
        textTransform: 'none',
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing(1),
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white,
      },
    },
    MuiTab: {
      root: {
        textTransform: 'none',
        margin: '0 16px',
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up('md')]: {
          padding: 0,
          minWidth: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(1),
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: '#F6F3FD',
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    MuiListItemIcon: {
      root: {
        color: theme.palette.primary.white,
        marginRight: 0,
        '& svg': {
          fontSize: 20,
        },
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
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
  },
  app: {
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
