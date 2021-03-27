import { useReducer } from 'react';
import ClassificationData from '../../api/ClassificationData.json';

const initialState = { top: '중앙자치기구', middle: '총학생회', bottom: '' };

const data = ClassificationData;

const reducer = (state, { type, current }) => {
  switch (type) {
    case 'top':
      return {
        ...state,
        top: current,
        middle: Object.keys(data[current])[0],
        bottom: Object.keys(data[current][Object.keys(data[current])[0]])[0],
      };
    case 'middle':
      return {
        ...state,
        middle: current,
        bottom: Object.keys(data[state.top][current])[0],
      };
    case 'bottom':
      return {
        ...state,
        bottom: current,
      };
    default:
      return state;
  }
};

export const useClassificate = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return [state, dispatch];
};
