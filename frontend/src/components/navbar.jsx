import React from 'react'
import './componentsStyle.css';
import {Link} from "react-router-dom";
import { useParams } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className="navBarMain">
      <div className="logBox">
        My WebSite
      </div>
      <div className="MenuBar">
        <Link to={"/home"} className='Link'>
        <div className="menuItems">Home</div>
        </Link>

        <Link to={"/updateuser"} className='Link'>
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