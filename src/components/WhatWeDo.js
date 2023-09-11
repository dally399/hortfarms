import React, { useEffect } from 'react'
import './WhatWeDo.css'

import AOS from "aos";
import "aos/dist/aos.css";

import sendproduct from '../assets/export.svg'
import sourceproduct from '../assets/sourcing.svg'
import collaborate from '../assets/collaboration.svg'

function WhatWeDo() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="title-main">
      <span data-aos="zoom-in-up"data-aos-offset="200"
    data-aos-delay="70"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false">What We Do</span>

    <div className="main-container-exp">
    <div class="card-container-exp" data-aos="fade-up"
     data-aos-duration="3000">
      <div class="card-exp">
        <div class="front-content">
        <img src={sourceproduct} alt="" />    
         <p>Sourcing of Fruits and Vegetables</p>
       </div>
  <div class="content-exp">
    <p class="heading">Sourcing and Export</p>
    <span className='cont-exp'>Sourcing and export of Hass and Fuerte Acocados</span>
  </div>
</div>
</div> 

<div class="card-container-exp" data-aos="fade-up"
     data-aos-duration="3000">
      <div class="card-exp">
        <div class="front-content">         
          <img src={sendproduct} alt="" />        
         <p>Export of Fruits and Vegetables</p>
       </div>
  <div class="content-exp">
    <span className='cont-exp'>We are exporter of best quality of Avocados
worldwide
We, at HortFarms Ltd specialise in high quality fresh
Avocado. Each fruit is handpicked and passes
through quality control before making into final export.</span>
  </div>
</div>
</div>

<div class="card-container-exp" data-aos="fade-up"
     data-aos-duration="3000">
      <div class="card-exp">
        <div class="front-content">
        <img src={collaborate} alt="" /> 
         <p>Work with Contracted Farmers</p>
       </div>
  <div class="content-exp">
    <p class="heading">Work with Contracted Farmers</p>
    <span className='cont-exp'> Work with Contracted Farmers who are gap certified</span>
  </div>
</div>
</div>

</div>
</div>
  )
}

export default WhatWeDo