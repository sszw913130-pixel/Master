import { createBrowserRouter } from 'react-router'
import { lazy } from 'react'
// 懒加载 App 组件
const Login=lazy(()=>import("../views/login"))
const Welcome=lazy(()=>import("../views/welcome"))
const router = createBrowserRouter([
  {
    path: '/welcome',
    element: (
        <Welcome></Welcome>
    ),
  },
  {
    path:"/login",
    element:<Login></Login>
  }
])

export default router