import React from 'react';
import './Services.css'; 
import NewsletterForm from './NewsletterForm';

import { GiWheat } from "react-icons/gi";
import { GiFarmTractor } from "react-icons/gi";
import { GiFarmer } from "react-icons/gi";
import { GiBarn } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { FaMapLocationDot } from "react-icons/fa6";
import { BsBoxSeam } from "react-icons/bs";
import { IoDiamondOutline } from "react-icons/io5";


function Services() {
  return (
    <div className="shell">
    <div className="serice-container">
      <h1>Our Services</h1>
      <div className="service-heading">
      We are committed to providing our customers with the highest quality products and services. We believe that agriculture is essential to the future of humanity, and we are proud to play a role in helping farmers to produce the food that we all need.

Contact us today for more information about our products and services. We would be happy to help you with all of your agricultural needs.
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
        <GiFarmer className='icon-card'/>
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
        <BsBoxSeam className='icon-card'/>
          <h2>Logistics</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            quae?
          </p>
        </div>
        <div className="service">
          <IoDiamondOutline className='icon-card'/>
          <h2>Quality Control</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            quae?
          </p>
        </div>
      </div>
      </div>
      <NewsletterForm/>
    </div>
  );
}

export default Services;
