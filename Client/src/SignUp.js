import React, { Component } from 'react';

class SignUp extends Component {
    render(){
        return(
        <div id='loginContainer'>
            <div id='formContainer'>
                <p className='InputTitleText'>Username:</p>
                <input onKeyPress={this.props.handleInput} type='username' className='userInputBox'></input>
                <p className='InputTitleText email'>Email:</p>
                <input type='email' onKeyPress={this.props.handleInput} className='userInputBox'></input>
                <div id='passwordForgotContainer'>
                    <p className='InputTitleText'>Password:</p>
                </div>
                <input onKeyPress={this.props.handleInput} type='password' className='userInputBox'></input>
            </div>
        </div>
        )
    }
}

export default SignUp;