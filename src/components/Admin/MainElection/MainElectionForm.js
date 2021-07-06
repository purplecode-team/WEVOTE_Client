import { createStyles, withStyles } from '@material-ui/core/styles';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import Select from '@material-ui/core/Select';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';

function MainEject (props) {
  const { classes } = props;
  const [notice, setNotice] = useState('');
  const [type, setType] = useState('단선');
  const [startDate, setStartDate] = useState(new Date('2021-11-14T21:11:54'));
  const [endDate, setEndDate] = useState(new Date('2021-11-19T21:11:54'));

  const handleInputText = e => {
    setNotice(e.target.value);
  };

  const handleType = e => {
    setType(e.target.value);
  };
  const handleStartDateChange = date => {
    setStartDate(date);
  };
  const handleEndDateChange = date => {
    setEndDate(date);
  };

  const submitForm = () => {
    const result = { text: notice, startDate, endDate };
    try {
      client
        .post('api/v1/admin/register-info', result)
        .then(response => {
          if (response.status !== 200) {
            alert('등록 실패');
            return;
          }
          setNotice('');
          alert('등록되었습니다');
          setState(new Number(0));
        })
        .catch(error => {
          alert('등록 실패');
        });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Paper className={classes.paper}>
        <div className={classes.contentWrapper}>
          <form className={classes.root} noValidate autoComplete='off'>
            <Grid item className={classes.item} xs={12}>
              <Typography className={classes.title} variant='h4' component='h4'>
                선거명
              </Typography>
              <TextField
                id='outlined-full-width'
                style={{ margin: 8 }}
                placeholder='ex. 총학생회 선거'
                margin='normal'
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{ classes: { input: classes.resize } }}
                variant='outlined'
                value={notice}
                onChange={handleInputText}
              />
            </Grid>

            <Grid item className={classes.item} xs={12}>
              <Typography className={classes.title} variant='h4' component='h4'>
                선거명
              </Typography>
              <FormControl
                required
                variant='outlined'
                className={classes.formControl}
              >
                <Select
                  labelId='demo-simple-select-required-label'
                  id='demo-simple-select-required'
                  value={type}
                  onChange={handleType}
                  className={classes.selectEmpty}
                >
                  <MenuItem value='단선'>단선</MenuItem>
                  <MenuItem value='경선'>경선</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item className={classes.item} xs={12}>
              <Typography className={classes.title} variant='h4' component='h4'>
                후보 팀
              </Typography>
              <TextField
                id='outlined-full-width'
                style={{ margin: 8 }}
                placeholder='ex. 참여 팀 수'
                margin='normal'
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{ classes: { input: classes.resize } }}
                variant='outlined'
                value={notice}
                onChange={handleInputText}
              />
            </Grid>
            <Grid item className={classes.item} xs={12}>
              <Typography className={classes.title} variant='h4' component='h4'>
                선거 날짜
              </Typography>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid
                  container
                  justify='flex-start'
                  className={classes.dateGrid}
                >
                  <KeyboardDatePicker
                    className={classes.dateSelector}
                    disableToolbar
                    variant='inline'
                    format='MM/dd/yyyy'
                    margin='normal'
                    id='date-picker-inline'
                    label='시작일'
                    InputProps={{ classes: { input: classes.resize } }}
                    value={startDate}
                    onChange={handleStartDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                  <KeyboardDatePicker
                    className={classes.dateSelector}
                    disableToolbar
                    variant='inline'
                    format='MM/dd/yyyy'
                    margin='normal'
                    id='date-picker-dialog'
                    label='종료일'
                    format='MM/dd/yyyy'
                    InputProps={{ classes: { input: classes.resize } }}
                    value={endDate}
                    onChange={handleEndDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
            </Grid>
            <ButtonBlock>
              <ColorButton
                variant='contained'
                color='primary'
                className={classes.margin}
                onClick={submitForm}
              >
                등록하기
              </ColorButton>
            </ButtonBlock>
          </form>
        </div>
      </Paper>
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
  },
  title: {
    marginTop: '20px',
    marginBottom: '10px',
    marginLeft: '10px',
    fontSize: '15px',
    fontWeight: 'bold',
  },
  dateGrid: {
    marginLeft: '20px',
  },
  dateSelector: {
    marginRight: '20px',
  },
  resize: {
    fontSize: '14px',
  },
  formControl: {
    marginLeft: '10px',
  },
});

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}))(Button);

const ButtonBlock = styled.div`
  display: flex;
  justify-content: flex-end;
`;

MainEject.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainEject);
