import { Form,Button,Input, message } from "antd"
import { UserOutlined,UnlockOutlined } from '@ant-design/icons';
import styles from "./index.module.less"
import { ILoginParams } from "../../types/loginTypes";
import { login } from "../../api/login";
import storage from "../../utils/storage"
import {useDispatch} from "react-redux"
import { setUserInfo } from "../../store/Auth/user/userSlice"
import { useNavigate } from "react-router"

const Login=()=>{
    const [form]=Form.useForm()//获取表单实例
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const onFinish=async (values:ILoginParams)=>{
        try{
            console.log(form);
            const userName=form.getFieldValue("username");
            // 发起登录请求
            const res = await login(values);
            const data = res.data
            message.success("登录成功")
            // 只存储token，不要存整个data，token是字符串，不需要JSON.stringify
            storage.set("token", data.token)
            console.log(values);
            dispatch(setUserInfo(userName))
            navigate('/welcome')
        }catch(err){
            console.error('登录失败：',err)
            message.error('登录失败，请检查账号密码或服务器状态')
        }
    }
    return <div className={styles.login}>
        <div className={styles.loginWrapper}>
            <div className={styles.title}>Login System</div>
            <Form
            form={form}
                style={{ maxWidth: 600 }}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                <Input prefix={<UserOutlined />} style={{width:"450px"}}/>
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                    style={{marginBottom:"30px"}}
                >
                <Input.Password  style={{width:"450px"}} prefix={<UnlockOutlined />}/>
                </Form.Item >
                <Form.Item label={null}>
                <Button type="primary" htmlType="submit" block  style={{width:"500px"}}>
                    Login
                </Button>
                </Form.Item>
            </Form>
        </div>
    </div>
}
export default Login
