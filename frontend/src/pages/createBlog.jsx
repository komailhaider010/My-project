import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useParams ,useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';

const AddComment = () => {

const navigate = useNavigate();
const {userId} = useParams();
// const [name, setName] = useState('');
const [blogImg, setBlogImg] = useState();
const [blogTitle, setBlogTitle] = useState('');
const [description, setDescription] = useState('');
const [error, setError] = useState('');

// const uploadBlogImg = (event)=>{
//  const file = event.target.files[0];
//  setBlogImg(URL.createObjectURL(file));
//  console.log(blogImg);
// }

const handleSubmit = async(e)=>{
    
    const blog = new FormData();
    console.log(blogImg);
    
    blog.set('blogImg', blogImg);
    blog.append('userId', userId);
    blog.append('blogTitle', blogTitle);
    blog.append('description', description);

    console.log(blog);

    // const blog = {
    //     userId: userId,
    //     blogTitle: blogTitle,
    //     description: description,
    //     blogImg: blogImg
    // }
    
     try {
        await axios.post(`http://localhost:8000/${userId}/addcomment`,
        blog
        // ,{
        // headers: {
        //     'content-type': 'application/json'
        // }}
        );
        setError('');
        setBlogTitle('');
        setDescription('');
        window.alert("Blog Sucessfully Added");
        navigate(`/home/${userId}`);
        
     } catch (error) {
        window.alert(error);
        console.log(error);
     }
}

  return (
    <>
    <Navbar userId={userId}/>
    <div className="homeMainBox">
        <h2>Add new Comment</h2>
        <div className="newcommentInputBox">
            <div className="commentInputBox">
                <label> Upload Image:</label>
                <input type="file" className='newCommentInputs'
                name='blogImg' id='blogImg'
                onChange={(e)=>setBlogImg(e.target.files[0])}
                />
                {/* Display the image if blogImg is set */}
            {/* {blogImg && <img src={URL.createObjectURL(blogImg)} className="newCommentBlogImage" />} */}
            </div>

            <div className="commentInputBox">
                <label>Topic Name:</label>
                <input type="text" className='newCommentInputs' 
                value={blogTitle}
                onChange={(e)=>setBlogTitle(e.target.value)}
                />
            </div>
            <div className="commentInputBox">
                <label>Discription:</label>
                <textarea className='newCommentInputs'
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                />
            </div>

            <button className='addCommentSubmittBtn' onClick={handleSubmit}>Submitt</button>

        </div>

    </div>
    
    </>
  )
}

export default AddComment