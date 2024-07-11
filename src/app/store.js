import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import serviceProviderSlice from "./serviceProvider/serviceProviderSlice";
import appointmentSlice from "./appointment/appointmentSlice";

export const store = configureStore({
    reducer: {
        user:userSlice,
        serviceProvider:serviceProviderSlice,
        appointment: appointmentSlice, // Add the appointment slice
    },
    
})

export default store;