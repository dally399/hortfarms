import React from 'react'
import './Banner.css'

import banner_img1 from '../assets/avocado-fruit.jpg'
import banner_img2 from '../assets/package-avocado.png'

function Banner() {
  return (
   <div className="banner-main-container">
    <div className="banner-left">
        <img src={banner_img1} alt="" />
    </div>

    <div className="banner-right">
      <span className='banner-title'>Fresh Organic Avocado</span>
      <span className='banner-content'>
        <p className='banner-p1'>We are exporter of best quality of Avocados worldwide</p>
        <p className='banner-p2'>We are exporter of best quality of Avocados
worldwide
We, at HortFarms Ltd specialise in high quality fresh
Avocado. Each fruit is handpicked and passes
through quality control before making into final export.</p>
    
    
<button className='Btn'>Read More</button>
      </span>
    </div>

    <div className="banner-right">
      <span className='banner-title'>HortFarms Ltd</span>
      <span className='banner-content'>
      <p  className='banner-p1'>
      Our continual growth has been instigated by a number of factors and initiatives and value which include;
 
      </p>
      <ul  className='banner-p2'>
        <li>• Competent and professional team</li>
        <li>• Competitive prices</li>
        <li>• Professional consultation</li>
        <li>• Professional consultation</li>
        <li>• Strategic market-based agreements with organized farmers</li>
        <li>• Transparency Value chain</li>
        <li>• Production and packaging of quality products</li>
        <li>• We value food safety</li>
        <li>• We value Occupational health and safety of our employees</li>
      </ul>
</span>
    </div>

    <div className="banner-left">
        <img className='img2' src={banner_img2} alt="" />
    </div>
   </div>
  )
}

export default Banner