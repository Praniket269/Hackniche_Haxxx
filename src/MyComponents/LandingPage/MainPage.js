import React from 'react'
import './MainPage.css'
import logo from './logo.png'
import header from './header.jpg'

export const MainPage = () => {
  return (
    <>
    <div className="mainHead">
        <div className="head">
            <div className="logo"> <img src={logo} alt=""/></div>
            <div className="navbar">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Register/Sign in</li>
                </ul>
            </div>
        </div>
    </div>
    {/* <div className="overlay"></div> */}
    <div className="headerContent">
        <h1>Lorem ipsum dolor</h1>
        <br></br>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dignissimos sunt architecto necessitatibus cum deleniti tenetur consequuntur quo aliquam voluptatem obcaecati maiores, fugit odit ut omnis temporibus eveniet magnam officiis consectetur quisquam asperiores accusamus?</p>
    </div>
    

    <footer>
        <div className="footerContent">
            <div className="icons">
                <i className="fa-brands fa-instagram fa-2xl"></i>
                <i className="fa-brands fa-linkedin fa-2xl "></i>
            </div>
            <div className="footerInfo">
                <h4>Sena Seva</h4>
                <div>Copyright &#169; 2022 All rights reserved</div>
                <div className="footerTags">
                    <a className= "footrefs" href="">Privacy Policy</a>
                    <span>|</span>
                    <a className= "footrefs" href="">Help and Support</a>
                    <span>|</span>
                    <a className= "footrefs" href="">FAQ's</a>
                </div>Name
            </div>
        </div>
    </footer>
    {/* <div>Hello world</div> */}
    </>
  )
}
