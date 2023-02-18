import React from "react";
import "./MainPage.css";
import logo from "../Assets/logo.png";

export const MainPage = () => {
  return (
    <>
      <div className="mainHead">
        <div className="head">
          <img width="20%" src={logo} alt="logo" />
          <div className="navbar">
            <ul>
              <li>
                <a href="#"> Home</a>
              </li>
              <li>
                <a href="#about"> About </a>
              </li>
              <li>
                <a href="#contact"> Contact Us </a>
              </li>
              <li>
                <a href="/sign-up"> Register </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="headerContent">
        <h2>Lorem ipsum dolor</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          dignissimos sunt architecto necessitatibus cum deleniti tenetur
          consequuntur quo aliquam voluptatem obcaecati maiores, fugit odit ut
          omnis temporibus eveniet magnam officiis consectetur quisquam
          asperiores accusamus?
        </p>
      </div>

      <footer id="contact">
        <div className="footerContent">
          <div className="icons">
            <i className="fa-brands fa-instagram fa-2xl"></i>
            <i className="fa-brands fa-linkedin fa-2xl "></i>
          </div>
          <div className="footerInfo">
            <h4>Sena Seva</h4>
            <div>Copyright &#169; 2022 All rights reserved</div>
            <div className="footerTags">
              <p className="footrefs" href="">
                Privacy Policy &nbsp;
                <span>|</span>
              </p>
              <p className="footrefs" href="">
                Help and Support
                <span>|</span>
              </p>
              <p className="footrefs" href="">
                FAQ's
                <span>|</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
