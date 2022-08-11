import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface toggleState {
  toggleEditor: boolean;
  candidateId: number;
}

const initialState: toggleState = {
  toggleEditor: false,
  candidateId: 0,
};

export default createSlice({
  name: 'editor',
  initialState: initialState,
  reducers: {
    toggleCandidateEditor: (state, action: PayloadAction<toggleState>) => ({
      toggleEditor: !action.payload.toggleEditor,
      candidateId: action.payload.candidateId,
    }),
  },
});
