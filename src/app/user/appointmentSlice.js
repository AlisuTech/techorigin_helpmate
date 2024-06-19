import { createSlice } from '@reduxjs/toolkit';

const appointmentSlice = createSlice({
  name: 'appointment',
  initialState: {
    appointment: null,
    isSelected: false
  },
  reducers: {
    selectAppointment(state, action) {
      state.isSelected = action.payload;
    },
    deselectAppointment(state) {
      state.isSelected = false;
    }
  },
});

export const { selectAppointment, deselectAppointment } = appointmentSlice.actions;
export default appointmentSlice.reducer;
