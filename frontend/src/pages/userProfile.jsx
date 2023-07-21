import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar';
import axios from 'axios';
import { useEffect } from 'react';

const UserProfile = () => {
    const {userId} = useParams();
    const [user, setUser] = useState('')
    const [profileImg, setProfileImg] = useState();

const updateUserProfile = async ()=>{
  try {
    const formData = new FormData();
    formData.append('profileImg', profileImg);

    const response = await axios.patch(`http://localhost:8000/updateuser/${userId}`, formData);
    window.alert("Profile Data Updated Sucessfully");
    setProfileImg();
    
  } catch (error) {
    window.alert(error);
  }

}
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
    }, [updateUserProfile])
    

  return (
    <>
    <Navbar   userId={userId}/>

    <div className="userProfileMainBox">
        <img src={`http://localhost:8000/${user.profileImg}`} alt="ProfileIMG" className='userProfileImg'/>
        <h4>{user.username}</h4>
        <h5>{user.email}</h5>

        <input type="file"
         name='profileImg' id='ProfileImg'
            onChange={(e)=>setProfileImg(e.target.files[0])}
                />

            <button onClick={updateUserProfile}>Update profile Pic</button>
    </div>
    
    </>
  )
}

export default UserProfile;