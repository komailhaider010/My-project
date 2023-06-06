import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const [email , setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = async()=>{
    
        const login = [email, password];
    
         try {
            const response = await axios.get("http://localhost:8000/login", login);
            console.log(response);
            window.alert("Login SUcessfully");
            
         } catch (error) {
            window.alert(error);
            console.log(error);
         }
    }

  return (
    <>
    <div className="logInMainBox">
        <div className="LoginLogoBox">
            <h2>MY Website</h2>
        </div>
        <div className='LoginInputMainBox'>
            <div className="loginInputBox">
                <label className='loginLabels'>Enter Email or Username:</label>
                <input type="text" className='LoginInputs' placeholder='Enter Your Email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="loginInputBox">
            <label className='loginLabels'>Enter Your Password:</label>
                <input type="password" className='LoginInputs' placeholder='Enter Your Password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className="loginInputBox">
                <label >Remember Me?</label>
                <input type="checkbox"/>
            </div>
            <div className="loginInputBox">
                <button className='LoginButton' onClick={handleLogin}>LogIn</button>
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