import { configureStore } from '@reduxjs/toolkit';
import unitReducer from '../state/slices/unitSlice';
import queryReducer from '../state/slices/querySlice';

export const store = configureStore({
  reducer: {
    units: unitReducer,
    query: queryReducer,
  },
});
