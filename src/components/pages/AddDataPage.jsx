import { Input, Form, Button } from 'antd'
import data from '../../data/totalData'

function AddDataPage() {

    const onFinish = (values) => {

        const objectData = {
            username:values.username,
            email:values.email,
            password:values.password
        }
        data.push(objectData)
    }

    return (
        <div className='flex justify-center'>
            <div className='w-1/4 flex justify-center border border-gray-300 rounded-lg mt-10'>
            <Form
            layout='vertical'
            className='mt-20'
                name="basic"
                onFinish={onFinish}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                >
                    <Button 
                        type="primary" 
                        className='bg-blue-600 px-10'
                        htmlType="submit">
                        Add
                    </Button>
                </Form.Item>
            </Form>
        </div>
        </div>
        
    )
}

export default AddDataPage