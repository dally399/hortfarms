import React, {useEffect} from 'react';
import './Services.css'; 
import NewsletterForm from './NewsletterForm';

import AOS from "aos";
import "aos/dist/aos.css";

import { LiaSeedlingSolid } from "react-icons/lia";
import { MdEngineering } from "react-icons/md";
import { GiFarmer } from "react-icons/gi";
import { FaPeopleRobbery } from "react-icons/fa6";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { LiaIndustrySolid } from "react-icons/lia";
import { BsBoxSeam } from "react-icons/bs";
import { IoDiamondOutline } from "react-icons/io5";


function Services() {
  useEffect(() =>{
    AOS.init();
    AOS.refresh();
    window.scrollTo(0,0);
  },[]);
  return (
    <div className="shell">
    <div className="serice-container">
      <h1 data-aos="fade-up">Our Services</h1>
      <div className="service-heading" data-aos="fade-up">
      We are committed to providing our customers with the highest quality products and services. We believe that agriculture is essential to the future of humanity, and we are proud to play a role in helping farmers to produce the food that we all need.

Contact us today for more information about our products and services. We would be happy to help you with all of your agricultural needs.
      </div>
      <div className="row" data-aos="zoom-in-up">
        <div className="service">
        <LiaSeedlingSolid className='icon-card'/>
          <h2>Aggregation</h2>
          <p>
          We assist farmers in aggregating and selling their fruits and vegetables in bulk, reducing expenses, and boosting profits.
          </p>
        </div>

        <div className="service">
          <LiaIndustrySolid className='icon-card'/>
          <h2>Processing</h2>
          <p>
          We provide fruit and vegetable processing services like drying, juicing, and freezing to help farmers increase shelf life and access new markets.
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
        <FaPeopleRobbery className='icon-card'/>
          <h2>Market Linkage</h2>
          <p>
          We connect farmers with buyers all over the world, ensuring that they get the best possible price for their produce.
          </p>
        </div>

        <div className="service">
        <MdEngineering className='icon-card'/>
          <h2>Modern Techniques</h2>
          <p>
          In our agricultural operations, we employ a number of sophisticated technology. It allows us to conserve resources, increase yields, and lessen our environmental effect.
          </p>
        </div>
      
        <div className="service">
        <GiFarmer className='icon-card'/>
          <h2>Technical Advisory Services to Farmers</h2>
          <p>
          Our team of expert farmers is available to provide you with advice and support on all aspects of agriculture. 
          </p>
        </div>
      
        <div className="service">
        <AiOutlineFundProjectionScreen className='icon-card'/>
          <h2>Training and development</h2>
          <p>
          We offer farmers technical advice, enhance production, provide post-harvest training, and aid market access.
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
