import React from 'react'
import {Link} from 'react-router-dom'
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

            <Link to='/'><li className='listItem'>Home</li></Link>

            <li className='listItem'>Catalog
            <ul className='dropdown-menu'>
              <Link to='/gallery'><li>Gallery</li></Link>
              <Link to='/products'><li>Our Products</li></Link>
              <Link to='/patners'><li>Our Partners</li></Link>
              </ul>
            </li>

            <Link to='/blog'><li className='listItem'>Blog</li></Link>
            <Link to='/services'><li className='listItem'>Services</li></Link>
            <Link to='/about'><li className='listItem'>About us</li></Link>
          </ul>
        </div>

        <button className='Btn'>
          <Link to='/contact'>Contact us</Link>
        </button>

      </div>
    </div>
  )
}

export default Navbar