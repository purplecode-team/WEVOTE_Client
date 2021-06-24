import { useReducer } from 'react';
import CentralData from '../../api/CentralData.json';
import CollegeData from '../../api/CollegeData.json';
import DepartmentData from '../../api/DepartmentData.json';

const initialState = { top: '중앙자치기구', middle: '총학생회', bottom: '' };

const dataSet = {
  중앙자치기구: CentralData || [{ id: 1, organizationName: '총학' }],
  단과대: CollegeData || [{ id: 1, organizationName: '인문대학' }],
  학과: DepartmentData || [{ id: 1, organizationName: '인문대학' }],
};

const reducer = (state, { type, current }) => {
  switch (type) {
    case 'top': {
      const middleObj = dataSet[current][0];
      const currentMiddle = middleObj.centralName || middleObj.organizationName;
      const bottomArr = dataSet[current].find(
        (obj) => obj.organizationName === currentMiddle
      ).Majors;
      const currentBottom = bottomArr && bottomArr[0].majorName;
      return {
        ...state,
        top: current,
        middle: currentMiddle,
        bottom: currentBottom || initialState.bottom,
      };
    }
    case 'middle': {
      const bottomArr2 = dataSet[state.top].find(
        (obj) => obj.organizationName === current
      ).Majors;
      const currentBottom2 = bottomArr2 && bottomArr2[0].majorName;
      return {
        ...state,
        middle: current,
        bottom: currentBottom2 || initialState.bottom,
      };
    }
    case 'bottom': {
      return {
        ...state,
        bottom: current,
      };
    }
    default:
      return state;
  }
};

export const useChangeCurrentCategory = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return [state, dispatch];
};
