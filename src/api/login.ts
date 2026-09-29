import request from "../utils/request"
import { type ILoginParams } from "../types/loginTypes"
const login=(data:ILoginParams)=>{
    return request.post("/users/login",data)
}
export {login}