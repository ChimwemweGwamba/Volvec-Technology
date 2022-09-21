import React from 'react'
import './nav.css'


function Nav() {
  return (
    <div className='navContainer'>
        <div className='logo'>
            <h3>
                Logo
            </h3>
        </div>

        <div className='navBar'>
            <ul>
                <li>
                    <p>Home</p>
                </li>
                <li>
                    <p>Services</p>
                </li>
                <li>
                    <p>Request</p>
                </li>
                <li>
                    <p>Contact Us</p>
                </li>
            </ul>

        </div>
    </div>
  )
}

export default Nav