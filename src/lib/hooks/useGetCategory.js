import React, { useEffect, useState } from 'react';

import useFetch from './useFetch';

// 카테고리에 맞는 중,소분류 데이터가 컴포넌트 별로 받아져야함
const initialData = [
  {
    top: '중앙자치기구',
    middle: [
      {
        id: 1,
        organizationName: '총학생회',
      },
    ],
  },
  {
    top: '단과대',
    middle: [
      {
        id: 11,
        organizationName: '',
      },
    ],
  },
  {
    top: '학과',
    middle: [
      {
        id: 11,
        organizationName: '',
        Majors: [
          {
            id: 101,
            organizationName: '',
          },
        ],
      },
    ],
  },
];

const useGetCategory = () => {
  const [{ loading, data, error }, setUrl] = useFetch({
    initialUrl: '/api/v1/admin/category',
    initialData: initialData,
  });
  const [currentIndex, setCurrentIndex] = useState({
    top: 0,
    middle: 0,
    bottom: 0,
  });
  const [topList, setTopList] = useState([]);
  const [middleList, setMiddleList] = useState([]);
  const [bottomList, setBottomList] = useState([]);

  let hasBottom = 'Majors' in data[currentIndex.top].middle[0];

  const getNewMiddleList = value => () => {
    const currentTopIndex = topList.indexOf(value);
    const newMiddle = data[currentTopIndex].middle;
    const result = newMiddle.reduce((acc, cur) => {
      acc.push(cur.organizationName);
      return acc;
    }, []);
    setCurrentIndex({ top: currentTopIndex, middle: 0, bottom: 0 });
    setMiddleList(result);
  };

  const getNewBottomList = value => () => {
    const currentMiddleIndex = middleList.indexOf(value) || 0;
    setCurrentIndex({ ...currentIndex, middle: currentMiddleIndex, bottom: 0 });
    let Majors = [];
    let MajorNameList = [];
    if (hasBottom) {
      Majors = data[currentIndex.top].middle[currentMiddleIndex].Majors || [];
      MajorNameList = Majors.reduce((acc, cur) => {
        acc.push(cur.organizationName);
        return acc;
      }, []);
    }
    MajorNameList && MajorNameList.length !== 0
      ? setBottomList(MajorNameList)
      : setBottomList(new Array(0));
  };

  useEffect(() => {
    setTopList(
      data.reduce((acc, cur) => {
        acc.push(cur.top);
        return acc;
      }, [])
    );
    setMiddleList(
      data[currentIndex.top].middle.reduce((acc, cur) => {
        acc.push(cur.organizationName);
        return acc;
      }, [])
    );
  }, [data]);

  useEffect(() => {
    getNewBottomList(middleList[currentIndex.middle])();
    setCurrentIndex({ ...currentIndex, bottom: 0 });
  }, [topList, middleList]);

  return {
    data,
    loading,
    error,
    currentIndex,
    setCurrentIndex,
    topList,
    setTopList,
    middleList,
    setMiddleList,
    bottomList,
    setBottomList,
    getNewMiddleList,
    getNewBottomList,
    hasBottom,
  };
};

export default useGetCategory;
