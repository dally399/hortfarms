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
    {/* <p class="heading">Sourcing and Export</p> */}
    <span className='cont-exp'>We are a sourcing firm that assists companies in the United States, Europe, and other countries in obtaining high-quality fruits and vegetables from Kenya. We collaborate with a network of reputable farmers and exporters to ensure that our clients receive the best products at the most cheap pricing.
</span>
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
    <span className='cont-exp'>We at HortFarms Ltd specialize in the international export of fruits and vegetables. We have over 20 years of experience and a proven track record of achievement. We collaborate with a network of growers and exporters to ensure that we deliver high-quality items to our consumers.
</span>
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
    {/* <p class="heading">Work with Contracted Farmers</p> */}
    <span className='cont-exp'>From small-scale producers to large-scale commercial operations, we collaborate with farmers of all sizes. We also work with a wide range of crops, such as fruits and vegetables.

Our objective is to assist contracted farmers in increasing their production and profitability. We are dedicated to offering the finest possible support and services to our clients.
</span>
  </div>
</div>
</div>

</div>
</div>
  )
}

export default WhatWeDo