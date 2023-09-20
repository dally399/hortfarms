import React from 'react';
import './Services.css'; 

import { GiWheat } from "react-icons/gi";
import { GiFarmTractor } from "react-icons/gi";
import { GiHammerSickle } from "react-icons/gi";
import { GiBarn } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { FaMapLocationDot } from "react-icons/fa6";


function Services() {
  return (
    <div className="container">
      <h1>Our Services</h1>
      <div className="service-heading">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda hic fugit tempora cupiditate numquam, modi unde quisquam obcaecati alias eos ullam minima ea necessitatibus ducimus, consequatur perferendis earum, nostrum dolores!
      </div>
      <div className="row">
        <div className="service">
        <GiWheat className='icon-card'/>
          <h2>Agricultural Products</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            quae?
          </p>
        </div>
        <div className="service">
        <GiFarmTractor className='icon-card'/>
          <h2>Modern Techniques</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            quae?
          </p>
        </div>
        <div className="service">
        <GiBarn className='icon-card'/>
          <h2>Farm Supplies</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            quae?
          </p>
        </div>
        <div className="service">
        <GiHammerSickle className='icon-card'/>
          <h2>Expert Farmer</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            quae?
          </p>
        </div>
        <div className="service">
          <FaMapLocationDot className='icon-card'/>
          <h2>Source Fresh Fruits and Vegetables</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            quae?
          </p>
        </div>
        <div className="service">
        <TbTruckDelivery className='icon-card'/>
          <h2>Export Fresh Fruits and Vegetables</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            quae?
          </p>
        </div>
        <div className="service">
          <i className="fas fa-money-check-alt"></i>
          <h2>Payroll</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            quae?
          </p>
        </div>
        <div className="service">
          <i className="fas fa-network-wired"></i>
          <h2>Networking</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            quae?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
