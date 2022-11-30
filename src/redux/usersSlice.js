import { createSlice } from '@reduxjs/toolkit';
import { addUser, deleteUser, fetchContacts } from './operations';
// const usersInitialState = [
//   { id: 0, name: 'Teili', phoneNumber: '+3556845561' },
//   { id: 1, name: 'Gofor', phoneNumber: '+1225545662' },
// ];
const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const usersSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // reducers: {
  //   addUser(state, action) {
  //     state.push(action.payload);
  //   },
  //   deleteUser(state, action) {
  //     const index = state.findIndex(task => task.id === action.payload);
  //     state.splice(index, 1);
  //   },
  // },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,

    [addUser.pending]: handlePending,
    [addUser.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addUser.rejected]: handleRejected,

    [deleteUser.pending]: handlePending,
    [deleteUser.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteUser.rejected]: handleRejected,
  },
});
// export const { addUser, deleteUser } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
