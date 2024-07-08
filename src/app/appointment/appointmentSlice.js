import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const ROOT_API = `http://localhost:5024`;

export const createAppointment = createAsyncThunk(
  'appointment/create',
  async (appointmentData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${ROOT_API}/appointments`, appointmentData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const appointmentSlice = createSlice({
  name: 'appointment',
  initialState: {
    appointments: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createAppointment.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createAppointment.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.appointments.push(action.payload);
      })
      .addCase(createAppointment.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default appointmentSlice.reducer;