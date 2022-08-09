import { useReducer } from 'react';

const initialState = { currentTeamNum: 0, locationX: 0 };

const reducer = (state, { type, current }) => {
  switch (type) {
    case 'left':
      return {
        ...state,
        currentTeamNum: state.currentTeamNum - 1,
        locationX: state.locationX + current,
      };
    case 'right':
      return {
        ...state,
        currentTeamNum: state.currentTeamNum + 1,
        locationX: state.locationX - current,
      };
    default:
      return state;
  }
};

export const useCarousel = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return [state, dispatch];
};
