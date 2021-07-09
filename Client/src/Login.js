import React, { Component } from 'react';

class Login extends Component {
    render(){
        return(
        <div id='loginContainer'>
            <div id='formContainer'>
                <p className='InputTitleText'>Username:</p>
                <input onKeyPress={this.props.handleInput} type='username' className='userInputBox'></input>
                <div id='passwordForgotContainer'>
                    <p className='InputTitleText'>Password:</p>
                    <p id='forgotPasswordText'>Forgot Your Password?</p>
                </div>
                <input onKeyPress={this.props.handleInput} type='password' className='userInputBox'></input>
            </div>
        </div>
        )
    }
}

export default Login;