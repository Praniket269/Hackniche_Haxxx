import React from "react";
import "./MainPage.css";
import logo from "../Assets/logo.png";

export const MainPage = () => {
  return (
    <>
      <div className="mainHead">
        <div className="head">
          <img width="15%" src={logo} alt="logo" />
          <ul className="mx-10">
            <li>
              <a href="#"> Home</a>
            </li>
            <li>
              <a href="#about"> About Us</a>
            </li>
            <li>
              <a href="/contactus"> Contact Us </a>
            </li>
            <li>
              <a href="/login"> Login </a>
            </li>
          </ul>
        </div>
        <div className="slogan">
          <h1>सेवा अस्मकम् धर्म</h1>
        </div>
        <div className="mainText">
          <p>Aiding the lives of our brave servicemen in return to their selfless service towards us and our nation...</p>
        </div>
      </div>

      {/* <footer id="contact">
        <div className="footerContent">
          <div className="icons">
            <i className="fa-brands fa-instagram fa-2xl"></i>
            <i className="fa-brands fa-linkedin fa-2xl "></i>
          </div>
          <div className="footerInfo">
            <h4>Sena Seva</h4>
            <div>Copyright &#169; 2022 All rights reserved</div>
            <div className="footerTags">
              <span className="footrefs" href="">
                Privacy Policy
                <span>|</span> &nbsp;
              </span>
              <span className="footrefs" href="">
                Help and Support
                <span>|</span> &nbsp;
              </span>
              <span className="footrefs" href="">
                FAQ's
              </span>
            </div>
          </div>
        </div>
      </footer>
    </> */}
    </>
  );
};
