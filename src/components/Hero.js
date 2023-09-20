import React from 'react'
import './Hero.css'
import 'animate.css';
import {Link} from 'react-router-dom'

function Hero() {
   return (
    
    <div className="background-container">
      <div className="left-side">
        
        <span className='h-top animate__animated animate__bounceInDown'>A New Way To Invest In Agriculture </span> <br />
        <span className='h-mid animate__animated animate__bounceInDown'>Experience The Real</span> <br />
        <span className='h-below animate__animated animate__bounceInDown'>Agriculture</span>

       <Link className="link" to='/about'> <button className='Btn-hero animate__animated animate__bounceInDown'  >Read More</button> </Link> 
         
      </div>     
    </div>
  )
}

export default Hero
