import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
    <div className="logInMainBox">
        <div className="LoginLogoBox">
            <h2>MY Website</h2>
        </div>
        <div className='LoginInputMainBox'>
            <div className="loginInputBox">
                <label className='loginLabels'>Enter Email or Username:</label>
                <input type="text" className='LoginInputs' placeholder='Enter Your Email'/>
            </div>
            <div className="loginInputBox">
            <label className='loginLabels'>Enter Your Password:</label>
                <input type="password" className='LoginInputs' placeholder='Enter Your Password'/>
            </div>
            <div className="loginInputBox">
                <label >Remember Me?</label>
                <input type="checkbox"/>
            </div>
            <div className="loginInputBox">
                <button className='LoginButton'>LogIn</button>
            </div>
        </div>
        <div className="signupBtnBox">
            <p>Don't have an Account?</p>
            <Link to={"/signup"}>
            <p>Create an Account?</p>
            </Link>
        </div>
    </div>
    
    
    
    </>
  )
}

export default Login;