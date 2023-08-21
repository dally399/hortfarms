import React from 'react'
import './Navbar.css' 
import logo from '../assets/logo5.png'

function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="nav-left">
        <img src={logo} alt="logo" />
      </div>

      <div className="nav-right">
        <div className="n-list">
          <ul style={{listStyleType:'none'}}>
            <li className='listItem'>Home</li>
            <li className='listItem'>Catalog</li>
            <li className='listItem'>Blog</li>
            <li className='listItem'>Services</li>
            <li className='listItem'>About us</li>
          </ul>
        </div>

        <button className='Btn'>
          Contact us
        </button>

      </div>
    </div>
  )
}

export default Navbar