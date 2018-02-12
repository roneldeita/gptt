import React from 'react'
import PropTypes from 'prop-types'
import {Row, Col, Card, Form, Input, Button, Icon} from 'antd'
const FormItem = Form.Item;

const LoginForm = ({loginForm, onChange, loginState, onClick}) => {
  return (
    <Row type="flex" justify="center" gutter={20} style={{margin:0}}>
      <Col span={6}>
        <Card>
          <h2 className="txt-dark-grey">Login using social account</h2>
          <Button type="primary" htmlType="button" size="large" style={{width:'100%', marginBottom:'15px'}} icon="facebook">Log in with Facebook</Button>
          <Button htmlType="button" size="large" style={{width:'100%'}} icon="google">Log in with Google</Button>
        </Card>
      </Col>
      <Col span={6}>
        <Card>
          <h2 className="txt-dark-grey">Login using your email</h2>
          <Form>
            <FormItem>
              <Input value={loginForm.username} onChange={onChange} name="username" placeholder="Username" size="large" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} /> }/>
            </FormItem>
            <FormItem>
              <Input value={loginForm.password} onChange={onChange} name="password" placeholder="Password" size="large" type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/> }/>
            </FormItem>
            <a style={{float:'right', position:'absolute', bottom:90, right:27}} href="">Forgot password?</a>
            <FormItem>
              <Button type="primary" htmlType="submit" loading={loginState} onClick={onClick}>
                Log in
              </Button>
            </FormItem>
          </Form>
        </Card>
      </Col>
    </Row>
  )
}

LoginForm.propTypes = {
  loginForm: PropTypes.object,
  onChange: PropTypes.func,
  loginState: PropTypes.bool,
  onClick: PropTypes.func
}

export default LoginForm
