import React from 'react'
import './Banner.css'

import banner_img from '../assets/avocado-img2.jpg'

function Banner() {
  return (
   <div className="banner-main-container">
    <div className="banner-left">
        <img src={banner_img} alt="" />
    </div>

    <div className="banner-right">
      <span className='banner-title'>Fresh Organic Avocado</span>
      <span className='banner-content'>
      We are exporter of best quality of Avocados
worldwide
We, at HortFarms Ltd specialise in high quality fresh
Avocado. Each fruit is handpicked and passes
through quality control before making into final export.
      </span>
    </div>

    <div className="banner-right">
      <span className='banner-title'>HortFarms Ltd</span>
      <span className='banner-content'>Our continual growth has been instigated by a number of factors and initiatives and value which include;
• Competent and professional team
• Competitive prices
• Professional consultation
• Strategic market-based agreements with organized farmers
• Transparency Value chain
• Production and packaging of quality products
• We value food safety
• We value Occupational health and safety of our employees</span>
    </div>

    <div className="banner-left">
        <img src={banner_img} alt="" />
    </div>
   </div>
  )
}

export default Banner