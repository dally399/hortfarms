import React, { useEffect } from 'react'
import './AboutUs.css'

import AOS from "aos";
import "aos/dist/aos.css";

function AboutUs() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="about-section">
      <div className="inner-container" data-aos="fade-left"  data-aos-offset="500"
     data-aos-easing="ease-in-sine">
        <h1>About Us</h1>
        <p className="text">
        HortFarms Ltd is a leading commercial grower and exporter of premium organic and conventional fresh fruits from Kenya. We have a continuous quest for innovation, freshness, diversity, and excellence to bring produce from the farm to the shelves and ultimately to the consumer tables.
         </p>

         <p className="text">Our continual growth has been instigated by a number of factors and initiatives and value which include;</p>
         <ul className="text-list">
          <li>1. Competent and professional team</li>
          <li>2. Competitive prices</li>
          <li>3. Professional consultation</li>
          <li>4. Strategic market-based agreements with organized farmers</li>
          <li>5. Transparency Value chain</li>
          <li>6. We value food safety</li>
          <li>7. We value Occupational health and safety of our employees</li>
         </ul>
         <p className="text">
          <p><b>Our Vision:</b></p>
          <p>To be a premier supplier of quality avocados globally</p>
         </p>
         <p className="text">
          <p><b>Our Mission:</b></p>
          <p>To provide quality products and services that exceeds specifications and expectations of customers and business patners at all times.</p>
          </p>
         <span></span>
        <div className="skills">
          <span>Quality</span>
          <span>Transparent</span>
          <span>Reliable</span>
        </div>
      </div>

      <div className="about-description">

      </div>
    </div>
  );
} 

export default AboutUs