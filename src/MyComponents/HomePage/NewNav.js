import React from 'react'
import './NewNav.css'
import navlogo from '../LandingPage/logo.png'

export const NewNav = () => {
  return (
    <>
    <div className="mynav">
        <div className= "navLogo"><img src={navlogo} alt="" /></div>
        <div className="featureIcons">
            <a className= "icons" href="">Jobs</a>
            <a className= "icons" href="">Education</a>
            <a className= "icons" href="">Pension</a>
            <a className= "icons" href="">Community</a>
            <a className= "icons" href="">Schemes</a>
            <a className= "icons" href="">&#xf2bd;</a>
        </div>
    </div>
    </>
  )
}
