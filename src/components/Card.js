import React from 'react'
import './Card.css'

function Card() {
  return (
    <div className="card-container">
        <div className="card-contents"><div className="parent">
      <div className="card">
        <div className="content-box">
          <span className="card-title">Agricultural Products</span>
          <p className="card-content">
          They play a vital role in supplying food, raw materials, and economic livelihoods to communities worldwide, serving as the foundation of our global food supply chain.
          </p>
        
        </div>
        <div className="date-box">

          <img src="../assets/icons8-agricultural-64.png" alt="" />
        </div>
      </div>
    </div></div>

        <div className="card-contents"><div className="parent">
      <div className="card">
        <div className="content-box">
          <span className="card-title">Modern <br /> Techniques</span>
          <p className="card-content">
          These methods prioritize sustainable practices, including organic farming, crop rotation, and reduced chemical usage, to protect the environment and promote long-term food security. 
          </p>
        
        </div>
        <div className="date-box">
          <span className="month">JUNE</span>
          <span className="date">29</span>
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
          <span className="month">JUNE</span>
          <span className="date">29</span>
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
          <span className="month">JUNE</span>
          <span className="date">29</span>
        </div>
      </div>
    </div></div>
    </div>
  )
}

export default Card