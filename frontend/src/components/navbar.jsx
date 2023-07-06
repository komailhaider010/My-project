import React, { useContext } from 'react'
import './componentsStyle.css';
import {Link , useParams} from "react-router-dom";
import DataContext from './dataContext';

const Navbar = () => {

  const [userData, setUserData] = useContext(DataContext)

  return (
    <>
    <div className="navBarMain">
      <div className="logBox">
        My WebSite
      </div>
      <div className="MenuBar">
        <Link to={`/home/${userData}`} className='Link'>
        <div className="menuItems">Home</div>
        </Link>

        <Link to={`/userprofile/${userData} `} className='Link'>
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