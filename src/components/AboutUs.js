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
         <ul className="text">
          <li>Competent and professional team</li>
          <li>Competitive prices</li>
          <li>Professional consultation</li>
          <li>Strategic market-based agreements with organized farmers</li>
          <li>Transparency Value chain</li>
          <li>We value food safety</li>
          <li>We value Occupational health and safety of our employees</li>
          <li></li>
         </ul>
         <span className="text">Vision: <br /> To be a premier supplier of quality avocados globally</span> <br />
         <span className="text">Mission: <br /> To provide quality products and services that exceeds specifications and expectations of customers and business patners at all times.</span>
         <span></span>
        {/* <div className="skills">
          <span>Web Design</span>
          <span>Photoshop & Illustrator</span>
          <span>Coding</span>
        </div> */}
      </div>

      <div className="about-description">

      </div>
    </div>
  );
} 

export default AboutUs