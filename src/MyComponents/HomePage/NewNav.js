import React from 'react'
import './NewNav.css'
import navlogo from '../Assets/logo.png'

export const NewNav = () => {
  return (
    <>
    <div className="mynav">
        <div className= "navLogo"><img src={navlogo} alt="" /></div>
        <div className="featureIcons">
            <a className= "icons" href="/jobs">Jobs</a>
            <a className= "icons" href="/education">Education</a>
            <a className= "icons" href="/pension">Pension</a>
            <a className= "icons" href="/com">Community</a>
            <a className= "icons" href="/schemes">Schemes</a>
        </div>
    </div>
    </>
  )
}
