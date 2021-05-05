import * as React from 'react';
import { useState, useEffect } from 'react';
import CandidateArticle from '../../Home/Candidate/CandidateArticle';
import ClassificationCategory from './ClassificationCategory';
import useFetch from '../../../api/useFetch';
import { useChangeCurrentCategory } from '../../../lib/hooks/useChangeCurrentCategory';
import CentralData from '../../../api/CentralData.json';
import CollegeData from '../../../api/CollegeData.json';
import DepartmentData from '../../../api/DepartmentData.json';

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

const dataSet: DataType = {
  중앙자치기구: CentralData || [{ id: 1, organizationName: '총학' }],
  단과대: CollegeData || [{ id: 1, organizationName: '인문대학' }],
  학과: DepartmentData || [{ id: 1, organizationName: '인문대학' }],
};

const topCategory = {
  Central: '중앙자치기구',
  College: '단과대',
  Department: '학과',
};
const topList = Object.values(topCategory);

const ClassificationSection = () => {
  // const { loading, data, error } = useFetch(url);
  const [current, dispatch] = useChangeCurrentCategory();
  const [teamData, setTeamData] = useState<Team[]>([]);
  const [middleList, setMiddleList] = useState<string[]>([]);
  const [bottomList, setBottomList] = useState<string[]>([]);

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
      <ClassificationCategory
        changeCurrent={changeCurrent}
        topList={topList}
        middleList={middleList}
        bottomList={bottomList}
        current={current}
      />
      {current.top === topCategory.Department ? (
        <CandidateArticle title={current.bottom} teamArray={teamData} />
      ) : (
        <CandidateArticle title={current.middle} teamArray={teamData} />
      )}
    </section>
  );
};

export default ClassificationSection;
