import { createSlice } from '@reduxjs/toolkit';

export const unitSlice = createSlice({
  name: 'units',
  initialState: {
    isImperial: true,
  },
  reducers: {
    toggleUnits: state => {
      state.isImperial = !state.isImperial;
    },
  },
});

export const { toggleUnits } = unitSlice.actions;

export default unitSlice.reducer;
