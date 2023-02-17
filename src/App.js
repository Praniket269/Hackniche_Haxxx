import "./App.css";
import JobPage from "./MyComponents/HomePage/JobPage";
import { Navbar } from "./MyComponents/HomePage/Navbar";
import { MainPage } from "./MyComponents/LandingPage/MainPage";
import { NewNav } from "./MyComponents/HomePage/NewNav";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./MyComponents/Login";
import Signup from "./MyComponents/Signup";
import Community from "./MyComponents/Community/Community";
import Schemes from "./MyComponents/Schemes/Schemes";
import React from "react";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import FamilySupport from "./MyComponents/FamilySupport";
import PensionScheme from "./MyComponents/PensionScheme";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}
        <div>
          <NewNav />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/jobs" element={<JobPage />} />
            <Route path="/schemes" element={<Community />} />
            <Route path="/com" element={<Schemes />} />
            <Route path="/education" element={<FamilySupport />} />
            <Route path="/pension" element={<PensionScheme />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
