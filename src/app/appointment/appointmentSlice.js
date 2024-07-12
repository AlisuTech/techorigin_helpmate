import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import axiosInstance from '../user/axiosInstance';
const ROOT_API = `http://localhost:5024`;

// export const createAppointment = createAsyncThunk(
//   'appointment/create',
//   async (appointmentData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(`${ROOT_API}/appointment`, appointmentData);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const createAppointment = createAsyncThunk(
//   'appointment/create',
//   async (appointmentData, { rejectWithValue }) => {
//     try {
//       const user = JSON.parse(localStorage.getItem('user'));
//       const token = user ? user.accessToken : null;

//       if (!token) {
//         return rejectWithValue('User not authenticated');
//       }

//       const response = await axios.post(`${ROOT_API}/appointment`, appointmentData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );


export const createAppointment = createAsyncThunk(
  'appointment/create',
  async (appointmentData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/appointment', appointmentData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

const appointmentSlice = createSlice({
  name: 'appointment',
  initialState: {
    loading: false,
    appointments: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createAppointment.pending, (state) => {
        state.loading =true;
        state.appointments = []
        state.error =null;
        state.status = 'loading';
      })
      .addCase(createAppointment.fulfilled, (state, action) => {
        state.loading = false;
        state.error =null;
        state.status = 'succeeded';
        state.appointments.push(action.payload);
      })
      .addCase(createAppointment.rejected, (state, action) => {
        state.loading = false;
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default appointmentSlice.reducer;