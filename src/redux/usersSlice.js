import { createSlice } from '@reduxjs/toolkit';
import { addUser, deleteUser, fetchContacts } from './operations';
// const usersInitialState = [
//   { id: 0, name: 'Teili', phoneNumber: '+3556845561' },
//   { id: 1, name: 'Gofor', phoneNumber: '+1225545662' },
// ];
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
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addUser.pending](state) {
      state.isLoading = true;
    },
    [addUser.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addUser.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteUser.pending](state) {
      state.isLoading = true;
    },
    [deleteUser.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteUser.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
// export const { addUser, deleteUser } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
