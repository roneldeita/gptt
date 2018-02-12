import React from 'react'
import LoginForm from './presentation/LoginForm'
import { createForm } from 'rc-form';

class LoginPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loginState:false,
      loginForm:{
        username:'',
        password:''
      }
    }
    this.onStateUpdate = this.onStateUpdate.bind(this)
    this.onClickLoginButton = this.onClickLoginButton.bind(this)
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
  render(){
    console.log(this.props)
    return(
      <div style={{marginTop:'50px'}}>
        <LoginForm
          loginForm={this.state.loginForm}
          onChange={this.onStateUpdate}
          loginState={this.state.loginState}
          onClick={this.onClickLoginButton}/>
      </div>
    )
  }
}

export default createForm()(LoginPage)
//
// Tip on how to overcome the fear of loosing someone, just picture your self without that someone.
// Wait, what? parang lalong lumala
// #anxiety
