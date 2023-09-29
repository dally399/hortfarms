import React, {useEffect} from 'react';
import './Services.css'; 
import NewsletterForm from './NewsletterForm';

import { GiWheat } from "react-icons/gi";
import { GiFarmTractor } from "react-icons/gi";
import { GiFarmer } from "react-icons/gi";
import { RiPresentationLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { FaMapLocationDot } from "react-icons/fa6";
import { BsBoxSeam } from "react-icons/bs";
import { IoDiamondOutline } from "react-icons/io5";


function Services() {
  useEffect(() =>{
    window.scrollTo(0,0);
  },[]);
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
          Our products come from sustainable farms all around the world that use cutting-edge farming methods to assure excellent quality and output.
          </p>
        </div>
        <div className="service">
        <GiFarmTractor className='icon-card'/>
          <h2>Modern Techniques</h2>
          <p>
          In our agricultural operations, we employ a number of sophisticated technology. It allows us to conserve resources, increase yields, and lessen our environmental effect.
          </p>
        </div>
        <div className="service">
        <RiPresentationLine className='icon-card'/>
          <h2>Fruit and Vegetables Marketing</h2>
          <p>
          Whatever your taste, we have a fruit for you. And because we have such a large selection of fruits, you may always find something new to try.
          </p>
        </div>
        <div className="service">
        <GiFarmer className='icon-card'/>
          <h2>Expert Farmer</h2>
          <p>
          Our team of expert farmers is available to provide you with advice and support on all aspects of agriculture. 
          </p>
        </div>
        <div className="service">
          <FaMapLocationDot className='icon-card'/>
          <h2>Source Fresh Fruits and Vegetables</h2>
          <p>
          We are a leading supplier of fresh fruits and vegetables. 
          </p>
        </div>
        <div className="service">
        <TbTruckDelivery className='icon-card'/>
          <h2>Export Fresh Fruits and Vegetables</h2>
          <p>
          We also export fresh fruits and vegetables to markets all over the world.
          </p>
        </div>
        <div className="service">
        <BsBoxSeam className='icon-card'/>
          <h2>Logistics</h2>
          <p>
          We transport our produce from the farm to its destination.
          </p>
        </div>
        <div className="service">
          <IoDiamondOutline className='icon-card'/>
          <h2>Quality Control</h2>
          <p>
            We have a team of experts in place to monitor quality and address any issues that may arise.
          </p>
        </div>
      </div>
      </div>
      <NewsletterForm/>
    </div>
  );
}

export default Services;
