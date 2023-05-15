// import ListGroup from "./components/ListGroup"
import NavBar from "./components/NavBar";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import SignIn from "./pages/SignIn";
import ResPosting from "./pages/ResPosting";
import SignUp from "./pages/SignUp";
// import { useHistory } from 'react-router-dom';
function App() {
return (
  <div className="app">
    <NavBar/>
     <div className="container">
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/signIn" element={ <SignIn />} />
        <Route path="/signUp" element={ <SignUp />} />
        <Route path="/about" element={ <About />} />
        <Route path="/posting" element={ <ResPosting />} />
      </Routes>
    </div> 
  </div>
);
}

export default App;