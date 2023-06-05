import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async()=>{
    
         const addUser = {username, email, password, cPassword}
    
         console.log(addUser)
         try {
            const response = await axios.post("http://localhost:8000/signup", addUser ,{
            headers: {
                'content-type': 'application/json'
            }
             });
            console.log(response);
            setName('');
            setEmail('');
            setPassword('');
            setCPassword('');
            window.alert("User Sucessfully Registered");
            navigate("/");
            
         } catch (error) {
            window.alert(error);
            console.log(error);
         }
    }

  return (
    <div className='logInMainBox'>
      <div className="LoginLogoBox">
            <h2>MY Website</h2>
        </div>
        <div className='LoginInputMainBox'>
            <div className="loginInputBox">
                <label className='loginLabels'>Enter Your Name:</label>
                <input type="text" className='LoginInputs' placeholder='Enter Your Email'
                value={username}
                onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="loginInputBox">
                <label className='loginLabels'>Enter Your Email:</label>
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
                <label className='loginLabels'>Confirm Password:</label>
                <input type="password" className='LoginInputs' placeholder='Enter Your Password'
                value={cPassword}
                onChange={(e)=>setCPassword(e.target.value)}/>
            </div>
            
            <div className="loginInputBox">
                <label >Accept Terms and Conditions?</label>
                <input type="checkbox"/>
            </div>
            <div className="loginInputBox">
                <button className='LoginButton' onClick={handleSubmit} >Sign Up</button>
            </div>
        </div>
      
    </div>
  )
}

export default Signup;