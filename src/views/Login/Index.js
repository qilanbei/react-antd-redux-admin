import React, { Component } from 'react'
import { Form, Input, Button, Icon, Checkbox} from 'antd'
import Particles from 'react-particles-js';
import { connect } from 'react-redux'
import { setUserInfo } from '@/redux/actions/userInfo'
import './login.styl'

class LoginForm extends Component{
  constructor (props) {
    super(props)
    this.onResize = this.onResize.bind(this);
  }
  state = { clientHeight: document.documentElement.clientHeight || document.body.clientHeight };
  onResize() {
    this.setState({ clientHeight: document.documentElement.clientHeight || document.body.clientHeight });
  }
  componentDidMount() {
    window.addEventListener('resize', this.onResize);
  }
  componentWillUnmount() {
    window.addEventListener('resize', this.onResize);
    // componentWillMount进行异步操作时且在callback中进行了setState操作时，需要在组件卸载时清除state
    this.setState = () => {
      return;
    };
  }
  login = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        localStorage.setItem('isLogin', '1');
        // 模拟生成一些数据
        this.props.setUserInfo(Object.assign({}, values, { role: { type: 1, name: '超级管理员' } }));
        localStorage.setItem('userInfo', JSON.stringify(Object.assign({}, values, { role: { type: 1, name: '超级管理员' } })));
        this.props.history.push('/dashboard');
      } else {
        console.log(err);
      }
    });
  };
  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <Particles
          height={this.state.clientHeight - 5 + 'px'}
          params={{
            "number": {
              "value": 80,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            interactivity: {
              events: {
                "onhover": {
                  "enable": true,
                  "mode": "repulse"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              }
            },
            "retina_detect": true
          }}
        />
        <div className="login-form">
          <p style={{fontSize: '26px', color: '#001529', textAlign: 'center'}}>后台管理系统</p>
          <Form>
            <Form.Item>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '请填写用户名！' }]
              })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="admin" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请填写密码！' }]
              })(<Input.Password prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="123" />)}
            </Form.Item>
            <Form.Item>
              <Checkbox>Remember me</Checkbox>
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
              <Button type="primary" htmlType="submit"
                      onClick={this.login}
                      block
                      className="login-form-button">
                Log in
              </Button>
              <a href="">register now!</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
    setUserInfo: data => {
      dispatch(setUserInfo(data))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form.create()(LoginForm));
