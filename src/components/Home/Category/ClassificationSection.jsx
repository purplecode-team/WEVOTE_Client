import React, { useState, useEffect } from 'react';
import CandidateArticle from '../Candidate/CandidateArticle';
import ClassificationCategory from './ClassificationCategory';
import ClassificationData from '../../../api/ClassificationData.json';
import { useClassificate } from '../../../lib/hooks/useClassificate';

const initialData = { 중앙자치기구: { 총학생회: [] } };
// api 데이터 없을 시, initialData로 기본 설정됨
const data = ClassificationData || initialData;

const ClassificationSection = () => {
  const [current, dispatch] = useClassificate();
  const [topList, setTopList] = useState([]);
  const [middleList, setMiddleList] = useState([]);
  const [bottomList, setBottomList] = useState([]);

  useEffect(() => {
    setTopList(Object.keys(data));
    setMiddleList(Object.keys(data[current.top]));
    setBottomList(Object.keys(data[current.top][current.middle]));
  }, [current.middle]);

  const onClick = (position, e) => {
    dispatch({ type: position, current: e.target.innerText });
  };

  return (
    <section>
      <ClassificationCategory
        onClick={onClick}
        topList={topList}
        middleList={middleList}
        bottomList={bottomList}
        current={current}
      />
      {/* category bottom이 없을 때, array 유무로 판단하여 후보자 데이터 구분 */}
      {Array.isArray(data[current.top][current.middle]) ? (
        <CandidateArticle
          title={current.middle}
          candidateData={data[current.top][current.middle]}
        />
      ) : (
        <CandidateArticle
          title={current.bottom}
          candidateData={data[current.top][current.middle][current.bottom]}
        />
      )}
    </section>
  );
};

export default ClassificationSection;
