import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const ROOT_API = `http://localhost:5024`

export const signupServiceProvider = createAsyncThunk(
  'serviceProvider/signup',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${ROOT_API}/serviceProviders`, userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const serviceProviderSlice = createSlice({
  name: 'serviceProvider',
  initialState: {
    serviceProvider: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  
});

export default serviceProviderSlice.reducer;
