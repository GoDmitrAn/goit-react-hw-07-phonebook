import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6385ccd1beaa64582668c7ce.mockapi.io';
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const addUser = createAsyncThunk(
  'contacts/addUser',
  async (newUser, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', {
        name: newUser.name,
        phone: newUser.phone,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const deleteUser = createAsyncThunk(
  'contacts/deleteUser',
  async (userId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${userId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
