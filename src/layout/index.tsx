import { Layout,Row} from "antd";
import { Outlet } from "react-router";
import styles from "./index.module.less"
import NavHeader from "./header";
import Footer from "./footer";
const {Header,Sider} =Layout
const LayCon=()=>{
    return <Layout style={{height:"100vh"}}>
        <Sider className={styles.Sider}>Sider</Sider>
        <Layout>
            <NavHeader></NavHeader>
            <div className={styles.content}>
                <div className={styles.wrapper}>
                    <Outlet></Outlet>
                </div>
            <Footer></Footer>
            </div>
        </Layout>
    </Layout>
}

export default LayCon