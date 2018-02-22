import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login-component'
import { FacebookLogin } from 'react-facebook-login-component'
import {Row, Col, Card, Form, Input, Button, Icon, Divider} from 'antd'
const FormItem = Form.Item;

const LoginForm = ({form, loginForm, onChange, loginState, onSubmit, onGoogleLogin, onFacebookLogin}) => {
  // console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID)
  const { getFieldDecorator, isFieldTouched, getFieldError } = form;
  // Only show error after a field is touched.
  const emailError =  getFieldError('email');
  const passwordError = getFieldError('password');
  return (
    <Row type="flex" justify="center" gutter={20} style={{margin:0}}>
      <Col xs={24} sm={24} md={12} lg={7}>
        <Card>
          <p className="auth-form">Start emmediately using your social account</p>
          <p><Icon type="rocket"/> No more email validation.</p><br/>
          <GoogleLogin socialId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            className="ant-btn ant-btn-lg google-login"
            scope="profile"
            fetchBasicProfile={true}
            responseHandler={onGoogleLogin}>
              <Icon type="google"/> Login with Google
          </GoogleLogin>
          <FacebookLogin socialId={process.env.REACT_APP_FACEBOOK_APP_ID}
            language="en_US"
            className="ant-btn ant-btn-lg facebook-login"
            scope="public_profile,email"
            responseHandler={onFacebookLogin}
            xfbml={true}
            fields="id, email, first_name, last_name, picture"
            version="v2.5">
              <Icon type="facebook" /> Login With Facebook
          </FacebookLogin>
          <Divider style={{color:'#808080', fontWeight:300}}>or</Divider>
          <Button size="large" type="warning" className="unified-login">Login with Unified Products</Button>
        </Card>
      </Col>
      {/*{<Col span={1} style={{display:'flex',alignItems:'center', justifyContent:'center'}}>
        <Button shape="circle">or</Button>
      </Col>}*/}
      <Col xs={24} sm={24} md={12} lg={7}>
        <Card>
          <p className="auth-form">Login using your email</p><br/>
          <Form onSubmit={onSubmit}>
            <FormItem
              hasFeedback={isFieldTouched('email')}
              validateStatus={emailError ? 'error' : 'success'}
              help={emailError || ''}>
              {getFieldDecorator('email', {
                rules: [
                  { required: true},
                  { type: 'email'}
                ],
              })(
                <Input onChange={onChange} placeholder="Email" size="large" prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} /> }/>
              )}
            </FormItem>
            <FormItem
              hasFeedback={isFieldTouched('password')}
              validateStatus={passwordError ? 'error' : 'success'}
              help={passwordError || ''}>
              {getFieldDecorator('password', {
                rules: [{ required: true}, {min:6}],
              })(
                <Input onChange={onChange} name="password" placeholder="Password" size="large" type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/> }/>
              )}
            </FormItem>
            <a style={{float:'right', marginTop:'-20px'}} href="">Forgot password?</a>
            <FormItem>
              <Button type="primary" size="large" htmlType="submit" loading={loginState} style={{marginRight:'8px'}}>Log in</Button>
              <p style={{display:'inline-block'}}>No account yet? <Link to='/register'> Register</Link></p>
            </FormItem>
          </Form>
        </Card>
      </Col>
    </Row>
  )
}

LoginForm.propTypes = {
  form: PropTypes.object,
  loginForm: PropTypes.object,
  onChange: PropTypes.func,
  loginState: PropTypes.bool,
  onClick: PropTypes.func,
  onSubmit: PropTypes.func,
  onGoogleLogin: PropTypes.func,
  onFacebookLogin: PropTypes.func
}

export default LoginForm
