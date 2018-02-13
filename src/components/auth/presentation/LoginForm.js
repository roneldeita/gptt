import React from 'react'
import PropTypes from 'prop-types'
import { GoogleLogin } from 'react-google-login-component'
import { FacebookLogin } from 'react-facebook-login-component';
import {Row, Col, Card, Form, Input, Button, Icon} from 'antd'
const FormItem = Form.Item;

const LoginForm = ({form, loginForm, onChange, loginState, onClick, onSubmit, onGoogleLogin}) => {
  console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID)
  const { getFieldDecorator, isFieldTouched, getFieldError } = form;
  // Only show error after a field is touched.
  const emailError =  getFieldError('email');
  const passwordError = getFieldError('password');
  return (
    <Row type="flex" justify="center" gutter={20} style={{margin:0}}>
      <Col span={6}>
        <Card>
          <h2 className="txt-dark-grey">Login using social account</h2>
          <GoogleLogin socialId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            className="google-login"
            scope="profile"
            fetchBasicProfile={true}
            responseHandler={onGoogleLogin}
            buttonText="Login with Google"
            style={{width:'100%', marginBottom:'15px'}}/>
          <FacebookLogin socialId={process.env.REACT_APP_FACEBOOK_APP_ID}
            language="en_US"
            scope="public_profile,email"
            responseHandler={this.responseFacebook}
            xfbml={true}
            fields="id,email,name"
            version="v2.5"
            className="facebook-login"
            buttonText="Login With Facebook"
            style={{width:'100%'}}/>
        </Card>
      </Col>
      <Col span={6}>
        <Card>
          <h2 className="txt-dark-grey">Login using your email</h2>
          <Form onSubmit={onSubmit}>
            <FormItem
              hasFeedback={isFieldTouched('email')}
              validateStatus={emailError ? 'error' : 'success'}
              help={emailError || ''}
             >
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
              help={passwordError || ''}
            >
              {getFieldDecorator('password', {
                rules: [{ required: true}, {min:6}],
              })(
                <Input onChange={onChange} name="password" placeholder="Password" size="large" type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/> }/>
              )}
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
  form: PropTypes.object,
  loginForm: PropTypes.object,
  onChange: PropTypes.func,
  loginState: PropTypes.bool,
  onClick: PropTypes.func,
  onSubmit: PropTypes.func
}

export default LoginForm
