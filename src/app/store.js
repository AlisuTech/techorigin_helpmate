import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import serviceProviderSlice from "./serviceProvider/serviceProviderSlice";
import appointmentSlice from "./user/appointmentSlice";

export const store = configureStore({
    reducer: {
        user:userSlice,
        serviceProvider:serviceProviderSlice,
        appointment:appointmentSlice
    }
})