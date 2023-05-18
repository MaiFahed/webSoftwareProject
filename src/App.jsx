import NavBar from "./components/NavBar";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import SignIn from "./pages/SignIn";
import ResPosting from "./pages/ResPosting";
import SignUp from "./pages/SignUp";
import Orders from "./pages/Orders";
import Home2 from "./pages/Home2";
import { LogOut } from "./pages/LogOut";
import Statistic from "./pages/Statistic";
import AdminNavBar from "./components/AdminNavBar";
import Examination from "./pages/Examination";

function App() {

  return (
    <div className="app">
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/SignIn" component={SignIn} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/Home2" component={Home2} />
            <Route path="/NavBar" component={NavBar} />
            <Route path="/ResPosting" component={ResPosting} />
            <Route path="/Orders" component={Orders} />
            <Route path="/LogOut" component={LogOut} />
            <Route path="/AdminNavBar" component={AdminNavBar} />
            <Route path="/Examination" component={Examination} />
            <Route path="/Statistic" component={Statistic} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;