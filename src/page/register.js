

import React from 'react';
import { Button,Input,Form } from 'antd';
import './Register.css'
import {userRegister} from '../webapi/user'

class Register extends React.Component{
    registerForm=(values)=>{
        // console.log(values);
        if (values.registerpassword !== values.rgpswagain) {
            alert("两次密码输入不一致")
        }
        else{
            let user = {
                username: values.registerccount,
                password: values.registerpassword,
                email: values.registeremail,
                avatar: null
            }
            console.log(userRegister(user));
            console.log(user);
        }
    }
    

   render(){
    return (
        <div className='webbody'>
        <Form id='registerform' className='Register'  onFinish={this.registerForm} autoComplete="off">
            <div className='headline'> Web IM</div>

            <Form.Item className='account' name='registerccount' label='账号' >
            <Input placeholder='请输入英文或字母' className='input' />
            </Form.Item>

            <Form.Item className='email' name='registeremail' label='邮箱' >
                <Input placeholder='请输入邮箱' className='input' type='email' />
            </Form.Item>

           <Form.Item className='password' name='registerpassword' label='密码'>
             <Input placeholder='请输入英文或字母' className='input' type='password' />
           </Form.Item>

           <Form.Item className='passwordagain' name='rgpswagain' label='确认密码' >
              <Input placeholder='请再次输入密码' className='input' type='password' />
           </Form.Item>
                <Button className='registerbutton' type="primary" htmlType="submit">注册</Button>
        </Form>
        </div>
    )
   }
}

export default Register;