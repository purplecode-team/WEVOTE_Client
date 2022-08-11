import { createAction, handleActions } from 'redux-actions';

export interface toggleState {
  toggleEditor: boolean;
  candidateId: number;
}

export const TOGGLE_CANDIDATE_EDITOR = 'editor/TOGGLE_CANDIDATE_EDITOR';

export const toggleCandidateEditor = createAction(
  TOGGLE_CANDIDATE_EDITOR,
  (requestType) => requestType
);

const initialState: toggleState = {
  toggleEditor: false,
  candidateId: 0,
};

export default handleActions(
  {
    [TOGGLE_CANDIDATE_EDITOR]: (
      state,
      { payload: { toggleEditor, candidateId } }
    ) => ({
      ...state,
      toggleEditor: toggleEditor,
      candidateId: candidateId,
    }),
  },
  initialState
);
