import {createSlice} from "@reduxjs/toolkit"
export const userSlice=createSlice({
    name:"userSlice",
    initialState:{
       username:""
    },
    reducers:{
        setUserInfo:(state,action)=>{
            state.username=action.payload
        }
    }
})
export const {setUserInfo}=userSlice.actions
export default userSlice.reducer