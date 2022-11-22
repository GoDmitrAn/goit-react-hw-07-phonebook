import { configureStore } from '@reduxjs/toolkit';
import { filterReducer, usersReducer } from './reducer';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    filter: filterReducer,
  },
});
