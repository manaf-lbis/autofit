import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../features/auth/api/authApi";


export const store = configureStore({
    reducer:{
        authApi :authApi.reducer
    },

    middleware:(getDefaultMiddleware)=>{
       return getDefaultMiddleware().concat(authApi.middleware)
    }
    
})