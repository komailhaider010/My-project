import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import './App.css';
import Navbar from "./components/navbar";
import Login from "./pages/login";
import Signup from "./pages/signup";
import CreateBlog from "./pages/createBlog";
import UpdateBlog from "./pages/updateBlog";

function App() {

  const currentPath = window.location.pathname;

  const showNavbar = currentPath !== '/';
  const showNavbar1 = currentPath !== '/signup';


  return (
    <>
    <BrowserRouter>

      {showNavbar && showNavbar1 && <Navbar/>}
      <Routes>
        
        <Route path="/home/:userid" element= {<Home/>} />
        <Route path="/:userid/addcomment" element= {<CreateBlog/>} />
        <Route path="/updatecomment/:id"element={<UpdateBlog/>}/>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
              
      </Routes>
    </BrowserRouter>
    
    
    
    </>
  );
}

export default App;
