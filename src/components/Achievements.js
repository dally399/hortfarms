import React from 'react'
import './Achievements.css'

import { BiTimeFive } from "react-icons/bi";
import { MdAttachMoney } from "react-icons/md";
import { AiOutlineTrophy } from "react-icons/ai";
import { BsGraphUpArrow } from "react-icons/bs";

function Achievements() {
  return (
    <div className="achieve-title">
      <span>Our Achievements</span>
    <div className="container-achievements">
      <div className="card-items">
    <div className="item item--1">
      <BiTimeFive/>
      <span className="quantity">5+</span>
      <span className="text text--1">Years Of Success</span>
    </div>
    <div className="item item--2">
      <BsGraphUpArrow/>
      <span className="quantity">100+</span>
      <span className="text text--2">Sales</span>
    </div>
    <div className="item item--3">
    <MdAttachMoney/>
      <span className="quantity">$1.5 M</span>
      <span className="text text--3">Total Earnings</span>
    </div>
    <div className="item item--4">
      <AiOutlineTrophy/>
      <span className="quantity">3</span>
      <span className="text text--4">Winning Awards</span>
    </div>
  </div>
  </div>
  </div>    
  )
}

export default Achievements