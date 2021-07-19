import { useReducer } from 'react';

const initialState = { top: '중앙자치기구', middle: '총학생회', bottom: '' };

const reducer = (state, { data, type, current }) => {

  const isEmptyArray = arr => !Array.isArray(arr) || arr.length === 0

  switch (type) {
    case 'top': {
      const middleObj = data[current][0];
      const currentMiddle = middleObj.organizationName;
      const tempArr = data[current].find(
        (obj) => obj.organizationName === currentMiddle
      )
      const bottomArr = tempArr ? tempArr.Majors : [];
      const currentBottom = isEmptyArray(bottomArr) ? null : bottomArr[0].organizationName;
      return {
        ...state,
        top: current,
        middle: currentMiddle,
        bottom: currentBottom || initialState.bottom,
      };
    }
    case 'middle': {
      const tempArr = data[state.top].find(
        (obj) => obj.organizationName === current
      );
      const bottomArr = tempArr ? tempArr.Majors : [];
      const currentBottom = isEmptyArray(bottomArr) ? null : bottomArr[0].organizationName;
      return {
        ...state,
        middle: current,
        bottom: currentBottom || initialState.bottom,
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
