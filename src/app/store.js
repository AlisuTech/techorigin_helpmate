import {combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import serviceProviderSlice from "./serviceProvider/serviceProviderSlice";
import appointmentSlice from "./appointment/appointmentSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from 'redux-persist';

const rootReducer = combineReducers({ 
    user: userSlice,
    serviceProvider: serviceProviderSlice,
    appointment: appointmentSlice
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

export const persistor = persistStore(store);

export default store;


// import { configureStore } from "@reduxjs/toolkit";
// import userSlice from "./user/userSlice";
// import serviceProviderSlice from "./serviceProvider/serviceProviderSlice";
// import appointmentSlice from "./appointment/appointmentSlice";

// export const store = configureStore({
//     reducer: {
//         user:userSlice,
//         serviceProvider:serviceProviderSlice,
//         appointment: appointmentSlice, // Add the appointment slice
//     },
    
// })

// export default store;