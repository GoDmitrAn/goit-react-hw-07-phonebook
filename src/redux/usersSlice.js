import { createSlice } from '@reduxjs/toolkit';
const usersInitialState = [
  { id: 0, name: 'Teili', phoneNumber: '+3556845561' },
  { id: 1, name: 'Gofor', phoneNumber: '+1225545662' },
];
const usersSlice = createSlice({
  name: 'users',
  initialState: usersInitialState,
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    deleteUser(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
  },
});
export const { addUser, deleteUser } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
