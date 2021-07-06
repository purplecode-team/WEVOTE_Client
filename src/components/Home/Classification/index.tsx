import * as React from 'react';

import { useEffect, useState } from 'react';

import Candidate from './Candidate';
import Category from './Category';
import CentralData from '../../../lib/api/dummyData/CentralData.json';
import client from '../../../lib/api/client';
import CollegeData from '../../../lib/api/dummyData/CollegeData.json';
import DepartmentData from '../../../lib/api/dummyData/DepartmentData.json';
import { useChangeCurrentCategory } from '../../../lib/hooks/useChangeCurrentCategory';
import useFetch from '../../../lib/hooks/useFetch';

type Runner = {
  id: number;
  name: string;
  major: string;
  studentNum: number;
  position: string;
  picture: string;
  teamId: number;
};
type Team = {
  id: number;
  order: number;
  slogan: string;
  Runners: Runner[];
};
type Major = {
  id: number;
  majorName: string;
  Teams: Team[];
};
type HasBottomType = {
  id: number;
  organizationName: string;
  Majors: Major[];
};
type HasMiddleType = {
  id: number;
  organizationName: string;
  Teams: Team[];
};
type DataType = {
  중앙자치기구: HasMiddleType[];
  단과대: HasMiddleType[];
  학과: HasBottomType[];
};

const initialData = {
  중앙자치기구: CentralData || [{ id: 1, organizationName: '총학', Teams: [] }],
  단과대: CollegeData || [{ id: 1, organizationName: '인문대학', Teams: [] }],
  학과: DepartmentData || [{ id: 1, organizationName: '인문대학', Teams: [] }],
};

const topCategory = {
  Central: '중앙자치기구',
  College: '단과대',
  Department: '학과',
};
const topList = Object.values(topCategory);

const initialState = [{ id: 0, organizationName: '', Teams: [] }];

const ClassificationSection = () => {
  // const { loading, data, error } = useFetch(url);
  const [centralData, setCentralData] = useState(initialState);
  const [collegeData, setCollegeData] = useState(initialState);
  const [departmentData, setDepartmentData] = useState([
    { id: 0, organizationName: '', Majors: [] },
  ]);
  const [dataSet, setDataSet] = useState<DataType>(initialData);
  const [current, dispatch] = useChangeCurrentCategory();
  const [teamData, setTeamData] = useState<Team[]>([]);
  const [middleList, setMiddleList] = useState<string[]>([]);
  const [bottomList, setBottomList] = useState<string[]>([]);

  // useEffect(()=>{
  //   setDataSet({
  //     중앙자치기구: centralData || CentralData,
  //     단과대: collegeData || CollegeData,
  //     학과: departmentData || DepartmentData,
  //   })
  // },[centralData, collegeData,departmentData])

  useEffect(() => {
    client
      .get('/api/v1/main/central-organization')
      .then((response) => {
        setCentralData(response.data);
      })
      .catch((e) => console.log(e));

    client
      .get('/api/v1/main/college')
      .then((response) => {
        setCollegeData(response.data);
      })
      .catch((e) => console.log(e));

    client
      .get('/api/v1/main/department')
      .then((response) => {
        setDepartmentData(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  // top 변경 시, middle list 변경
  useEffect(() => {
    const middleTemp: string[] = [];
    if (current.top === topCategory.Central) {
      CentralData.map((obj) => {
        middleTemp.push(obj.organizationName);
      });
    } else if (current.top === topCategory.College) {
      CollegeData.map((obj) => {
        middleTemp.push(obj.organizationName);
      });
    } else {
      // current.top === topCategory.Department
      DepartmentData.map((obj) => {
        middleTemp.push(obj.organizationName);
      });
    }
    setMiddleList(middleTemp);
  }, [current]);

  // bottomList 변경
  useEffect(() => {
    const bottomTemp: string[] = [];
    const middleObj = DepartmentData.find(
      (obj: HasBottomType) => obj.organizationName === current.middle
    );
    middleObj?.Majors.map((obj) => {
      bottomTemp.push(obj.majorName);
    });
    setBottomList(bottomTemp);
  }, [current]);

  // Teams 데이터 반환
  useEffect(() => {
    const currentDataSet = dataSet[current.top];
    // 현재 topDataSet의 middle에 majors가 있을 때,
    if (current.top === topCategory.Department) {
      currentDataSet.map((obj: HasBottomType) => {
        if (obj.organizationName === current.middle) {
          obj.Majors.map((obj2) => {
            if (obj2.majorName === current.bottom) {
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
  }, [current]);

  const changeCurrent = (
    position: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch({ type: position, current: e.target.innerText });
  };

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
        teamArray={teamData}
      />
    </section>
  );
};

export default ClassificationSection;
