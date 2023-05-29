import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import './App.css';
import Navbar from "./components/navbar";
import Login from "./pages/login";
import Signup from "./pages/signup";
import AddComment from "./pages/addcomment";
import Update from "./pages/update";

function App() {

  const currentPath = window.location.pathname;

  const showNavbar = currentPath !== '/';
  const showNavbar1 = currentPath !== '/signup';


  return (
    <>
    <BrowserRouter>

      {showNavbar && showNavbar1 && <Navbar/>}
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/home" element= {<Home/>} />
        <Route path="/addcomment" element= {<AddComment/>} />
        <Route path="/updatecomment/:id"element={<Update/>}/>      
      </Routes>
    </BrowserRouter>
    
    
    
    </>
  );
}

export default App;
