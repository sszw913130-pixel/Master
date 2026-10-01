import styles from "./index.module.less"
import {Dropdown,Menu,Space} from "antd"
import { MenuUnfoldOutlined,MenuFoldOutlined,DownOutlined } from "@ant-design/icons"
import type { MenuProps } from 'antd';
import { useSelector, UseSelector } from "react-redux";
import storage from "../../utils/storage"
export default function NavHeader(){
    const items:MenuProps['items']=[
       {
        key:"logout",
        label:(
            <span>退出登录</span>
        )
        },{
            key:"personal",
            label:(
                <span>个人中心</span>
            )
        }
    ]
    const handleClick:MenuProps['onClick']=({key})=>{
        if(key==='logout') {
            //退出登录得要清除toekn然后页面跳转到登录页面
            storage.remove("token")
            window.location.href="/login"
        }else if (key==='personal') {
            console.log("功能待定");
        }
    }
    const username=useSelector((state:any)=>state.userSlice.username)
    return <div className={styles.navHeader}>
            <div className={styles.left}>
                <div>
                    <MenuUnfoldOutlined></MenuUnfoldOutlined>
                </div>
            </div>
            <div className={styles.right} style={{marginRight:"10px"}}>
                <Dropdown menu={{items,onClick:handleClick}}  trigger={['click']}>
                    <a onClick={(e)=>e.preventDefault()}>
                        <Space style={{color:"black"}}>
                            {"Welcome!"+username}
                             <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
            </div>
    </div>

}