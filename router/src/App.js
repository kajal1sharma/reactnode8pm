import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Home from "./Home"
import Contact from './Contact';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import RoutesXYZ from './Routes';
function App() {
  //const [component , setComponent]= useState("Home")
  return (
    <BrowserRouter>
    <RoutesXYZ/>
    <Link to="/home">HomeXYZ</Link>
    <Link to="/contact">Contatct XYZ</Link>
   
    <div className="App">
      {/* <nav>
        <ul>
          <li onClick={()=>{setComponent("Home")}}>Home</li>
          <li onClick={()=>{setComponent("contact")}}>Contact</li>
        </ul>
      </nav>
      {component==="Home"?<Home/>:<Contact/>}*/}
    </div> 
    </BrowserRouter>
  );
}

export default App;
