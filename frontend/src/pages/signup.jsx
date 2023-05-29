import React from 'react'
// import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='logInMainBox'>
      <div className="LoginLogoBox">
            <h2>MY Website</h2>
        </div>
        <div className='LoginInputMainBox'>
            <div className="loginInputBox">
                <label className='loginLabels'>Enter Your Name:</label>
                <input type="text" className='LoginInputs' placeholder='Enter Your Email'/>
            </div>
            <div className="loginInputBox">
                <label className='loginLabels'>Enter Your Email:</label>
                <input type="text" className='LoginInputs' placeholder='Enter Your Email'/>
            </div>
            <div className="loginInputBox">
                <label className='loginLabels'>Enter Your Password:</label>
                <input type="password" className='LoginInputs' placeholder='Enter Your Password'/>
            </div>
            <div className="loginInputBox">
                <label className='loginLabels'>Confirm Password:</label>
                <input type="password" className='LoginInputs' placeholder='Enter Your Password'/>
            </div>
            
            <div className="loginInputBox">
                <label >Accept Terms and Conditions?</label>
                <input type="checkbox"/>
            </div>
            <div className="loginInputBox">
                <button className='LoginButton'>Sign Up</button>
            </div>
        </div>
      
    </div>
  )
}

export default Signup;