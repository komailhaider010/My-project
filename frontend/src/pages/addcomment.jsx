import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';




const AddComment = () => {

const {userid} = useParams();
const [name, setName] = useState('');
const [topicName, setTopicName] = useState('');
const [comment, setcomment] = useState('');
const [error, setError] = useState('');

const handleSubmit = async()=>{
    
    const addComment = [ topicName, comment];

     try {
        const response = await axios.post(`http://localhost:8000/${userid}/addcomment`, {userId: userid, topicName, comment} ,{
        headers: {
            'content-type': 'application/json'
        }
         });
        console.log(addComment);
        setError('');
        setName('');
        setTopicName('');
        setcomment('');
        window.alert("Comment Sucessfully Added");
        console.log(addComment);
        
     } catch (error) {
        window.alert(error);
        console.log(error);
     }
}

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

            <button className='addCommentSubmittBtn' onClick={handleSubmit}>Submitt</button>

        </div>

    </div>
    
    </>
  )
}

export default AddComment