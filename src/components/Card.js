import React, { useEffect } from 'react'
import './Card.css'

import AOS from "aos";
import "aos/dist/aos.css";

import { LiaSeedlingSolid } from "react-icons/lia";
import { LiaIndustrySolid } from "react-icons/lia";
import { GiFarmer } from "react-icons/gi";
import { BsBoxSeam } from "react-icons/bs";

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
          <span className="card-title">Aggregation</span>
          <p className="card-content">
          We aggregate fruits and vegetables from farmers, ensuring that they meet the highest quality standards. We work closely with farmers to understand their needs and provide them with the support they need to be successful.
          </p>
        
        </div>
        <div className="date-box">
            <LiaSeedlingSolid className='icon-card'/>
        </div>
      </div>
    </div></div>

        <div className="card-contents"><div className="parent">
      <div className="card">
        <div className="content-box">
          <span className="card-title">Processing</span>
          <p className="card-content">
          We process fruits and vegetables to extend their shelf life and make them more convenient for our customers. We use state-of-the-art processing facilities and equipment to ensure that our products are of the highest quality.
          </p>
        
        </div>
        <div className="date-box">
        <LiaIndustrySolid className='icon-card'/>
        </div>
      </div>
    </div></div>
        <div className="card-contents"><div className="parent">
      <div className="card">
        <div className="content-box">
          <span className="card-title">Supply</span>
          <p className="card-content">
          We supply a wide variety of fruits to our customers all over the world. We are able to source fruits from all over the globe, ensuring that our customers have access to the freshest and highest quality fruits available.
          </p>
        
        </div>
        <div className="date-box">
        <BsBoxSeam className='icon-card'/>
        </div>
      </div>
    </div></div>
        <div className="card-contents"><div className="parent">
      <div className="card">
        <div className="content-box">
          <span className="card-title">Technical Advisory</span>
          <p className="card-content">
          We at HortFarms provide technical advisory services to farmers to help them improve their yields and quality. Our team of experts works with farmers to develop and implement best practices in agriculture.
          </p>
  
        </div>
        <div className="date-box">
        <GiFarmer className='icon-card'/>
        </div>
      </div>
    </div></div>
    </div>

    </div>
  )
}

export default Card