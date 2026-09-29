import "./index.less"
import router from "./router"
import { RouterProvider } from 'react-router/dom'
import { Suspense } from "react"
function App() {
    return <Suspense fallback={<div>正在玩命加载中......</div>}>
        <RouterProvider router={router}></RouterProvider>
     </Suspense>
}
export default App;
