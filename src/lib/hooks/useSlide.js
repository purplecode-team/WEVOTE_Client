import React, { useReducer } from 'react';

export const NEXT = 'NEXT';
export const PREV = 'PREV';

const initialState = { pos: 0, sliding: false, dir: NEXT };

const reducer = (state, { type, numItems }) => {
  switch (type) {
    case 'reset':
      return initialState;
    case PREV:
      return {
        ...state,
        dir: PREV,
        sliding: true,
        pos: state.pos === 0 ? numItems - 1 : state.pos - 1,
      };
    case NEXT:
      return {
        ...state,
        dir: NEXT,
        sliding: true,
        pos: state.pos === numItems - 1 ? 0 : state.pos + 1,
      };
    case 'stopSliding':
      return { ...state, sliding: false };
    default:
      return state;
  }
};

export const useSlide = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return [state, dispatch];
};
