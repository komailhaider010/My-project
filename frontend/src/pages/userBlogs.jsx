import React from 'react'
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import dateFormat from 'dateformat';
import Navbar from '../components/navbar';

const UserBlogs = () => {

    const {userId} = useParams();
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        getBlogs();
      }, []);

      

      const getBlogs = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/usercomments/${userId}`);
           setBlogs(response.data);
          
        } catch (error) {
          window.alert(error);
        }  
         };

         const handleDelete = async (id)=>{
            try {
              const delComment = await axios.delete(`http://localhost:8000/comment/${id}`);
              window.alert("elemet Deleted");
              getBlogs();
              
            } catch (error) {
              window.alert(error);
              
            }
          }

  return (
    <>
    <Navbar userId ={userId}/>
    <div className='userBlogsMainBox'>
    {blogs.map((element)=>(
          <>
          <div key={element._id}className="commentCardBox">
          
          <div className="CommentHeading">
            <h4 className="userName">{element.userId.username}</h4>
            <h4 className="topicName">{element.blogTitle}</h4>
          </div>
          <div className="CommentDiscrpitionBox">
            <p className="commentDiscription">{element.description}</p>
            <p className="commenttime">{dateFormat(element.date , "dddd, mmmm dS, yyyy ")}</p>
          </div>
          <div className="cardButtonSection">
            <Link to={`/updatecomment/${element._id}`}>
            <button className='cardButton' id='editButton'>Edit</button>
            </Link>
            <button className='cardButton' id='deleteButton'
             onClick={()=> handleDelete(element._id)}
            >Delete</button>
          </div>
        </div>
           
          </>

         ))}
    </div>
    
    
    
    </>
  )
}

export default UserBlogs;