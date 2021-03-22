import React, { useState, useEffect } from 'react';
import CandidateArticle from '../Candidate/CandidateArticle';
import ClassificationMenu from './ClassificationMenu';
import ClassificationData from '../../../api/ClassificationData.json';
import { useClassificate } from '../../../lib/hooks/useClassificate';

const data = ClassificationData;

const ClassificationSection = () => {
  const [state, dispatch] = useClassificate();
  const [topList, setTopList] = useState(['중앙자치기구', '총학생회']);
  const [middleList, setMiddleList] = useState([]);
  const [bottomList, setBottomList] = useState([]);

  useEffect(() => {
    setTopList(Object.keys(data));
    setMiddleList(Object.keys(data[state.top]));
    setBottomList(Object.keys(data[state.top][state.middle]));
  }, [state]);

  const onClick = (position, e) => {
    dispatch({ type: position, current: e.target.innerText });
  };
  return (
    <section>
      <ClassificationMenu
        onClick={onClick}
        topList={topList}
        middleList={middleList}
        bottomList={bottomList}
        current={state}
      />
      {state.top === '학과' ? (
        <CandidateArticle
          title={state.bottom}
          data={data[state.top][state.middle][state.bottom]}
        />
      ) : (
        <CandidateArticle
          title={state.middle}
          data={data[state.top][state.middle]}
        />
      )}
    </section>
  );
};

export default ClassificationSection;
