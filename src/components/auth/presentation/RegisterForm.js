import React from 'react'
import PropTypes from 'prop-types'
import {Row, Col, Card, Form, Input, Icon, Button} from 'antd'
import {Link} from 'react-router-dom'
const FormItem = Form.Item


const RegisterForm = ({form, registerForm, registerState, onClick, onSubmit, checkConfirm}) => {
  const { getFieldDecorator, isFieldTouched, getFieldError } = form
  const emailError = getFieldError('email')
  const firstNameError = getFieldError('first_name')
  const lastNameError = getFieldError('last_name')
  const passwordError = getFieldError('password')
  const confirmError = getFieldError('confirm')
  return (
    <div style={{marginTop:'50px'}}>
      <Row type="flex" justify="center" gutter={20} style={{margin:0}}>
        <Col xs={24} sm={24} md={12} lg={7}>
          <Card>
            <p className="auth-form">Register using your social account</p><br/>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={7}>
          <Card>
            <p className="auth-form">Register using your email</p><br/>
            <Form onSubmit={onSubmit}>
              <FormItem
                hasFeedback={isFieldTouched('email')}
                validateStatus={emailError ? 'error' : 'success'}
                help={emailError || ''}>
                {getFieldDecorator('email', {
                  rules: [
                    { required: true, message: 'Email is required' },
                    { type: 'email'}
                  ],
                })(
                  <Input placeholder="Email" size="large" prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} /> }/>
                )}
              </FormItem>
              <Row gutter={12} style={{display:'hidden'}}>
                <Col span={12}>
                  <FormItem
                    hasFeedback={isFieldTouched('first_name')}
                    validateStatus={firstNameError ? 'error' : 'success'}
                    help={firstNameError || ''}>
                    {getFieldDecorator('first_name', {
                      rules: [
                        { required: true, message: 'First name is required' },
                        { pattern: '[A-Za-z]', message: 'First name should only contain letters'}
                      ],
                    })(
                      <Input placeholder="First Name" size="large"/>
                    )}
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    hasFeedback={isFieldTouched('last_name')}
                    validateStatus={lastNameError ? 'error' : 'success'}
                    help={lastNameError || ''}>
                    {getFieldDecorator('last_name', {
                      rules: [
                        { required: true, message: 'Last name is required' },
                        { pattern: '[A-Za-z]', message: 'Last name should only contain letters'}
                      ],
                    })(
                      <Input placeholder="Last Name" size="large"/>
                    )}
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    hasFeedback={isFieldTouched('password')}
                    validateStatus={passwordError ? 'error' : 'success'}
                    help={passwordError || ''}>
                    {getFieldDecorator('password', {
                      rules: [
                        { required: true, message: 'Password is required' },
                        { min:6 }
                      ],
                    })(
                      <Input placeholder="Password" size="large" type="password"/>
                    )}
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    hasFeedback={isFieldTouched('confirm')}
                    validateStatus={confirmError ? 'error' : 'success'}
                    help={confirmError || ''}>
                    {getFieldDecorator('confirm', {
                      rules: [
                        { required: true , message: 'Confirm Password is required'},
                        { min: 6 },
                        { validator: checkConfirm }
                      ],
                    })(
                      <Input placeholder="Confirm Password" size="large" type="password"/>
                    )}
                  </FormItem>
                </Col>
              </Row>
              <FormItem>
                <Button type="primary" size="large" htmlType="submit" loading={registerState} onClick={onClick} style={{marginRight:'8px'}}>Register</Button>
                <p style={{display:'inline-block'}}>Already registered? <Link to='/login'> Login</Link></p>
              </FormItem>
              <p style={{textAlign:'center'}}>By registering, I agree with <a href="/register">Terms & Conditions</a> and <a href="/register">Privacy Policy</a> of <span style={{fontWeight:500}}>Global Pinoy Travel and Tours</span>.</p>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

RegisterForm.propTypes = {
  form: PropTypes.object.isRequired,
  registerForm: PropTypes.object.isRequired,
  registerState: PropTypes.bool,
  onClick: PropTypes.func,
  onSubmit: PropTypes.func,
  checkConfirm: PropTypes.func
}

export default RegisterForm
