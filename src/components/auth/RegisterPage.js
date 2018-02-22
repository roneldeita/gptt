import React from 'react'
import NProgress from 'nprogress'
import RegisterForm from './presentation/RegisterForm'
import { createForm } from 'rc-form';

class RegisterPage extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      registerState: false,
      registerForm:{
        email:'',
        last_name:'',
        first_name:'',
        password:'',
        consfirm_password:''
      }
    }
    this.onClickRegisterButton = this.onClickRegisterButton.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.checkConfirm = this.checkConfirm.bind(this)
  }
  onClickRegisterButton(event){
    this.setState({registerState: true})
  }
  handleButtonState(state){
    setTimeout(() => {
      this.setState({registerState: state})
    }, 1000)
  }
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form
    const password = form.getFieldValue('password')
    if (value !=='' && value !== password && value.length >= 6) {
      callback('Password does not match the confirm password');
    }
    callback();
  }
  handleSubmit(event){
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.handleButtonState(false)
      }else{
        this.handleButtonState(false)
      }
    });
    event.preventDefault()
  }
  componentWillMount() {
    NProgress.start()
  }
  componentDidMount(){
    NProgress.done()
  }
  render(){
    return(
      <RegisterForm
        form={this.props.form}
        registerForm={this.state.registerForm}
        registerState={this.state.registerState}
        onClick={this.onClickRegisterButton}
        onSubmit={this.handleSubmit}
        checkConfirm={this.checkConfirm}/>
    )
  }
}

export default createForm()(RegisterPage)
