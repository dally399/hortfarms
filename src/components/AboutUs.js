import React, { useEffect } from 'react'
import './AboutUs.css'

import AOS from "aos";
import "aos/dist/aos.css";
import NewsletterForm from './NewsletterForm';

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0,0);
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="shell">
    <div className="about-section">
      <div className="inner-container" data-aos="fade-left"  data-aos-offset="500"
     data-aos-easing="ease-in-sine">
        <h1>About Us</h1>
        <p className="text">
        HortFarms Ltd is a leading commercial grower and exporter of premium organic and conventional fresh fruits from Kenya. We have a continuous quest for innovation, freshness, diversity, and excellence to bring produce from the farm to the shelves and ultimately to the consumer tables.
         </p>
         <p className="text">
         Hortfarm Exporters Ltd started and got incorporated in the year 2020. We have the best team in both management and staff to ensure you get the best quality produce within the shortest time.
         </p>

         <p className="text"><b>Our continual growth has been instigated by a number of factors and initiatives and value which include;</b></p>
         <ul className="text-list">
          <li>Competent and professional team</li>
          <li>Competitive prices</li>
          <li>Professional consultation</li>
          <li>Strategic market-based agreements with organized farmers</li>
          <li>Transparency Value chain</li>
          <li>We value food safety</li>
          <li>We value Occupational health and safety of our employees</li>
         </ul>

        <p className="text"> <b>Our Core Values</b></p>
        <ul className="text-list">
          <li> <b>Collaboration: </b>We believe that collaboration is essential to success. We work closely with farmers, suppliers, customers, and other stakeholders to build strong relationships and achieve common goals.</li>
          <li> <b>Sustainability:</b> We are committed to sustainability in all aspects of our business. We source fruits and vegetables from sustainable farms and use sustainable processing methods.</li>
          <li> <b>Integrity:</b> We conduct our business with integrity and honesty. We are transparent with our customers and stakeholders, and we always strive to meet our commitments.</li>
          <li> <b>Innovation:</b> We are constantly innovating to improve our products and services. We invest in research and development to find new ways to meet the needs of our customers.</li>
          <li> <b>Accountability:</b> We are accountable for our actions and we take responsibility for our results. We are committed to providing our customers with the highest quality products and services.</li>
          
        </ul>

         <p className="text">
          <p><b>Our Vision:</b></p>
          <p>To be a premier supplier of fresh farm produce with guaranteed quality and timely delivery.</p>
         </p>
         <p className="text">
          <p><b>Our Mission:</b></p>
          <p>
          Providing high quality products and services that exceed the expectations of our valued customers and business partners.</p>
          </p>

          <p className="text">
          <p><b>Our Motto:</b></p>
          <p>
          Your supplier of choice. 
We ensure you get farm fresh produce within the shortest time possible leveraging on technology
          </p>
          </p>
         <span></span>
        <div className="skills">
          <span>Quality</span>
          <span>Timeliness</span>
          <span>Reliable</span>
        </div>
      </div>

      <div className="about-description">

      </div>
    </div>
      <NewsletterForm/>
    </div>
  );
} 

export default AboutUs