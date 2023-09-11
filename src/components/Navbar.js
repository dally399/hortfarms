import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css' 
import logo from '../assets/logo5.png'

// import { AiFillCloseCircle } from "react-icons/ai";
// import { TbGridDots } from "react-icons/tb";

function Navbar() {

  const [active, setActive] = useState('nav-right')

  const showNav = ()=>{
    setActive('nav-right activeNavbar')
  }

  const removeNavbar = ()=>{
    setActive('nav-right')
  }

  return (
    <div className="n-wrapper">
      <div className="nav-left">
        <img src={logo} alt="logo" />
      </div>

      <div className={active}>
        <div className="n-list">
          <ul className="nav-list" style={{listStyleType:'none'}}>

            <Link className="link" to='/'><li className='listItem'>Home</li></Link>

            <li className='listItem'>Catalog
            <ul className='dropdown-menu'>
              <Link className="link" to='/gallery'><li>Gallery</li></Link>
              <Link className="link" to='/products'><li>Our Products</li></Link>
              <Link className="link" to='/patners'><li>Our Partners</li></Link>
              </ul>
            </li>

            <Link className="link" to='/blog'><li className='listItem'>Blog</li></Link>
            <Link className="link" to='/services'><li className='listItem'>Services</li></Link>
            <Link className="link" to='/about'><li className='listItem'>About us</li></Link>
          </ul>
        </div>

        <button className='Btn'>
          <Link className="link" style={{color:'#fff'}} to='/contact'>Contact us</Link>
        </button>

        <div onClick={removeNavbar} className="closeNavbar">
          {/* <AiFillCloseCircle className="icon"/> */}
        </div>

      </div>

      <div onClick={showNav} className="toggleNavbar">
        {/* <TbGridDots className="icon"/> */}
      </div>
    </div>
  )
}

export default Navbar