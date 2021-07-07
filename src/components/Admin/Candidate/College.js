import * as TextData from './Common/TextData';

import Button from '@material-ui/core/Button';
import CandidateForm from './Common/CandidateForm';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PledgeForm from './Common/PledgeForm';
import React from 'react';
import TeamForm from './Common/TeamForm';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

let TeamData = {};
let CandidateData = [];
let PledgeData = [];

// let data = {
//   organizationName :'',
//   Team: {
//     order: '',
//     slogan: '',
//     Runners: [
//       { name: '',
//         major: '',
//         studentNum:'',
//         position: '',
//         picture: ''
//       },
//       { name: '',
//         major: '',
//         studentNum:'',
//         position: '',
//         picture: ''
//       }
//     ],
//     Promises: [
//       {
//         promiseType:'',
//         promiseTitle:'',
//         promiseDetail:''
//       }
//     ],
//   }
// }

const Candidate = props => {
  const { classes } = props;

  const getTeamData = data => {
    TeamData = data;
  };

  const getCandidateData = data => {
    CandidateData = data;
  };

  const getPledgeData = data => {
    PledgeData = data;
  };

  const submitData = e => {
    e.preventDefault();
    const data = {
      organizationName: TeamData.ejectMiddle || TeamData.ejectBottom,
      Team: {
        order: TeamData.teamNumber,
        slogan: TeamData.slogan,
        Runners: CandidateData,
        Promises: PledgeData,
      },
    };
    console.log(data);

    fetch('https://localhost:8080/admin/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log('error:', error);
      });
  };

  // 팀 정보 , 후보 팀원 정보, 공약 정보 컴포넌트 분리
  const componentData = [
    {
      section: TextData.sectionText.team,
      Component: <TeamForm getTeamData={getTeamData} />,
    },
    {
      section: TextData.sectionText.candidate,
      Component: <CandidateForm getCandidateData={getCandidateData} />,
    },
    {
      section: TextData.sectionText.pledge,
      Component: <PledgeForm getPledgeData={getPledgeData} />,
    },
  ];

  return (
    <Paper className={classes.paper}>
      <GlobalCss />
      <form className={classes.contentWrapper} onSubmit={submitData}>
        <Typography className={classes.sectionText} variant='h4' component='h4'>
          단과대
        </Typography>
        {componentData &&
          componentData.map((data, i) => {
            return (
              <Grid container className={classes.section} key={i}>
                <Grid item className={classes.item} xs={12}>
                  <Typography
                    className={classes.sectionText}
                    variant='h4'
                    component='h4'
                  >
                    {data.section}
                  </Typography>
                </Grid>
                {data.Component}
              </Grid>
            );
          })}
        <Grid item xs={12} className={classes.button}>
          <Button
            className={classes.submit}
            variant='contained'
            color='primary'
            type='submit'
          >
            등록
          </Button>
        </Grid>
      </form>
    </Paper>
  );
};

const GlobalCss = withStyles({
  '@global': {
    '.MuiInputBase-input': {
      fontSize: '1.4rem',
      lineHeight: '20px',
    },
    '.MuiMenuItem-root': {
      fontSize: '1.3rem',
    },
  },
})(() => null);

const styles = theme => ({
  paper: {
    maxWidth: 936,
    margin: '30px auto',
    overflow: 'hidden',
    padding: '20px',
  },
  contentWrapper: {
    margin: '40px 16px',
    display: 'flex',
    flexDirection: 'column',
  },
  section: {
    marginBottom: '40px',
  },
  item: {
    marginBottom: '20px',
  },
  sectionText: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#5d3fe8',
    marginBottom: '20px',
  },
  titleText: {
    fontSize: '14px',
    fontWeight: 'bold',
    margin: '10px',
  },
  formControl: {
    minWidth: 200,
  },
  selectEmpty: {},
  textField: {
    minWidth: 400,
  },
  uploader: {
    width: '200px',
    margin: '0 20px',
    border: '1px solid #ccc',
    borderRadius: '15px',
    textAlign: 'center',
  },
  button: {
    textAlign: 'right',
  },
  submit: {
    width: '100px',
    height: '40px',
    borderRadius: '15px',
  },
});
export default withStyles(styles)(Candidate);
