import { message } from "antd"
import axios from "axios";
//1.创建url实例
const instance=axios.create({
    baseURL:"",
    timeout:3000,
    timeoutErrorMessage:"请求超时,请刷新页面重新尝试"
})
//1.设置请求拦截器
instance.interceptors.request.use((config)=>{//config在这里是请求头的配置文件
    return config
},(error)=>{
    return Promise.reject(error)
})
//2.响应拦截器
instance.interceptors.response.use((response)=>{
    const data=response.data;
    if(data.code===4001) {
        window.location.href="/login"
    }else if(data.code!==200) {
        message.error(data.msg)
    }
    return data.data;
},(error)=>{
    return Promise.reject(error)
})
const api={
     get:(url:string,params?: object)=>{
        return instance.get(url,{params})
    },
    post:(url:string,params?:object)=>{
        return instance.post(url,params)
    },
    delete:(url:string,params?:object)=>{
        return instance.delete(url,params)
    }
    ,
    put:(url:string,params?:object)=>{
        return instance.put(url,{params})
    },
}
export default api