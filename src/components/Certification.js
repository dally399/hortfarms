import React, { useEffect } from 'react'
import './Certification.css'

import AOS from "aos";
import "aos/dist/aos.css";

import c1 from "../assets/certification.png"

function Certification() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <div className="certification-container">
        <p data-aos="fade-up"
     data-aos-duration="600">Our Certification</p>    
    <div className='certification-body' data-aos="fade-up"
     data-aos-duration="3000">        
        <img src={c1} alt="" />
    </div>

    </div>
  )
}

export default Certification