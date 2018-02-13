import React from 'react'
import LoginForm from './presentation/LoginForm'
import { createForm } from 'rc-form';

class LoginPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loginState:false,
      loginForm:{
        email:'',
        password:''
      }
    }
    this.onStateUpdate = this.onStateUpdate.bind(this)
    this.onClickLoginButton = this.onClickLoginButton.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleGoogleLogin = this.handleGoogleLogin.bind(this)
  }
  onClickLoginButton(event){
    this.setState({loginState:true})
  }
  onStateUpdate(event){
    const field = event.target.name;
    let form = Object.assign({}, this.state.loginForm);
    form[field] = event.target.value;
    return this.setState({loginForm:form})
  }
  handleGoogleLogin(googleUser){
    console.log(googleUser)
    var id_token = googleUser.getAuthResponse().id_token;
    var googleId = googleUser.getId();

    console.log({ googleId });
    console.log({accessToken: id_token});
    //anything else you want to do(save to localStorage)...
  }
  handleSubmit(event){
    // console.log(event)
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }else{
        setTimeout(() => {
          this.setState({loginState:false})
        }, 1000)
      }
    });
    event.preventDefault()
  }
  render(){
    // console.log(this.props)
    return(
      <div style={{marginTop:'50px'}}>
        <LoginForm
          form={this.props.form}
          loginForm={this.state.loginForm}
          onChange={this.onStateUpdate}
          loginState={this.state.loginState}
          onClick={this.onClickLoginButton}
          onSubmit={this.handleSubmit}
          onGoogleLogin={this.handleGoogleLogin}/>
      </div>
    )
  }
}

export default createForm()(LoginPage)
