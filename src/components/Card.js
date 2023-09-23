import React, { useEffect } from 'react'
import './Card.css'

import AOS from "aos";
import "aos/dist/aos.css";

import { GiWheat } from "react-icons/gi";
import { GiFarmTractor } from "react-icons/gi";
import { GiFruitBowl } from "react-icons/gi";
import { GiBarn } from "react-icons/gi";

function Card() {
  useEffect(() => {
    AOS.init({
      disable: function() {
        var maxWidth = 800;
        return window.innerWidth < maxWidth;
      }
    });
    AOS.refresh();
  }, []);
  return (
    <div className="card-hort" data-aos="zoom-out-up" data-aos-offset="200"
    data-aos-delay="70"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false">

      <div className="description">
        <p>
        HortFarms Ltd is at the forefront of Kenya's commercial fruit business, focusing in the cultivation and exportation of high-quality organic and conventional fresh fruits. Our steadfast dedication to innovation, freshness, diversity, and the continuous pursuit of perfection pushes us to get farm-fresh fruit to store shelves and, ultimately, to consumers' dinners.
        </p>
        </div>
      
    <div className="card-container" >
        <div className="card-contents"><div className="parent">
      <div className="card">
        <div className="content-box">
          <span className="card-title">Agricultural Products</span>
          <p className="card-content">
          We at Hortfarms Ltd play a vital role in supplying food, raw materials, and economic livelihoods to communities worldwide, serving as the foundation of our global food supply chain.
          </p>
        
        </div>
        <div className="date-box">
            <GiWheat className='icon-card'/>
        </div>
      </div>
    </div></div>

        <div className="card-contents"><div className="parent">
      <div className="card">
        <div className="content-box">
          <span className="card-title">Modern <br /> Techniques</span>
          <p className="card-content">
          We prioritize sustainable practices, including organic farming, crop rotation, and reduced chemical usage, to protect the environment and promote long-term food security. 
          </p>
        
        </div>
        <div className="date-box">
        <GiFarmTractor className='icon-card'/>
        </div>
      </div>
    </div></div>
        <div className="card-contents"><div className="parent">
      <div className="card">
        <div className="content-box">
          <span className="card-title">Farm <br /> Supplies</span>
          <p className="card-content">
          Farm supplies refer to essential resources and materials required for agricultural activities. Farm supplies are crucial for ensuring the successful cultivation of crops.
          </p>
        
        </div>
        <div className="date-box">
        <GiBarn className='icon-card'/>
        </div>
      </div>
    </div></div>
        <div className="card-contents"><div className="parent">
      <div className="card">
        <div className="content-box">
          <span className="card-title">Fresh Fruits <br /> and Vegetables</span>
          <p className="card-content">
          Are natural, unprocessed foods that are rich in vitamins, minerals, and dietary fiber. They are essential components of a healthy diet and provide a wide range of flavors and nutritional benefits. 
          </p>
  
        </div>
        <div className="date-box">
        <GiFruitBowl className='icon-card'/>
        </div>
      </div>
    </div></div>
    </div>

    </div>
  )
}

export default Card