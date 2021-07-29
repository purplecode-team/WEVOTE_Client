import React, { createContext, Dispatch, useContext, useReducer } from 'react';

// 상태를 위한 타입
type State = {
  isOpenEdit: boolean;
  id: number;
};

// 모든 액션들을 위한 타입
type Action = { type: 'TOGGLE_EDIT_CANDIDATE'; isOpenEdit: boolean; id:number; };

// 디스패치를 위한 타입 (Dispatch 를 리액트에서 불러올 수 있음), 액션들의 타입을 Dispatch 의 Generics로 설정
type SampleDispatch = Dispatch<Action>;

// Context 만들기
const CandidateStateContext = createContext<State | null>(null);
const CandidateDispatchContext = createContext<SampleDispatch | null>(null);

// 리듀서
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'TOGGLE_EDIT_CANDIDATE':
      return {
        ...state,
        isOpenEdit: action.isOpenEdit,
        id: action.id
      };
    default:
      throw new Error('Unhandled action');
  }
}

// SampleProvider 에서 useReduer를 사용하고
// CandidateStateContext.Provider 와 CandidateDispatchContext.Provider 로 children 을 감싸서 반환합니다.
export function CandidateProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    isOpenEdit: false,
    id: 0,
  });

  return (
    <CandidateStateContext.Provider value={state}>
      <CandidateDispatchContext.Provider value={dispatch}>
        {children}
      </CandidateDispatchContext.Provider>
    </CandidateStateContext.Provider>
  );
}

// state 와 dispatch 를 쉽게 사용하기 위한 커스텀 Hooks
export function useCandidateState() {
  const state = useContext(CandidateStateContext);
  if (!state) throw new Error('Cannot find SampleProvider'); // 유효하지 않을땐 에러를 발생
  return state;
}

export function useCandidateDispatch() {
  const dispatch = useContext(CandidateDispatchContext);
  if (!dispatch) throw new Error('Cannot find SampleProvider'); // 유효하지 않을땐 에러를 발생
  return dispatch;
}