import * as React from 'react';

import { CandidateDataType, HasBottomType, HasMiddleType, Team } from '../../../types/candidateType';
import { useCandidateDispatch, useCandidateState } from '../../../context/CandidateProvider'
import { useEffect, useState } from 'react';

import Candidate from './Candidate';
import CandidateRegister from '../../Admin/Candidate/Register';
import Category from './Category';
import client from '../../../lib/api/client';
import { Modal } from 'react-responsive-modal';
import { useAlert } from 'react-alert';
import useGetCategory from '../../../lib/hooks/useGetCategory';

const initialData = {
  central: [{ id: 1, organizationName: '총학생회', Teams: [] }],
  college: [{ id: 1, organizationName: '', Teams: [] }],
  major: [{ id: 1, organizationName: '', Majors: [] }],
};

const initialMiddle = [{ id: 1, organizationName: '', Teams: [] }];

const initialBottom = [{ id: 0, organizationName: '', Majors: [] }];

const topCategory = {
  central: '중앙자치기구',
  college: '단과대',
  major: '학과',
};

const Classification = (props) => {
  const {
    currentIndex,
    topList,
    middleList,
    bottomList,
    hasBottom,
    getNewMiddleList,
    getNewBottomList,
    handleBottomCurrentIndex
  } = useGetCategory();
  const [centralData, setCentralData] = useState<HasMiddleType[]>(initialMiddle);
  const [collegeData, setCollegeData] = useState<HasMiddleType[]>(initialMiddle);
  const [majorData, setmajorData] = useState<HasBottomType[]>(initialBottom);
  const [dataSet, setDataSet] = useState<CandidateDataType>(initialData);
  const [teamData, setTeamData] = useState<Team[]>([]);
  const alert = useAlert();
  const { isOpenEdit, id } = useCandidateState();
  const setEditState = useCandidateDispatch();

  const fetchData = (url, reducer) => {
    client
    .get(url)
    .then((response) => {
      reducer(response.data);
    })
    .catch(() => alert.error('후보 데이터 호출 실패'));
  }

  const refetch = () => {
    fetchData('/api/v1/main/central', setCentralData);
    fetchData('/api/v1/main/college', setCollegeData);
    fetchData('/api/v1/main/major', setmajorData);
  }

  // key에서 현재 index에 위치한 데이터셋을 가져온다
  const getCurrentDataSet = () => {
    const keys = Object.keys(topCategory);
    return dataSet[keys[currentIndex.top]]
  }

  const handleMiddleTeamData = () => {
    const currentDataSet = getCurrentDataSet();
    currentDataSet.map((obj: HasMiddleType) => {
      if (obj.organizationName === middleList[currentIndex.middle]) {
        setTeamData(obj.Teams);
        return false;
      }
    });
  }

  const handleBottomTeamData = () => {
    const currentDataSet = getCurrentDataSet();
    currentDataSet.map((obj: HasBottomType) => {
      if (obj.organizationName === middleList[currentIndex.middle]) {
        obj.Majors.map((obj2) => {
          if (obj2.organizationName === bottomList[currentIndex.bottom]) {
            setTeamData(obj2.Teams);
            return false;
          }
        });
        return false;
      }
    });
  }

  useEffect(()=>{
    setDataSet({
      central: centralData,
      college: collegeData,
      major: majorData,
    })
    return ()=> setDataSet(initialData);
  },[centralData, collegeData, majorData])

  useEffect(() => {
    refetch();
  }, []);

  // Teams 데이터 출력
  useEffect(() => {
    if (!hasBottom) {
      handleMiddleTeamData();
      return;
    }
    handleBottomTeamData();
  }, [dataSet, currentIndex]);

  return (
    <section>
      <Category
        getNewMiddleList={getNewMiddleList}
        getNewBottomList={getNewBottomList}
        handleBottomCurrentIndex={handleBottomCurrentIndex}
        topList={topList}
        middleList={middleList}
        bottomList={bottomList}
        currentIndex={currentIndex}
      />
      <Candidate
        title={
          topList[currentIndex.top] === topCategory.major
            ? bottomList[currentIndex.bottom]
            : middleList[currentIndex.middle]
        }
        teamArr={teamData}
      />
      <Modal
        open={isOpenEdit}
        onClose={()=>{setEditState({type: 'TOGGLE_EDIT_CANDIDATE', isOpenEdit: false, id: 0})}}
        center
        classNames={{
          modal: 'modal-large',
        }}
      >
        <CandidateRegister
          refetch={refetch}
        />
      </Modal>
    </section>
  );
};

export default Classification;
