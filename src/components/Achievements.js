import React, { useEffect } from 'react'
import './Achievements.css'

import AOS from "aos";
import "aos/dist/aos.css";

import { BiTimeFive } from "react-icons/bi";
import { MdAttachMoney } from "react-icons/md";
import { AiOutlineTrophy } from "react-icons/ai";
import { BsGraphUpArrow } from "react-icons/bs";

function Achievements() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="achieve-title">
      <span data-aos="fade-up"
     data-aos-duration="600">Our Achievements</span>
    <div className="container-achievements" data-aos="fade-up"
     data-aos-duration="3000">
      <div className="card-items">
    <div className="item item--1">
      <BiTimeFive className='icon-achieve'/>
      <span className="quantity">5+</span>
      <span className="text" style={{color:"white",  fontSize:"17px"}}>Years Of Success</span>
    </div>
    <div className="item item--2">
      <BsGraphUpArrow  className='icon-achieve'/>
      <span className="quantity">100+</span>
      <span className="text" style={{color:"white",  fontSize:"17px"}}>Sales</span>
    </div>
    <div className="item item--3">
    <MdAttachMoney  className='icon-achieve'/>
      <span className="quantity">$1.5 M</span>
      <span className="text" style={{color:"white",  fontSize:"17px"}}>Total Earnings</span>
    </div>
    <div className="item item--4">
      <AiOutlineTrophy  className='icon-achieve'/>
      <span className="quantity">3</span>
      <span className="text" style={{color:"white",  fontSize:"17px"}}>Winning Awards</span>
    </div>
  </div>
  </div>
  </div>    
  )
}

export default Achievements