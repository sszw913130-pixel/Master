import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./Auth/user/userSlice";
export const store=configureStore({
    reducer:{
     //这里添加你的reducer
        userSlice
    }
})