import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../authSlice/index"; 


export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// Types for dispatch & state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


