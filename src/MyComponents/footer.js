import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div>
    
<footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 .text-dark">
    <div className="link">
    <span class="text-sm text-black-500 sm:text-center dark:text-black-400">© 2023 Sena-Seva™. All Rights Reserved.
    </span>
    </div>
    
    <ul class="flex flex-wrap items-center mt-3 text-sm text-black-500 dark:text-gray-400 sm:mt-0"> 
    <div className="link">
        <li className="mx-4">
            <a  href="/">Privacy Policy</a> 
        </li>
        </div>
        <div className="link">
        <li className="mx-4">
           <a href="/">Licensing </a>       
        </li>
        </div>
        <div className="link">
        <li className="mx-4">
          <a href="/">Contact Us</a> 
        </li>
        </div>
    </ul>
</footer>

  

    </div>
  )
}