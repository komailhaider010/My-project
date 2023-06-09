import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateComment = () => {
    // const navigate = useNavigate();
    const [name, setName] = useState('');
    const [topicName, setTopicName] = useState('');
    const [comment, setcomment] = useState('');
    const [error, setError] = useState('');
    const {id} = useParams();
    console.log(id);

    const updateComment = [name, topicName, comment];

// Getting SIngle User
    const getSingleComment = async()=>{
     try {
        const response = await axios.get(`http://localhost:8000/comment/${id}` ,{
        headers: {
            'content-type': 'application/json'
        }
         });

         setName(response.data.name);
         setTopicName(response.data.topicName);
         setcomment(response.data.comment);
           
     } catch (error) {
        window.alert(error)
     }
}

// Handle Update
const handleUpdate = async()=>{

    console.log(updateComment);
    try {
         const response = await axios.patch(`http://localhost:8000/update/${id}`,{name, topicName, comment,});
        window.alert("data Sucessfully Updated");
        // navigate('/home')
        
    } catch (error) {
        window.alert(error);
    }
}

useEffect(() => {
  getSingleComment()
  
}, []);


  return (
    <>
    <div className="homeMainBox">
        <h2>Add new Comment</h2>
        {error && <div className='alert'>{error}</div>}
        <div className="newcommentInputBox">
            <div className="commentInputBox">
                <label> Your Name:</label>
                <input type="text" className='newCommentInputs' placeholder='Enter Your Name'
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
            </div>

            <div className="commentInputBox">
                <label>Topic Name:</label>
                <input type="text" className='newCommentInputs'  placeholder='Enter Topic Name'
                value={topicName}
                onChange={(e)=>setTopicName(e.target.value)}
                />
            </div>
            <div className="commentInputBox">
                <label>Discription:</label>
                <textarea className='newCommentInputs' placeholder='EnterTopic Discription'
                value={comment}
                onChange={(e)=>setcomment(e.target.value)}
                />
            </div>

            <button className='addCommentSubmittBtn'onClick={handleUpdate}>Update</button>

        </div>

    </div>
    
    
    </>
  )
}

export default UpdateComment;