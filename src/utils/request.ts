import { message } from "antd"
import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
const api=process.env.REACT_APP_BASE_URL
//1.创建url实例
const instance=axios.create({
    baseURL:api,
    timeout:100000,
    timeoutErrorMessage:"请求超时,请刷新页面重新尝试",
    withCredentials:true,
    headers:{
        'Content-Type':"application/json",
        Authorization:"Bearer"+localStorage.getItem("token"),
        "X-Requested-With":"XMLHttpRequest"
    }
})
//1.设置请求拦截器
instance.interceptors.request.use((config:InternalAxiosRequestConfig)=>{//config在这里是请求头的配置文件
    return config
},(error)=>{
    return Promise.reject(error)
})
//2.响应拦截器
instance.interceptors.response.use((response:AxiosResponse)=>{
    const data=response.data;
    console.log(response);
    console.log(data);
    if(data.code===4001) {
        window.location.href="/login"
    }else if(response.status!==200) {
        message.error(data.msg)
    }
    return data;
},(error)=>{
    return Promise.reject(error)
})
const request={
     get:(url:string,params?: object):Promise<AxiosResponse>=>{
        return instance.get(url,{params})
    },
    post:(url:string,params?:object):Promise<AxiosResponse>=>{
        return instance.post(url,params)
    },
    delete:(url:string,params?:object):Promise<AxiosResponse>=>{
        return instance.delete(url,params)
    }
    ,
    put:(url:string,params?:object):Promise<AxiosResponse>=>{
        return instance.put(url,{params})
    },
}
export default request