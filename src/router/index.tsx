import { createBrowserRouter } from 'react-router'
import { lazy } from 'react'

// 懒加载 App 组件
const App = lazy(() => import('../App'))
const Login=lazy(()=>import("../views/login"))
const router = createBrowserRouter([
  {
    path: '/',
    element: (
        <App />
    ),
  },
  {
    path:"/login",
    element:<Login></Login>
  }
])

export default router