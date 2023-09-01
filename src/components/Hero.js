import React from 'react'
import './Hero.css'
import 'animate.css';

function Hero() {
  return (
    <div className="background-container">
      <div className="left-side">
        
        <span className='h-top animate__animated animate__bounceInDown'>A New Way To Invest In Agriculture </span> <br />
        <span className='h-mid animate__animated animate__bounceInDown'>Experience The Real</span> <br />
        <span className='h-below animate__animated animate__bounceInDown'>Agriculture</span>

        <button className='Btn-hero'>Read More</button>
         
      </div>     
    </div>
  )
}

export default Hero