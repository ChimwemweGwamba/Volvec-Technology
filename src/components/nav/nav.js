import React from 'react'
import './nav.css'
import logo from '../../assets/images/logo_text.png';


function Nav() {
  return (
    <div className='navContainer'>
        <div className='logo'>
            <img src={logo} alt="Logo" />
        </div>


        <ul>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Services</a>
            </li>
            <li>
                <a href="#">Request</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>

    </div>
  )
}

export default Nav