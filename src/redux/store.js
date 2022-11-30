import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { usersReducer } from './usersSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    filter: filterReducer,
  },
});
