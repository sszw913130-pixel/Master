import { createBrowserRouter } from 'react-router'
import { lazy } from 'react'
import { Navigate } from 'react-router'
// 懒加载 App 组件
const Login=lazy(()=>import("../views/login"))
const Welcome=lazy(()=>import("../views/welcome"))
const Layout=lazy(()=>import("../layout"))
const NotFound=lazy(()=>import("../views/NotFound"))
const router = createBrowserRouter([
  {
    element:<Layout></Layout>,
    children:[
      {
        path:"/welcome",
        element:<Welcome></Welcome>
      }
    ]

  },
  {
    path: '/',
    element:<Navigate to="/welcome" replace></Navigate>//react-router6之后的写法
  },
  {
    path:"/login",
    element:<Login></Login>
  },{
    path:"*",
    element:<NotFound></NotFound>
  }
])

export default router