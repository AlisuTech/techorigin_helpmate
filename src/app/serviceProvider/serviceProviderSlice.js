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

export const fetchDepartmentsAndServiceProviders = createAsyncThunk(
  'serviceProvider/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${ROOT_API}/serviceProviders`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


const serviceProviderSlice = createSlice({
  name: 'serviceProvider',
  initialState: {
    serviceProvider: [],
    departments: [],
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
      })
      .addCase(fetchDepartmentsAndServiceProviders.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDepartmentsAndServiceProviders.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.serviceProviders = action.payload;
        state.departments = [...new Set(action.payload.map((item) => item.department))];
      })
      .addCase(fetchDepartmentsAndServiceProviders.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default serviceProviderSlice.reducer;
