import React, { useContext, useEffect, useState } from 'react'
import './pagesStyle.css'
import { Link} from 'react-router-dom';
import DataContext from '../components/dataContext';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import dateFormat from 'dateformat';
import Navbar from '../components/navbar';

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
          <div key={element._id}className="commentCardBox">
          
          <div className="CommentHeading">
            <h4 className="userName">{element.userId.username}</h4>
            <h4 className="topicName">{element.blogTitle}</h4>
          </div>
          <div className="CommentDiscrpitionBox">
            <p className="commentDiscription">{element.description}</p>
            <p className="commenttime">{dateFormat(element.date , "dddd, mmmm dS, yyyy ")}</p>
          </div>
          {/* <div className="cardButtonSection">
            <Link to={`/updatecomment/${element._id}`}>
            <button className='cardButton' id='editButton'>Edit</button>
            </Link>
            <button className='cardButton' id='deleteButton'
             onClick={()=> handleDelete(element._id)}
            >Delete</button>
          </div> */}
        </div>
           
          </>

         ))}
      </div>
       
      
    </div>

    </>
  )
}

export default Home