import React, { useContext, useEffect, useState } from 'react'
import './pagesStyle.css'
import { Link} from 'react-router-dom';
import DataContext from '../components/dataContext';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import dateFormat from 'dateformat';
import Navbar from '../components/navbar';
import image from '../assets/blogImg.jpg';
import {FiEdit} from 'react-icons/fi';
import {MdOutlineAutoDelete} from 'react-icons/md';

const Home = () => {
 const {userId} = useParams();
 const [ userData, setUserData ] = useContext(DataContext);
 const [comment, setComment] = useState([]);
 const [user, setUser] = useState([]);
 
 useEffect(() => {
   getComment();
   getUser();
 }, []);

//  GETTING SINGLE USER
 const getUser = async () => {
try {
  const response = await axios.get(`http://localhost:8000/home/${userId}`);
   setUser(response.data);
   setUserData(userId);
  
} catch (error) {
  window.alert(error);
}  
 };



// GETTING ALL COMMENT DATA FROM DATABASE
 const getComment = async () => {
try {
  const response = await axios.get("http://localhost:8000/comments");
   setComment(response.data);
  
} catch (error) {
  window.alert(error);
}  
 };

//  DELETING DATA FORM DATABASE
const handleDelete = async (id)=>{
  try {
    const delComment = await axios.delete(`http://localhost:8000/comment/${id}`);
    window.alert("elemet Deleted");
    getComment();
    
  } catch (error) {
    window.alert(error);
    
  }
}

  return (
    <>
    <Navbar/>
    
    <div className='homeMainBox' id='mainBoxHome'>
      <div className="addCommentBtnBox">
        <Link to={`/${userId}/addComment`} className='Link'>
          <button className="addCommentBtn">Add New Comment</button>
        </Link>
        <Link to={`/${userId}/myblogs`} className='Link'>
          <button className="addCommentBtn">My Blogs</button>
        </Link>
      </div>

      {/* COMMENNT SECTION */}

      <div className="commentSectionMainBox">

         {comment.map((element)=>(
          <>
          <div className="blogCard" key={element._id}>
        <div className="blogImageBox">
          <img src={`http://localhost:8000/${element.blogImg}`} alt=""  className='blogImage'/>
        </div>
        <div className="blogDescriptionBox">
          <h4 className="blogTitle">{element.blogTitle}</h4>
          <p className='blogDescription'>{element.description}</p>
          <div className="dateBox">
          <span className="blogDate">{dateFormat(element.date , "dddd, mmmm dS, yyyy ")}</span>
        </div>
        </div>
        <div className="blogUserDataBox">
          <img src={`http://localhost:8000/${element.userId.profileImg}`} alt="ProfileImage" className='userProfileImage'/>
          <span className="blogUserName">{element.userId.username}</span>
          <div className="cardButtonsBox">
            {/* <span className='cardButton editButton'><FiEdit/></span>
            <span className='cardButton deleteButton'><MdOutlineAutoDelete/></span> */}

          </div>
        </div>
      </div> 









          {/* <div key={element._id}className="commentCardBox">
          
          <div className="CommentHeading">
          <img src={`http://localhost:8000/${element.userId.profileImg}`} alt="ProfileIMG" className='userProfileImg'/>
            <span className="userName">{element.userId.username}</span>
            
            <h4 className="topicName">{element.blogTitle}</h4>
            <img src={`http://localhost:8000/${element.blogImg}`} alt="Blog Image" className='blogImag' />
          </div>
          <div className="CommentDiscrpitionBox">
            <p className="commentDiscription">{element.description}</p>
            <p className="commenttime">{dateFormat(element.date , "dddd, mmmm dS, yyyy ")}</p>
          </div> */}
          {/* <div className="cardButtonSection">
            <Link to={`/updatecomment/${element._id}`}>
            <button className='cardButton' id='editButton'>Edit</button>
            </Link>
            <button className='cardButton' id='deleteButton'
             onClick={()=> handleDelete(element._id)}
            >Delete</button>
          </div> */}
        {/* </div> */}
           
          </>

         ))}
      </div>

      
    </div>

    </>
  )
}

export default Home