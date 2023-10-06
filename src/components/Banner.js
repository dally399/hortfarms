import React, { useEffect } from 'react'
import './Banner.css'
import {Link} from 'react-router-dom'


import { PiPottedPlantLight } from 'react-icons/pi';
import { MdFamilyRestroom } from 'react-icons/md';
import { TbAirConditioning } from 'react-icons/tb';

import AOS from "aos";
import "aos/dist/aos.css";

import banner_img1 from '../assets/basket.png'
import banner_img2 from '../assets/banner.png'

function Banner() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
   <div className="banner-main-container">
    <div className="banner-left" data-aos="zoom-in-up" data-aos-delay="500"  data-aos-duration="1000">
        <img src={banner_img1} alt="" loading='lazy'/>
    </div>

    <div className="banner-right">
      <span className='banner-title' data-aos="zoom-in-left" data-aos-delay="900" >HortFarms Ltd</span>
      <span className='banner-content' data-aos="zoom-in-down" data-aos-delay="1100">

      <p  className='banner-p1'>
      Our continual growth has been instigated by a number of factors and initiatives and value which include;
 
      </p>
      <ul  className='banner-p2'>
        <li>Competent and professional team</li>
        <li>Competitive prices</li>
        <li>Professional consultation</li>
        <li>Professional consultation</li>
        <li>Strategic market-based agreements with organized farmers</li>
        <li>Transparency Value chain</li>
        <li>Production and packaging of quality products</li>
        <li>We value food safety</li>
        <li>We value Occupational health and safety of our employees</li>
      </ul>
         
      </span>
    </div>

    <div className="banner-right">
      <span className='banner-title'  data-aos="zoom-in-right" data-aos-delay="500">Why Choose Us</span>
      <span className='banner-content' data-aos="zoom-in-down" data-aos-delay="800">
      <p className='banner-p1'>We produce the best quality of fruits worldwide</p>
        <span className='banner-sub'>
          <PiPottedPlantLight className='icon-card'/>
          100% Organic
        </span>
        <p className='sub-content'>All of our fruits and veggies are 100% organically certified.  is not only beneficial to your health, but it is also beneficial to the environment.
</p>
        <span className='banner-sub'>
          <MdFamilyRestroom className='icon-card'/>
        Family healthy
        </span>
        <p className='sub-content'>Eating a diet rich in fruits and vegetables is one of the best things you can do for your family's health. Our produce is a great way to get your daily dose of essential vitamins, minerals, and antioxidants.</p>
        <span className='banner-sub'>
        <TbAirConditioning className='icon-card'/>
         Always Fresh
        </span>
        <p className='sub-content'>We source our fruits and vegetables from local farms whenever possible. This ensures that our produce is always fresh and at its peak flavor. We also take great care in packaging and shipping our produce, so that it arrives at your door in perfect condition.</p>

<br />
<Link className="link" to='/products'> <button className='Btn' style={{fontSize:"15px"}}>Read More</button> </Link>
</span>
    </div>

    <div className="banner-left" data-aos="zoom-in-up" data-aos-delay="950"  data-aos-duration="1100">
        <img className='img2' src={banner_img2} alt="" loading='lazy'/>
    </div>
   </div>
  )
}

export default Banner