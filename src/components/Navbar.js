import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css' 
import logo from '../assets/logo5.png'

import { GrClose } from "react-icons/gr";
import { TbGridDots } from "react-icons/tb";

function Navbar() {

  const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

  return (
    <div className="n-wrapper">
      <div className="nav-left">
        <img src={logo} alt="logo" />        
        </div>     

      <div className={click ? "nav-right active" : "nav-right"}>

        <div className="n-list">
          <ul className= "nav-list" style={{listStyleType:'none'}}>

            <Link className="link" to='/home' onClick={closeMenu}><li className='listItem'>Home</li></Link>

            <li className='listItem'>Catalog
            <ul className='dropdown-menu'>
              <Link className="link" to='/gallery' onClick={closeMenu}><li>Gallery</li></Link>
              <Link className="link" to='/products' onClick={closeMenu}><li>Our Products</li></Link>
              <Link className="link" to='/patners' onClick={closeMenu}><li>Our Partners</li></Link>
              </ul>
            </li>

            <Link className="link" to='/blog' onClick={closeMenu}><li className='listItem'>Blog</li></Link>
            <Link className="link" to='/services' onClick={closeMenu}><li className='listItem'>Services</li></Link>
            <Link className="link" to='/about' onClick={closeMenu}><li className='listItem'>About us</li></Link>
          </ul>
        </div>

        <button className='Btn'>
          <Link className="link" style={{color:'#fff'}} to='/contact' onClick={closeMenu}>Contact us</Link>
        </button>      
      </div>  
        
      <div className='hamburger' onClick={handleClick}>
        {click ? (<GrClose size={20} style={{ color: '#000' }} />)
       : (<TbGridDots size={20} style={{ color: '#000' }} />)}
      </div>
    </div>
  )
}

export default Navbar