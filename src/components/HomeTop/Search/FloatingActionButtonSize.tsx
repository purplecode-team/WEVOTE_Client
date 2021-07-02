import React, { useState } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import SearchBox from './SearchBox';
import closeIcon from '../../../../public/img/close.svg';

const useStyles = makeStyles((theme) =>
  createStyles({
    onButton: {
      display: 'none',
    },
    offButton: {
      position: 'fixed',
      top: '94px',
      right: '14px',
      zIndex: 1000,
      margin: theme.spacing(1),
    },
    onModal: {
      display: 'block',
    },
    offModal: {
      display: 'none',
    },
  })
);

export default function FloatingActionButtonSize() {
  const classes = useStyles();
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <ModalBox className={active ? classes.onModal : classes.offModal}>
          <IconArea onClick={handleActive}>
            <CloseIcon />
          </IconArea>
          <SearchBox />
        </ModalBox>
        <Fab
          onClick={handleActive}
          size="small"
          color="secondary"
          aria-label="add"
          className={active ? classes.onButton : classes.offButton}
        >
          <SearchIcon />
        </Fab>
      </ThemeProvider>
    </>
  );
}

const theme = createMuiTheme({
  overrides: {
    MuiFab: {
      root: {
        boxShadow: '0px 0px 4px 4px rgba(93, 63, 232, 0.25)',
      },
      secondary: {
        color: '#5D3FE8',
        backgroundColor: 'white',
      },
    },
    MuiSvgIcon: {
      root: {
        fill: '#5D3FE8',
        width: '22px',
        height: '22px',
      },
    },
  },
});

const ModalBox = styled.div`
  position: fixed;
  top: 30%;
  left: 10%;
  width: 80%;
  height: 300px;
  background-color: #e8e2ff;
  border-radius: 20px;
  border: 2px solid #2d2f7e;
`;

const IconArea = styled.div`
  position: absolute;
  right: 18px;
  top: 18px;
  width: 22px;
  height: 22px;
`;
const CloseIcon = styled.img.attrs({
  src: closeIcon,
  alt: 'close icon',
})`
  width: 100%;
`;
