import React, { useCallback, useEffect, useState } from 'react';
import {
  useCandidateDispatch,
  useCandidateState,
} from '../../../../context/CandidateProvider';

import { AxiosResponse } from 'axios';
import Button from '@material-ui/core/Button';
import CandidateForm from './Candidate';
import { CandidateType } from '../../../../types/candidateType';
import client from '../../../../lib/api/client';
import Grid from '@material-ui/core/Grid';
import Loader from '../../../Common/Loader';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PledgeForm from './Pledge';
import TeamForm from './Team';
import { useAlert } from 'react-alert';

export type TeamType = {
  teamNumber: number,
  slogan: string,
  currentTop: string,
  currentMiddle: string,
  currentBottom: string,
}

let TeamData:TeamType = {
  teamNumber: 1,
  slogan : '',
  currentTop : '',
  currentMiddle : '',
  currentBottom : '',
};
let CandidateData = [];
let PledgeData = [];

export default function Register (props) {
  const { refetch } = props;
  const classes = useStyles();
  const [editData, setEditData] = useState<CandidateType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { isOpenEdit, id } = useCandidateState();
  const dispatch = useCandidateDispatch();
  const alert = useAlert();

  const handleTeamData = data => {
    TeamData = data;
  };

  const handleCandidateData = data => {
    CandidateData = data;
  };

  const handlePledgeData = data => {
    PledgeData = data;
  };

  const submitForm = e => {
    e.preventDefault();
    if (!editData) postData();
    else updateData();
  };

  const postData = async () => {
    setIsLoading(true);
    const data = {
      order: TeamData.teamNumber,
      slogan: TeamData.slogan,
      categoryName: TeamData.currentTop,
      categoryDetail: TeamData.currentMiddle,
      majorName: TeamData.currentBottom,
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
    if (!editData || !id) return;
    setIsLoading(true);
    const data = {
      id: id,
      order: TeamData.teamNumber,
      slogan: TeamData.slogan,
      categoryName: TeamData.currentTop,
      categoryDetail: TeamData.currentMiddle,
      majorName: TeamData.currentBottom || null,
      Runners: CandidateData,
      Promises: PledgeData,
      organizationId : editData.organizationId
    };
    try{
      await client
      .patch(`/api/v1/admin/candidate/${id}`, data)
      .then(res => {
        if (res.status !== 200) alert.error('후보 정보 업데이트 실패');
        else alert.success('후보 정보 업데이트 성공');
      })
      .catch(e => alert.error('후보 정보 업데이트 실패'));
      dispatch({ type: 'TOGGLE_EDIT_CANDIDATE', isOpenEdit: false, id: 0 });
      refetch();
    }catch(e){
      alert.error('후보 정보 업데이트 실패');
    }
  };

  const fetchData = useCallback(url => {
    client
      .get(url)
      .then((res:AxiosResponse) => {
        setEditData(res.data);
      })
      .catch(() => alert.error('후보 데이터 호출 실패'));
  }, []);

  useEffect(() => {
    if (!isOpenEdit) return;
    fetchData(`/api/v1/admin/candidate/${id}`);
  }, [id]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Paper className={classes.paper}>
          <form className={classes.contentWrapper} onSubmit={submitForm}>
            <TeamForm handleTeamData={handleTeamData} editData={editData} />
            <CandidateForm
              handleCandidateData={handleCandidateData}
              editData={editData}
            />
            <PledgeForm handlePledgeData={handlePledgeData} editData={editData} />
            <Grid item className={classes.button}>
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

const useStyles = makeStyles(theme => ({
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
  item: {
    marginBottom: '20px',
  },
  button: {
    textAlign: 'right',
  },
  submit: {
    width: '100px',
    height: '40px',
    borderRadius: '15px',
  },
}))
