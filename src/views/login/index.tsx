import { Form,Button,Input } from "antd"
import { UserOutlined,UnlockOutlined } from '@ant-design/icons';
import "./index.less"
import { Color } from "antd/es/color-picker"
const Login=()=>{
    const onFinish=()=>{}
    const onFinishFailed=()=>{

    }
    return <div className="login">
        <div className="login-wrapper">
            <div className="title">Login System</div>
            <Form
                style={{ maxWidth: 600 }}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
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