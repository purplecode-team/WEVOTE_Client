import * as React from 'react';

import { HasBottomType, HasMiddleType, Team } from '../../../types/candidateType';
import { useCandidateDispatch, useCandidateState } from '../../../context/CandidateProvider'
import { useEffect, useState } from 'react';

import Candidate from './Candidate';
import CandidateRegister from '../../Admin/Candidate/Register';
import Category from './Category';
import client from '../../../lib/api/client';
import { Modal } from 'react-responsive-modal';
import { useAlert } from 'react-alert';
import { useChangeCurrentCategory } from '../../../lib/hooks/useChangeCurrentCategory';

type DataType = {
  중앙자치기구: HasMiddleType[];
  단과대: HasMiddleType[];
  학과: HasBottomType[];
};

const initialData = {
  중앙자치기구: [{ id: 1, organizationName: '총학생회', Teams: [] }],
  단과대: [{ id: 1, organizationName: '', Teams: [] }],
  학과: [{ id: 1, organizationName: '', Majors: [] }],
};

const initialMiddle = [{ id: 1, organizationName: '', Teams: [] }];

const initialBottom = [{ id: 0, organizationName: '', Majors: [] }];

const topCategory = {
  Central: '중앙자치기구',
  College: '단과대',
  Department: '학과',
};
const topList = Object.values(topCategory);

const ClassificationSection = (props) => {
  // const { isOpenEdit, editId, setEditState, editData } = props;
  const [centralData, setCentralData] = useState<HasMiddleType[]>(initialMiddle);
  const [collegeData, setCollegeData] = useState<HasMiddleType[]>(initialMiddle);
  const [departmentData, setDepartmentData] = useState<HasBottomType[]>(initialBottom);
  const [dataSet, setDataSet] = useState<DataType>(initialData);
  const [current, dispatch] = useChangeCurrentCategory();
  const [teamData, setTeamData] = useState<Team[]>([]);
  const [middleList, setMiddleList] = useState<string[]>([]);
  const [bottomList, setBottomList] = useState<string[]>([]);
  const alert = useAlert();
  const { isOpenEdit, id } = useCandidateState();
  const setEditState = useCandidateDispatch();


  const changeCurrent = (
    position: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch({ data: dataSet, type: position, current: e.target.innerText });
  };

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
    fetchData('/api/v1/main/major', setDepartmentData);
  }

  useEffect(()=>{
    setDataSet({
      중앙자치기구: centralData,
      단과대: collegeData,
      학과: departmentData,
    })
  },[centralData, collegeData, departmentData])

  useEffect(() => {
    refetch();
  }, []);

  // top 변경 시, middle list 변경
  useEffect(() => {
    const middleTemp: string[] = [];
    if (centralData.length !== 0 && current.top === topCategory.Central) {
      centralData.map((obj) => {
        middleTemp.push(obj.organizationName);
      });
    } else if (collegeData.length !== 0 && current.top === topCategory.College) {
      collegeData.map((obj) => {
        middleTemp.push(obj.organizationName);
      });
    } else if (departmentData.length !== 0){
      departmentData.map((obj) => {
        middleTemp.push(obj.organizationName);
      });
    }
    setMiddleList(middleTemp);
  }, [dataSet, current]);

  // bottomList 변경
  useEffect(() => {
    const bottomTemp: string[] = [];
    const middleObj = departmentData.find(
      (obj: HasBottomType) => obj.organizationName === current.middle
    );
    if (!middleObj) return;
    middleObj.Majors.map((obj) => {
      bottomTemp.push(obj.organizationName);
    });
    setBottomList(bottomTemp);
  }, [dataSet, current]);

  // Teams 데이터 반환
  useEffect(() => {
    const currentDataSet = dataSet[current.top];
    // 현재 topDataSet의 middle에 majors가 있을 때,
    if (current.top === topCategory.Department) {
      currentDataSet.map((obj: HasBottomType) => {
        if (obj.organizationName === current.middle) {
          obj.Majors.map((obj2) => {
            if (obj2.organizationName === current.bottom) {
              setTeamData(obj2.Teams);
            }
          });
        }
      });
      return;
    }
    // middle에서 teams가 있을 때,
    currentDataSet.map((obj: HasMiddleType) => {
      if (obj.organizationName === current.middle) {
        setTeamData(obj.Teams);
      }
    });
  }, [dataSet, current]);

  return (
    <section>
      <Category
        changeCurrent={changeCurrent}
        topList={topList}
        middleList={middleList}
        bottomList={bottomList}
        current={current}
      />
      <Candidate
        title={
          current.top === topCategory.Department
            ? current.bottom
            : current.middle
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

export default ClassificationSection;
