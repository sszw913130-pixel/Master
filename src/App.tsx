import "./index.less"
import router from "./router"
import { RouterProvider } from 'react-router/dom'
import { Suspense } from "react"
import { useEffect } from "react"
import { useDispatch, UseDispatch } from "react-redux"
import { setUserInfo } from "./store/Auth/user/userSlice"
import storage from "./utils/storage"
function App() {
    const dispatch=useDispatch()
    useEffect(()=>{
        //从新将数据存储到redux中，只要页面一挂载就读取redux中的值
        dispatch(setUserInfo(storage.get("username")))
    },[])
    return <Suspense fallback={<div>正在玩命加载中......</div>}>
        <RouterProvider router={router}></RouterProvider>
     </Suspense>
}
export default App;
