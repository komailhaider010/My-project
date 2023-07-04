import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar';
import axios from 'axios';
import { useEffect } from 'react';

const UserProfile = () => {
    const {userId} = useParams();
    const [user, setUser] = useState('')

    const getUser = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/home/${userId}`);
           setUser(response.data);
          
        } catch (error) {
          window.alert(error);
        }  
         };
    useEffect(() => {
    getUser();
    }, [])
    

  return (
    <>
    <Navbar   userId={userId}/>

    <div className="userProfileMainBox">
        <h4>{user.username}</h4>
        <h5>{user.email}</h5>
    </div>
    
    </>
  )
}

export default UserProfile;