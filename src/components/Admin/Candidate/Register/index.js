import React, { useCallback, useEffect, useState } from 'react';
import {
  useCandidateDispatch,
  useCandidateState,
} from '../../../../context/CandidateProvider';

import Button from '@material-ui/core/Button';
import CandidateForm from './Candidate';
import client from '../../../../lib/api/client';
import Grid from '@material-ui/core/Grid';
import Loader from '../../../Common/Loader';
import Paper from '@material-ui/core/Paper';
import PledgeForm from './Pledge';
import TeamForm from './Team';
import { useAlert } from 'react-alert';
import { withStyles } from '@material-ui/core/styles';

let TeamData = {};
let CandidateData = [];
let PledgeData = [];

const Register = props => {
  const { classes, refetch } = props;
  const [editData, setEditData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { isOpenEdit, id } = useCandidateState();
  const dispatch = useCandidateDispatch();
  const alert = useAlert();

  const getTeamData = data => {
    TeamData = data;
  };

  const getCandidateData = data => {
    CandidateData = data;
  };

  const getPledgeData = data => {
    PledgeData = data;
  };

  const submitForm = e => {
    e.preventDefault();
    if (!editData) postData();
    else updateData();
  };

  const postData = async e => {
    setIsLoading(true);
    const data = {
      order: TeamData.teamNumber,
      slogan: TeamData.slogan,
      categoryName: TeamData.currentTop,
      categoryDetail: TeamData.currentMiddle,
      majorName: TeamData.currentBottom || null,
      Runners: CandidateData,
      Promises: PledgeData,
    };
    await client
      .post('/api/v1/admin/candidate', data)
      .then(res => {
        if (res.status !== 200) alert.error('후보 등록 실패');
        else alert.success('후보 등록 성공');
      })
      .catch(e => alert.error('후보 등록 실패'));
    setIsLoading(false);
  };

  const updateData = async () => {
    setIsLoading(true);
    const data = {
      order: TeamData.teamNumber,
      slogan: TeamData.slogan,
      categoryName: TeamData.currentTop,
      categoryDetail: TeamData.currentMiddle,
      majorName: TeamData.currentBottom || null,
      Runners: CandidateData,
      Promises: PledgeData,
    };
    await client
      .patch(`/api/v1/admin/candidate/${id}`, data)
      .then(res => {
        if (res.status !== 200) alert.error('후보 정보 업데이트 실패');
        else alert.success('후보 정보 업데이트 성공');
      })
      .catch(e => alert.error('후보 정보 업데이트 실패'));
    dispatch({ type: 'TOGGLE_EDIT_CANDIDATE', isOpenEdit: false, id: null });
    refetch();
  };

  const fetchData = useCallback(url => {
    client
      .get(url)
      .then(response => {
        setEditData(response.data);
      })
      .catch(() => alert.error('후보 데이터 호출 실패'));
  }, []);

  useEffect(() => {
    if (!isOpenEdit) return;
    fetchData(`/api/v1/admin/candidate/${id}`);
    return () => null;
  }, [id]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Paper className={classes.paper}>
          <GlobalCss />
          <form className={classes.contentWrapper} onSubmit={submitForm}>
            <TeamForm getTeamData={getTeamData} editData={editData} />
            <CandidateForm
              getCandidateData={getCandidateData}
              editData={editData}
            />
            <PledgeForm getPledgeData={getPledgeData} editData={editData} />
            <Grid item xs={12} className={classes.button}>
              {editData ? (
                <Button
                  className={classes.submit}
                  variant='contained'
                  color='primary'
                  type='button'
                  onClick={updateData}
                >
                  {'수정'}
                </Button>
              ) : (
                <Button
                  className={classes.submit}
                  variant='contained'
                  color='primary'
                  type='submit'
                >
                  {'등록'}
                </Button>
              )}
            </Grid>
          </form>
        </Paper>
      )}
    </>
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
export default withStyles(styles)(Register);
