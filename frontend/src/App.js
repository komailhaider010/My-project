import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import './App.css';
import DataContext from "./components/dataContext";
import Navbar from "./components/navbar";
import Login from "./pages/login";
import Signup from "./pages/signup";
import CreateBlog from "./pages/createBlog";
import UpdateBlog from "./pages/updateBlog";
import UserBlogs from "./pages/userBlogs";
import UserProfile from "./pages/userProfile";
import { useState } from "react";



function App() {

  const [userData, setUserData] = useState('');

  return (
    <>
    <BrowserRouter>

      <DataContext.Provider value={[userData, setUserData]} >

      <Routes>
        
        <Route path="/home/:userId" element= {<Home/>} />
        <Route path="/userprofile/:userId" element={<>  <UserProfile/> </>} />
        <Route path="/:userId/addcomment" element={<>  <CreateBlog/> </>}  />
        <Route path="/updatecomment/:id" element={<>  <UpdateBlog/> </>} />
        <Route path= "/:userId/myblogs" element={<> <UserBlogs/> </>}  />

        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
              
      </Routes>
      </DataContext.Provider>
    </BrowserRouter>
    
    
    
    </>
  );
}

export default App;
