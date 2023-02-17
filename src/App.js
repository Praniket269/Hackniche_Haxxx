import React from "react";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./MyComponents/Login";
import Signup from "./MyComponents/Signup";
import "./App.css";
import { NewNav } from "./MyComponents/HomePage/NewNav";
import FamilySupport from "./MyComponents/FamilySupport";
import PensionScheme from "./MyComponents/PensionScheme";
import { MainPage } from "./MyComponents/LandingPage/MainPage";

function App() {
  return (
    <Router>
      <div className="App">
        <NewNav />
        <PensionScheme/>
        {/* <FamilySupport /> */}
        {/* <MainPage/> */}
        {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to='/login'>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/sign-up" element={<Signup />} />
            </Routes>
          </div>
        </div> */}
      </div>
    </Router>
  );
}

export default App;
