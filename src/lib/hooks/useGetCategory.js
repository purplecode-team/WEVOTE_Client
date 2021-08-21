import { useEffect, useState } from 'react';

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

const initialIndex = { top: 0, middle: 0, bottom: 0 };

const useGetCategory = () => {
  const [{ loading, data, error }, fetchData] = useFetch({
    initialUrl: '/api/v1/admin/category',
    initialData: initialData,
  });
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [topList, setTopList] = useState([]);
  const [middleList, setMiddleList] = useState([]);
  const [bottomList, setBottomList] = useState([]);
  const [categoryState, setCategoryState] = useState({ loading, data, error });

  let hasBottom = 'Majors' in data[currentIndex.top].middle[0];

  const handleBottomCurrentIndex = value => () => {
    const currentBottomIndex = bottomList.indexOf(value);
    setCurrentIndex({ ...currentIndex, bottom: currentBottomIndex });
  };

  const initializeMiddleIndex = index => {
    setCurrentIndex({ top: index, middle: 0, bottom: 0 });
  };

  const initializeBottomIndex = index => {
    setCurrentIndex({ ...currentIndex, middle: index, bottom: 0 });
  };

  const getNewMiddleList = value => () => {
    const currentTopIndex = topList.indexOf(value);
    setMiddleList(
      data[currentTopIndex].middle.map(mid => mid.organizationName)
    );
    initializeMiddleIndex(currentTopIndex);
  };

  const getNewBottomList = value => () => {
    const currentMiddleIndex = middleList.indexOf(value) || 0;
    initializeBottomIndex(currentMiddleIndex);
    if (!hasBottom) {
      setBottomList([]);
      return;
    }
    const currentMiddleData = data[currentIndex.top].middle[currentMiddleIndex];
    const Majors = currentMiddleData ? currentMiddleData.Majors : [];
    const MajorNameList = Majors.map(mid => mid.organizationName);
    setBottomList(MajorNameList);
  };

  useEffect(() => {
    setTopList(data.map(obj => obj.top));
    setMiddleList(
      data[currentIndex.top].middle.map(mid => mid.organizationName)
    );
    return () => {
      setTopList(data.map(obj => obj.top));
      setMiddleList(
        data[currentIndex.top].middle.map(mid => mid.organizationName)
      );
    };
  }, [data]);

  useEffect(() => {
    getNewBottomList(middleList[currentIndex.middle])();
    setCurrentIndex({ ...currentIndex, bottom: 0 });
    return () => {
      getNewBottomList(middleList[currentIndex.middle])();
      setCurrentIndex({ ...currentIndex, bottom: 0 });
    };
  }, [topList, middleList]);

  useEffect(() => {
    setCategoryState({ loading, data, error });
    return () => setCategoryState({ loading, data, error });
  }, [loading, data, error]);

  return {
    categoryState,
    fetchData,
    currentIndex,
    setCurrentIndex,
    topList,
    middleList,
    bottomList,
    setMiddleList,
    setBottomList,
    getNewMiddleList,
    getNewBottomList,
    handleBottomCurrentIndex,
    hasBottom,
  };
};

export default useGetCategory;
