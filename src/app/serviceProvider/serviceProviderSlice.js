import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const ROOT_API = `http://localhost:5024`

export const signupServiceProvider = createAsyncThunk(
  'serviceProvider/signup-service_provider',
  async (serviceProviderData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${ROOT_API}/serviceProviders`, serviceProviderData);
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
  extraReducers: (builder) => {
    builder
      .addCase(signupServiceProvider.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signupServiceProvider.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.serviceProvider = action.payload;
      })
      .addCase(signupServiceProvider.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default serviceProviderSlice.reducer;
