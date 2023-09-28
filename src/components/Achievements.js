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
    <div className="achieve-main">
      <span className="achieve-title" data-aos="fade-up"
     data-aos-duration="600">Our Achievements</span>
    <div className="container-achievements" data-aos="fade-up"
     data-aos-duration="3000">
      <div className="card-items">
    <div className="item">
      <BiTimeFive className='icon-achieve'/>
      <span className="quantity">5+</span>
      <span className='txt-achieve'>Years Of Success</span>
    </div>
    <div className="item">
      <BsGraphUpArrow  className='icon-achieve'/>
      <span className="quantity">100+</span>
      <span className='txt-achieve'>Sales</span>
    </div>
    <div className="item">
    <MdAttachMoney  className='icon-achieve'/>
      <span className="quantity">$1.5 M</span>
      <span className='txt-achieve'>Total Earnings</span>
    </div>
    <div className="item">
      <AiOutlineTrophy  className='icon-achieve'/>
      <span className="quantity">3</span>
      <span className='txt-achieve' >Winning Awards</span>
    </div>
  </div>
  </div>
  </div>    
  )
}

export default Achievements