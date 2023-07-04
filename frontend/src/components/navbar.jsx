import React from 'react'
import './componentsStyle.css';
import {Link , useParams} from "react-router-dom";

const Navbar = (props) => {

  const {userId} = props;

  return (
    <>
    <div className="navBarMain">
      <div className="logBox">
        My WebSite
      </div>
      <div className="MenuBar">
        <Link to={`/home/${userId}`} className='Link'>
        <div className="menuItems">Home</div>
        </Link>

        <Link to={`/userprofile/${userId}`} className='Link'>
        <div className="menuItems">Update Data</div>
        </Link>
        <Link to={"/about"} className='Link'>
        <div className="menuItems">About</div>
        </Link>
      </div>

    </div>
    
    
    
    
    </>
  )
}

export default Navbar;