// import ListGroup from "./components/ListGroup"
import NavBar from "./components/NavBar";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home';
import SignIn from "./pages/SignIn";
import ResPosting from "./pages/ResPosting";
import SignUp from "./pages/SignUp";
import AuthNavbar from "./components/AuthNavbar";
import Orders from "./pages/Orders";
// import { useHistory } from 'react-router-dom';
function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/posting" element={<ResPosting />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;