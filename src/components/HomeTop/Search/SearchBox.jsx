/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';
import {
  createMuiTheme,
  createStyles,
  ThemeProvider,
  makeStyles,
} from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import media from '../../../lib/styles/media';
import deptData from '../../../api/SearchDept.json';
import info from '../../../pages/Info';

export default function AutoBox() {
  const department = [];

  // fetch('https://api.google.com/user/3')
  //   .then((res) => res.json())
  //   .then((res) => {
  //     if (res.success) {
  //       res.map((data) => {
  //         department.push({ value: data.id, title: data.name });
  //       });
  //     }
  //   });

  deptData.map((data) => {
    department.push({ value: data.id, title: data.name });
  });

  const [searchValue, setSearchValue] = useState({ id: 0, value: '' });

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    console.log(searchValue);
  }, [searchValue]);

  const selectWidth = () => {
    if (screen.width <= media.mobileL) return '90%';
    return 436;
  };

  const goLink = () => {
    console.log('클릭');
    console.log(searchValue);
    // history.push(`info/${searchValue.value}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <SearchBlock style={{ width: selectWidth() }}>
        <Autocomplete
          freeSolo
          id="custom-autocomplete"
          options={department.map((option) => option.title)}
          renderInput={(params) => {
            return (
              <TextField
                {...params}
                variant="outlined"
                value={searchValue}
                onChange={(event, newValue) => {
                  setSearchValue(newValue);
                }}
                InputProps={{ ...params.InputProps, type: 'search' }}
              />
            );
          }}
          renderOption={(option) => {
            return <h4>{`${option}`}</h4>; // display value
          }}
          PopperComponent={CustomPopper} // required (as far as I can tell) in order to target popper elements for custom styling
        />
        <IconBlock onClick={goLink}>
          <Icon />
        </IconBlock>
      </SearchBlock>
    </ThemeProvider>
  );
}
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& .MuiAutocomplete-listbox': {
        fontSize: '1.4rem',
      },
    },
  })
);

const CustomPopper = function (props) {
  const classes = useStyles();
  return <Popper {...props} className={classes.root} placement="bottom" />;
};

let theme = createMuiTheme({
  overrides: {
    MuiSvgIcon: {
      root: {
        fill: '#5D3FE8',
        width: '24px',
        height: '24px',
      },
    },
    MuiInputBase: {
      input: {
        backgroundColor: '#FFFFFF',
        fontSize: '1.3rem',
        '&::-webkit-search-cancel-button': {
          display: 'none',
        },
        '&::-webkit-search-results-button': {
          display: 'none',
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        backgroundColor: '#FFFFFF',
        borderRadius: '200px',
      },
    },
  },
});

const SearchBlock = styled.div`
  position: relative;
  margin-top: 52px;
  margin-left: 16px;
`;

const IconBlock = styled.div`
  position: absolute;
  display: flex;
  right: 9px;
  top: 12px;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  &:hover {
    cursor: pointer;
  }
`;

const Icon = styled(SearchIcon)``;
