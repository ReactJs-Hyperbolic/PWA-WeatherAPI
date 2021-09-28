import { createSlice } from '@reduxjs/toolkit';

export const querySlice = createSlice({
  name: 'query',
  initialState: {
    query: '',
  },
  reducers: {
    setSliceQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { setSliceQuery } = querySlice.actions;

export default querySlice.reducer;
